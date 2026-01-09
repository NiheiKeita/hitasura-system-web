import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import PageHeading from '@/Pages/Web/components/PageHeading'

export const Contact = React.memo(function Contact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <WebLayout>
            <div className="space-y-12">
                <PageHeading
                    title="お問い合わせ"
                    lead="要件が固まっていなくても問題ありません。『こんなことできる？』という段階からご相談ください。"
                    eyebrow="Contact"
                />

                <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-900">相談フォーム</h2>
                    <p className="mt-2 text-sm text-slate-600">必要な項目だけで構いません。わかる範囲で教えてください。</p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <label className="text-sm text-slate-600">
                            お名前
                            <input
                                type="text"
                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-slate-400"
                                placeholder="例：山田 太郎"
                            />
                        </label>
                        <label className="text-sm text-slate-600">
                            メールアドレス
                            <input
                                type="email"
                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-slate-400"
                                placeholder="example@example.com"
                            />
                        </label>
                    </div>
                    <label className="mt-4 block text-sm text-slate-600">
                        相談内容
                        <textarea
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:ring-slate-400"
                            rows={5}
                            placeholder="やりたいこと・困っていることを教えてください"
                        ></textarea>
                    </label>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        <label className="text-sm text-slate-600">
                            予算感（任意）
                            <input
                                type="text"
                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-slate-400"
                                placeholder="例：50万円くらい"
                            />
                        </label>
                        <label className="text-sm text-slate-600">
                            期限（任意）
                            <input
                                type="text"
                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-slate-400"
                                placeholder="例：3ヶ月以内"
                            />
                        </label>
                        <label className="text-sm text-slate-600">
                            種別
                            <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-slate-400">
                                <option>Web</option>
                                <option>アプリ</option>
                                <option>改修</option>
                                <option>その他</option>
                            </select>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 md:w-auto"
                    >
                        送信する
                    </button>
                </form>

                <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <h2 className="text-xl font-semibold text-slate-900">フォーム項目</h2>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                        <li>お名前</li>
                        <li>メールアドレス</li>
                        <li>相談内容</li>
                        <li>予算感（任意）</li>
                        <li>期限（任意）</li>
                        <li>種別（Web / アプリ / 改修 など）</li>
                    </ul>
                </section>
            </div>
        </WebLayout>
    )
})

export default Contact
