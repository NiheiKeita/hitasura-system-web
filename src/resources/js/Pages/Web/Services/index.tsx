import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import PageHeading from '@/Pages/Web/components/PageHeading'
import CtaPanel from '@/Pages/Web/components/CtaPanel'

const strengths = [
    {
        title: 'MVP・小規模サービスの立ち上げ',
        description: '最初の一歩で迷わないために、必要最低限の機能を一緒に整理します。',
    },
    {
        title: '管理画面・業務システム',
        description: '日々使う人の負担を減らすための導線と情報整理を重視します。',
    },
    {
        title: '設計を意識した開発',
        description: '後から仕様を追加しても破綻しにくい構成を意識しています。',
    },
    {
        title: 'テスト・保守を見据えた構成',
        description: '運用後に困らないよう、引き継ぎやすい整理を行います。',
    },
]

const quality = ['要件の言語化', '進捗の共有', 'テストの実施', '後から触る人のための整理']

export const Services = React.memo(function Services() {
    return (
        <WebLayout>
            <div className="space-y-12">
                <PageHeading
                    title="サービス"
                    lead="ひたすらシステム開発では、『何を作るか』よりも『なぜ作るか』を大切にしています。目的や背景を整理した上で、最適な形を一緒に考え、実装まで行います。"
                    eyebrow="Services"
                />

                <section className="space-y-6">
                    <h2 className="text-xl font-semibold text-slate-900">得意なこと</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {strengths.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <h2 className="text-xl font-semibold text-slate-900">品質への取り組み</h2>
                    <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                        {quality.map((item) => (
                            <div key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <CtaPanel
                    title="進め方も含めて、まずは相談から"
                    description="要件が固まっていない状態でもOKです。話しながら整理していきます。"
                    primaryLabel="無料で相談する"
                    primaryRoute="web.contact"
                    secondaryLabel="進め方を見る"
                    secondaryRoute="web.process"
                />
            </div>
        </WebLayout>
    )
})

export default Services
