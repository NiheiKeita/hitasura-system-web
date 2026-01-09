import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import PageHeading from '@/Pages/Web/components/PageHeading'
import CtaPanel from '@/Pages/Web/components/CtaPanel'

const prices = [
    { title: '小規模Web開発', price: '◯万円〜', description: 'まずは必要最低限から、段階的に拡張する形が多いです。' },
    { title: 'MVP開発', price: '◯万円〜', description: '検証のために必要な機能を最小限で組み立てます。' },
    { title: '既存改修', price: '◯万円〜', description: '現状の課題を洗い出し、優先順位を整理します。' },
    { title: '保守・運用', price: '月◯万円〜', description: '運用中の改善や軽微な変更も含めたプランです。' },
]

export const Pricing = React.memo(function Pricing() {
    return (
        <WebLayout>
            <div className="space-y-12">
                <PageHeading
                    title="料金目安"
                    lead="以下はあくまで目安です。内容により前後します。ご予算が決まっている場合は、最初にお伝えください。"
                    eyebrow="Pricing"
                />

                <section className="grid gap-4 md:grid-cols-2">
                    {prices.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                                <span className="text-sm font-semibold text-slate-500">{item.price}</span>
                            </div>
                            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                        </div>
                    ))}
                </section>

                <CtaPanel
                    title="予算に合わせた相談も可能です"
                    description="最初に予算感を共有いただければ、無理のない範囲でご提案します。"
                    primaryLabel="無料で相談する"
                    primaryRoute="web.contact"
                    secondaryLabel="進め方を見る"
                    secondaryRoute="web.process"
                />
            </div>
        </WebLayout>
    )
})

export default Pricing
