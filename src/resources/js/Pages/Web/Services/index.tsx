import React from 'react'
import WebLayout from '@/Layouts/WebLayout'

const services = [
    {
        title: 'Webサイト制作',
        description: [
            '会社サイト・サービスサイト・LPなど、',
            '目的に合わせたWebサイトを制作します。',
            'デザインから実装まで一貫して対応可能です。',
        ],
    },
    {
        title: '業務システム開発',
        description: [
            '日々の業務を楽にするための',
            '管理画面・業務ツール・社内システムを開発します。',
            '「Excelで管理している作業をシステム化したい」',
            'といった相談も多くいただいています。',
        ],
    },
    {
        title: 'スマホアプリ開発',
        description: [
            'iOS / Android向けのアプリ開発に対応しています。',
            'アイデア段階からのご相談も可能です。',
        ],
    },
    {
        title: '保守・改善・追加開発',
        description: [
            '作って終わりではなく、',
            '公開後の改善・機能追加・保守対応も行っています。',
            '長く付き合えるパートナーを目指しています。',
        ],
    },
]

export const Services = React.memo(function Services() {
    return (
        <WebLayout>
            <div className="space-y-10">
                <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
                    <h1 className="text-2xl font-semibold text-brand-text md:text-4xl">できること</h1>
                </header>

                <section className="grid gap-4 md:grid-cols-2">
                    {services.map((service) => (
                        <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-brand-text">{service.title}</h2>
                            <p className="mt-3 text-sm leading-relaxed text-brand-text/80">
                                {service.description.map((line) => (
                                    <React.Fragment key={line}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    ))}
                </section>
            </div>
        </WebLayout>
    )
})

export default Services
