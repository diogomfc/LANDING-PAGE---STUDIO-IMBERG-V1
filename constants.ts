import { ServiceItem, Testimonial } from './types';

// Updated WhatsApp number
export const WHATSAPP_NUMBER = "5511914575306"; 
export const DISPLAY_PHONE = "(11) 91457-5306";
export const CONTACT_EMAIL = "eduardoimberg@yahoo.com.br";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma avaliação no Studio Imberg.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const FACIAL_PROCEDURES: ServiceItem[] = [
  { name: "Botox", description: "Suavize linhas de expressão e previna rugas." },
  { name: "Cicatrizes de Acne", description: "Tratamentos para uniformizar a textura da pele." },
  { name: "Flacidez Facial", description: "Protocolos de estímulo de colágeno." },
  { name: "Lipo de Papada", description: "Redução de gordura localizada na região submentoniana." },
  { name: "Pós Lipo de Papada", description: "Drenagem e recuperação acelerada." },
  { name: "Melasma", description: "Controle de manchas e uniformização do tom." },
  { name: "Rejuvenescimento", description: "Bioestimuladores e tecnologias avançadas." },
  { name: "Peeling", description: "Renovação celular profunda." },
  { name: "Skinbooster", description: "Hidratação profunda e luminosidade." },
];

export const BODY_PROCEDURES_COL1: ServiceItem[] = [
  { name: "Acelerador Metabólico" },
  { name: "Celulite" },
  { name: "Definição Abdominal" },
  { name: "Estrias Brancas" },
  { name: "Estrias Vermelhas" },
  { name: "Esclerose Venosa (PEIM)" },
  { name: "Fibromialgia" },
  { name: "Flacidez Corporal" },
  { name: "Ganho de Massa Magra" },
];

export const BODY_PROCEDURES_COL2: ServiceItem[] = [
  { name: "Hidrolipoclasia Power" },
  { name: "Hidrolipoclasia N Asp" },
  { name: "Lipossoma de Girassol" },
  { name: "Lipodetox" },
  { name: "Lipo Enzimática" },
  { name: "Libido Masculina" },
  { name: "Libido Feminina" },
  { name: "Modulação Hormonal" },
  { name: "Queda Capilar" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Silva",
    text: "O Dr. Carlos é excepcional. O cuidado e a atenção aos detalhes me fizeram sentir segura. O resultado ficou incrível!",
    rating: 5
  },
  {
    name: "Fernanda Costa",
    text: "Ambiente sofisticado e atendimento impecável. Fiz o protocolo de rejuvenescimento e estou amando minha pele.",
    rating: 5
  },
  {
    name: "Roberto Almeida",
    text: "Profissionalismo define o Studio Imberg. Recomendo os tratamentos corporais para quem busca resultados reais.",
    rating: 5
  }
];