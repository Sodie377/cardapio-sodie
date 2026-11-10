'use client'

import { useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CakeSlice,
  Coffee,
  Croissant,
  Cookie,
  Sparkles,
  X,
} from 'lucide-react'

// ==========================================
// DADOS DAS CATEGORIAS EM TELA CHEIA (PÁGINAS)
// ==========================================
const pagesBolos = [
  '/bolos1.jpg', '/bolos2.jpg', '/bolos3.jpg', '/bolos4.jpg', '/bolos5.jpg', 
  '/bolos6.jpg', '/bolos7.jpg', '/bolos8.jpg', '/bolos9.jpg', '/bolos10.jpg', 
  '/bolos11.jpg', '/bolos12.jpg', '/bolos13.jpg', '/bolos14.jpg', '/bolos15.jpg', 
  '/bolos16.jpg', '/bolos17.jpg', '/bolos18.jpg', '/bolos19.jpg', '/bolos20.jpg', 
  '/bolos21.jpg', '/bolos22.jpg', '/bolos23.jpg', '/bolos24.jpg', '/bolos25.jpg', 
  '/bolos26.jpg'
]
const pagesBebidas = ['/bebidas1.jpg', '/bebidas2.jpg', '/bebidas3.jpg']

// ==========================================
// DADOS DA TELA DE DOCES COM DESCRIÇÕES
// ==========================================
const docesCategories = ['Todos', 'Tradicionais', 'Finos', 'Belgas', 'Bombom', 'Zero Açúcar', 'NUTELLA®']

const docesList = [
  // TRADICIONAIS
  { id: 't1', name: 'Beijinho', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110736/beijinho_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, coco seco, creme de leite, margarina sem sal, glucose de milho.' },
  { id: 't2', name: 'Brigadeiro', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110738/brigadeiro_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, creme de leite, cacau em pó, margarina sem sal, glucose de milho.' },
  { id: 't3', name: 'Cajuzinho', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110741/cajuzinho_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, amendoim, creme de leite, margarina sem sal, açúcar refinado, glucose de milho.' },
  { id: 't4', name: 'Casadinho', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110737/bem-casado_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, creme de leite, cacau em pó, margarina sem sal, açúcar refinado, glucose de milho.' },
  { id: 't5', name: 'Olho de Sogra', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110744/olho_de_sogro_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, coco seco, creme de leite, margarina sem sal, açúcar cristal, ameixa, seca, glucose de milho' },
  { id: 't6', name: 'Brigadeiro de Morango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110740/brigadeiro_de_morango_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, creme de leite, Nesquik sabor morango, margarina sem sal, glucose de milho, açúcar refinado.' },

  // FINOS
  { id: 'f1', name: 'Trufinha de Trufado de Chocolate com Cereja', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092101/trufado_c_cereja_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com trufado de chocolate e cereja.' },
  { id: 'f2', name: 'Trufinha de Brigadeiro', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092059/brigadeira_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com brigadeiro.' },
  { id: 'f3', name: 'Trufinha Branco e Preto', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092102/trufado_preto_branco_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com ganache de chocolate ao leite e chocolate branco.' },
  { id: 'f4', name: 'Trufinha de Leite Ninho® com Avelã', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092100/ninho_c_avela_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com ganache de leite Ninho® e pasta de avelã.' },
  { id: 'f5', name: 'Trufinha de Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092059/limao_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com mousse de limão.' },
  { id: 'f6', name: 'Trufinha de Geleia de Pimenta com Abacaxi', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092058/abacaxi_c_geleia_pimenta_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com geleia de pimenta e abacaxi.' },
  { id: 'f7', name: 'Trufinha de Avelã', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092059/avela_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com pasta de avelã.' },
  { id: 'f8', name: 'Trufinha de Trufado Branco com Geleia de Damasco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28112407/trufado_com_damasco_246x200px-1.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com trufas brancas e geleia de damasco.' },
  { id: 'f9', name: 'Trufinha de Maracujá', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092100/maracuja_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com ganache de maracujá e calda de maracujá.' },
  { id: 'f10', name: 'Camafêu de Nozes Banhado no Chocolate ao Leite', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111431/Camafeu_de_Nozes_no_Chocolate_ao_Leite_246x200px.png', category: 'Finos', description: 'Massa especial de nozes banhada em delicioso chocolate ao leite.' },
  { id: 'f11', name: 'Camafêu de Nozes Banhado no Chocolate Branco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28140144/Camafeu_de_Nozes_no_Chocolate_ao_branco_246x200px.png', category: 'Finos', description: 'Massa especial de nozes fondada e banhada em chocolate branco.' },

  // BELGAS
  { id: 'be1', name: 'Brigadeiro Gourmet de Leite Ninho® com Avelã', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145226/ninho-com-avela_246x200px.png', category: 'Belgas', description: 'Brigadeiro gourmet feito com chocolate belga, Leite Ninho® e avelãs.' },
  { id: 'be2', name: 'Brigadeiro Gourmet de Pistache', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145226/pistache_246x200px.png', category: 'Belgas', description: 'Brigadeiro feito com chocolate branco Belga e pistache.' },
  { id: 'be3', name: 'Brigadeiro Gourmet de Café', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145224/cafe_246x200px.png', category: 'Belgas', description: 'Brigadeiro feito com chocolate ao leite Belga e café.' },
  { id: 'be4', name: 'Brigadeiro Gourmet Intenso', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145225/intenso_246x200px.png', category: 'Belgas', description: 'Brigadeiro feito com chocolate amargo Belga e chocolate meio amargo.' },
  { id: 'be5', name: 'Brigadeiro Gourmet de Frutas Vermelhas', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145225/frutas-vermelhas_246x200px.png', category: 'Belgas', description: 'Brigadeiro feito com chocolate branco Belga, morango, mirtilo, framboesa e cereja.' },
  { id: 'be6', name: 'Brigadeiro Gourmet de Churros', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145224/churros_246x200px.png', category: 'Belgas', description: 'Brigadeiro Gourmet feito com chocolate branco Belga e doce de leite. Contém canela em pó.' },
  { id: 'be7', name: 'Brigadeiro Gourmet Ao Leite', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145227/ao-leite_246x200px.png', category: 'Belgas', description: 'Brigadeiro Gourmet feito com chocolate ao leite Belga.' },

  // BOMBOM
  { id: 'b1', name: 'Bombom de Brigadeiro com Cereja', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111432/bombom_de_brigadeiro-cereja_246x200px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com brigadeiro e cereja.' },
  { id: 'b2', name: 'Bombom de Brigadeiro', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111445/bombom_de_Brigadeiro_615x500px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com brigadeiro.' },
  { id: 'b3', name: 'Bombom de Maracujá', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111430/bombom_de_maracuja_246x200px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com brigadeiro de maracujá.' },
  { id: 'b4', name: 'Bombom de Café', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28140144/bombom_de_cafe_246x200px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com brigadeiro de café e decorado com amêndoa.' },
  { id: 'b5', name: 'Bombom de Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111429/bombom_de_limao_246x200px.png', category: 'Bombom', description: 'Bombom de chocolate ao leite recheado com brigadeiro de limão.' },
  { id: 'b6', name: 'Bombom de Coco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111433/bombom_de_coco_246x200px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com beijinho.' },

  // ZERO AÇÚCAR
  { id: 'z1', name: 'Brigadeiro Sabor Morango Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/09/22110154/doce_3_246x200px.png', category: 'Zero Açúcar', description: 'Docinho feito com leite condensado zero açúcar e gelatina sabor morango sem açúcar, finalizado com leite em pó desnatado.' },
  { id: 'z2', name: 'Beijinho Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/09/29160750/doce_2_246x200px.png', category: 'Zero Açúcar', description: 'Docinho feito com leite condensado zero açúcar e pedacinhos de coco ralado sem açúcar, finalizado com coco seco fino sem açúcar.' },
  { id: 'z3', name: 'Brigadeiro Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/09/29160748/doce_1_246x200px.png', category: 'Zero Açúcar', description: 'Brigadeiro feito com leite condensado zero açúcar, cacau 100% e finalizado com raspas de chocolate ao leite baixo em açúcares.' },

  // NUTELLA
  { id: 'n1', name: 'Brigadeiro Nevado com NUTELLA®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17152129/Brigadeiro-Nevado-com-Nutella_235x235px.png', category: 'NUTELLA®', description: 'Brigadeiro feito e envolvido com leite em pó doce e finalizado com NUTELLA®.' },
  { id: 'n2', name: 'Brigadeiro Crispy com NUTELLA®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17152127/Brigadeiro-Crispy_235x235px.png', category: 'NUTELLA®', description: 'Brigadeiro feito com NUTELLA®, recheado de avelã, banhado no chocolate meio amargo com flakes caramelizados e finalizado com riscos de chocolate branco.' },
  { id: 'n3', name: 'Bolo Bombom com NUTELLA®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17152126/Bolo-Bombom-de-Nutella_235x235px.png', category: 'NUTELLA®', description: 'Bolo de chocolate com NUTELLA® e brigadeiro, banhado no chocolate meio amargo com flakes caramelizados, finalizado com avelã e sal.' },
]

// ==========================================
// 3. DADOS DA GALERIA DE SALGADOS (SEM FILTROS)
// ==========================================
// Array vazio desativa os botões de filtro na tela
const salgadosCategories: string[] = [] 

const salgadosList = [
  // GRANDES
  { id: 'g1', name: 'Esfiha de Calabresa c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18105538/Esfiha_calabresa_611x497.png', category: 'Grande', description: 'Calabresa + requeijão = sabor de montão. Massa leve, a base de farinha de trigo, leite integral e margarina, recheio de calabresa fatiada, requeijão cremoso e temperos.' },
  { id: 'g2', name: 'Esfiha de Frango c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/18101219/Esfiha_frango_requeijao_255x207.png', category: 'Grande', description: 'Massa leve, com recheio de frango desfiado, temperos especiais e requeijão cremoso.' },
  { id: 'g3', name: 'Esfiha de Carne', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/18101138/Esfiha_carne_611x497-1.png', category: 'Grande', description: 'Massa leve, com recheio de carne e temperos especiais. INGREDIENTES: farinha de trigo enriquecida, carne bovina, leite integral, cebola, tomate, margarina, óleo de soja, gema pasteurizada, sal, açúcar, alho, fermento biológico e especiarias.' },
  { id: 'g4', name: 'Coxinha de Frango c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/08/18095027/IMG_4140-1.png', category: 'Grande', description: 'Massa macia e levemente temperada, com recheio de frango desfiado, temperos especiais e requeijão cremoso. INGREDIENTES: farinha de trigo enriquecida, frango, requeijão, leite integral, farinha de rosca, flocos de batata, margarina, amido modificado, óleo de soja, óleo de algodão, sal e especiarias.' },
  { id: 'g5', name: 'Kibe com Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/18101319/IMG_4165.png', category: 'Grande', description: 'Massa deliciosamente temperada com carne de alta qualidade e recheio de requeijão cremoso.' },
  { id: 'g6', name: 'Quiche de Alho-Poró', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/18103323/IMG_5221-1.png', category: 'Grande', description: 'Massa leve e crocante, com recheio temperado de alho-poró em corte finos e creme suave. INGREDIENTES: creme de leite, farinha de trigo enriquecida, alho poró, margarina, ovo pasteurizado, queijo parmesão, azeite, sal e especiarias.' },
  { id: 'g7', name: 'Quiche de Camarão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18153117/IMG_5225.png', category: 'Grande', description: 'Experimente a sofisticação da nossa quiche de camarão. Viva uma experiência gourmet que vai conquistar os paladares mais exigentes.' },
  { id: 'g8', name: 'Quiche de Frango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18154003/IMG_5222.png', category: 'Grande', description: 'Massa crocante, recheio cremoso de frango suculento e temperos aromáticos. Saboreie essa combinação perfeita de texturas e sabores.' },
  { id: 'g9', name: 'Quiche 4 Queijos', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18154621/IMG_5220-1.png', category: 'Grande', description: 'Quatro vezes deliciosa e infinitamente irresistível. Massa leve e crocante, com recheio de queijo muçarela, provolone, gorgonzola, parmesão, e um creme suave a base de creme de leite.' },
  { id: 'g10', name: 'Quiche Brócolis c/ Bacon', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18152813/IMG_5228.png', category: 'Grande', description: 'Aproveite a combinação perfeita de sabores na nossa quiche de brócolis com bacon. Cada mordida é uma explosão de texturas e sabores que vão encantar seu paladar. ' },

  // MINIS
  { id: 'm1', name: 'Mini Bolinha de Queijo', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/25112522/bolinha_requeijao_615x500px-min-1-e1637350892502.png', category: 'Mini', description: 'Massa macia e levemente temperada, com recheio de queijo muçarela.' },
  { id: 'm2', name: 'Mini Coxinha Frango c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/25112521/mini_coxinha_frango_com_requeijao_615x500px-min-1-e1637353545512.png', category: 'Mini', description: 'Massa macia e levemente temperada, recheio de frango desfiado com temperos especiais e requeijão cremoso.' },
  { id: 'm3', name: 'Mini Coxinha de Frango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/25112502/mini_coxinha_615x500px-min-e1637686352827.png', category: 'Mini', description: 'Massa macia e levemente temperada, recheio de frango desfiado com temperos especiais.' },
  { id: 'm4', name: 'Mini Coxinha de Carne c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/08/31101638/CoxinhaDeCarneRequeijao_site.png', category: 'Mini', description: 'Massa macia e levemente temperada, recheio de carne moída com temperos especiais e requeijão cremoso.' },
  { id: 'm5', name: 'Mini Pastel Frango c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/18101902/IMG_4457.png', category: 'Mini', description: 'Massa assada, recheio de frango desfiado com temperos especiais e requeijão cremoso.' },
  { id: 'm6', name: 'Mini Travesseirinho Presunto e Queijo', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/12/30163541/mini-travesseiro-de-presunto-e-queijo_destaque.png', category: 'Mini', description: 'Massa macia e levemente temperada, com recheio de presunto e queijo muçarela.' },
  { id: 'm7', name: 'Mini Kibe com Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18112446/IMG_1992-1.png', category: 'Mini', description: 'Explore uma explosão de sabores com nosso Mini Kibe de Requeijão! Feito com uma suculenta massa à base de carne bovina e trigo para kibe, este petisco deliciosamente crocante tem um irresistível toque de hortelã com recheio de requeijão cremoso.' },
  { id: 'm8', name: 'Mini Kibe Tradicional', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/18101628/IMG_4566-1.png', category: 'Mini', description: 'Massa deliciosamente temperada com carne de alta qualidade. INGREDIENTES: trigo para kibe, carne bovina, cebola, hortelã, alho, óleo de algodão, sal e especiarias.' },
]

// ==========================================
// CONFIGURAÇÃO GERAL
// ==========================================
const categories = [
  { id: 'bolos', label: 'Bolos', image: '/icone-bolos.png', color: 'bg-[#fff1dc]' },
  { id: 'doces', label: 'Doces', image: '/icone-doces.png', color: 'bg-[#fbe7e6]' },
  { id: 'salgados', label: 'Salgados', image: '/icone-salgados.png', color: 'bg-[#f8ecd8]' },
  { id: 'bebidas', label: 'Bebidas', image: '/icone-bebidas.png', color: 'bg-[#e9f0e8]' },
] as const

const menus = {
  bolos: { title: 'Cardápio de Bolos', pages: pagesBolos, eyebrow: 'Feitos para celebrar', icon: CakeSlice },
  bebidas: { title: 'Cardápio de Bebidas', pages: pagesBebidas, eyebrow: 'Para acompanhar seu momento', icon: Coffee },
} as const

type CategoryId = 'bolos' | 'doces' | 'salgados' | 'bebidas'

// ==========================================
// COMPONENTES DE TELA
// ==========================================
function Brand() {
  return (
    <div className="flex flex-col items-center gap-2" aria-label="Sodiê Doces">
      <img src="/logo-sodie.png" alt="Sodiê Doces" className="w-80 h-auto object-contain" />
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
        <div className="mt-10 grid w-full grid-cols-2 gap-4">
          {categories.map(({ id, label, image: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onChoose(id)}
              className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl bg-white p-5 text-[#4a2e1b] shadow-[0_8px_25px_-12px_rgba(80,45,20,0.42)] ring-1 ring-[#e9ddd1] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_-14px_rgba(80,45,20,0.55)] active:scale-95"
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

// NOVA TELA DE GALERIA UNIFICADA (DOCES E SALGADOS)
function GalleryViewer({ 
  title, 
  filterList, 
  items, 
  onBack 
}: { 
  title: string, 
  filterList: string[], 
  items: any[], 
  onBack: () => void 
}) {
  const [activeCat, setActiveCat] = useState('Todos')
  const [selectedItem, setSelectedItem] = useState<any | null>(null)
  
  const filteredItems = (filterList.length === 0 || activeCat === 'Todos') 
    ? items 
    : items.filter(d => d.category === activeCat)

  return (
    <main className="min-h-dvh w-full bg-[#f7f1eb] flex flex-col pb-12 relative">
      <header className="relative bg-white shadow-sm py-8 px-4 flex flex-col items-center">
        <button
          type="button"
          onClick={onBack}
          className="absolute left-4 top-4 z-50 flex size-12 items-center justify-center rounded-full bg-[#f7f1eb] text-[#4a2e1b] shadow-sm transition hover:bg-[#e9ddd1] active:scale-95"
        >
          <ArrowLeft size={24} aria-hidden="true" />
        </button>
        
        <h2 className="text-[#4a2e1b] font-serif text-2xl font-bold mb-6 mt-2 tracking-[-0.03em]">{title}</h2>
        
        {filterList.length > 0 && (
          <div className="flex flex-wrap justify-center max-w-4xl border border-[#4a2e1b] rounded-lg overflow-hidden shadow-sm">
            {filterList.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2.5 text-sm font-semibold transition-colors border-r border-[#4a2e1b] last:border-r-0
                  ${activeCat === cat ? 'bg-[#4a2e1b] text-white' : 'bg-white text-[#4a2e1b] hover:bg-[#f4ebe1]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </header>

      <div className="px-6 mt-10 max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <button 
            key={item.id} 
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between text-center shadow-sm border border-[#e9ddd1] transition hover:-translate-y-1 hover:shadow-md cursor-pointer w-full"
          >
            <img src={item.image} className="w-32 h-32 object-contain mb-4 drop-shadow-sm" alt={item.name} />
            <h3 className="text-[#4a2e1b] font-bold text-[1.1rem] leading-tight">{item.name}</h3>
          </button>
        ))}
      </div>

      {/* JANELA FLUTUANTE (MODAL DE DESCRIÇÃO) */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-5 transition-opacity">
          <div className="relative w-full max-w-sm bg-white rounded-[2rem] p-8 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-[#f7f1eb] text-[#4a2e1b] transition hover:bg-[#e9ddd1]"
              aria-label="Fechar descrição"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <img src={selectedItem.image} alt={selectedItem.name} className="w-48 h-48 object-contain drop-shadow-md mb-4" />
            <span className="inline-block mb-3 px-3 py-1 bg-[#fff1dc] text-[#bd7040] text-[10px] font-bold uppercase tracking-widest rounded-full">
              {selectedItem.category}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#4a2e1b] mb-3 leading-tight">{selectedItem.name}</h3>
            <p className="text-[#9c7d68] text-sm leading-relaxed">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </main>
  )
}

// TELA CHEIA (PARA BOLOS E BEBIDAS)
function MenuViewer({ category, onBack }: { category: 'bolos' | 'bebidas'; onBack: () => void }) {
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
      <button
        type="button"
        onClick={onBack}
        className="absolute left-4 top-4 z-50 flex size-12 items-center justify-center rounded-full bg-white/90 text-[#4a2e1b] shadow-md backdrop-blur-sm transition hover:bg-white active:scale-95"
      >
        <ArrowLeft size={24} aria-hidden="true" />
      </button>

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

        <button
          type="button"
          onClick={() => move(-1)}
          className="absolute left-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#4a2e1b] shadow-md backdrop-blur-sm transition hover:bg-white active:scale-90"
        >
          <ArrowLeft size={24} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => move(1)}
          className="absolute right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#4a2e1b] shadow-md backdrop-blur-sm transition hover:bg-white active:scale-90"
        >
          <ArrowRight size={24} aria-hidden="true" />
        </button>
      </section>

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

// ==========================================
// APP PRINCIPAL (CONTROLE DE ROTAS)
// ==========================================
export default function MenuApp() {
  const [category, setCategory] = useState<CategoryId | null>(null)
  
  if (!category) return <Home onChoose={setCategory} />
  
  if (category === 'doces') return <GalleryViewer title="Selecione a categoria" filterList={docesCategories} items={docesList} onBack={() => setCategory(null)} />
  if (category === 'salgados') return <GalleryViewer title="Nossos Salgados" filterList={salgadosCategories} items={salgadosList} onBack={() => setCategory(null)} />
  
  return <MenuViewer category={category} onBack={() => setCategory(null)} />
}