import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import { router } from '@inertiajs/react'
import CtaPanel from '@/Pages/Web/components/CtaPanel'

const reasons = [
    {
        title: '開発の進め方を明確にしています',
        description: 'ヒアリングから要件整理、見積、開発、テスト、納品まで。事前に流れを共有し、途中経過も丁寧にお伝えします。',
    },
    {
        title: '継続的にアウトプットしています',
        description: 'Qiita・Zennでの技術記事執筆や登壇を継続しています。作れるだけでなく、説明できることを大切にしています。',
    },
    {
        title: '実際に動くプロダクトを作り続けています',
        description: '個人開発としてWebサービスやアプリを公開。使われることを前提とした設計・改善の経験を活かします。',
    },
]

const capabilities = [
    'Webアプリケーション開発',
    '管理画面・業務効率化ツール',
    'スマホアプリ（Flutter）',
    'API開発・外部サービス連携',
    '既存システムの改修・保守',
]

const faqs = [
    '要件が決まっていませんが相談できますか？',
    '小規模な開発でも依頼できますか？',
    '相場感だけ知りたいです',
    '途中で仕様変更はできますか？',
]

export const Top = React.memo(function Top() {
    return (
        <WebLayout>
            <div className="space-y-16">
                <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-sm md:p-12">
                    <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/3 translate-x-1/3 rounded-full bg-sky-100"></div>
                    <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-50"></div>
                    <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 animate-fade-up">ひたすらシステム開発</p>
                        <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-5xl animate-fade-up-delay-1">
                            個人でも、安心して任せられるシステム開発。
                        </h1>
                        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base animate-fade-up-delay-2">
                            要件が固まっていなくても大丈夫。整理・設計から、開発・運用まで一貫して対応します。
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => router.visit(route('web.contact'))}
                                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                無料で相談する
                            </button>
                            <button
                                type="button"
                                onClick={() => router.visit(route('web.works'))}
                                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                            >
                                実績・サンプルを見る
                            </button>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">安心できる理由</p>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-900">任せやすさを大切にしています</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {reasons.map((reason) => (
                            <div key={reason.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="text-base font-semibold text-slate-900">{reason.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">対応できること</h2>
                        <p className="mt-2 text-sm text-slate-600">これも頼める？という段階でも、お気軽にご相談ください。</p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-700">
                            {capabilities.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <h2 className="text-xl font-semibold text-slate-900">よくある相談</h2>
                        <ul className="mt-4 space-y-3 text-sm text-slate-600">
                            {faqs.map((question) => (
                                <li key={question} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                                    {question}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <CtaPanel
                    title="要件が固まっていなくても大丈夫です"
                    description="相談ベースで整理しながら進めます。まずは状況を聞かせてください。"
                    primaryLabel="無料で相談する"
                    primaryRoute="web.contact"
                    secondaryLabel="進め方を見る"
                    secondaryRoute="web.process"
                />
            </div>
        </WebLayout>
    )
})

export default Top
