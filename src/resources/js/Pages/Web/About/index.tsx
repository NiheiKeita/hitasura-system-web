import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import PageHeading from '@/Pages/Web/components/PageHeading'
import CtaPanel from '@/Pages/Web/components/CtaPanel'

const values = [
    '要件整理から設計・実装までを一貫して行います。',
    '作って終わりにしない開発を大切にしています。',
    '小さく始めて、必要に応じて育てる形を得意としています。',
]

export const About = React.memo(function About() {
    return (
        <WebLayout>
            <div className="space-y-12">
                <PageHeading
                    title="プロフィール"
                    lead="ひたすらシステム開発 代表。Web・アプリ開発を中心に、要件整理から設計・実装までを一貫して行っています。"
                    eyebrow="About"
                />

                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-900">大切にしていること</h2>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                        {values.map((value) => (
                            <li key={value} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                                {value}
                            </li>
                        ))}
                    </ul>
                </section>

                <CtaPanel
                    title="小さな相談からでも歓迎です"
                    description="ご相談内容に合わせて進め方をご提案します。"
                    primaryLabel="無料で相談する"
                    primaryRoute="web.contact"
                    secondaryLabel="サービスを見る"
                    secondaryRoute="web.services"
                />
            </div>
        </WebLayout>
    )
})

export default About
