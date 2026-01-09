import React from 'react'
import WebLayout from '@/Layouts/WebLayout'

export const Contact = React.memo(function Contact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <WebLayout>
            <div className="space-y-10">
                <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
                    <h1 className="text-2xl font-semibold text-brand-text md:text-4xl">お問い合わせ</h1>
                    <p className="mt-4 text-sm leading-relaxed text-brand-text/80 md:text-base">
                        ご相談・ご質問など、<br />
                        お気軽にお問い合わせください。<br />
                        内容を確認の上、折り返しご連絡いたします。
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="text-sm text-brand-text">
                            お名前
                            <input
                                type="text"
                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-brand-primary focus:ring-brand-primary"
                                placeholder="例：山田 太郎"
                            />
                        </label>
                        <label className="text-sm text-brand-text">
                            メールアドレス
                            <input
                                type="email"
                                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-brand-primary focus:ring-brand-primary"
                                placeholder="example@example.com"
                            />
                        </label>
                    </div>
                    <label className="mt-4 block text-sm text-brand-text">
                        相談内容
                        <textarea
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-primary focus:ring-brand-primary"
                            rows={5}
                            placeholder="ご相談内容を入力してください"
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        className="mt-6 w-full rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent md:w-auto"
                    >
                        送信する
                    </button>
                </form>
            </div>
        </WebLayout>
    )
})

export default Contact
