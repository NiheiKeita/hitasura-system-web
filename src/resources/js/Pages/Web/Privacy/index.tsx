import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import PageHeading from '@/Pages/Web/components/PageHeading'

export const Privacy = React.memo(function Privacy() {
    return (
        <WebLayout>
            <div className="space-y-8">
                <PageHeading
                    title="プライバシーポリシー"
                    lead="お問い合わせフォームから取得した個人情報は、お問い合わせ対応以外の目的では利用しません。"
                    eyebrow="Privacy"
                />

                <section className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600 shadow-sm">
                    <p>
                        ひたすらシステム開発は、個人情報の取り扱いに慎重に向き合います。お問い合わせで取得した情報は、
                        ご連絡・ご相談対応のためにのみ利用し、第三者へ提供することはありません。
                    </p>
                </section>
            </div>
        </WebLayout>
    )
})

export default Privacy
