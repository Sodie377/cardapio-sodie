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

const pagesBolos = [
  '/bolos1.jpg', '/bolos2.jpg', '/bolos3.jpg', '/bolos4.jpg', '/bolos5.jpg', 
  '/bolos6.jpg', '/bolos7.jpg', '/bolos8.jpg', '/bolos9.jpg', '/bolos10.jpg', 
  '/bolos11.jpg', '/bolos12.jpg', '/bolos13.jpg', '/bolos14.jpg', '/bolos15.jpg', 
  '/bolos16.jpg', '/bolos17.jpg', '/bolos18.jpg', '/bolos19.jpg', '/bolos20.jpg', 
  '/bolos21.jpg', '/bolos22.jpg', '/bolos23.jpg', '/bolos24.jpg', '/bolos25.jpg', 
  '/bolos26.jpg'
]
const pagesDoces = ['/doces1.jpg', '/doces2.jpg', '/doces3.jpg']
const pagesSalgados = ['/salgados1.jpg', '/salgados2.jpg', '/salgados3.jpg']
const pagesBebidas = ['/bebidas1.jpg', '/bebidas2.jpg', '/bebidas3.jpg']

const categories = [
  { id: 'bolos', label: 'Bolos', image: '/icone-bolos.png', color: 'bg-[#fff1dc]' },
  { id: 'doces', label: 'Doces', image: '/icone-doces.png', color: 'bg-[#fbe7e6]' },
  { id: 'salgados', label: 'Salgados', image: '/icone-salgados.png', color: 'bg-[#f8ecd8]' },
  { id: 'bebidas', label: 'Bebidas', image: '/icone-bebidas.png', color: 'bg-[#e9f0e8]' },
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
        <div className="mt-2 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#bd7040]">Bem-vindo à nossa doceria</p>
          <h1 className="font-serif text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-[#4a2e1b]">Escolha uma categoria<br />para ver o cardápio</h1>
        </div>

        <div className="mt-10 grid w-full grid-cols-2 gap-4" aria-label="Categorias do cardápio">
          {categories.map(({ id, label, image: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onChoose(id)}
              className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl bg-white p-5 text-[#4a2e1b] shadow-[0_8px_25px_-12px_rgba(80,45,20,0.42)] ring-1 ring-[#e9ddd1] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_-14px_rgba(80,45,20,0.55)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7040]"
            >
              <span className="flex items-center justify-center transition-transform group-hover:scale-110">
                <img src={Icon} alt={label} className="w-30 h-30 object-contain" />
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
    <main className="fixed inset-0 z-50 flex h-dvh w-full flex-col bg-[#f7f1eb]">
      {/* Botão de voltar flutuante */}
      <button
        type="button"
        onClick={onBack}
        className="absolute left-4 top-4 z-50 flex size-12 items-center justify-center rounded-full bg-white/90 text-[#4a2e1b] shadow-md backdrop-blur-sm transition hover:bg-white active:scale-95"
        aria-label="Voltar para categorias"
      >
        <ArrowLeft size={24} aria-hidden="true" />
      </button>

      {/* Container da imagem em tela cheia (Sem textos em cima) */}
      <section
        className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#f7f1eb]"
        onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return
          const distance = event.changedTouches[0]?.clientX - touchStart.current
          if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1)
          touchStart.current = null
        }}
      >
        {!imageError ? (
          <img
            src={menu.pages[current]}
            alt={`Página ${current + 1} do ${menu.title}`}
            className="h-full w-full object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 text-[#9c7d68]">
            <div className="flex size-20 items-center justify-center rounded-full bg-white text-[#bd7040] shadow-sm">
              <menu.icon size={38} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <p>Imagem não encontrada</p>
          </div>
        )}

        {/* Setas de navegação laterais flutuantes */}
        <button
          type="button"
          onClick={() => move(-1)}
          className="absolute left-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#4a2e1b] shadow-md backdrop-blur-sm transition hover:bg-white active:scale-90"
          aria-label="Página anterior"
        >
          <ArrowLeft size={24} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => move(1)}
          className="absolute right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#4a2e1b] shadow-md backdrop-blur-sm transition hover:bg-white active:scale-90"
          aria-label="Próxima página"
        >
          <ArrowRight size={24} aria-hidden="true" />
        </button>
      </section>

      {/* Bolinhas de navegação flutuantes na parte inferior */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2" role="tablist">
        {menu.pages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => { setCurrent(index); setImageError(false) }}
            className={`rounded-full shadow-sm transition-all ${index === current ? 'h-2.5 w-7 bg-[#bd7040]' : 'size-2.5 bg-[#dbc3b1] hover:bg-[#bd7040]'}`}
            aria-label={`Ir para página ${index + 1}`}
          />
        ))}
      </div>
    </main>
  )
}

export default function MenuApp() {
  const [category, setCategory] = useState<CategoryId | null>(null)
  return category ? <MenuViewer category={category} onBack={() => setCategory(null)} /> : <Home onChoose={setCategory} />
}