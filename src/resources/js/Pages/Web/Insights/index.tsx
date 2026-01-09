import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import PageHeading from '@/Pages/Web/components/PageHeading'
import CtaPanel from '@/Pages/Web/components/CtaPanel'

const highlights = [
    'Qiita・Zennでの技術記事執筆',
    '技術イベントでの登壇',
    'アウトプットで得た知見を提案に反映',
]

export const Insights = React.memo(function Insights() {
    return (
        <WebLayout>
            <div className="space-y-12">
                <PageHeading
                    title="発信・登壇"
                    lead="Qiita・Zennでの技術記事執筆や、技術イベントでの登壇を行っています。アウトプットで得た知見を、実際のシステム開発や改善提案に活かしています。"
                    eyebrow="Insights"
                />

                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-900">アウトプットの位置づけ</h2>
                    <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <CtaPanel
                    title="安心材料として、控えめに活用しています"
                    description="必要なときに根拠や背景をわかりやすく説明できるよう、継続しています。"
                    primaryLabel="無料で相談する"
                    primaryRoute="web.contact"
                    secondaryLabel="実績を見る"
                    secondaryRoute="web.works"
                />
            </div>
        </WebLayout>
    )
})

export default Insights
