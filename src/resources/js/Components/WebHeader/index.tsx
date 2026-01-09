
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
        { label: '進め方', routeName: 'web.process', path: '/process' },
        { label: '料金目安', routeName: 'web.pricing', path: '/pricing' },
        { label: 'プロフィール', routeName: 'web.about', path: '/about' },
        { label: '発信・登壇', routeName: 'web.insights', path: '/insights' },
    ]

    return (
        <header className={`sticky left-0 top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <button type="button" className="text-left" onClick={() => router.visit(route('web.top'))}>
                    <p className="text-sm font-semibold text-slate-900">ひたすらシステム開発</p>
                    <p className="text-[11px] text-slate-500">安心して任せられる受託開発</p>
                </button>
                <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
                    {navItems.map((item) => {
                        const isActive = url === item.path
                        return (
                            <button
                                key={item.routeName}
                                type="button"
                                onClick={() => router.visit(route(item.routeName))}
                                className={`transition ${isActive ? 'text-slate-900' : 'hover:text-slate-900'}`}
                            >
                                {item.label}
                            </button>
                        )
                    })}
                    <button
                        type="button"
                        onClick={() => router.visit(route('web.contact'))}
                        className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                    >
                        無料で相談する
                    </button>
                    <button
                        type="button"
                        onClick={() => router.visit(route('user.login'))}
                        className="text-xs text-slate-500 transition hover:text-slate-900"
                    >
                        ログイン
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="ml-3 flex items-center md:hidden"
                    aria-label="メニューを開く"
                >
                    {isMenuOpen ? (
                        <span className="block h-6 w-6 text-slate-700">✖</span>
                    ) : (
                        <span className="block h-auto w-6 text-slate-700">
                            <span className="mb-1 block h-0.5 w-6 bg-slate-700"></span>
                            <span className="mb-1 block h-0.5 w-6 bg-slate-700"></span>
                            <span className="block h-0.5 w-6 bg-slate-700"></span>
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
                        className="text-left text-sm text-slate-600 transition hover:text-slate-900"
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
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                >
                    無料で相談する
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setIsMenuOpen(false)
                        router.visit(route('user.login'))
                    }}
                    className="text-left text-sm text-slate-500"
                >
                    ログイン
                </button>
            </nav>
        </header>
    )
})
export default WebHeader
