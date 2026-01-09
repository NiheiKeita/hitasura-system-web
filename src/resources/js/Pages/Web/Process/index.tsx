import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import PageHeading from '@/Pages/Web/components/PageHeading'
import CtaPanel from '@/Pages/Web/components/CtaPanel'

const steps = [
    { title: 'ヒアリング', detail: '背景や困りごとを伺いながら、ゴールのイメージを合わせます。' },
    { title: '要件整理・方向性確認', detail: '作るべきこと・作らないことを言葉にして整理します。' },
    { title: 'お見積り・ご提案', detail: '必要な作業範囲と費用感をすり合わせます。' },
    { title: '開発', detail: '途中経過を共有しながら進めます。' },
    { title: 'テスト・調整', detail: '実運用を想定し、不安点を潰していきます。' },
    { title: '納品・運用', detail: '納品後の運用や改善も相談可能です。' },
]

export const Process = React.memo(function Process() {
    return (
        <WebLayout>
            <div className="space-y-12">
                <PageHeading
                    title="進め方"
                    lead="個人開発だからこそ、進め方が見えないと不安になる。そう考えています。"
                    eyebrow="Process"
                />

                <section className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        {steps.map((step, index) => (
                            <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Step {index + 1}</p>
                                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                                <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-600">
                        途中での仕様変更や調整についても、都度ご相談しながら進めます。
                    </p>
                </section>

                <CtaPanel
                    title="進め方を共有してから、安心してスタート"
                    description="相談段階から流れをお伝えします。"
                    primaryLabel="無料で相談する"
                    primaryRoute="web.contact"
                    secondaryLabel="料金目安を見る"
                    secondaryRoute="web.pricing"
                />
            </div>
        </WebLayout>
    )
})

export default Process
