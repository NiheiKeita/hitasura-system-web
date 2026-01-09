import React from 'react'
import { router } from '@inertiajs/react'

type Props = {
    title: string
    description: string
    primaryLabel: string
    primaryRoute: string
    secondaryLabel?: string
    secondaryRoute?: string
}

export const CtaPanel = React.memo<Props>(function CtaPanel({
    title,
    description,
    primaryLabel,
    primaryRoute,
    secondaryLabel,
    secondaryRoute,
}) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-lg md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
                    <p className="mt-2 text-sm text-slate-200 md:text-base">{description}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => router.visit(route(primaryRoute))}
                        className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                        {primaryLabel}
                    </button>
                    {secondaryLabel && secondaryRoute && (
                        <button
                            type="button"
                            onClick={() => router.visit(route(secondaryRoute))}
                            className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
                        >
                            {secondaryLabel}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
})

export default CtaPanel
