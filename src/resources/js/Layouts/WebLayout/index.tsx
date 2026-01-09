
import WebFooter from '@/Components/WebFooter'
import WebHeader from '@/Components/WebHeader'
import React from 'react'

type Props = {
    children: React.ReactNode
    page?: "rental" | "ma",
    showFooter?: boolean
}
export const WebLayout = React.memo<Props>(function AdminLayout({
    children,
    page,
    showFooter = true,
}) {
    return (
        <>
            <WebHeader page={page} />
            <div className="flex min-h-screen flex-col bg-brand-base font-yuGothic text-brand-text">
                <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 md:px-6">
                    {children}
                </main>
                {showFooter && <WebFooter />}
            </div>
        </>
    )

})
export default WebLayout
