'use client'

import { useRef, useState } from 'react'
import {
  AppWindow,
  ArrowDownToLine,
  ChevronLeft,
  ChevronRight,
  Compass,
  Gamepad2,
  Search,
  SlidersHorizontal,
  Sparkles,
  UserPlus,
  X,
  Wrench,
} from 'lucide-react'

const games = [
  {
    title: 'Gang Beasts',
    category: 'Party brawler',
    eyebrow: 'Ready to play',
    description: 'Wobbly physics, fierce friends, and delightful chaos.',
    image: 'https://i.ibb.co/Nd3KfZsp/hero.avif',
    link: 'https://itzcracker.github.io/GangBeast-WebPort/',
    color: '#d9e6ff',
  },
  {
    title: 'How To Fish',
    category: 'Adventure',
    eyebrow: 'New from Cracker',
    description: 'Cast a line, find your rhythm, and reel in a story.',
    image: 'https://i.ibb.co/mF5xGg0b/How-to-Fish-01.jpg',
    link: 'https://itzcracker.github.io/HowToFishPort/',
    color: '#d8f0e3',
  },
  {
    title: 'Clustertruck',
    category: 'Action',
    eyebrow: 'New release',
    description: 'Leap across a runaway convoy in a race against gravity.',
    image: 'https://i.ibb.co/cdjD4h5/clustertruck.png',
    link: 'https://itzcracker.github.io/Clustertruck-Port/',
    color: '#ffe3c7',
  },
  {
    title: 'PEAK',
    category: 'Adventure',
    eyebrow: 'New from Cracker',
    description: 'Climb higher, move carefully, and chase the summit.',
    image: 'https://i.ibb.co/zTfYgrVC/Mix-Collage-27-Jun-2025-10-57-AM-7610-1.jpg',
    link: 'https://itzcracker.github.io/Peak-Port/?cdn=https%3A%2F%2Fcdn.jsdelivr%2Fgh%2Fwasmdotrip%2FPeak-Port%40main',
    color: '#e5e0ff',
  },
  {
    title: 'Grand Theft Auto: Vice City',
    category: 'Open world',
    eyebrow: 'New from Cracker',
    description: 'Take a neon-soaked trip through the streets of Vice City.',
    image: 'https://i.ibb.co/k6yj7qnn/u-https-wallpapers-com-images-hd-gta-vc-pe36dgr3m99i6c8m.jpg',
    link: 'https://itzcracker.mooo.com/games/vicecity/index.html',
    color: '#f6d6c9',
  },
  {
    title: 'Grand Theft Auto III',
    category: 'Open world',
    eyebrow: 'New from Cracker',
    description: 'Explore Liberty City and make your mark on the streets.',
    image: 'https://i.ibb.co/wNX5YPxh/u-https-www-igrandtheftauto-com-content-images-xl-gta3-logo.webp',
    link: 'https://itzcracker.github.io/StudyMath3/',
    color: '#e7e2d2',
  },
  {
    title: 'Minecraft (Eaglercraft)',
    category: 'Sandbox',
    eyebrow: 'New from Cracker',
    description: 'Build, explore, and create your own blocky adventure.',
    image: 'https://i.ibb.co/V0tCMGRP/u-https-dotesports-com-wp-content-uploads-2023-06-cherry-blossom-grove-in-minecra.png',
    link: 'https://petergriffiniscool.netlify.app/',
    color: '#d9eedc',
  },
  {
    title: 'Cuphead',
    category: 'Run and gun',
    eyebrow: 'New from Cracker',
    description: 'Take on fast-paced bosses in a hand-drawn cartoon adventure.',
    image: 'https://i.ibb.co/RTfCCG3J/u-https-gmedia-playstation.jpg',
    link: 'https://itzcracker.github.io/HTML-web-course/',
    color: '#f5d6cb',
  },
  {
    title: 'CS 1.6',
    category: 'First-person shooter',
    eyebrow: 'New from Cracker',
    description: 'Join the classic tactical showdown and make every shot count.',
    image: 'https://i.ibb.co/twPYRMtp/CS1-6-GO-REMIX-V3-mp4-VLC-medi-3.png',
    link: 'https://itzcracker.github.io/Learn-JavaScript/',
    color: '#dce5ed',
  },
  {
    title: 'Granny 3',
    category: 'Horror',
    eyebrow: 'New from Cracker',
    description: 'Find your way out, keep quiet, and survive the haunted house.',
    image: 'https://i.ibb.co/rG10cMJ8/capsule-616x353-upscaled.jpg',
    link: 'https://itzcracker.github.io/Learn-CSS-web/',
    color: '#e5d9d5',
  },
]

const discoverImages = [
  'https://i.ibb.co/S7vzGSkW/36s-Na79px-V859f-Fg3-CU7z-Fh-Q34-Th-Nx8z.jpg',
  'https://i.ibb.co/0pmfbw93/ss-98063a3930a7bb600695486897c323dbcb80ce87-1920x1080.jpg',
  'https://i.ibb.co/Qv27dm6K/ss-ffe91adf2baa39c441fc6d1ca8905204f64c8afc-1920x1080.jpg',
  'https://i.ibb.co/DHB0vt2C/ss-8cfd1ad9be3b0ad7108c667e14047b84aaf84109-1920x1080.jpg',
]

const navItems = [
  { label: 'Discover', icon: Compass },
  { label: 'Arcade', icon: Gamepad2 },
  { label: 'Create', icon: Sparkles },
  { label: 'Play', icon: AppWindow },
  { label: 'Developer', icon: Wrench, href: 'https://github.com/itzcracker' },
  { label: 'Discord', icon: ArrowDownToLine, href: 'https://dsc.gg/gravitycom' },
]

export default function Page() {
  const [welcomeOpen, setWelcomeOpen] = useState(true)
  const [signupOpen, setSignupOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [draftUsername, setDraftUsername] = useState('')
  const [installed, setInstalled] = useState<string[]>([])
  const [loading, setLoading] = useState<string | null>(null)
  const [activeGame, setActiveGame] = useState<(typeof games)[number] | null>(null)
  const [query, setQuery] = useState('')
  const [activeNav, setActiveNav] = useState('Arcade')
  const discoverRef = useRef<HTMLDivElement>(null)
  const discoverCarouselRef = useRef<HTMLDivElement>(null)

  const filteredGames = games.filter((game) => game.title.toLowerCase().includes(query.toLowerCase()))

  function getGame(title: string) {
    if (installed.includes(title)) return
    setLoading(title)
    window.setTimeout(() => {
      setInstalled((current) => [...current, title])
      setLoading(null)
    }, 500)
  }

  function openGame(game: (typeof games)[number]) {
    setActiveGame(game)
  }

  return (
    <main className="h-screen overflow-hidden bg-[#f6f7f9] text-[#17181b]">
      <div className="flex h-full w-full">
        <aside className="relative hidden h-full w-[248px] shrink-0 border-r border-[#e2e4e8] bg-[#f1f2f4] px-5 py-7 lg:block">
          <div className="mb-10 flex items-center gap-2.5 px-2">
            <img src="/crackers-arcade-logo.png" alt="Cracker&apos;s Arcade logo" className="size-8 rounded-[10px] object-contain" />
            <span className="arcade-logo text-[15px] tracking-[-0.03em]">Cracker&apos;s Arcade</span>
          </div>
          <nav className="space-y-1 text-[13px] font-medium text-[#666a73]" aria-label="Primary navigation">
            {navItems.map(({ label, icon: Icon, href }) => href ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" onClick={() => setActiveNav(label)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${activeNav === label ? 'bg-white text-[#191a1e] shadow-[0_1px_3px_rgb(0_0_0/8%)]' : 'hover:bg-white/70'}`}>
                <Icon size={16} strokeWidth={1.8} />{label}
              </a>
            ) : (
              <button key={label} onClick={() => { setActiveNav(label); if (label === 'Discover') discoverRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${activeNav === label ? 'bg-white text-[#191a1e] shadow-[0_1px_3px_rgb(0_0_0/8%)]' : 'hover:bg-white/70'}`}>
                <Icon size={16} strokeWidth={1.8} />{label}
              </button>
            ))}
          </nav>
          <button onClick={() => { setDraftUsername(username); setSignupOpen(true) }} className="absolute bottom-7 left-7 flex items-center gap-2 text-xs text-[#6c7078] transition hover:text-[#17181b]">
            <div className="grid size-7 place-items-center rounded-full bg-[#d5d9dd] font-semibold text-[#545961]">{username ? username[0].toUpperCase() : <UserPlus size={14} />}</div>
            {username || 'Sign Up'}
          </button>
        </aside>

        <section className="min-w-0 flex-1 overflow-y-auto px-5 pb-16 sm:px-9 lg:px-12">
          <header className="flex h-[74px] items-center justify-between border-b border-[#e2e4e8]">
            <div className="flex items-center gap-2 lg:hidden"><img src="/crackers-arcade-logo.png" alt="Cracker&apos;s Arcade logo" className="size-8 rounded-[10px] object-contain" /><span className="arcade-logo">Cracker&apos;s Arcade</span></div>
            <div className="relative hidden w-[260px] md:block"><Search className="absolute left-3 top-2.5 text-[#8a8e96]" size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search games" className="w-full rounded-lg border border-transparent bg-[#e9eaed] py-2 pl-9 pr-3 text-sm outline-none transition focus:border-[#c5c8ce]" /></div>
            <div className="ml-auto flex items-center gap-4 text-sm text-[#686c74]"><button className="flex items-center gap-2 hover:text-black"><SlidersHorizontal size={16} /> <span className="hidden sm:inline">Filters</span></button><button onClick={() => { setDraftUsername(username); setSignupOpen(true) }} className="rounded-full bg-[#17181b] px-4 py-2 font-medium text-white transition hover:bg-black">{username || 'Sign Up'}</button></div>
          </header>

          <div className="mx-auto max-w-[1120px] pt-10">
            <section ref={discoverRef} id="discover" className="mb-12 scroll-mt-6">
              <div className="mb-5 flex items-end justify-between"><div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a8f98]">Discover</p><h2 className="text-2xl font-semibold tracking-[-0.045em]">Find your next favorite.</h2></div></div>
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-[#e2e4e8] bg-white p-3 shadow-[0_3px_12px_rgb(0_0_0/4%)]"><div className="flex min-w-0 items-center gap-3"><img src={games[2].image} alt="Clustertruck logo" className="size-12 rounded-xl object-cover" /><div className="min-w-0"><p className="truncate text-sm font-semibold">Clustertruck</p><p className="text-xs text-[#858a93]">Action · New release</p></div></div>{installed.includes(games[2].title) ? <button onClick={() => openGame(games[2])} className="rounded-full bg-[#edf5ff] px-4 py-2 text-xs font-bold text-[#1477d4]">Play</button> : <button onClick={() => getGame(games[2].title)} disabled={loading === games[2].title} className="rounded-full bg-[#eef5ff] px-4 py-2 text-xs font-bold text-[#1477d4] disabled:opacity-60">{loading === games[2].title ? '...' : 'GET'}</button>}</div><div className="group relative"><button onClick={() => discoverCarouselRef.current?.scrollBy({ left: -460, behavior: 'smooth' })} aria-label="Scroll discover images left" className="absolute left-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/95 text-[#17181b] shadow-lg transition hover:scale-105 hover:bg-white"><ChevronLeft size={18} /></button><div ref={discoverCarouselRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{discoverImages.map((image, index) => <img key={image} src={image} alt={`Discover game scene ${index + 1}`} className="h-[170px] w-[290px] shrink-0 rounded-2xl object-cover shadow-[0_4px_16px_rgb(0_0_0/8%)] sm:h-[205px] sm:w-[350px]" />)}</div><button onClick={() => discoverCarouselRef.current?.scrollBy({ left: 460, behavior: 'smooth' })} aria-label="Scroll discover images right" className="absolute right-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/95 text-[#17181b] shadow-lg transition hover:scale-105 hover:bg-white"><ChevronRight size={18} /></button></div>
            </section>
            <div className="mb-9 flex items-end justify-between"><div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a8f98]">{username ? `Good afternoon, ${username}` : 'Good afternoon'}</p><h1 className="text-[36px] font-semibold tracking-[-0.055em] sm:text-[48px]">Play something <span className="text-[#8c9199]">wonderful.</span></h1></div><button className="hidden items-center gap-1 text-sm font-medium text-[#1274d5] sm:flex">See all <ChevronRight size={15} /></button></div>
            <div className="relative mb-12 overflow-hidden rounded-[22px] bg-[#1c1d20] p-7 text-white shadow-[0_15px_30px_rgb(0_0_0/12%)] sm:p-10"><div className="relative z-10 max-w-[390px]"><p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#aeb4c0]">Game of the day</p><h2 className="mb-3 text-3xl font-semibold tracking-[-0.05em]">Gang Beasts.</h2><p className="mb-6 text-sm leading-6 text-[#b3b7c0]">Wrestle, tumble, and throw your friends into wonderfully wobbly chaos.</p><button onClick={() => installed.includes(games[0].title) ? openGame(games[0]) : getGame(games[0].title)} className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1b1c1f] transition hover:bg-[#dceaff]">{installed.includes(games[0].title) ? 'Play now' : 'GET Gang Beasts'}</button></div><div className="pointer-events-none absolute -right-8 -top-12 h-[280px] w-[56%] rotate-[-5deg] rounded-[30px] opacity-85 sm:right-5" style={{ backgroundImage: `url(${games[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} /><div className="pointer-events-none absolute -right-20 bottom-[-110px] size-[260px] rounded-full bg-[#7981ff]/25 blur-3xl" /></div>
            <section><div className="mb-5 flex items-center justify-between"><div><h2 className="text-xl font-semibold tracking-[-0.035em]">Continue playing</h2><p className="mt-1 text-sm text-[#858a93]">Pick up where you left off.</p></div><button className="flex items-center gap-1 text-sm font-medium text-[#1274d5]">See all <ChevronRight size={15} /></button></div><div className="grid gap-5 md:grid-cols-2">{filteredGames.map((game) => <GameCard key={game.title} game={game} loading={loading === game.title} installed={installed.includes(game.title)} onGet={() => getGame(game.title)} onPlay={() => openGame(game)} />)}</div></section>
          </div>
        </section>
      </div>

      {welcomeOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-black/35 p-5 backdrop-blur-[3px]"><div className="relative w-full max-w-[440px] overflow-hidden rounded-[24px] bg-white p-8 text-center shadow-2xl sm:p-10"><button onClick={() => setWelcomeOpen(false)} aria-label="Close welcome message" className="absolute right-4 top-4 rounded-full p-2 text-[#9a9da3] hover:bg-[#f0f1f3] hover:text-black"><X size={18} /></button><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#878c95]">Cracker&apos;s Arcade</p><h2 className="mb-3 text-[30px] font-semibold tracking-[-0.055em]">Welcome to Cracker&apos;s Arcade</h2><p className="mx-auto mb-8 max-w-[290px] text-sm leading-6 text-[#737780]">A small collection of big adventures, made for curious people.</p><button onClick={() => setWelcomeOpen(false)} className="w-full rounded-xl bg-[#1683ed] py-3 text-sm font-semibold text-white shadow-[0_5px_12px_rgb(22_131_237/25%)] transition hover:bg-[#086ed4]">Continue</button></div></div>}
      {signupOpen && <SignupModal draftUsername={draftUsername} setDraftUsername={setDraftUsername} onClose={() => setSignupOpen(false)} onSubmit={() => { if (draftUsername.trim()) { setUsername(draftUsername.trim()); setSignupOpen(false) } }} />}
      {activeGame && <div className="fixed inset-0 z-[60] flex flex-col bg-[#111216] text-white"><div className="flex h-10 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6"><div className="flex items-center gap-2"><span className="text-sm font-semibold">{activeGame.title}</span></div><button onClick={() => setActiveGame(null)} className="rounded-full bg-white/10 px-3 py-1 text-xs transition hover:bg-white/20">Exit game</button></div><iframe title={activeGame.title} src={activeGame.link} className="h-[calc(100vh-2.5rem)] w-full border-0 bg-black" allow="fullscreen; autoplay; gamepad" /></div>}
    </main>
  )
}

function SignupModal({ draftUsername, setDraftUsername, onClose, onSubmit }: { draftUsername: string; setDraftUsername: (value: string) => void; onClose: () => void; onSubmit: () => void }) {
  return <div className="fixed inset-0 z-[70] grid place-items-center bg-black/35 p-5 backdrop-blur-[3px]"><form onSubmit={(event) => { event.preventDefault(); onSubmit() }} className="relative w-full max-w-[390px] rounded-[24px] bg-white p-8 shadow-2xl"><button type="button" onClick={onClose} aria-label="Close sign up form" className="absolute right-4 top-4 rounded-full p-2 text-[#9a9da3] hover:bg-[#f0f1f3] hover:text-black"><X size={18} /></button><div className="mb-6 grid size-12 place-items-center rounded-2xl bg-[#eef5ff] text-[#1477d4]"><UserPlus size={22} /></div><h2 className="text-2xl font-semibold tracking-[-0.04em]">Join the arcade</h2><p className="mt-2 text-sm leading-6 text-[#737780]">Create a player name to personalize your arcade.</p><label className="mt-6 block text-sm font-medium">Username<input required minLength={2} value={draftUsername} onChange={(event) => setDraftUsername(event.target.value)} className="mt-2 w-full rounded-xl border border-[#dfe2e7] bg-[#fafbfc] px-3 py-2.5 outline-none focus:border-[#1683ed]" placeholder="e.g. pixelpilot" /></label><label className="mt-4 block text-sm font-medium">Password<input required minLength={4} type="password" className="mt-2 w-full rounded-xl border border-[#dfe2e7] bg-[#fafbfc] px-3 py-2.5 outline-none focus:border-[#1683ed]" placeholder="••••••••" /></label><button type="submit" className="mt-6 w-full rounded-xl bg-[#1683ed] py-3 text-sm font-semibold text-white transition hover:bg-[#086ed4]">Sign Up</button></form></div>
}

function GameCard({ game, loading, installed, onGet, onPlay }: { game: (typeof games)[number]; loading: boolean; installed: boolean; onGet: () => void; onPlay: () => void }) {
  return <article className="group overflow-hidden rounded-[16px] border border-[#e3e5e8] bg-white shadow-[0_3px_12px_rgb(0_0_0/4%)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(0_0_0/8%)]"><div className="relative aspect-[2.05/1] overflow-hidden" style={{ backgroundColor: game.color }}><img src={game.image} alt={`${game.title} artwork`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" /><div className="absolute bottom-3 left-4 text-xs font-medium text-white/90">{game.eyebrow}</div></div><div className="flex items-center justify-between gap-3 p-4"><div className="min-w-0"><h3 className="truncate text-[15px] font-semibold tracking-[-0.02em]">{game.title}</h3><p className="mt-1 truncate text-xs text-[#858a93]">{game.description}</p></div>{installed ? <button onClick={onPlay} className="shrink-0 rounded-full bg-[#edf5ff] px-4 py-2 text-xs font-bold text-[#1477d4] transition hover:bg-[#dcecff]">Play</button> : <button onClick={onGet} disabled={loading} className="flex min-w-[57px] shrink-0 items-center justify-center rounded-full bg-[#eef5ff] px-4 py-2 text-xs font-bold text-[#1477d4] transition hover:bg-[#dcecff] disabled:cursor-wait disabled:opacity-60">{loading ? <span className="size-3 animate-spin rounded-full border-2 border-[#1477d4]/25 border-t-[#1477d4]" /> : 'GET'}</button>}</div></article>
}
