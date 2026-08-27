import { Check, Zap, FileText, Menu, Search, LayoutGrid, Shield, ChevronLeft, ChevronRight, Star, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const BookPlaceholder = ({ title, subtitle, className = "", color = "from-slate-700 to-slate-900", border = "border-slate-500" }: { title: string, subtitle?: string, className?: string, color?: string, border?: string }) => (
  <div className={`relative bg-gradient-to-br ${color} text-white p-4 rounded-r-md shadow-2xl flex flex-col justify-between border-l-8 ${border} ${className}`}>
    <div>
      <h3 className="font-black text-sm uppercase leading-tight">{title}</h3>
      {subtitle && <p className="text-[10px] text-slate-200 mt-1 leading-tight">{subtitle}</p>}
    </div>
    <div className="flex justify-end mt-4">
      <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">
        <Zap size={14} className="text-white/70" />
      </div>
    </div>
    {/* Book spine effect */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/20"></div>
  </div>
);

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    "/images/IMG-5964.webp",
    "/images/IMG-5965.webp",
    "/images/IMG-5966.webp",
    "/images/IMG-5967.webp",
    "/images/IMG-5968.webp",
    "/images/IMG-5969.webp",
    "/images/IMG-5970.webp"
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const scrollToPlanos = () => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: "Preciso ter experiência com a parte elétrica ou fazer curso antes?",
      a: "Não. O manual foi feito para funcionar mesmo pra quem só mexe com a parte mecânica hoje. Você abre no sintoma, segue o passo a passo e chega na causa provável, com o guia do multímetro explicado do zero."
    },
    {
      q: "O acesso é imediato após a compra?",
      a: "Sim. Após a confirmação do pagamento, você recebe as informações de acesso para consultar o material na hora."
    },
    {
      q: "Serve para qualquer marca e modelo de scooter e moto elétrica?",
      a: "O manual é organizado por sintoma e por componente (bateria, controlador, motor, display, acelerador), que funcionam de forma parecida na maioria dos modelos. Os procedimentos servem para as marcas mais comuns do mercado, e o manual também mostra quando um caso específico deve ser encaminhado."
    },
    {
      q: "Vou receber os bônus também?",
      a: "Os 6 bônus fazem parte do Plano Completo. Nele, você recebe o Manual de Reparos + todos os bônus exclusivos."
    },
    {
      q: "Preciso de computador ou pode ser no celular?",
      a: "Pode ser no celular. O material é em PDF e abre em qualquer celular, computador ou tablet. Você pode consultar direto na bancada ou imprimir se preferir."
    },
    {
      q: "Por quanto tempo terei acesso ao material?",
      a: "Você terá acesso ao material digital adquirido para consultar sempre que precisar."
    },
    {
      q: "Vou conseguir mesmo fazer os reparos sozinho?",
      a: "O manual te dá a sequência de diagnóstico e o passo a passo de cada reparo, do mais simples ao mais avançado. Ele também mostra com clareza os limites seguros: o que você mesmo pode resolver e quando o caso deve ir para um especialista, principalmente em situações que envolvem risco."
    },
    {
      q: "Posso pagar no cartão ou Pix?",
      a: "Sim. As formas de pagamento disponíveis aparecem na página de checkout no momento da compra."
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
      `}</style>
      
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center py-2 px-4 font-bold text-sm sm:text-base flex items-center justify-center gap-2 sticky top-0 z-50">
        <Zap size={18} className="fill-current text-yellow-300" />
        OFERTA ESPECIAL DISPONÍVEL APENAS HOJE
      </div>

      {/* Hero Section */}
      <section className="bg-slate-50 text-[#0B1526] pt-12 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight tracking-tight">
            Domine o reparo de <span className="text-blue-600">scooters e motos elétricas</span> com um manual completo
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-10 text-slate-600">
            mesmo sem ter experiência
          </p>

          <div className="relative mb-12 max-w-3xl mx-auto flex justify-center items-center">
            <img src="/images/IMG-5963.webp" alt="Manual Bundle Completo" className="w-full mix-blend-multiply max-w-2xl" />
          </div>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Um manual completo de diagnóstico e reparo, organizado por sintoma e separado por scooter e por moto elétrica. Abra na página do defeito, siga o passo a passo e chegue na solução, mesmo começando do zero. <strong className="text-[#0B1526]">Por apenas R$ 27,00</strong>
          </p>

          <button onClick={scrollToPlanos} className="w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:scale-105 active:scale-95 block">
            ACESSAR AGORA
          </button>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-white overflow-hidden w-full">
        <div className="max-w-5xl mx-auto text-center px-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1526] leading-tight tracking-tight">
            Veja alguns dos materiais que você vai receber na prática
          </h2>
        </div>
          
        <div className="relative w-full overflow-hidden mb-10 group">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* Original set */}
            {[
              'https://i.ibb.co/0p1vB4CC/IMG-5938.webp',
              'https://i.ibb.co/93qCsmrx/IMG-5939.webp',
              'https://i.ibb.co/4ZytzBxv/IMG-5940.webp',
              'https://i.ibb.co/Zzw84B82/IMG-5941.webp',
              'https://i.ibb.co/CsSD9SX4/IMG-5942.webp',
              'https://i.ibb.co/9kC7y2bD/IMG-5943.webp',
              'https://i.ibb.co/2YnHNNT1/IMG-5944.webp',
              'https://i.ibb.co/nsNkKvF4/IMG-5945.webp',
              'https://i.ibb.co/XfG2QcY1/IMG-5946.webp',
              'https://i.ibb.co/LDQzJNhq/IMG-5947.webp',
              'https://i.ibb.co/MDstz1Wk/IMG-5948.webp',
              'https://i.ibb.co/jvPnWc4K/IMG-5949.webp',
              'https://i.ibb.co/fGrCrKLw/IMG-5950.webp',
              'https://i.ibb.co/Zz9JW89t/IMG-5951.webp',
              'https://i.ibb.co/Y7KTdWyJ/IMG-5952.webp',
              'https://i.ibb.co/Fk7LMWZb/IMG-5953.webp',
              'https://i.ibb.co/twj7JBqY/IMG-5954.webp',
              'https://i.ibb.co/d053jkn9/IMG-5955.webp',
            ].map((src, i) => (
              <div key={i} className="w-72 sm:w-80 flex-shrink-0 px-3">
                <img src={src} alt={`Página de Conteúdo ${i + 1}`} className="w-full h-auto mix-blend-multiply" />
              </div>
            ))}
            {/* Duplicated set for seamless loop */}
            {[
              'https://i.ibb.co/0p1vB4CC/IMG-5938.webp',
              'https://i.ibb.co/93qCsmrx/IMG-5939.webp',
              'https://i.ibb.co/4ZytzBxv/IMG-5940.webp',
              'https://i.ibb.co/Zzw84B82/IMG-5941.webp',
              'https://i.ibb.co/CsSD9SX4/IMG-5942.webp',
              'https://i.ibb.co/9kC7y2bD/IMG-5943.webp',
              'https://i.ibb.co/2YnHNNT1/IMG-5944.webp',
              'https://i.ibb.co/nsNkKvF4/IMG-5945.webp',
              'https://i.ibb.co/XfG2QcY1/IMG-5946.webp',
              'https://i.ibb.co/LDQzJNhq/IMG-5947.webp',
              'https://i.ibb.co/MDstz1Wk/IMG-5948.webp',
              'https://i.ibb.co/jvPnWc4K/IMG-5949.webp',
              'https://i.ibb.co/fGrCrKLw/IMG-5950.webp',
              'https://i.ibb.co/Zz9JW89t/IMG-5951.webp',
              'https://i.ibb.co/Y7KTdWyJ/IMG-5952.webp',
              'https://i.ibb.co/Fk7LMWZb/IMG-5953.webp',
              'https://i.ibb.co/twj7JBqY/IMG-5954.webp',
              'https://i.ibb.co/d053jkn9/IMG-5955.webp',
            ].map((src, i) => (
              <div key={i + 'dup'} className="w-72 sm:w-80 flex-shrink-0 px-3">
                <img src={src} alt={`Página de Conteúdo ${i + 1}`} className="w-full h-auto mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            O Manual de Reparos para Scooters e Motos Elétricas foi pensado para transformar o diagnóstico elétrico em algo simples de consultar e aplicar na hora que você mais precisa.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#0B1526]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white text-center mb-12 uppercase leading-tight">
            O MANUAL DE REPAROS PARA SCOOTERS E MOTOS ELÉTRICAS POSSUI:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1526] mb-4">Diagnóstico por sintoma</h3>
              <p className="text-slate-600">
                Fluxogramas que partem do defeito que o veículo apresenta até a causa provável. Abra no sintoma e siga o passo a passo, sem chute.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                <Menu size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1526] mb-4">Separado por scooter e por moto elétrica</h3>
              <p className="text-slate-600">
                Cada tipo de veículo tem sua própria seção, com os componentes e procedimentos específicos. Sem misturar, sem confusão.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1526] mb-4">Passo a passo de reparo</h3>
              <p className="text-slate-600">
                O que verificar, o que testar, o que trocar e quando encaminhar. Cada defeito com a sequência certa para resolver com segurança.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                <LayoutGrid size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1526] mb-4">Fichas e checklists prontos</h3>
              <p className="text-slate-600">
                Ficha de entrada, ordem de serviço, checklist de inspeção e tabelas de consulta rápida. Prontos para imprimir e usar na oficina.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button onClick={scrollToPlanos} className="w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 block">
              QUERO MEU MANUAL AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Benefits 1 */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0B1526] text-white rounded-3xl p-8 sm:p-10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black mb-8 leading-tight">
              COM O NOSSO MANUAL VOCÊ ATENDE MAIS VEÍCULOS, PERDE MENOS TEMPO NO DIAGNÓSTICO E PARA DE TROCAR PEÇA NO ESCURO.
            </h2>
            
            <ul className="space-y-4 mb-10">
              {[
                "Pare de perder serviço por não saber realizar as manutenções",
                "Diagnóstico organizado e fácil de seguir",
                "Aceite scooters e motos elétricas com segurança",
                "Evite trocar peça cara sem necessidade",
                "Um único serviço já paga o manual inteiro"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={scrollToPlanos} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg transition-all active:scale-95">
              Quero acessar agora e usar hoje
            </button>
          </div>
        </div>
      </section>

      {/* Benefits 2 */}
      <section className="py-20 px-4 bg-[#B91C1C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-6 leading-tight">
            Quantos serviços de scooters e motos elétricas você já perdeu por não saber mexer na parte elétrica?
          </h2>
          <p className="text-xl text-white/90 font-medium mb-10">
            Aproveite a oferta por tempo limitado
          </p>
          <button onClick={scrollToPlanos} className="w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 block">
            Quero acessar agora e usar hoje
          </button>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1526] text-center mb-12 leading-tight">
            Este manual é ideal para você que deseja
          </h2>

          <div className="space-y-6">
            {[
              { title: "Parar de trocar peça no escuro", desc: "Abra no sintoma, siga o fluxograma e chegue na causa provável antes de trocar qualquer peça." },
              { title: "Colocar sua oficina para atender elétrica de verdade", desc: "A parte mecânica você já domina. Aqui você tem a sequência pronta pra não travar na parte elétrica." },
              { title: "Atender scooters e motos elétricas de forma profissional", desc: "Fichas de entrada, ordem de serviço e checklists que passam seriedade para o cliente." },
              { title: "Aceitar serviços e parar de perder dinheiro", desc: "Receba a scooter ou a moto elétrica que hoje você recusa, com o passo a passo pra resolver cada defeito com segurança." },
              { title: "Encontrar o defeito rápido", desc: "Fluxogramas por sintoma que mostram por onde começar e o que checar, sem perder tempo." },
              { title: "Trabalhar com menos tentativa e erro", desc: "Sequência de diagnóstico testada, menos peça trocada à toa, menos prejuízo na bancada." }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#0B1526] mb-3 text-center sm:text-left">{item.title}</h3>
                <p className="text-slate-600 text-center sm:text-left">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-[#0B1526]">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="bg-blue-600 text-white font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider">
              ACESSO IMEDIATO
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-6 leading-tight">
            Tudo o que você vai receber
          </h2>
          
          <p className="text-lg text-slate-300 text-center mb-10 max-w-2xl mx-auto">
            Tudo foi organizado para ser simples de consultar e aplicar. Você abre no defeito e já sabe por onde começar, na mesma hora.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Manual completo de diagnóstico e reparo",
              "Seções separadas para scooter e moto elétrica",
              "Fluxogramas por sintoma",
              "Do defeito até a causa provável",
              "Passo a passo de reparo",
              "O que verificar, testar e trocar",
              "Diagnóstico de bateria e carregador",
              "Diagnóstico de motor e controlador",
              "Diagnóstico de display e acelerador",
              "Guia do multímetro do zero",
              "Configuração de display e P-settings",
              "Formato PDF pronto para o celular",
              "Compatível com qualquer aparelho",
              "Ficha de entrada do veículo",
              "Ordem de serviço pronta",
              "Checklist de inspeção em 15 pontos",
              "Tabela de sintoma, causa e ação",
              "Calendário de manutenção preventiva",
              "Guia de compra de peças",
              "Acesso imediato após a compra"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 py-2 border-b border-slate-700/50 last:border-0">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-white font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1526] text-center mb-2 leading-tight">
            E não para por aí... tem mais!
          </h2>
          <p className="text-lg font-medium text-slate-600 text-center mb-6">
            Você também vai receber...
          </p>
          
          <div className="flex justify-center mb-12">
            <span className="bg-blue-100 text-blue-900 font-bold px-8 py-3 rounded-full text-lg uppercase tracking-wide">
              6 BÔNUS EXCLUSIVOS
            </span>
          </div>

          <div className="space-y-8">
            {[
              { num: 1, title: "Tabela Mestra de Códigos de Erro de Display e Painel", desc: "Consulte o código que apareceu no display e descubra na hora o que ele significa e o que verificar. Reúne os erros mais comuns dos painéis de scooters e motos elétricas num só lugar, pra você não travar quando aparecer um código que nunca viu.", img: "/images/IMG-5956.webp" },
              { num: 2, title: "Guia de Precificação de Serviços Elétricos", desc: "Preencha o custo da peça, o tempo de serviço e a sua margem, e saia com o preço certo pra cobrar em cada tipo de reparo. Pare de cobrar barato por medo ou de perder o cliente por chutar um valor alto demais.", img: "/images/IMG-5957.webp" },
              { num: 3, title: "Guia de Onde Comprar Peças de Reposição", desc: "Saiba onde encontrar bateria, controlador, display, acelerador e conectores compatíveis, o que verificar antes de comprar e quais peças vale a pena ter em estoque na oficina.", img: "/images/IMG-5958.webp" },
              { num: 4, title: "Guia Sequência de Execução do Reparo", desc: "A ordem certa de verificar cada componente quando o defeito aparece, pra você não fazer nada fora de sequência nem perder tempo checando peça à toa. Siga o passo a passo e chegue na causa mais rápido, do jeito que um profissional faz.", img: "/images/IMG-5959.webp" },
              { num: 5, title: "Guia de Segurança com Baterias de Lítio", desc: "Aprenda a identificar uma bateria inchada, com risco de curto ou de incêndio, e saiba exatamente o que fazer e o que nunca fazer. Proteja você, sua oficina e seu cliente do erro que pode custar caro.", img: "/images/IMG-5960.webp" },
              { num: 6, title: "Checklist de Testes Finais Antes de Entregar", desc: "Confira cada ponto antes de devolver o veículo ao cliente: motor, freio, bateria, luzes e sequência de partida. Garanta que nada volta com defeito e que o cliente sai satisfeito na primeira vez.", img: "/images/IMG-5961.webp" },
            ].map((bonus) => (
              <div key={bonus.num} className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 flex flex-col items-center text-center">
                <span className="bg-green-500 text-white font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider mb-2">
                  GRÁTIS
                </span>
                <span className="bg-blue-600 text-white font-black px-6 py-2 rounded-full text-lg uppercase tracking-wider mb-8">
                  #{bonus.num} - BÔNUS HOJE!
                </span>
                
                <div className="w-full flex justify-center mb-8">
                   <img src={bonus.img} alt={bonus.title} className="w-full max-w-sm h-auto mix-blend-multiply" />
                </div>

                <h3 className="text-2xl font-black text-[#0B1526] mb-4 leading-tight">
                  {bonus.title}
                </h3>
                <p className="text-slate-600 text-lg">
                  {bonus.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="bg-[#0B1526] pb-16">
        <div className="bg-yellow-400 text-black text-center py-4 px-4 font-black text-lg sm:text-xl uppercase tracking-wider mb-12 shadow-lg">
          Última chance: Oferta termina hoje
        </div>
        
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-12 leading-tight">
            Escolha a opção ideal para você
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col h-full">
              <h3 className="text-2xl font-black text-[#0B1526] text-center mb-6">Plano Básico</h3>
              
              <div className="flex justify-center mb-6 h-40 items-center">
                 <img src="/images/IMG-5937.webp" alt="Manual de Reparos Básico" className="h-40 w-auto mix-blend-multiply" />
              </div>

              <p className="text-center font-medium text-slate-500 mb-6">Você recebe:</p>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Manual de Reparos para Scooters e Motos Elétricas",
                  "Mais de 120 páginas de diagnóstico e reparo por sintoma",
                  "Seções separadas para scooter e para moto elétrica",
                  "Acesso imediato pela área de membros"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto border-t border-slate-100 pt-6">
                <p className="text-slate-400 line-through mb-1">de R$47,90 por:</p>
                <p className="text-4xl font-black text-[#0B1526] mb-2">R$15,00</p>
                <p className="text-green-600 font-bold mb-6">Você economiza R$32,90</p>
                <button onClick={() => window.location.href = 'https://pay.lowify.com.br/go.php?offer=d3zgmnk'} className="w-full bg-white border-2 border-[#0B1526] text-[#0B1526] hover:bg-slate-50 font-bold text-lg py-4 px-4 rounded-xl transition-all active:scale-95">
                  QUERO SOMENTE O BÁSICO
                </button>
              </div>
            </div>

            {/* Complete Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_0_40px_rgba(34,197,94,0.3)] border-4 border-green-500 relative flex flex-col h-full transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white font-black px-6 py-2 rounded-full flex items-center gap-2 uppercase tracking-wide">
                <span>🏆</span> MAIS VENDIDO
              </div>

              <h3 className="text-2xl font-black text-[#0B1526] text-center mt-4 mb-1">Plano Completo</h3>
              <p className="text-green-600 font-bold text-center mb-6">6x mais conteúdo</p>
              
              <div className="flex justify-center mb-6 h-48 items-center relative">
                 <img src="/images/IMG-5963.webp" alt="Manual de Reparos Completo" className="h-48 w-auto mix-blend-multiply" />
              </div>

              <ul className="space-y-3 mb-8 flex-1 text-sm">
                {[
                  "Manual de Reparos para Scooters e Motos Elétricas",
                  "Mais de 120 páginas de diagnóstico e reparo por sintoma",
                  "Seções separadas para scooter e para moto elétrica",
                  "Fluxogramas por sintoma, do defeito até a causa provável",
                  "Passo a passo de reparo com o que verificar, testar e trocar",
                  "Guia do multímetro do zero",
                  "Bônus #1 Tabela Mestra de Códigos de Erro de Display e Painel",
                  "Bônus #2 Guia de Precificação de Serviços Elétricos",
                  "Bônus #3 Guia de Onde Comprar Peças de Reposição",
                  "Bônus #4 Guia Sequência de Execução do Reparo",
                  "Bônus #5 Guia de Segurança com Baterias de Lítio",
                  "Bônus #6 Checklist de Testes Finais Antes de Entregar",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-green-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto border-t border-slate-100 pt-6">
                <p className="text-slate-400 line-through mb-1">de R$199,90 por:</p>
                <p className="text-5xl font-black text-green-600 mb-2">R$27,00</p>
                <p className="text-green-600 font-bold mb-6">Você economiza R$172,90</p>
                <button onClick={() => window.location.href = 'https://pay.lowify.com.br/checkout.php?product_id=oXSv20'} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-5 px-4 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95">
                  QUERO O PLANO COMPLETO
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Um único serviço de reparo já paga o valor do manual inteiro.</h3>
            <p className="text-xl text-slate-400">Todo o resto vira lucro.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="bg-blue-50 text-blue-900 font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider">
              DEPOIMENTOS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1526] mb-12 leading-tight">
            Veja o que nossos clientes estão dizendo
          </h2>

          <div className="bg-white rounded-3xl p-0 sm:p-0 shadow-xl border border-slate-100 max-w-lg mx-auto relative group">
            <div className="overflow-hidden rounded-3xl">
               <img src={testimonials[currentTestimonial]} alt={`Depoimento ${currentTestimonial + 1}`} className="w-full h-auto object-contain rounded-3xl" />
            </div>

            {/* Navigation arrows */}
            <div 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 w-12 h-12 bg-white text-[#0B1526] rounded-full flex items-center justify-center shadow-xl border border-slate-200 cursor-pointer hover:bg-slate-50 hover:scale-110 transition-all z-10"
            >
              <ChevronLeft size={24} />
            </div>
            <div 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 w-12 h-12 bg-white text-[#0B1526] rounded-full flex items-center justify-center shadow-xl border border-slate-200 cursor-pointer hover:bg-slate-50 hover:scale-110 transition-all z-10"
            >
              <ChevronRight size={24} />
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${idx === currentTestimonial ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          </div>
          
          <p className="text-slate-500 mt-8">Arraste para o lado ou use as setas para navegar.</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-green-100 text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg mb-8 border-4 border-white outline outline-4 outline-yellow-400 relative">
               <div className="text-5xl font-black">30</div>
               <div className="absolute bottom-4 text-xs font-bold uppercase tracking-wider">Dias</div>
               <div className="absolute top-3 text-[10px] font-bold uppercase tracking-wider w-full text-center">Garantia</div>
               {/* Stars */}
               <Star size={12} className="absolute left-4 top-1/2 fill-current" />
               <Star size={12} className="absolute right-4 top-1/2 fill-current" />
               <Star size={10} className="absolute left-6 bottom-10 fill-current" />
               <Star size={10} className="absolute right-6 bottom-10 fill-current" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#0B1526] mb-6 flex items-center justify-center gap-2 leading-tight">
              <Shield className="text-green-500" size={32} />
              Garantia de 30 dias: o risco fica do nosso lado
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Teste o material por 30 dias completos. Se não fizer sentido para você, devolvemos 100% do seu dinheiro sem perguntas e sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1526] text-center mb-12 leading-tight">
            Como é o Acesso (Passo a Passo)
          </h2>

          <div className="space-y-6 mb-12">
            {[
              { num: 1, title: "Conclua sua compra", desc: "Após o pagamento, seu acesso é liberado automaticamente." },
              { num: 2, title: "Entre na área de membros", desc: "Você recebe os dados para acessar a área de membros, onde todo o material fica organizado." },
              { num: 3, title: "Baixe os arquivos", desc: "Dentro do material, você encontra o Manual de Reparos e todos os bônus organizados por tipo de veículo." },
              { num: 4, title: "Abra no defeito e comece a reparar", desc: "Consulte o sintoma, siga o passo a passo e faça o reparo na sua oficina hoje mesmo." }
            ].map((step) => (
              <div key={step.num} className="bg-white border-2 border-[#0B1526] rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-black text-[#0B1526] mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <button onClick={scrollToPlanos} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-5 px-4 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95">
            QUERO MEU ACESSO AGORA
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1526] text-center mb-10 leading-tight">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-[#0B1526] pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <Minus className="text-blue-600 shrink-0" size={20} />
                  ) : (
                    <Plus className="text-blue-600 shrink-0" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

