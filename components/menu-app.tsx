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
// DADOS DA GALERIA DE BOLOS (COMPLETO)
// ==========================================
const bolosCategories = ['Todos', 'Chocolate', 'Branco', 'Zero Açúcar', 'Caseiro', 'De Pote']
const bolosIngredients = ['Abacaxi', 'Ameixa', 'Amendoim', 'Avelã', 'Baba de Moça', 'Banana', 'Brigadeiro', 'Café', 'Caramelo', 'Castanha-de-Caju', 'Cenoura', 'Cereja', 'Chantilly', 'Chocolate ao Leite', 'Chocolate Branco', 'Chocolate Meio Amargo', 'Coco', 'Cream Cheese', 'Crocante', 'Damasco', 'Doce de Leite', 'Erva Doce', 'Goiabada', 'Kiwi', 'Laranja', 'Leite Condensado', 'Leite Ninho®', 'Limão', 'Manga', 'Maracujá', 'Marshmallow', 'Milho', 'Morango', 'Mousse', 'Nozes', 'Nutella®', 'Paçoca', 'Pêssego', 'Suspiro', 'Uva']

const bolosList = [
  // CHOCOLATE
  { id: 'b01', name: 'À Francesa', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/09092703/01_a_francesa_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Brigadeiro', 'Chocolate ao Leite', 'Coco', 'Mousse'] },
  { id: 'b02', name: 'Aerado', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/02_aerado_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Cereja', 'Chocolate ao Leite', 'Chocolate Branco', 'Mousse'] },
  { id: 'b03', name: 'Alpes Suíços', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111000/03_alpes_suicos_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Leite Ninho®', 'Mousse', 'Suspiro'] },
  { id: 'b05', name: 'Brigadeiro com Baba de Moça', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162530/05_brigadeiro_c_baba_de_moca_fatia_235x235.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Baba de Moça', 'Brigadeiro', 'Chocolate ao Leite'] },
  { id: 'b06', name: 'Brigadeiro II', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111004/06_brigadeiro_ii_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Brigadeiro', 'Chocolate ao Leite'] },
  { id: 'b07', name: 'Brigadeiro Tradicional', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111005/07_brigadeiro_tradicional_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Brigadeiro', 'Chocolate ao Leite'] },
  { id: 'b08', name: 'Chifon', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111006/08_chifon_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Mousse'] },
  { id: 'b11', name: 'Chocolate com Maracujá', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095950/11.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Maracujá', 'Mousse'] },
  { id: 'b12', name: 'Chocomix', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111009/12_chocomix_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Mousse'] },
  { id: 'b13', name: 'Chocomix com Morangos', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111010/13_chocomix_c-morangos_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Morango', 'Mousse'] },
  { id: 'b14', name: 'Delícia de Coco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111011/14_delicia-de-coco_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Coco'] },
  { id: 'b15', name: 'Delícia de Coco II', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111012/15_delicia-de-coco_ii_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Coco', 'Mousse'] },
  { id: 'b16', name: 'Delícia de Coco com Morangos', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111013/16_delicia-de-coco_c-morangos_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Coco', 'Morango', 'Mousse'] },
  { id: 'b17', name: 'Delícia de Leite', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111014/17_delicia-de-leite_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Leite Ninho®', 'Mousse'] },
  { id: 'b18', name: 'Delícia de Nozes', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111015/18_delicia-de-nozes_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Doce de Leite', 'Mousse', 'Nozes'] },
  { id: 'b19', name: 'Dois Amores', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111016/19_dois_amores_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Coco'] },
  { id: 'b20', name: 'Floresta Negra', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/08155319/20-florestanegrofatiasite_imagem-em-destaque.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Cereja', 'Chocolate ao Leite', 'Mousse'] },
  { id: 'b22', name: 'Magia', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161225/22_fatia_bolo_magia_235x235px.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Mousse'] },
  { id: 'b23', name: 'Sodiê', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111020/23_sodie_pedaco_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Morango', 'Mousse'] },
  { id: 'b24', name: 'Napolitano', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111021/24_napolitano_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Morango', 'Mousse'] },
  { id: 'b25', name: 'Paçoquinha', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111022/25_pacoquinha_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Amendoim', 'Chocolate ao Leite', 'Mousse', 'Paçoca'] },
  { id: 'b26', name: 'Trufado', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111023/26_trufado_pedaco_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Mousse'] },
  { id: 'b27', name: 'Trufado com Cereja', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163148/27_trufado_c_cereja_fatia_235x235.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Cereja', 'Chocolate ao Leite', 'Mousse'] },
  { id: 'b28', name: 'Trufado com Ganache de Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03163946/28_trufado_c_ganache_de_limao_235x235.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Limão', 'Mousse'] },
  { id: 'b29', name: 'Trufado com Gotas de Chocolate', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111024/29_trufado_c-gotas-chocolate_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Cereja', 'Chocolate ao Leite', 'Mousse'] },
  { id: 'b31', name: 'Trufado Preto e Branco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111025/31_trufado_preto_e_branco_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Cereja', 'Chocolate ao Leite', 'Chocolate Branco'] },
  { id: 'b32', name: 'Trufado Preto e Branco com Morangos', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111026/32_trufado_preto_e_branco_c-morangos_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Morango', 'Mousse'] },
  { id: 'b80', name: 'Brigadeiro com Avelã', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/08174124/80_brigadeiro_com_creme_de_avela_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Avelã', 'Brigadeiro', 'Castanha-de-Caju', 'Chocolate ao Leite', 'Nutella®'] },
  { id: 'b83', name: 'Delícia de Leite Trufado', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111029/83_delicia-de-leite_trufado_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Cereja', 'Chocolate ao Leite', 'Leite Ninho®', 'Mousse'] },
  { id: 'b88', name: 'Aerado II', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111030/88_aerado_ii_suflair_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Chocolate Meio Amargo', 'Mousse'] },
  { id: 'b89', name: 'Delícia de Chocolate', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Cereja', 'Chocolate ao Leite', 'Chocolate Meio Amargo'] },
  { id: 'b92', name: 'Delícia de Leite com Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111031/92_delicia-de-leite_c-creme-de-avela_i_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Avelã', 'Castanha-de-Caju', 'Chocolate ao Leite', 'Leite Ninho®', 'Mousse', 'Nutella®'] },
  { id: 'b95', name: 'Delícia de Leite com Brigadeiro e Morangos', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111032/95_delicia-de-leite_c-brigadeiro_e_morangos_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Leite Ninho®', 'Morango', 'Mousse'] },
  { id: 'b96', name: 'Morango Trufado com Leite Condensado', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111033/96_morango_trufado_c-leite_condensado_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Leite Condensado', 'Morango', 'Mousse'] },
  { id: 'b98', name: 'Chocomoça®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03162818/98_chocomoca_fatia_235x235.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Leite Condensado', 'Mousse'] },
  { id: 'b101', name: 'Choc Rosa', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111035/101_choc_rosa_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Morango', 'Mousse'] },
  { id: 'b103', name: 'Meio Amargo', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111036/103_meio_amargo_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate Meio Amargo'] },
  { id: 'b105', name: 'Chocotrufas com Morangos', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111037/105_chocotrufas_c-morangos_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Morango', 'Mousse'] },
  { id: 'b113', name: 'Alpino®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/13093015/alpinonovofatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Meio Amargo', 'Mousse'] },
  { id: 'b118', name: 'Bolo Feito com KitKat®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/28110350/118_kit_kat_bolo-chocolate_fatia.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Mousse'] },
  { id: 'b127', name: 'Brigadeirinho', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/10/04171138/22_fatia_bolo_brigadeirinho_235x235px.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Brigadeiro', 'Mousse'] },
  { id: 'b130', name: 'Red Velvet (Perfil Brasileiro)', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/29161227/122_fatia_bolo_de_red_velvet_brasil_235x235px.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Cream Cheese', 'Leite Condensado', 'Mousse'] },
  { id: 'b138', name: 'Bolo Vegano', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/05/11094607/21351_fotos_bolos_bolo-vegano_inteiro_235x235px.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Coco', 'Nozes'] },
  { id: 'b139', name: 'Baileys™ Trufado de Chocolate', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/06/02172232/fatia_235x235px.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco'] },
  { id: 'b148', name: 'Trufado com Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151441/148_Bolo_Trufado_com_Nutella_FATIA_235x235px-1.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Avelã', 'Chocolate ao Leite', 'Nutella®'] },
  { id: 'b149', name: 'Morango com Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151442/149_Bolo_Morango_com_Nutella_FATIA_235x235px-1.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Avelã', 'Chocolate ao Leite', 'Morango', 'Nutella®'] },
  { id: 'b150', name: 'Delícia de Leite Duo com Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/28151443/150_Bolo_Delicia_de_Leite_com_Nutella_FATIA_235x235px-1.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Avelã', 'Chocolate ao Leite', 'Leite Ninho®', 'Nutella®'] },
  { id: 'b178', name: 'Delícia de Leite com Nutella® e Morango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/07/01101728/IMAGEM-EM-DESTAQUE_Delicia-de-Leite-com-Nutella%C2%AE-e-Morango-1.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Morango', 'Mousse', 'Nutella®'] },
  { id: 'b179', name: 'Trufado de Nutella® com Maracujá', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/07/01101550/IMAGEM-EM-DESTAQUE_Trufado-de-Nutella%C2%AE-com-Maracuja.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Leite Ninho®', 'Maracujá', 'Nutella®'] },
  { id: 'b181', name: 'Gourmet de Cenoura com Trufado de Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/07/01102029/IMAGEM-EM-DESTAQUE_Gourmet-de-Cenoura-com-Trufado-de-Nutella%C2%AE.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Cenoura', 'Nutella®'] },
  { id: 'b189', name: 'Doce Feitiço', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/10/24145016/189_Doce-Feitico_fatia_destaque.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Brigadeiro', 'Chocolate ao Leite', 'Chocolate Branco', 'Leite Condensado', 'Mousse', 'Suspiro'] },
  { id: 'b200', name: 'Bolo Matilda', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13135507/fatia-destaque.png', category: 'Chocolate', description: 'Descrição', ingredients: ['Chocolate ao Leite'] },

  // BRANCOS
  { id: 'bb35', name: 'Abacaxi', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/13113646/35_abacaxi_fatia_235x235px.png', category: 'Branco', description: 'Descrição', ingredients: ['Abacaxi', 'Mousse'] },
  { id: 'bb36', name: 'Abacaxi com Ameixa', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/36_abacaxi_c-ameixa_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Abacaxi', 'Ameixa', 'Mousse'] },
  { id: 'bb37', name: 'Abacaxi com Coco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/37_abacaxi_coco_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Abacaxi', 'Coco', 'Marshmallow', 'Mousse'] },
  { id: 'bb38', name: 'Alaska', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/38_alaska_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Marshmallow', 'Morango', 'Mousse'] },
  { id: 'bb39', name: 'Alpes Suíços com Morangos', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111107/39_alpes_suicos_c-morangos_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Chocolate Branco', 'Morango', 'Mousse', 'Suspiro'] },
  { id: 'bb40', name: 'Ameixa', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/40_ameixa_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Ameixa', 'Doce de Leite', 'Mousse'] },
  { id: 'bb41', name: 'Baba de Moça', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/03155000/41_baba_de_moca_235x235.png', category: 'Branco', description: 'Descrição', ingredients: ['Baba de Moça', 'Chocolate Branco', 'Mousse'] },
  { id: 'bb42', name: 'Baba de Moça com Doce de Leite', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111108/42_baba-de-moca_c-doce-de-leite_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Baba de Moça', 'Caramelo', 'Doce de Leite', 'Marshmallow'] },
  { id: 'bb43', name: 'Baba de Moça com Nozes', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111109/43_baba-de-moca_c-nozes_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Baba de Moça', 'Doce de Leite', 'Mousse', 'Nozes'] },
  { id: 'bb45', name: 'Bolo da Vovó', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/11133546/imagem-destaque-VOVO-1.png', category: 'Branco', description: 'Descrição', ingredients: ['Caramelo', 'Chocolate ao Leite', 'Doce de Leite', 'Mousse'] },
  { id: 'bb46', name: 'Bolo Gelado de Abacaxi', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161637/46_gelado_de_abacaxi_235x235.png', category: 'Branco', description: 'Descrição', ingredients: ['Abacaxi', 'Chocolate Branco', 'Doce de Leite'] },
  { id: 'bb50', name: 'Brigadeiro com Creme e Morangos', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111112/50_brigadeiro_c-creme_e_morangos_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Brigadeiro', 'Chantilly', 'Chocolate ao Leite', 'Morango'] },
  { id: 'bb52', name: 'Crocante', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/13111832/52_fatia_bolo_crocante_235x235px-1.png', category: 'Branco', description: 'Descrição', ingredients: ['Amendoim', 'Castanha-de-Caju', 'Crocante', 'Doce de Leite', 'Marshmallow'] },
  { id: 'bb53', name: 'Delícia de Abacaxi', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03155954/53_delicia_de_abacaxi_235x235.png', category: 'Branco', description: 'Descrição', ingredients: ['Abacaxi', 'Coco', 'Doce de Leite', 'Marshmallow'] },
  { id: 'bb54', name: 'Delícia de Leite II', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111114/54_delicia-de-leite_ii_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Chocolate Branco', 'Leite Ninho®', 'Mousse'] },
  { id: 'bb55', name: 'Delícia de Morango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/55_delicia-de-morango_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Chocolate Branco', 'Coco', 'Morango', 'Mousse'] },
  { id: 'bb56', name: 'Ganache de Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111115/56_ganache-de-limao_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Limão', 'Marshmallow'] },
  { id: 'bb58', name: 'Maracujá', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/08163416/20412_58_maracuja_fatia_235x235-1.png', category: 'Branco', description: 'Descrição', ingredients: ['Maracujá', 'Mousse'] },
  { id: 'bb59', name: 'Morango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/59.png', category: 'Branco', description: 'Descrição', ingredients: ['Chocolate Branco', 'Morango', 'Mousse'] },
  { id: 'bb60', name: 'Morango com Crocante', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161759/60_morango_c_crocante_235x235.png', category: 'Branco', description: 'Descrição', ingredients: ['Amendoim', 'Crocante', 'Doce de Leite', 'Marshmallow', 'Morango'] },
  { id: 'bb61', name: 'Morango com Leite Condensado', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111117/61_morango_c-leite_condensado_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Leite Condensado', 'Morango', 'Mousse'] },
  { id: 'bb62', name: 'Nozes', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/62_nozes_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Doce de Leite', 'Marshmallow', 'Nozes'] },
  { id: 'bb63', name: 'Olho de Sogra', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111118/63_olho-de-sogra_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Ameixa', 'Coco', 'Doce de Leite', 'Marshmallow'] },
  { id: 'bb65', name: 'Salada de Frutas', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111119/65_salada-de-frutas_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Abacaxi', 'Kiwi', 'Morango', 'Mousse', 'Pêssego'] },
  { id: 'bb67', name: 'Trufas Brancas com Nozes', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111121/67_trufas_brancas_c-nozes_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Chocolate Branco', 'Mousse', 'Nozes'] },
  { id: 'bb68', name: 'Trufas Brancas com Nozes e Damasco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111122/68_trufas_brancas_c-nozes_e_damasco_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Chantilly', 'Chocolate Branco', 'Damasco', 'Mousse', 'Nozes'] },
  { id: 'bb79', name: 'Abacaxi com Leite Condensado', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03154819/79_abacaxi_c_leite_condensado_235x235.png', category: 'Branco', description: 'Descrição', ingredients: ['Abacaxi', 'Leite Condensado', 'Mousse'] },
  { id: 'bb91', name: 'Delícia de Leite com Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161313/91_delicia_de_leite_c_limao_235x235.png', category: 'Branco', description: 'Descrição', ingredients: ['Leite Ninho®', 'Limão', 'Mousse'] },
  { id: 'bb93', name: 'Delícia de Leite com Avelã ll', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095952/93.png', category: 'Branco', description: 'Descrição', ingredients: ['Avelã', 'Castanha-de-Caju', 'Chocolate Branco', 'Leite Ninho®', 'Mousse', 'Nutella®'] },
  { id: 'bb94', name: 'Delícia de Café', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/03161012/94_delicia_de_cafe_235x235.png', category: 'Branco', description: 'Descrição', ingredients: ['Brigadeiro', 'Café', 'Chocolate ao Leite', 'Leite Ninho®', 'Mousse'] },
  { id: 'bb100', name: 'Sofia Rosa', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25095953/100.png', category: 'Branco', description: 'Descrição', ingredients: ['Chocolate Branco', 'Morango', 'Mousse'] },
  { id: 'bb102', name: 'Dom Sodiê', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111125/102_dom_sodie_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Amendoim', 'Baba de Moça', 'Castanha-de-Caju', 'Crocante', 'Damasco', 'Marshmallow', 'Suspiro'] },
  { id: 'bb104', name: 'Frutas Vermelhas', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/104_frutas_vermelhas_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Chocolate Branco', 'Morango', 'Mousse'] },
  { id: 'bb114', name: 'Delícia de Leite com Nozes', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111126/114_delicia-de-leite_c-nozes_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Chocolate Branco', 'Doce de Leite', 'Leite Ninho®', 'Mousse', 'Nozes'] },
  { id: 'bb119', name: 'Bolo Moça® Churros', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111127/119_bolo-de-churros_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Crocante', 'Mousse'] },
  { id: 'bb123', name: 'Bolo Moça® Pudim', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/123_bolo-de-pudim_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Crocante', 'Leite Condensado', 'Mousse'] },
  { id: 'bb125', name: 'Natale', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/12/01094413/natale_destaque.png', category: 'Branco', description: 'Descrição', ingredients: ['Laranja', 'Nozes'] },
  { id: 'bb131', name: 'Bolo Moça® Romeu', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111128/131_moca_romeu_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Cream Cheese', 'Goiabada', 'Leite Condensado'] },
  { id: 'bb134', name: 'Bolo Massa Folhada Creme e Doce de Leite', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111129/134_folhado_creme_e_doce-de-leite_bolo-branco_fatia.png', category: 'Branco', description: 'Descrição', ingredients: ['Doce de Leite'] },
  { id: 'bb163', name: 'Bolo Pistache', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235.png', category: 'Branco', description: 'Descrição', ingredients: ['Pistache'] },
  { id: 'bb187', name: 'Supremo de Morango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/09/01102831/IMAGEM-EM-DESTAQUE_Delicia-de-Leite-Ninho%C2%AE-com-Creme-e-Morangos.png', category: 'Branco', description: 'Descrição', ingredients: ['Morango', 'Mousse'] },
  { id: 'bb190', name: 'Delícia de Leite com Frutas Vermelhas', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/04/27114907/imagememdestaque_deliciacomfrutasvermelhas.png', category: 'Branco', description: 'Descrição', ingredients: ['Cereja', 'Leite Condensado', 'Leite Ninho®', 'Morango'] },
  { id: 'bb191', name: 'Bolo Pudim', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/05/26140857/pudimdestaque.png', category: 'Branco', description: 'Descrição', ingredients: ['Doce de Leite'] },
  { id: 'bb195', name: 'Doce Celebração', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/08/31093103/doceceleb_destaque.png', category: 'Branco', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Doce de Leite', 'Morango', 'Mousse'] },
  { id: 'bb196', name: 'Morango Cravejado', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/09/13120425/morango-cravejado-destaque.png', category: 'Branco', description: 'Descrição', ingredients: ['Caramelo', 'Leite Condensado', 'Morango', 'Mousse'] },

  // ZERO AÇÚCAR
  { id: 'bz69', name: 'Abacaxi com Coco Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110319/69_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Abacaxi', 'Chocolate Branco', 'Coco', 'Mousse'] },
  { id: 'bz70', name: 'Aerado Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110645/70_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Mousse'] },
  { id: 'bz71', name: 'Alpes Suíços Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102518/71_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate ao Leite'] },
  { id: 'bz73', name: 'Morango Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01102645/74_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate Branco', 'Morango', 'Mousse'] },
  { id: 'bz74', name: 'Maracujá Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110359/73_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Maracujá', 'Mousse'] },
  { id: 'bz75', name: 'Salada de Frutas Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103304/75_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Abacaxi', 'Kiwi', 'Morango', 'Mousse', 'Pêssego', 'Uva'] },
  { id: 'bz77', name: 'Trufado Preto e Branco Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103638/77_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco'] },
  { id: 'bz78', name: 'Trufas Brancas com Nozes e Damasco Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110433/78_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Damasco', 'Mousse', 'Nozes'] },
  { id: 'bz128', name: 'Delícia de Leite II Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate Branco', 'Leite Ninho®'] },
  { id: 'bz129', name: 'Chifon Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate ao Leite'] },
  { id: 'bz146', name: 'Trufado de Chocolate Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101200/146_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate ao Leite'] },
  { id: 'bz147', name: 'Trufado de Chocolate com Morango Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101339/147_235px.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Morango'] },
  { id: 'bz151', name: 'Brigadeiro Tradicional Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Brigadeiro', 'Chocolate ao Leite'] },
  { id: 'bz152', name: 'Brigadeiro Branco com Morangos Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Brigadeiro', 'Morango', 'Mousse'] },
  { id: 'bz172', name: 'Delícia de Leite com Abacaxi Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/01/06162713/DeliciadeLeitecomAbacaxi_ZeroAcucar_Fatia_Transparente.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Abacaxi'] },
  { id: 'bz183', name: 'À Francesa Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/09/01102247/IMAGEM-EM-DESTAQUE_A-Francesa-Zero-Acucar.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: [] },
  { id: 'bz184', name: 'Brigadeiro II Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/09/01102415/IMAGEM-EM-DESTAQUE_Brigadeiro-II-Zero-Acucar.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: [] },
  { id: 'bz185', name: 'Delícia de Morango Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/09/01102710/IMAGEM-EM-DESTAQUE_Delicia-de-Morango-Zero-Acucar.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: [] },
  { id: 'bz186', name: 'Delícia de Leite com Morango Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/09/01102545/IMAGEM-EM-DESTAQUE_Delicia-de-Leite-com-Morango-Zero-Acucar.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: [] },
  { id: 'bz829', name: 'Cenoura Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/10/01091018/caseirozeroacucar_cenouro-sem.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Cenoura'] },
  { id: 'bz830', name: 'Cenoura com Cobertura de Brigadeiro Zero', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/10/01100026/IMAGEM-EM-DESTAQUE_cenoura-com-cobertura.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Cenoura', 'Chocolate ao Leite'] },
  { id: 'bz831', name: 'Chocolate Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/10/01092534/IMAGEM-EM-DESTAQUE_chocolatezerosemcobertura.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate ao Leite'] },
  { id: 'bz832', name: 'Chocolate com Cobertura de Brigadeiro Zero', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/10/01100206/IMAGEM-EM-DESTAQUE_chococomcoberturazero.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Chocolate ao Leite'] },
  { id: 'bz833', name: 'Maçã com Nozes e Canela Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/10/01100342/IMAGEM-EM-DESTAQUE_zero_caseiro_macacomnozes.png', category: 'Zero Açúcar', description: 'Descrição', ingredients: ['Nozes'] },

  // CASEIROS
  { id: 'bc800', name: 'Banana', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104641/800-Bolo-de-Banana.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Banana'] },
  { id: 'bc801', name: 'Abacaxi', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/801-Bolo-de-Abacaxi.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Abacaxi'] },
  { id: 'bc802', name: 'Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104642/802-Bolo-de-Limao.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Limão'] },
  { id: 'bc804', name: 'Maracujá', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/03152624/804_bolo_caseiro_maracuja_235x235.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Maracujá'] },
  { id: 'bc806', name: 'Chocolate', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/806-Bolo-de-Chocolate.png', category: 'Caseiro', description: 'Descrição', ingredients: [] },
  { id: 'bc808', name: 'Fubá Simples', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104643/808-Bolo-de-Fuba-Simples.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Fubá'] },
  { id: 'bc809', name: 'Fubá com Erva-Doce', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104644/809-Bolo-de-Fuba-com-Erva-Doce.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Erva Doce', 'Fubá'] },
  { id: 'bc810', name: 'Fubá com Goiabada', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/810-Bolo-de-Fuba-com-Goiabada.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Fubá', 'Goiabada'] },
  { id: 'bc811', name: 'Cenoura', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104645/811-Bolo-de-Cenoura.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Cenoura'] },
  { id: 'bc813', name: 'Laranja', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/813-Bolo-de-Laranja.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Laranja'] },
  { id: 'bc815', name: 'Milho', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104646/815-Bolo-de-Milho.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Milho'] },
  { id: 'bc816', name: 'Toalha Felpuda', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/816-Bolo-Toalha-Felpuda.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Coco'] },
  { id: 'bc818', name: 'Formigueiro', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104647/818-Bolo-Formigueiro.png', category: 'Caseiro', description: 'Descrição', ingredients: [] },
  { id: 'bc819', name: 'Bolo Vulcão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/09104405/819-Bolo-Vulcao.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Goiabada', 'Leite Ninho®'] },
  { id: 'bc822', name: 'Bolo Caseiro de Cenoura com Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Avelã', 'Cenoura', 'Nutella®'] },
  { id: 'bc823', name: 'Bolo Caseiro de Chocolate com Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/823_bolo_caseiro_chocolate_c_nutella_235x235.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Avelã', 'Chocolate ao Leite', 'Nutella®'] },
  { id: 'bc824', name: 'Caseirinho de Coco com Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Avelã', 'Coco', 'Nutella®'] },
  { id: 'bc825', name: 'Caseirinho de Pão de Mel com Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Avelã', 'Doce de Leite', 'Nutella®'] },
  { id: 'bc826', name: 'Caseirinho Crispy com Nutella®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Avelã', 'Nutella®'] },
  { id: 'bc845', name: 'Bolo Caseiro de Natal', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/12/01140807/bolo-caseiro-de-natal_destque-1.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Cereja'] },
  { id: 'bc898', name: 'Bolo Caseiro de Churros', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/12/18143348/898-Churros_destaque.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Doce de Leite'] },
  { id: 'bc899', name: 'Bolo Caseiro de Paçoca', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/12/18144126/899-Pacoca_destaque.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Amendoim', 'Paçoca'] },
  { id: 'bc916', name: 'Caseiro Premium Ninho com Frutas Vermelhas', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/01/05115503/Destaque_Caseiro-Premium-Ninho-com-Frutas-Vermelhas.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Brigadeiro', 'Leite Ninho®'] },
  { id: 'bc974', name: 'Crunch Cake Cenoura com Brigadeiro e Nutella', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/11/11092411/crunchemdestaque.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Brigadeiro', 'Nutella®'] },
  { id: 'bc975', name: 'Crunch Cake Chocolate com Brigadeiro e Nutella', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/11/11092411/crunchemdestaque.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Brigadeiro', 'Chocolate ao Leite', 'Nutella®'] },
  { id: 'bc976', name: 'Caseiro Premium Delícia de Leite com Nutella', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/01/05115858/Destaque_Caseiro-Premium-Delicia-de-Leite-com-Nutella.png', category: 'Caseiro', description: 'Descrição', ingredients: ['Leite Ninho®', 'Nutella®'] },

  // DE POTE
  { id: 'bp1', name: 'Bolo de Pote Proteico de Leite em Pó', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112253/DElicia-de-Leite-com-Whey_Destaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Chocolate Branco', 'Leite Ninho®', 'Mousse'] },
  { id: 'bp2', name: 'Bolo de Pote Proteico de Chocolate', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112255/Chocolate-com-Whey_Destaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Mousse'] },
  { id: 'bp3', name: 'Bolo de Pote Cocada Com Abacaxi', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112301/Cocada-com-Abacaxi_Destaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Abacaxi', 'Coco'] },
  { id: 'bp4', name: 'Bolo de Pote Delícia de Leite com Nutella', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112305/Delicia-de-Leite-com-Nutella-Destaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Brigadeiro', 'Leite Ninho®', 'Nutella®'] },
  { id: 'bp5', name: 'Bolo de Pote Brigadeiro', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112309/brigadeiro_destaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Brigadeiro', 'Chocolate ao Leite'] },
  { id: 'bp6', name: 'Bolo de Pote Cenoura com Brigadeiro', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112313/Cenoura-com-Brigadeiro_destaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Brigadeiro', 'Cenoura', 'Chocolate ao Leite'] },
  { id: 'bp7', name: 'Bolo de Pote Brigadeiro Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112317/brigadeiro-zero_destque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Brigadeiro', 'Chocolate ao Leite', 'Mousse'] },
  { id: 'bp8', name: 'Bolo de Pote Morango com Leite Condensado', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112321/morango-com-leite-condesando_destaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Leite Condensado', 'Morango'] },
  { id: 'bp9', name: 'Bolo de Pote Cocada com Abacaxi Zero', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112324/cocada-com-abacaxi-Zero_destaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Abacaxi', 'Coco'] },
  { id: 'bp10', name: 'Bolo de Pote Trufado Preto e Branco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112329/trufado-preto-e-branco-destaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco'] },
  { id: 'bp11', name: 'Bolo de Pote Aerado', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/10/13112333/aeradodestaque.png', category: 'De Pote', description: 'Descrição', ingredients: ['Chocolate ao Leite', 'Chocolate Branco', 'Mousse'] },
]

// ==========================================
// DADOS DA TELA DE DOCES COM DESCRIÇÕES
// ==========================================
const docesCategories = ['Todos', 'Tradicionais', 'Finos', 'Belgas', 'Bombom', 'Zero Açúcar', 'NUTELLA®']
const docesIngredients = ['Amendoim', 'Avelã', 'Brigadeiro', 'Cereja', 'Chocolate ao Leite', 'Chocolate Branco', 'Coco', 'Leite Condensado', 'Limão', 'Maracujá', 'Morango', 'Nozes', 'Nutella®']

const docesList = [
  // TRADICIONAIS
  { id: 't1', name: 'Beijinho', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110736/beijinho_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, coco seco, creme de leite, margarina sem sal, glucose de milho.', ingredients: ['Coco', 'Leite Condensado'] },
  { id: 't2', name: 'Brigadeiro', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110738/brigadeiro_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, creme de leite, cacau em pó, margarina sem sal, glucose de milho.', ingredients: ['Brigadeiro', 'Chocolate ao Leite'] },
  { id: 't3', name: 'Cajuzinho', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110741/cajuzinho_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, amendoim, creme de leite, margarina sem sal, açúcar refinado, glucose de milho.', ingredients: ['Amendoim', 'Leite Condensado'] },
  { id: 't4', name: 'Casadinho', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110737/bem-casado_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, creme de leite, cacau em pó, margarina sem sal, açúcar refinado, glucose de milho.', ingredients: ['Chocolate Branco', 'Chocolate ao Leite'] },
  { id: 't5', name: 'Olho de Sogra', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110744/olho_de_sogro_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, coco seco, creme de leite, margarina sem sal, açúcar cristal, ameixa, seca, glucose de milho', ingredients: ['Coco', 'Leite Condensado'] },
  { id: 't6', name: 'Brigadeiro de Morango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26110740/brigadeiro_de_morango_246x200px.png', category: 'Tradicionais', description: 'Ingredientes: leite condensado, creme de leite, Nesquik sabor morango, margarina sem sal, glucose de milho, açúcar refinado.', ingredients: ['Morango', 'Leite Condensado'] },

  // FINOS
  { id: 'f1', name: 'Trufinha de Trufado de Chocolate com Cereja', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092101/trufado_c_cereja_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com trufado de chocolate e cereja.', ingredients: ['Cereja', 'Chocolate ao Leite'] },
  { id: 'f2', name: 'Trufinha de Brigadeiro', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092059/brigadeira_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com brigadeiro.', ingredients: ['Brigadeiro', 'Chocolate ao Leite'] },
  { id: 'f3', name: 'Trufinha Branco e Preto', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092102/trufado_preto_branco_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com ganache de chocolate ao leite e chocolate branco.', ingredients: ['Chocolate Branco', 'Chocolate ao Leite'] },
  { id: 'f4', name: 'Trufinha de Leite Ninho® com Avelã', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092100/ninho_c_avela_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com ganache de leite Ninho® e pasta de avelã.', ingredients: ['Avelã'] },
  { id: 'f5', name: 'Trufinha de Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092059/limao_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com mousse de limão.', ingredients: ['Limão', 'Chocolate ao Leite'] },
  { id: 'f6', name: 'Trufinha de Geleia de Pimenta com Abacaxi', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092058/abacaxi_c_geleia_pimenta_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com geleia de pimenta e abacaxi.', ingredients: ['Chocolate ao Leite'] },
  { id: 'f7', name: 'Trufinha de Avelã', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092059/avela_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com pasta de avelã.', ingredients: ['Avelã', 'Chocolate ao Leite'] },
  { id: 'f8', name: 'Trufinha de Trufado Branco com Geleia de Damasco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28112407/trufado_com_damasco_246x200px-1.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com trufas brancas e geleia de damasco.', ingredients: ['Chocolate Branco', 'Chocolate ao Leite'] },
  { id: 'f9', name: 'Trufinha de Maracujá', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/26092100/maracuja_246x200px.png', category: 'Finos', description: 'Caixeta de chocolate ao leite recheada com ganache de maracujá e calda de maracujá.', ingredients: ['Maracujá', 'Chocolate ao Leite'] },
  { id: 'f10', name: 'Camafêu de Nozes Banhado no Chocolate ao Leite', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111431/Camafeu_de_Nozes_no_Chocolate_ao_Leite_246x200px.png', category: 'Finos', description: 'Massa especial de nozes banhada em delicioso chocolate ao leite.', ingredients: ['Nozes', 'Chocolate ao Leite'] },
  { id: 'f11', name: 'Camafêu de Nozes Banhado no Chocolate Branco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28140144/Camafeu_de_Nozes_no_Chocolate_ao_branco_246x200px.png', category: 'Finos', description: 'Massa especial de nozes fondada e banhada em chocolate branco.', ingredients: ['Nozes', 'Chocolate Branco'] },

  // BELGAS
  { id: 'be1', name: 'Brigadeiro Gourmet de Leite Ninho® com Avelã', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145226/ninho-com-avela_246x200px.png', category: 'Belgas', description: 'Brigadeiro gourmet feito com chocolate belga, Leite Ninho® e avelãs.', ingredients: ['Avelã', 'Chocolate Branco'] },
  { id: 'be2', name: 'Brigadeiro Gourmet de Pistache', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145226/pistache_246x200px.png', category: 'Belgas', description: 'Brigadeiro feito com chocolate branco Belga e pistache.', ingredients: ['Chocolate Branco'] },
  { id: 'be3', name: 'Brigadeiro Gourmet de Café', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145224/cafe_246x200px.png', category: 'Belgas', description: 'Brigadeiro feito com chocolate ao leite Belga e café.', ingredients: ['Chocolate ao Leite'] },
  { id: 'be4', name: 'Brigadeiro Gourmet Intenso', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145225/intenso_246x200px.png', category: 'Belgas', description: 'Brigadeiro feito com chocolate amargo Belga e chocolate meio amargo.', ingredients: ['Chocolate ao Leite'] },
  { id: 'be5', name: 'Brigadeiro Gourmet de Frutas Vermelhas', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145225/frutas-vermelhas_246x200px.png', category: 'Belgas', description: 'Brigadeiro feito com chocolate branco Belga, morango, mirtilo, framboesa e cereja.', ingredients: ['Chocolate Branco', 'Morango'] },
  { id: 'be6', name: 'Brigadeiro Gourmet de Churros', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145224/churros_246x200px.png', category: 'Belgas', description: 'Brigadeiro Gourmet feito com chocolate branco Belga e doce de leite. Contém canela em pó.', ingredients: ['Chocolate Branco', 'Leite Condensado'] },
  { id: 'be7', name: 'Brigadeiro Gourmet Ao Leite', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28145227/ao-leite_246x200px.png', category: 'Belgas', description: 'Brigadeiro Gourmet feito com chocolate ao leite Belga.', ingredients: ['Chocolate ao Leite'] },

  // BOMBOM
  { id: 'b1', name: 'Bombom de Brigadeiro com Cereja', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111432/bombom_de_brigadeiro-cereja_246x200px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com brigadeiro e cereja.', ingredients: ['Cereja', 'Chocolate ao Leite', 'Brigadeiro'] },
  { id: 'b2', name: 'Bombom de Brigadeiro', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111445/bombom_de_Brigadeiro_615x500px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com brigadeiro.', ingredients: ['Brigadeiro', 'Chocolate ao Leite'] },
  { id: 'b3', name: 'Bombom de Maracujá', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111430/bombom_de_maracuja_246x200px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com brigadeiro de maracujá.', ingredients: ['Maracujá', 'Chocolate ao Leite'] },
  { id: 'b4', name: 'Bombom de Café', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28140144/bombom_de_cafe_246x200px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com brigadeiro de café e decorado com amêndoa.', ingredients: ['Chocolate ao Leite'] },
  { id: 'b5', name: 'Bombom de Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111429/bombom_de_limao_246x200px.png', category: 'Bombom', description: 'Bombom de chocolate ao leite recheado com brigadeiro de limão.', ingredients: ['Limão', 'Chocolate ao Leite'] },
  { id: 'b6', name: 'Bombom de Coco', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2022/10/28111433/bombom_de_coco_246x200px.png', category: 'Bombom', description: ' Bombom de chocolate ao leite recheado com beijinho.', ingredients: ['Coco', 'Chocolate ao Leite'] },

  // ZERO AÇÚCAR
  { id: 'z1', name: 'Brigadeiro Sabor Morango Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/09/22110154/doce_3_246x200px.png', category: 'Zero Açúcar', description: 'Docinho feito com leite condensado zero açúcar e gelatina sabor morango sem açúcar, finalizado com leite em pó desnatado.', ingredients: ['Morango', 'Leite Condensado'] },
  { id: 'z2', name: 'Beijinho Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/09/29160750/doce_2_246x200px.png', category: 'Zero Açúcar', description: 'Docinho feito com leite condensado zero açúcar e pedacinhos de coco ralado sem açúcar, finalizado com coco seco fino sem açúcar.', ingredients: ['Coco', 'Leite Condensado'] },
  { id: 'z3', name: 'Brigadeiro Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/09/29160748/doce_1_246x200px.png', category: 'Zero Açúcar', description: 'Brigadeiro feito com leite condensado zero açúcar, cacau 100% e finalizado com raspas de chocolate ao leite baixo em açúcares.', ingredients: ['Brigadeiro', 'Chocolate ao Leite'] },

  // NUTELLA
  { id: 'n1', name: 'Brigadeiro Nevado com NUTELLA®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17152129/Brigadeiro-Nevado-com-Nutella_235x235px.png', category: 'NUTELLA®', description: 'Brigadeiro feito e envolvido com leite em pó doce e finalizado com NUTELLA®.', ingredients: ['Nutella®'] },
  { id: 'n2', name: 'Brigadeiro Crispy com NUTELLA®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17152127/Brigadeiro-Crispy_235x235px.png', category: 'NUTELLA®', description: 'Brigadeiro feito com NUTELLA®, recheado de avelã, banhado no chocolate meio amargo com flakes caramelizados e finalizado com riscos de chocolate branco.', ingredients: ['Nutella®', 'Chocolate ao Leite', 'Avelã'] },
  { id: 'n3', name: 'Bolo Bombom com NUTELLA®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17152126/Bolo-Bombom-de-Nutella_235x235px.png', category: 'NUTELLA®', description: 'Bolo de chocolate com NUTELLA® e brigadeiro, banhado no chocolate meio amargo com flakes caramelizados, finalizado com avelã e sal.', ingredients: ['Nutella®', 'Chocolate ao Leite'] },
]

// ==========================================
// DADOS DA GALERIA DE SALGADOS (SEM FILTROS DE CATEGORIA)
// ==========================================
// Array vazio desativa os botões de filtro na tela
const salgadosCategories: string[] = [] 
const salgadosIngredients = ['Alho-Poró', 'Bacon', 'Brócolis', 'Calabresa', 'Camarão', 'Carne', 'Frango', 'Presunto', 'Queijo', 'Requeijão']

const salgadosList = [
  // GRANDES
  { id: 'g1', name: 'Esfiha de Calabresa c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18105538/Esfiha_calabresa_611x497.png', category: 'Grande', description: 'Calabresa + requeijão = sabor de montão. Massa leve, a base de farinha de trigo, leite integral e margarina, recheio de calabresa fatiada, requeijão cremoso e temperos.', ingredients: ['Calabresa', 'Requeijão'] },
  { id: 'g2', name: 'Esfiha de Frango c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/18101219/Esfiha_frango_requeijao_255x207.png', category: 'Grande', description: 'Massa leve, com recheio de frango desfiado, temperos especiais e requeijão cremoso.', ingredients: ['Frango', 'Requeijão'] },
  { id: 'g3', name: 'Esfiha de Carne', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/18101138/Esfiha_carne_611x497-1.png', category: 'Grande', description: 'Massa leve, com recheio de carne e temperos especiais. INGREDIENTES: farinha de trigo enriquecida, carne bovina, leite integral, cebola, tomate, margarina, óleo de soja, gema pasteurizada, sal, açúcar, alho, fermento biológico e especiarias.', ingredients: ['Carne'] },
  { id: 'g4', name: 'Coxinha de Frango c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/08/18095027/IMG_4140-1.png', category: 'Grande', description: 'Massa macia e levemente temperada, com recheio de frango desfiado, temperos especiais e requeijão cremoso. INGREDIENTES: farinha de trigo enriquecida, frango, requeijão, leite integral, farinha de rosca, flocos de batata, margarina, amido modificado, óleo de soja, óleo de algodão, sal e especiarias.', ingredients: ['Frango', 'Requeijão'] },
  { id: 'g5', name: 'Kibe com Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/18101319/IMG_4165.png', category: 'Grande', description: 'Massa deliciosamente temperada com carne de alta qualidade e recheio de requeijão cremoso.', ingredients: ['Carne', 'Requeijão'] },
  { id: 'g6', name: 'Quiche de Alho-Poró', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/18103323/IMG_5221-1.png', category: 'Grande', description: 'Massa leve e crocante, com recheio temperado de alho-poró em corte finos e creme suave. INGREDIENTES: creme de leite, farinha de trigo enriquecida, alho poró, margarina, ovo pasteurizado, queijo parmesão, azeite, sal e especiarias.', ingredients: ['Alho-Poró'] },
  { id: 'g7', name: 'Quiche de Camarão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18153117/IMG_5225.png', category: 'Grande', description: 'Experimente a sofisticação da nossa quiche de camarão. Viva uma experiência gourmet que vai conquistar os paladares mais exigentes.', ingredients: ['Camarão'] },
  { id: 'g8', name: 'Quiche de Frango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18154003/IMG_5222.png', category: 'Grande', description: 'Massa crocante, recheio cremoso de frango suculento e temperos aromáticos. Saboreie essa combinação perfeita de texturas e sabores.', ingredients: ['Frango'] },
  { id: 'g9', name: 'Quiche 4 Queijos', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18154621/IMG_5220-1.png', category: 'Grande', description: 'Quatro vezes deliciosa e infinitamente irresistível. Massa leve e crocante, com recheio de queijo muçarela, provolone, gorgonzola, parmesão, e um creme suave a base de creme de leite.', ingredients: ['Queijo'] },
  { id: 'g10', name: 'Quiche Brócolis c/ Bacon', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18152813/IMG_5228.png', category: 'Grande', description: 'Aproveite a combinação perfeita de sabores na nossa quiche de brócolis com bacon. Cada mordida é uma explosão de texturas e sabores que vão encantar seu paladar. ', ingredients: ['Brócolis', 'Bacon'] },

  // MINIS
  { id: 'm1', name: 'Mini Bolinha de Queijo', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/25112522/bolinha_requeijao_615x500px-min-1-e1637350892502.png', category: 'Mini', description: 'Massa macia e levemente temperada, com recheio de queijo muçarela.', ingredients: ['Queijo'] },
  { id: 'm2', name: 'Mini Coxinha Frango c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/25112521/mini_coxinha_frango_com_requeijao_615x500px-min-1-e1637353545512.png', category: 'Mini', description: 'Massa macia e levemente temperada, recheio de frango desfiado com temperos especiais e requeijão cremoso.', ingredients: ['Frango', 'Requeijão'] },
  { id: 'm3', name: 'Mini Coxinha de Frango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/25112502/mini_coxinha_615x500px-min-e1637686352827.png', category: 'Mini', description: 'Massa macia e levemente temperada, recheio de frango desfiado com temperos especiais.', ingredients: ['Frango'] },
  { id: 'm4', name: 'Mini Coxinha de Carne c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/08/31101638/CoxinhaDeCarneRequeijao_site.png', category: 'Mini', description: 'Massa dourada com recheio suculento de carne e requeijão.', ingredients: ['Carne', 'Requeijão'] },
  { id: 'm5', name: 'Mini Pastel Frango c/ Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/18101902/IMG_4457.png', category: 'Mini', description: 'Massa assada, recheio de frango desfiado com temperos especiais e requeijão cremoso.', ingredients: ['Frango', 'Requeijão'] },
  { id: 'm6', name: 'Mini Pastel de Carne', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18112813/IMG_4460.png', category: 'Mini', description: 'O clássico pastel de feira com recheio de carne, no tamanho mini.', ingredients: ['Carne'] },
  { id: 'm7', name: 'Mini Travesseirinho Presunto e Queijo', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/12/30163541/mini-travesseiro-de-presunto-e-queijo_destaque.png', category: 'Mini', description: 'Massa macia e levemente temperada, com recheio de presunto e queijo muçarela.', ingredients: ['Presunto', 'Queijo'] },
  { id: 'm8', name: 'Mini Kibe com Requeijão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/18112446/IMG_1992-1.png', category: 'Mini', description: 'Explore uma explosão de sabores com nosso Mini Kibe de Requeijão! Feito com uma suculenta massa à base de carne bovina e trigo para kibe, este petisco deliciosamente crocante tem um irresistível toque de hortelã com recheio de requeijão cremoso.', ingredients: ['Carne', 'Requeijão'] },
  { id: 'm9', name: 'Mini Kibe Tradicional', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/18101628/IMG_4566-1.png', category: 'Mini', description: 'Massa deliciosamente temperada com carne de alta qualidade. INGREDIENTES: trigo para kibe, carne bovina, cebola, hortelã, alho, óleo de algodão, sal e especiarias.', ingredients: ['Carne'] },
]

// ==========================================
// DADOS DA GALERIA DE BEBIDAS
// ==========================================
const bebidasCategories = ['Todos', 'Soda Italiana', 'Frozen', 'Mocktail', 'Milkshake', 'Chá Gelado']
const bebidasIngredients = ['Abacaxi', 'Amora', 'Canela em Pau', 'Cereja', 'Crocante', 'Frutas Vermelhas', 'Hortelã', 'Laranja', 'Limão', 'Limão Siciliano', 'Limão Tahiti', 'Maçã Verde', 'Maracujá', 'Morango', 'NUTELLA®', 'Pêssego', 'Pomelo', 'Xarope de Limão Siciliano', 'Xarope Granadine']

const bebidasList = [
  // SODA ITALIANA
  { id: 'beb1', name: 'Soda Italiana Maçã Verde', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19144250/soda_italiana_maca_verde_325x325.png', category: 'Soda Italiana', description: 'Refrescante soda italiana com sabor marcante de maçã verde.', ingredients: ['Maçã Verde'] },
  { id: 'beb2', name: 'Soda Italiana Frutas Vermelhas', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19114903/soda_italiana_frutas_vermelhas_325x325.png', category: 'Soda Italiana', description: 'Refrescante soda italiana com o toque doce e azedinho das frutas vermelhas.', ingredients: ['Frutas Vermelhas'] },
  { id: 'beb3', name: 'Soda Italiana Abacaxi com Hortelã', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19114510/soda_italiana_abacaxi_325x325.png', category: 'Soda Italiana', description: 'O sabor tropical do abacaxi com o frescor da hortelã em uma soda super leve.', ingredients: ['Abacaxi', 'Hortelã'] },
  { id: 'beb4', name: 'Soda Italiana Limão Siciliano', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19114254/soda_italiana_limao_siciliano_325x325.png', category: 'Soda Italiana', description: 'Refrescante soda italiana clássica de limão siciliano.', ingredients: ['Limão Siciliano'] },

  // FROZEN
  { id: 'beb5', name: 'Frozen Morango', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19171317/frozen_morango_325x325.png', category: 'Frozen', description: 'Bebida super gelada e cremosa feita com morangos deliciosos.', ingredients: ['Morango'] },
  { id: 'beb6', name: 'Frozen Abacaxi', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19145606/frozen_abacaxi_325x325.png', category: 'Frozen', description: 'Bebida super gelada e refrescante feita com abacaxi.', ingredients: ['Abacaxi'] },
  { id: 'beb7', name: 'Frozen Frutas Vermelhas', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19144446/frozen_frutas_vermelhas_325x325.png', category: 'Frozen', description: 'Bebida super gelada e intensa feita com um mix de frutas vermelhas.', ingredients: ['Frutas Vermelhas'] },

  // MOCKTAIL
  { id: 'beb8', name: 'Mocktail Red Bull Amora Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/01/08085004/DESTAQUE_RED-BULL-MOCKTAILS-POMELO-ZERO-ACUCAR.png', category: 'Mocktail', description: 'Bebida refrescante e sem açúcar.', ingredients: ['Amora', 'Laranja', 'Limão Siciliano', 'Morango'] },
  { id: 'beb9', name: 'Mocktail Red Bull Pomelo Zero Açúcar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2026/01/08085005/DESTAQUE_RED-BULL-MOCKTAILS-AMORA-ZERO-ACUCAR.png', category: 'Mocktail', description: 'Bebida refrescante e sem açúcar.', ingredients: ['Hortelã', 'Limão Tahiti', 'Morango', 'Pomelo'] },
  { id: 'beb10', name: 'Mocktail Red Bull Zero Açucar', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/01/23170007/IMG_8497-1-1.png', category: 'Mocktail', description: 'Bebida refrescante e sem açúcar.', ingredients: ['Canela em Pau', 'Morango'] },
  { id: 'beb11', name: 'Mocktail Red Bull Energy Drink', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/01/23164126/IMG_8506-2-2.png', category: 'Mocktail', description: 'Sabor clássico e refrescante.', ingredients: ['Abacaxi', 'Limão Tahiti', 'Xarope de Limão Siciliano'] },
  { id: 'beb12', name: 'Mocktail Red Bull Tropical', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2025/01/23165019/IMG_8484-1-1-2.png', category: 'Mocktail', description: 'A energia do Red Bull com um toque tropical.', ingredients: ['Cereja', 'Laranja', 'Limão Tahiti', 'Maracujá', 'Xarope Granadine'] },

  // MILKSHAKE
  { id: 'beb13', name: 'Milkshake Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19172358/milkshake_limao_325x325.png', category: 'Milkshake', description: 'Milkshake cremoso.', ingredients: ['Limão'] },
  { id: 'beb14', name: 'NUTELLA®', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19173844/milkshake_nutella_325x325.png', category: 'Milkshake', description: 'Milkshake cremoso.', ingredients: ['NUTELLA®'] },
  { id: 'beb15', name: 'Milkshake Maracujá', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19172505/milkshake_maracuja_325x325.png', category: 'Milkshake', description: 'Milkshake cremoso.', ingredients: ['Maracujá'] },
  { id: 'beb16', name: 'Milkshake Crocante', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/19172028/milkshake_crocante_325x325.png', category: 'Milkshake', description: 'Milkshake cremoso.', ingredients: ['Crocante'] },

  // CHÁ GELADO
  { id: 'beb17', name: 'Chá Gelado Pêssego', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/18174158/cha_limao_pessego_325x325.png', category: 'Chá Gelado', description: 'Refrescante chá gelado.', ingredients: ['Pêssego'] },
  { id: 'beb18', name: 'Chá Gelado Limão', image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/18174158/cha_limao_pessego_325x325.png', category: 'Chá Gelado', description: 'Refrescante chá gelado.', ingredients: ['Limão'] },
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

// ==========================================
// TELA UNIFICADA DE GALERIA (COM FILTRO DUPLO)
// ==========================================
function GalleryViewer({ 
  title, 
  filterList,
  ingredientList, 
  items, 
  onBack 
}: { 
  title: string, 
  filterList: string[], 
  ingredientList?: string[],
  items: any[], 
  onBack: () => void 
}) {
  const [activeCat, setActiveCat] = useState('Todos')
  const [activeIng, setActiveIng] = useState('Todos')
  const [selectedItem, setSelectedItem] = useState<any | null>(null)
  
  const filteredItems = items.filter(item => {
    const passCat = (filterList.length === 0 || activeCat === 'Todos') ? true : item.category === activeCat
    const passIng = (!ingredientList || ingredientList.length === 0 || activeIng === 'Todos') ? true : (item.ingredients && item.ingredients.includes(activeIng))
    return passCat && passIng
  })

  return (
    <main className="min-h-dvh w-full bg-[#f7f1eb] flex flex-col pb-12 relative">
      <header className="relative bg-white shadow-sm py-8 px-4 flex flex-col items-center">
        <button onClick={onBack} className="absolute left-4 top-4 z-50 flex size-12 items-center justify-center rounded-full bg-[#f7f1eb] text-[#4a2e1b] shadow-sm transition hover:bg-[#e9ddd1] active:scale-95">
          <ArrowLeft size={24} aria-hidden="true" />
        </button>
        <h2 className="text-[#4a2e1b] font-serif text-2xl font-bold mb-6 mt-2 tracking-[-0.03em]">{title}</h2>
        
        {filterList.length > 0 && (
          <div className="flex flex-wrap justify-center max-w-4xl border border-[#4a2e1b] rounded-lg overflow-hidden shadow-sm">
            {filterList.map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`px-5 py-2.5 text-sm font-semibold transition-colors border-r border-[#4a2e1b] last:border-r-0 ${activeCat === cat ? 'bg-[#4a2e1b] text-white' : 'bg-white text-[#4a2e1b] hover:bg-[#f4ebe1]'}`}>
                {cat}
              </button>
            ))}
          </div>
        )}

        {ingredientList && ingredientList.length > 0 && (
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="text-sm font-semibold text-[#4a2e1b]">Ingrediente:</span>
            <select 
              value={activeIng}
              onChange={(e) => setActiveIng(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#4a2e1b] bg-[#f7f1eb] text-[#4a2e1b] text-sm font-medium outline-none focus:ring-2 focus:ring-[#bd7040] cursor-pointer"
            >
              <option value="Todos">Todos</option>
              {ingredientList.map(ing => (
                <option key={ing} value={ing}>{ing}</option>
              ))}
            </select>
          </div>
        )}
      </header>

      <div className="px-6 mt-10 max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <button key={item.id} onClick={() => setSelectedItem(item)} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between text-center shadow-sm border border-[#e9ddd1] transition hover:-translate-y-1 hover:shadow-md cursor-pointer w-full">
            <img src={item.image} className="w-32 h-32 object-contain mb-4 drop-shadow-sm" alt={item.name} />
            <h3 className="text-[#4a2e1b] font-bold text-[1.1rem] leading-tight">{item.name}</h3>
          </button>
        ))}
        {filteredItems.length === 0 && (
          <div className="col-span-full py-10 text-center text-[#9c7d68]">
            Nenhum produto encontrado para este filtro.
          </div>
        )}
      </div>

      {/* JANELA FLUTUANTE (MODAL DE DESCRIÇÃO) */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-5 transition-opacity">
          <div className="relative w-full max-w-sm bg-white rounded-[2rem] p-8 shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <button onClick={() => setSelectedItem(null)} className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-[#f7f1eb] text-[#4a2e1b] transition hover:bg-[#e9ddd1]">
              <X size={20} aria-hidden="true" />
            </button>
            <img src={selectedItem.image} alt={selectedItem.name} className="w-48 h-48 object-contain drop-shadow-md mb-4" />
            
            <span className="inline-block mb-3 px-3 py-1 bg-[#fff1dc] text-[#bd7040] text-[10px] font-bold uppercase tracking-widest rounded-full">{selectedItem.category}</span>
            
            <h3 className="font-serif text-2xl font-bold text-[#4a2e1b] mb-3 leading-tight">{selectedItem.name}</h3>
            <p className="text-[#9c7d68] text-sm leading-relaxed">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </main>
  )
}

// ==========================================
// APP PRINCIPAL (CONTROLE DE ROTAS)
// ==========================================
export default function MenuApp() {
  const [category, setCategory] = useState<CategoryId | null>(null)
  
  if (!category) return <Home onChoose={setCategory} />
  
  if (category === 'bolos') return <GalleryViewer title="Cardápio de Bolos" filterList={bolosCategories} ingredientList={bolosIngredients} items={bolosList} onBack={() => setCategory(null)} />
  if (category === 'doces') return <GalleryViewer title="Nossos Doces" filterList={docesCategories} ingredientList={docesIngredients} items={docesList} onBack={() => setCategory(null)} />
  if (category === 'salgados') return <GalleryViewer title="Nossos Salgados" filterList={salgadosCategories} ingredientList={salgadosIngredients} items={salgadosList} onBack={() => setCategory(null)} />
  if (category === 'bebidas') return <GalleryViewer title="Nossas Bebidas" filterList={bebidasCategories} ingredientList={bebidasIngredients} items={bebidasList} onBack={() => setCategory(null)} />
  
  return null
}