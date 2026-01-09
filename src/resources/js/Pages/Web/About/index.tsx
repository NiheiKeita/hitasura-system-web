import React from 'react'
import WebLayout from '@/Layouts/WebLayout'

export const About = React.memo(function About() {
    return (
        <WebLayout>
            <div className="space-y-10">
                <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
                    <h1 className="text-2xl font-semibold text-brand-text md:text-4xl">会社概要</h1>
                </header>

                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
                    <h2 className="text-xl font-semibold text-brand-text">ひたすらシステム開発について</h2>
                    <p className="mt-4 text-sm leading-relaxed text-brand-text/80 md:text-base">
                        ひたすらシステム開発は、<br />
                        Webシステム・業務システム・アプリ開発を中心に、<br />
                        「ちゃんと話を聞いて、一緒に考える」ことを大切にしている<br />
                        個人事業のシステム開発屋です。
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-brand-text/80 md:text-base">
                        要件が固まっていなくても大丈夫。<br />
                        「こんなこと、できるのかな？」という段階からでも<br />
                        安心してご相談ください。
                    </p>
                </section>
            </div>
        </WebLayout>
    )
})

export default About
