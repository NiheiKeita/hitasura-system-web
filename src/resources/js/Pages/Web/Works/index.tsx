import React from 'react'
import WebLayout from '@/Layouts/WebLayout'
import PageHeading from '@/Pages/Web/components/PageHeading'
import CtaPanel from '@/Pages/Web/components/CtaPanel'

const products = [
    {
        name: 'ひたすら数学',
        summary: '数学問題をテンポよく解くことに特化した学習アプリ。',
        purpose: '学習の心理的ハードルを下げること。',
        features: ['問題自動生成', 'スコア・記録管理', '難易度選択'],
        notes: ['シンプルで迷わないUI', '継続しやすい設計'],
    },
    {
        name: '心のトイレ',
        summary: 'ネガティブな言葉を入力し、可視化して流すWebサービス。',
        purpose: '感情を整理する体験の提供。',
        features: [],
        notes: ['言葉とUIの関係性を意識', '感情表現を重視した設計'],
    },
]

const samples = ['予約管理サンプル', '在庫管理サンプル', '管理画面サンプル']

export const Works = React.memo(function Works() {
    return (
        <WebLayout>
            <div className="space-y-12">
                <PageHeading
                    title="実績・サンプル"
                    lead="実際に動くプロダクトの制作経験をもとに、目的に合わせた設計と改善を行います。"
                    eyebrow="Works"
                />

                <section className="space-y-6">
                    <h2 className="text-xl font-semibold text-slate-900">個人プロダクト</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {products.map((product) => (
                            <div key={product.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                                <p className="mt-2 text-sm text-slate-600">{product.summary}</p>
                                <div className="mt-4 text-sm text-slate-700">
                                    <p className="font-semibold text-slate-900">目的</p>
                                    <p className="mt-1">{product.purpose}</p>
                                </div>
                                {product.features.length > 0 && (
                                    <div className="mt-4 text-sm text-slate-700">
                                        <p className="font-semibold text-slate-900">主な機能</p>
                                        <ul className="mt-2 space-y-1">
                                            {product.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2">
                                                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="mt-4 text-sm text-slate-700">
                                    <p className="font-semibold text-slate-900">工夫</p>
                                    <ul className="mt-2 space-y-1">
                                        {product.notes.map((note) => (
                                            <li key={note} className="flex items-start gap-2">
                                                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                                                <span>{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <h2 className="text-xl font-semibold text-slate-900">サンプルサービス（今後追加）</h2>
                    <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
                        {samples.map((sample) => (
                            <div key={sample} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                                {sample}
                            </div>
                        ))}
                    </div>
                </section>

                <CtaPanel
                    title="実績の方向性が近いか、相談だけでも"
                    description="規模や目的に合わせて進め方を整理します。"
                    primaryLabel="無料で相談する"
                    primaryRoute="web.contact"
                    secondaryLabel="進め方を見る"
                    secondaryRoute="web.process"
                />
            </div>
        </WebLayout>
    )
})

export default Works
