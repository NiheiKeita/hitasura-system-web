import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import { router } from '@inertiajs/react'

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

const strengths = [
    {
        title: '丁寧なヒアリング',
        description: [
            '専門用語はできるだけ使わず、',
            '分かりやすい言葉で説明します。',
        ],
    },
    {
        title: '個人事業ならではの柔軟さ',
        description: ['小回りが利き、', '細かな要望にも柔軟に対応できます。'],
    },
    {
        title: '最初から最後まで同じ人が対応',
        description: [
            'ヒアリングから開発、納品後のサポートまで',
            'すべて同じ人が担当します。',
        ],
    },
]

const flow = [
    {
        title: '1. 相談・ヒアリング',
        description: ['やりたいことやお困りごとをお聞きします。', 'まだ固まっていなくても問題ありません。'],
    },
    {
        title: '2. 提案・お見積り',
        description: ['内容を整理し、実現方法とお見積りをご提案します。'],
    },
    {
        title: '3. 開発',
        description: ['進捗を共有しながら、丁寧に開発を進めます。'],
    },
    {
        title: '4. 公開・運用',
        description: ['公開後も、改善や追加開発のご相談が可能です。'],
    },
]

const faqs = [
    {
        question: 'Q. 個人事業主ですが、依頼しても大丈夫ですか？',
        answer: 'はい、大丈夫です。個人・法人問わずご依頼いただいています。',
    },
    {
        question: 'Q. 料金はどのくらいかかりますか？',
        answer: '内容によって異なります。まずはお気軽にご相談ください。',
    },
    {
        question: 'Q. 要件が決まっていなくても相談できますか？',
        answer: '問題ありません。一緒に整理しながら進めていきます。',
    },
    {
        question: 'Q. 保守や追加開発もお願いできますか？',
        answer: 'はい、対応可能です。長期的なサポートも行っています。',
    },
]

export const Top = React.memo(function Top() {
    return (
        <WebLayout>
            <div className="space-y-20">
                <section className="relative overflow-hidden rounded-[32px] bg-brand-muted p-8 md:p-14">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/70"></div>
                    <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/70"></div>
                    <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-text/70 animate-fade-up">ひたすらシステム開発</p>
                        <h1 className="mt-6 text-3xl font-semibold leading-relaxed text-brand-text md:text-5xl animate-fade-up-delay-1">
                            システム開発を、<br />
                            もっと身近に。もっと安心に。
                        </h1>
                        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-text/80 md:text-base animate-fade-up-delay-2">
                            ひたすらシステム開発は、<br />
                            小さな相談から丁寧に向き合う<br />
                            個人事業のシステム開発屋です。
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up-delay-2">
                            <button
                                type="button"
                                onClick={() => router.visit(route('web.contact'))}
                                className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent"
                            >
                                まずは相談してみる
                            </button>
                            <button
                                type="button"
                                onClick={() => router.visit(route('web.services'))}
                                className="rounded-full border border-brand-primary px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-white"
                            >
                                できることを見る
                            </button>
                        </div>
                    </div>
                </section>

                <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                        <h2 className="text-2xl font-semibold text-brand-text">ひたすらシステム開発について</h2>
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

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-brand-text">できること</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {services.map((service) => (
                            <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-brand-text">{service.title}</h3>
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
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-brand-text">選ばれる理由</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {strengths.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-base font-semibold text-brand-text">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-brand-text/80">
                                    {item.description.map((line) => (
                                        <React.Fragment key={line}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-brand-text">制作実績</h2>
                        <p className="mt-3 text-sm leading-relaxed text-brand-text/80 md:text-base">
                            これまでに制作してきたシステムやサービスの一部をご紹介します。<br />
                            「こんなこともできるんだ」という参考にしていただければ幸いです。
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {['サンプル実績 A', 'サンプル実績 B', 'サンプル実績 C'].map((title) => (
                            <div key={title} className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-brand-text/60">
                                {title}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-brand-text">開発の流れ</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {flow.map((step) => (
                            <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-base font-semibold text-brand-text">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-brand-text/80">
                                    {step.description.map((line) => (
                                        <React.Fragment key={line}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-brand-text">よくある質問</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {faqs.map((item) => (
                            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <p className="text-sm font-semibold text-brand-text">{item.question}</p>
                                <p className="mt-3 text-sm leading-relaxed text-brand-text/80">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rounded-[32px] bg-brand-primary p-8 text-white md:p-12">
                    <h2 className="text-2xl font-semibold">まずは、気軽にご相談ください</h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
                        「こんなこと、できるかな？」<br />
                        そんな段階でも大丈夫です。
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
                        ひたすらシステム開発が、<br />
                        あなたのアイデアを形にするお手伝いをします。
                    </p>
                    <button
                        type="button"
                        onClick={() => router.visit(route('web.contact'))}
                        className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-muted"
                    >
                        お問い合わせはこちら
                    </button>
                </section>
            </div>
        </WebLayout>
    )
})

export default Top
