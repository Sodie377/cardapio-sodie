'use client'

import { useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CakeSlice,
  Coffee,
  Croissant,
  Cookie,
  CupSoda,
  Gift,
  IceCreamBowl,
  Sparkles,
} from 'lucide-react'

const pagesBolos = ['/bolos1.jpg', '/bolos2.jpg', '/bolos3.jpg']
const pagesDoces = ['/doces1.jpg', '/doces2.jpg', '/doces3.jpg']
const pagesSalgados = ['/salgados1.jpg', '/salgados2.jpg', '/salgados3.jpg']
const pagesBebidas = ['/bebidas1.jpg', '/bebidas2.jpg', '/bebidas3.jpg']

const categories = [
  { id: 'bolos', label: 'Bolos', icon: CakeSlice, color: 'bg-[#fff1dc]' },
  { id: 'doces', label: 'Doces', icon: Cookie, color: 'bg-[#fbe7e6]' },
  { id: 'salgados', label: 'Salgados', icon: Croissant, color: 'bg-[#f8ecd8]' },
  { id: 'bebidas', label: 'Bebidas', icon: Coffee, color: 'bg-[#e9f0e8]' },
] as const

const menus = {
  bolos: { title: 'Cardápio de Bolos', pages: pagesBolos, eyebrow: 'Feitos para celebrar', icon: CakeSlice },
  doces: { title: 'Cardápio de Doces', pages: pagesDoces, eyebrow: 'Pequenos momentos de alegria', icon: Cookie },
  salgados: { title: 'Cardápio de Salgados', pages: pagesSalgados, eyebrow: 'Sabor em cada mordida', icon: Croissant },
  bebidas: { title: 'Cardápio de Bebidas', pages: pagesBebidas, eyebrow: 'Para acompanhar seu momento', icon: Coffee },
} as const

type CategoryId = keyof typeof menus

function Brand() {
  return (
    <div className="flex flex-col items-center gap-2" aria-label="Sodiê Doces">
      {/* Altere o nome logo-sodie.png para o nome exato do seu arquivo na pasta public */}
      <img 
        src="/logo-sodie.png" 
        alt="Sodiê Doces" 
        className="w-80 h-auto object-contain"
      />
    </div>
  )
}

function Home({ onChoose }: { onChoose: (category: CategoryId) => void }) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pb-8 pt-12 sm:pt-16">
      <div className="flex flex-1 flex-col items-center">
        <Brand />
        <div className="mt-12 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#bd7040]">Bem-vindo à nossa doceria</p>
          <h1 className="font-serif text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-[#4a2e1b]">Escolha uma categoria<br />para ver o cardápio</h1>
        </div>

        <div className="mt-10 grid w-full grid-cols-2 gap-4" aria-label="Categorias do cardápio">
          {categories.map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              type="button"
              onClick={() => onChoose(id)}
              className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl bg-white p-5 text-[#4a2e1b] shadow-[0_8px_25px_-12px_rgba(80,45,20,0.42)] ring-1 ring-[#e9ddd1] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_-14px_rgba(80,45,20,0.55)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7040]"
            >
              <span className={`flex size-16 items-center justify-center rounded-full ${color} text-[#bd7040] transition-transform group-hover:scale-105`}>
                <Icon size={34} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="text-[1.05rem] font-bold tracking-[-0.02em]">{label}</span>
            </button>
          ))}
        </div>
      </div>
      <p className="mt-12 text-center text-xs font-medium text-[#9c7d68]">Uma pausa gostosa começa aqui</p>
    </main>
  )
}

function MenuViewer({ category, onBack }: { category: CategoryId; onBack: () => void }) {
  const menu = menus[category]
  const [current, setCurrent] = useState(0)
  const [imageError, setImageError] = useState(false)
  const touchStart = useRef<number | null>(null)

  const move = (direction: 1 | -1) => {
    setCurrent((value) => (value + direction + menu.pages.length) % menu.pages.length)
    setImageError(false)
  }

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-5 pb-8 pt-6 sm:px-8 sm:pt-8">
      <header className="flex items-center gap-4">
        <button type="button" onClick={onBack} className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#4a2e1b] shadow-sm ring-1 ring-[#eaded3] transition hover:bg-[#fffaf4] active:scale-95 focus-visible:outline-2 focus-visible:outline-[#bd7040]" aria-label="Voltar para categorias">
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#bd7040]">Sodiê Doceria</p>
          <h1 className="truncate font-serif text-2xl font-bold tracking-[-0.035em] text-[#4a2e1b]">{menu.title}</h1>
        </div>
      </header>

      <section className="flex flex-1 flex-col items-center justify-center py-8">
        <div className="mb-5 flex items-center gap-2 text-sm font-medium text-[#9c7d68]"><Sparkles size={15} aria-hidden="true" />{menu.eyebrow}</div>
        <div
          className="relative w-full max-w-[510px] overflow-hidden rounded-[1.65rem] bg-white p-2 shadow-[0_15px_40px_-18px_rgba(80,45,20,0.5)] ring-1 ring-[#e9ddd1]"
          onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return
            const distance = event.changedTouches[0]?.clientX - touchStart.current
            if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1)
            touchStart.current = null
          }}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.2rem] bg-[#f6eee6]">
            {!imageError ? (
              <img src={menu.pages[current]} alt={`Página ${current + 1} do ${menu.title}`} className="size-full object-cover" onError={() => setImageError(true)} />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-4 px-10 text-center text-[#9c7d68]">
                <div className="flex size-20 items-center justify-center rounded-full bg-white text-[#bd7040] shadow-sm"><menu.icon size={38} strokeWidth={1.5} aria-hidden="true" /></div>
                <div><p className="font-serif text-2xl font-bold text-[#4a2e1b]">Sua página de {category}</p><p className="mt-2 text-sm leading-relaxed">Adicione sua imagem em <code className="rounded bg-white px-1.5 py-0.5 text-xs">public/{category}1.jpg</code></p></div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/10 to-transparent" />
            <button type="button" onClick={() => move(-1)} className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#4a2e1b] shadow-md backdrop-blur-sm transition hover:bg-white active:scale-90" aria-label="Página anterior"><ArrowLeft size={18} aria-hidden="true" /></button>
            <button type="button" onClick={() => move(1)} className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#4a2e1b] shadow-md backdrop-blur-sm transition hover:bg-white active:scale-90" aria-label="Próxima página"><ArrowRight size={18} aria-hidden="true" /></button>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2" role="tablist" aria-label="Páginas do cardápio">
          {menu.pages.map((_, index) => <button key={index} type="button" onClick={() => { setCurrent(index); setImageError(false) }} className={`rounded-full transition-all ${index === current ? 'h-2.5 w-7 bg-[#bd7040]' : 'size-2.5 bg-[#dbc3b1] hover:bg-[#bd7040]'}`} aria-label={`Ir para página ${index + 1}`} aria-selected={index === current} role="tab" />)}
        </div>
        <p className="mt-3 text-xs font-medium text-[#9c7d68]">Arraste para os lados ou use as setas</p>
      </section>
    </main>
  )
}

export default function MenuApp() {
  const [category, setCategory] = useState<CategoryId | null>(null)
  return category ? <MenuViewer category={category} onBack={() => setCategory(null)} /> : <Home onChoose={setCategory} />
}
