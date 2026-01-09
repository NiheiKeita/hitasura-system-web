import React from 'react'
import { router } from '@inertiajs/react'

const footerLinks = [
    { label: 'サービス', routeName: 'web.services' },
    { label: '実績・サンプル', routeName: 'web.works' },
    { label: '進め方', routeName: 'web.process' },
    { label: '料金目安', routeName: 'web.pricing' },
    { label: 'プロフィール', routeName: 'web.about' },
    { label: '発信・登壇', routeName: 'web.insights' },
    { label: 'お問い合わせ', routeName: 'web.contact' },
    { label: 'プライバシーポリシー', routeName: 'web.privacy' },
]

export const WebFooter = React.memo(function WebFooter() {
    return (
        <footer className="mt-16 border-t border-slate-200 bg-white">
            <div className="mx-auto w-full max-w-6xl px-4 py-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-900">ひたすらシステム開発</p>
                        <p className="mt-1 text-xs text-slate-500">個人でも、安心して任せられるシステム開発。</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => router.visit(route('web.contact'))}
                        className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 md:w-auto"
                    >
                        無料で相談する
                    </button>
                </div>
                <div className="mt-8 grid gap-3 text-sm text-slate-600 md:grid-cols-4">
                    {footerLinks.map((link) => (
                        <button
                            key={link.routeName}
                            type="button"
                            onClick={() => router.visit(route(link.routeName))}
                            className="text-left transition hover:text-slate-900"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
                <p className="mt-8 text-xs text-slate-400">&copy; ひたすらシステム開発</p>
            </div>
        </footer>
    )
})

export default WebFooter
