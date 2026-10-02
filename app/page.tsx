'use client'

import { useState } from 'react'
import { ChevronRight, Gamepad2, Search, SlidersHorizontal, X } from 'lucide-react'

const games = [
  {
    title: 'Neon Drift',
    category: 'Racing',
    eyebrow: 'Featured game',
    description: 'Race the glow between impossible worlds.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple_arcade_games-x1jUiwx1qIJDqVfX6GqlspGBKXXC1o.avif',
    color: '#d4f1e5',
  },
  {
    title: 'Tiny Kingdoms',
    category: 'Strategy',
    eyebrow: 'New this week',
    description: 'Build a brilliant little world.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mac-apple-arcade-continue-playing-SvJU7WAUq9qIPYiPsF9T2NmXPn1XKc.jpg',
    color: '#e8e4f9',
  },
  {
    title: 'Orbit Oddity',
    category: 'Puzzle',
    eyebrow: 'Made for Cracker',
    description: 'A wonderfully weird space puzzle.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-arcade-macos-catalina-img-1-768x451-Oi8zf0xHkwxbm90q6nosEamv3GKQg5.png',
    color: '#dceafb',
  },
  {
    title: 'Garden Guild',
    category: 'Adventure',
    eyebrow: 'You might like',
    description: 'Grow, explore, and make new friends.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple_arcade_games-x1jUiwx1qIJDqVfX6GqlspGBKXXC1o.avif',
    color: '#f5e5d7',
  },
]

export default function Page() {
  const [welcomeOpen, setWelcomeOpen] = useState(true)
  const [installed, setInstalled] = useState<string[]>([])
  const [loading, setLoading] = useState<string | null>(null)
  const [activeGame, setActiveGame] = useState<(typeof games)[number] | null>(null)
  const [query, setQuery] = useState('')

  const filteredGames = games.filter((game) => game.title.toLowerCase().includes(query.toLowerCase()))

  function getGame(title: string) {
    if (installed.includes(title)) return
    setLoading(title)
    window.setTimeout(() => {
      setInstalled((current) => [...current, title])
      setLoading(null)
    }, 650)
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#17181b]">
      <div className="mx-auto flex min-h-screen max-w-[1500px]">
        <aside className="hidden w-[225px] shrink-0 border-r border-[#e2e4e8] bg-[#f1f2f4] px-5 py-7 lg:block">
          <div className="mb-10 flex items-center gap-2.5 px-2">
            <div className="grid size-8 place-items-center rounded-[10px] bg-[#17181b] text-white shadow-sm"><Gamepad2 size={17} strokeWidth={2.3} /></div>
            <span className="text-[15px] font-semibold tracking-[-0.03em]">Cracker&apos;s Arcade</span>
          </div>
          <nav className="space-y-1 text-[13px] font-medium text-[#666a73]" aria-label="Primary navigation">
            {['Discover', 'Arcade', 'Create', 'Play', 'Develop', 'Categories', 'Updates'].map((item, index) => (
              <button key={item} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${index === 1 ? 'bg-white text-[#191a1e] shadow-[0_1px_3px_rgb(0_0_0/8%)]' : 'hover:bg-white/70'}`}>
                <span className="w-4 text-center text-[16px]">{['✦', '⌘', '↗', '▷', '⌁', '▦', '↓'][index]}</span>{item}
              </button>
            ))}
          </nav>
          <div className="absolute bottom-7 ml-2 flex items-center gap-2 text-xs text-[#6c7078]"><div className="size-7 rounded-full bg-[#d5d9dd] text-center leading-7 font-semibold text-[#545961]">C</div> Cracker</div>
        </aside>

        <section className="min-w-0 flex-1 px-5 pb-16 sm:px-9 lg:px-12">
          <header className="flex h-[74px] items-center justify-between border-b border-[#e2e4e8]">
            <div className="flex items-center gap-2 lg:hidden"><div className="grid size-8 place-items-center rounded-[10px] bg-[#17181b] text-white"><Gamepad2 size={16} /></div><span className="font-semibold">Cracker&apos;s Arcade</span></div>
            <div className="relative hidden w-[260px] md:block"><Search className="absolute left-3 top-2.5 text-[#8a8e96]" size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search games" className="w-full rounded-lg border border-transparent bg-[#e9eaed] py-2 pl-9 pr-3 text-sm outline-none transition focus:border-[#c5c8ce]" /></div>
            <div className="ml-auto flex items-center gap-4 text-sm text-[#686c74]"><button className="flex items-center gap-2 hover:text-black"><SlidersHorizontal size={16} /> <span className="hidden sm:inline">Filters</span></button><button className="rounded-full bg-[#17181b] px-4 py-2 font-medium text-white transition hover:bg-black">My Arcade</button></div>
          </header>

          <div className="mx-auto max-w-[1030px] pt-10">
            <div className="mb-9 flex items-end justify-between"><div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a8f98]">Good afternoon, Cracker</p><h1 className="text-[36px] font-semibold tracking-[-0.055em] sm:text-[48px]">Play something <span className="text-[#8c9199]">wonderful.</span></h1></div><button className="hidden items-center gap-1 text-sm font-medium text-[#1274d5] sm:flex">See all <ChevronRight size={15} /></button></div>

            <div className="relative mb-12 overflow-hidden rounded-[22px] bg-[#1c1d20] p-7 text-white shadow-[0_15px_30px_rgb(0_0_0/12%)] sm:p-10"><div className="relative z-10 max-w-[390px]"><p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#aeb4c0]">Game of the day</p><h2 className="mb-3 text-3xl font-semibold tracking-[-0.05em]">A little more play.</h2><p className="mb-6 text-sm leading-6 text-[#b3b7c0]">Fresh worlds, clever puzzles, and good times waiting whenever you are.</p><button onClick={() => getGame('Neon Drift')} className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1b1c1f] transition hover:bg-[#dceaff]">{installed.includes('Neon Drift') ? 'Play now' : 'Get Neon Drift'}</button></div><div className="pointer-events-none absolute -right-8 -top-12 h-[280px] w-[56%] rotate-[-5deg] rounded-[30px] opacity-85 sm:right-5" style={{ backgroundImage: `url(${games[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} /><div className="pointer-events-none absolute -right-20 bottom-[-110px] size-[260px] rounded-full bg-[#7981ff]/25 blur-3xl" /></div>

            <section className="mb-12"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-xl font-semibold tracking-[-0.035em]">Continue playing</h2><p className="mt-1 text-sm text-[#858a93]">Pick up where you left off.</p></div><button className="flex items-center gap-1 text-sm font-medium text-[#1274d5]">See all <ChevronRight size={15} /></button></div><div className="grid gap-5 md:grid-cols-2">{filteredGames.slice(0, 2).map((game) => <GameCard key={game.title} game={game} loading={loading === game.title} installed={installed.includes(game.title)} onGet={() => getGame(game.title)} onPlay={() => setActiveGame(game)} />)}</div></section>

            <section><div className="mb-5 flex items-center justify-between"><div><h2 className="text-xl font-semibold tracking-[-0.035em]">Made for you</h2><p className="mt-1 text-sm text-[#858a93]">Handpicked for curious minds.</p></div><button className="flex items-center gap-1 text-sm font-medium text-[#1274d5]">Browse all <ChevronRight size={15} /></button></div><div className="grid gap-5 md:grid-cols-2">{filteredGames.slice(2).map((game) => <GameCard key={game.title} game={game} loading={loading === game.title} installed={installed.includes(game.title)} onGet={() => getGame(game.title)} onPlay={() => setActiveGame(game)} />)}</div></section>
          </div>
        </section>
      </div>

      {welcomeOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-black/35 p-5 backdrop-blur-[3px]"><div className="relative w-full max-w-[440px] overflow-hidden rounded-[24px] bg-white p-8 text-center shadow-2xl sm:p-10"><button onClick={() => setWelcomeOpen(false)} aria-label="Close welcome message" className="absolute right-4 top-4 rounded-full p-2 text-[#9a9da3] hover:bg-[#f0f1f3] hover:text-black"><X size={18} /></button><div className="mx-auto mb-6 grid size-16 place-items-center rounded-[20px] bg-[#17181b] text-white shadow-lg"><Gamepad2 size={30} /></div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#878c95]">Cracker&apos;s Arcade</p><h2 className="mb-3 text-[30px] font-semibold tracking-[-0.055em]">Welcome to play.</h2><p className="mx-auto mb-8 max-w-[290px] text-sm leading-6 text-[#737780]">A small collection of big adventures, made for curious people.</p><button onClick={() => setWelcomeOpen(false)} className="w-full rounded-xl bg-[#1683ed] py-3 text-sm font-semibold text-white shadow-[0_5px_12px_rgb(22_131_237/25%)] transition hover:bg-[#086ed4]">Continue</button></div></div>}

      {activeGame && <div className="fixed inset-0 z-[60] flex flex-col bg-[#111216] text-white"><div className="flex h-16 items-center justify-between border-b border-white/10 px-5 sm:px-8"><div className="flex items-center gap-3"><div className="grid size-8 place-items-center rounded-lg bg-white/10"><Gamepad2 size={16} /></div><span className="font-semibold">{activeGame.title}</span></div><button onClick={() => setActiveGame(null)} className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20">Exit game</button></div><div className="grid flex-1 place-items-center p-6"><div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-[#1e2026] shadow-2xl"><div className="aspect-video bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${activeGame.image})` }} /><div className="flex items-center justify-between p-5"><div><p className="text-sm text-white/50">{activeGame.category}</p><h2 className="mt-1 text-xl font-semibold">{activeGame.title}</h2></div><span className="rounded-full bg-white/10 px-4 py-2 text-xs text-white/70">Game canvas ready</span></div></div></div></div>}
    </main>
  )
}

function GameCard({ game, loading, installed, onGet, onPlay }: { game: (typeof games)[number]; loading: boolean; installed: boolean; onGet: () => void; onPlay: () => void }) {
  return <article className="group overflow-hidden rounded-[16px] border border-[#e3e5e8] bg-white shadow-[0_3px_12px_rgb(0_0_0/4%)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(0_0_0/8%)]"><div className="relative aspect-[2.05/1] overflow-hidden" style={{ backgroundColor: game.color }}><img src={game.image} alt={`${game.title} artwork`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" /><div className="absolute bottom-3 left-4 text-xs font-medium text-white/90">{game.eyebrow}</div></div><div className="flex items-center justify-between gap-3 p-4"><div className="min-w-0"><h3 className="truncate text-[15px] font-semibold tracking-[-0.02em]">{game.title}</h3><p className="mt-1 truncate text-xs text-[#858a93]">{game.description}</p></div>{installed ? <button onClick={onPlay} className="shrink-0 rounded-full bg-[#edf5ff] px-4 py-2 text-xs font-bold text-[#1477d4] transition hover:bg-[#dcecff]">Play</button> : <button onClick={onGet} disabled={loading} className="flex min-w-[57px] shrink-0 items-center justify-center rounded-full bg-[#eef5ff] px-4 py-2 text-xs font-bold text-[#1477d4] transition hover:bg-[#dcecff] disabled:cursor-wait disabled:opacity-60">{loading ? <span className="size-3 animate-spin rounded-full border-2 border-[#1477d4]/25 border-t-[#1477d4]" /> : 'Get'}</button>}</div></article>
}
