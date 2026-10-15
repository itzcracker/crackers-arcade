'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, X } from 'lucide-react'
import { sortedHtmlGames, type HtmlGame } from './games'

export default function HtmlGamesPage() {
  const [activeGame, setActiveGame] = useState<HtmlGame | null>(null)

  return (
    <main className="min-h-screen overflow-y-auto bg-[#f6f7f9] px-5 py-8 text-[#17181b] sm:px-9 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#686c74] transition hover:text-[#17181b]"><ArrowLeft size={16} /> Back to Arcade</Link>
        <div className="mb-10 flex items-end justify-between border-b border-[#e2e4e8] pb-6">
          <div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a8f98]">Cracker&apos;s Arcade</p><h1 className="text-[36px] font-semibold tracking-[-0.055em] sm:text-[48px]">Games (html)</h1></div>
          <p className="hidden text-sm text-[#858a93] sm:block">{sortedHtmlGames.length} games</p>
        </div>
        {sortedHtmlGames.length ? <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">{sortedHtmlGames.map((game) => <button key={game.title} type="button" onClick={() => setActiveGame(game)} className="group rounded-2xl border border-transparent p-2 text-left transition hover:border-[#ed8b3a] focus-visible:border-[#ed8b3a] focus-visible:outline-none"><img src={game.image} alt={`${game.title} logo`} className="aspect-square w-full rounded-xl object-cover shadow-[0_4px_16px_rgb(0_0_0/8%)]" /><div className="mt-3 flex items-center justify-between gap-2 px-1"><h2 className="truncate text-sm font-semibold">{game.title}</h2><ExternalLink size={14} className="shrink-0 text-[#858a93]" /></div></button>)}</div> : <div className="rounded-2xl border border-dashed border-[#d7dbe0] bg-white p-10 text-center text-sm text-[#858a93]">Add games to <code className="rounded bg-[#f0f1f3] px-1.5 py-0.5 text-[#555a63]">app/games/games.ts</code> to see them here.</div>}
      </div>
      {activeGame && <div className="fixed inset-0 z-50 bg-[#111216] text-white">
        <iframe title={activeGame.title} src={activeGame.link} className="h-full w-full border-0 bg-black" allow="fullscreen; autoplay; gamepad" />
        <div className="absolute inset-x-0 top-0 flex h-12 items-center justify-between border-b border-white/10 bg-[#111216]/95 px-4 backdrop-blur sm:px-6">
          <span className="text-sm font-semibold">{activeGame.title}</span>
          <button type="button" onClick={() => setActiveGame(null)} aria-label="Exit game" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"><X size={16} /></button>
        </div>
      </div>}
    </main>
  )
}
