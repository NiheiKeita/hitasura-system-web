import React from 'react'
import WebLayout from '@/Layouts/WebLayout'

export const Works = React.memo(function Works() {
    return (
        <WebLayout>
            <div className="space-y-10">
                <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
                    <h1 className="text-2xl font-semibold text-brand-text md:text-4xl">制作実績</h1>
                    <p className="mt-4 text-sm leading-relaxed text-brand-text/80 md:text-base">
                        これまでに制作してきたシステムやサービスの一部をご紹介します。<br />
                        「こんなこともできるんだ」という参考にしていただければ幸いです。
                    </p>
                </header>

                <section className="grid gap-4 md:grid-cols-3">
                    {['サンプル実績 A', 'サンプル実績 B', 'サンプル実績 C', 'サンプル実績 D', 'サンプル実績 E', 'サンプル実績 F'].map((title) => (
                        <div key={title} className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-brand-text/60">
                            {title}
                        </div>
                    ))}
                </section>
            </div>
        </WebLayout>
    )
})

export default Works
