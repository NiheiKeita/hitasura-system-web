
import React, { useEffect, useState } from 'react'
import { router, usePage } from '@inertiajs/react'

type Props = {
    page?: "rental" | "ma",
}
export const WebHeader = React.memo<Props>(function WebHeader({
    page: _page
}) {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { url } = usePage()
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50)
            setLastScrollY(currentScrollY)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    const navItems = [
        { label: 'サービス', routeName: 'web.services', path: '/services' },
        { label: '実績', routeName: 'web.works', path: '/works' },
        { label: '会社概要', routeName: 'web.about', path: '/about' },
        { label: 'お問い合わせ', routeName: 'web.contact', path: '/contact' },
    ]

    return (
        <header className={`sticky left-0 top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
                <button type="button" className="text-left" onClick={() => router.visit(route('web.top'))}>
                    <p className="text-sm font-semibold text-brand-text">ひたすらシステム開発</p>
                    <p className="text-[11px] text-slate-500">小さな相談から、丁寧に。</p>
                </button>
                <div className="hidden items-center gap-6 text-sm text-brand-text md:flex">
                    {navItems.map((item) => {
                        const isActive = url === item.path
                        return (
                            <button
                                key={item.routeName}
                                type="button"
                                onClick={() => router.visit(route(item.routeName))}
                                className={`transition ${isActive ? 'text-brand-primary' : 'hover:text-brand-primary'}`}
                            >
                                {item.label}
                            </button>
                        )
                    })}
                    <button
                        type="button"
                        onClick={() => router.visit(route('web.contact'))}
                        className="rounded-full bg-brand-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-accent"
                    >
                        まずは相談してみる
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="ml-3 flex items-center md:hidden"
                    aria-label="メニューを開く"
                >
                    {isMenuOpen ? (
                        <span className="block h-6 w-6 text-brand-text">✖</span>
                    ) : (
                        <span className="block h-auto w-6 text-brand-text">
                            <span className="mb-1 block h-0.5 w-6 bg-brand-text"></span>
                            <span className="mb-1 block h-0.5 w-6 bg-brand-text"></span>
                            <span className="block h-0.5 w-6 bg-brand-text"></span>
                        </span>
                    )}
                </button>
            </div>
            <nav className={`fixed left-0 top-[72px] flex w-full flex-col gap-3 border-t border-slate-200 bg-white p-4 shadow-md md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                {navItems.map((item) => (
                    <button
                        key={item.routeName}
                        type="button"
                        onClick={() => {
                            setIsMenuOpen(false)
                            router.visit(route(item.routeName))
                        }}
                        className="text-left text-sm text-brand-text transition hover:text-brand-primary"
                    >
                        {item.label}
                    </button>
                ))}
                <button
                    type="button"
                    onClick={() => {
                        setIsMenuOpen(false)
                        router.visit(route('web.contact'))
                    }}
                    className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white"
                >
                    まずは相談してみる
                </button>
            </nav>
        </header>
    )
})
export default WebHeader
