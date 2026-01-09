import React from 'react'
import { router } from '@inertiajs/react'

const footerLinks = [
    { label: 'サービス', routeName: 'web.services' },
    { label: '実績', routeName: 'web.works' },
    { label: '会社概要', routeName: 'web.about' },
    { label: 'お問い合わせ', routeName: 'web.contact' },
]

export const WebFooter = React.memo(function WebFooter() {
    return (
        <footer className="mt-16 border-t border-slate-200 bg-white">
            <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-brand-text">ひたすらシステム開発</p>
                        <p className="mt-1 text-xs text-slate-500">小さな相談から、丁寧に。</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => router.visit(route('web.contact'))}
                        className="w-full rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent md:w-auto"
                    >
                        お問い合わせはこちら
                    </button>
                </div>
                <div className="mt-8 grid gap-3 text-sm text-brand-text md:grid-cols-4">
                    {footerLinks.map((link) => (
                        <button
                            key={link.routeName}
                            type="button"
                            onClick={() => router.visit(route(link.routeName))}
                            className="text-left transition hover:text-brand-primary"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
                <p className="mt-8 text-xs text-slate-400">© ひたすらシステム開発 All Rights Reserved.</p>
            </div>
        </footer>
    )
})

export default WebFooter
