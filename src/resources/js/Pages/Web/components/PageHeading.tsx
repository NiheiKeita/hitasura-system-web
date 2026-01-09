import React from 'react'

type Props = {
    title: string
    lead?: string
    eyebrow?: string
}

export const PageHeading = React.memo<Props>(function PageHeading({ title, lead, eyebrow }) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur md:p-10">
            {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{eyebrow}</p>
            )}
            <h1 className="mt-3 text-2xl font-semibold text-slate-900 md:text-4xl">{title}</h1>
            {lead && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">{lead}</p>
            )}
        </div>
    )
})

export default PageHeading
