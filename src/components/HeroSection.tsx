import { motion } from "framer-motion";
import { Package, Check, Bike, Clock, Quote } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Ol%C3%A1!%20Preciso%20de%20um%20motoboy%20para%20entrega.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const HeroSection = () => (
  <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-orange-500/30 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-red-500/20 blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-orange-600/15 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
    </div>
    
    {/* Elementos decorativos que remetem a velocidade */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-[10%] w-20 h-1 bg-gradient-to-r from-accent/20 to-transparent" />
      <div className="absolute top-32 right-[15%] w-16 h-1 bg-gradient-to-r from-accent/15 to-transparent" />
      <div className="absolute bottom-40 left-[20%] w-24 h-1 bg-gradient-to-r from-accent/10 to-transparent" />
      <div className="absolute bottom-20 right-[25%] w-20 h-1 bg-gradient-to-r from-accent/15 to-transparent" />
    </div>
    
    <div className="container relative z-10 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Bike className="w-10 h-10 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/30">
              Motoboy Profissional
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
            Motoboy em São Paulo{" "}
            <span className="text-gradient">com Entrega Rápida</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl">
            Entregas rápidas, coleta de documentos e transporte de pequenas encomendas com atendimento ágil em São Paulo e região.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-200 glow-border"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_whatsapp', {
                  event_category: 'lead',
                  event_label: 'botao_whatsapp_hero'
                });
              }
            }}
          >
            <Package className="w-5 h-5" />
            Solicitar Entrega
          </a>
          <div className="mt-8 flex flex-col gap-3">
            <span className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base font-semibold">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              Atendimento em toda São Paulo e região metropolitana
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Coleta e entrega no mesmo dia
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Motoboy experiente e confiável
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Orçamento gratuito pelo WhatsApp
            </span>
          </div>
        </motion.div>

        {/* Depoimento com Avatar de Motoboy */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex flex-col items-center gap-6"
        >
          {/* Caixa de diálogo pequena ACIMA */}
          <div className="relative max-w-[280px]">
            <div className="bg-card/95 backdrop-blur-sm border-2 border-accent/30 rounded-xl p-3 shadow-xl relative">
              <p className="text-card-foreground text-xs text-center leading-relaxed">
                "A <span className="font-bold text-accent">LSB</span> criou meu site e triplicou minhas entregas!"
              </p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-card/95"></div>
            </div>
          </div>
          
          {/* Avatar Grande do Motoboy */}
          <div className="relative">
            <svg width="340" height="400" viewBox="0 0 340 400" className="drop-shadow-2xl">
              {/* Sombra no chão */}
              <ellipse cx="170" cy="380" rx="90" ry="20" fill="#00000020"/>
              
              {/* Moto - Parte de trás */}
              <ellipse cx="130" cy="340" rx="28" ry="28" fill="#1f2937" stroke="#374151" strokeWidth="3"/>
              <circle cx="130" cy="340" r="14" fill="#6b7280"/>
              <circle cx="130" cy="340" r="8" fill="#9ca3af"/>
              
              {/* Moto - Corpo */}
              <path d="M 130 340 Q 150 320 180 310 L 200 310 L 210 330 L 200 340 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="2"/>
              <rect x="180" y="305" width="25" height="8" rx="2" fill="#1f2937"/>
              
              {/* Moto - Guidão */}
              <line x1="185" y1="310" x2="190" y2="295" stroke="#374151" strokeWidth="3"/>
              <line x1="180" y1="295" x2="200" y1="295" stroke="#6b7280" strokeWidth="2"/>
              
              {/* Moto - Roda dianteira */}
              <ellipse cx="220" cy="340" rx="28" ry="28" fill="#1f2937" stroke="#374151" strokeWidth="3"/>
              <circle cx="220" cy="340" r="14" fill="#6b7280"/>
              <circle cx="220" cy="340" r="8" fill="#9ca3af"/>
              
              {/* Pernas do motoboy */}
              <rect x="140" y="280" width="18" height="50" fill="#1e3a8a" rx="8"/>
              <rect x="162" y="280" width="18" height="48" fill="#1e40af" rx="8"/>
              
              {/* Botas */}
              <ellipse cx="149" cy="330" rx="11" ry="8" fill="#0f172a"/>
              <ellipse cx="171" cy="328" rx="11" ry="8" fill="#0f172a"/>
              
              {/* Corpo */}
              <ellipse cx="170" cy="240" rx="45" ry="55" fill="#dc2626"/>
              
              {/* Jaqueta - Listras refletivas */}
              <rect x="130" y="220" width="80" height="4" rx="2" fill="#fbbf24" opacity="0.9"/>
              <rect x="130" y="250" width="80" height="4" rx="2" fill="#fbbf24" opacity="0.9"/>
              
              {/* Braços */}
              <ellipse cx="130" cy="240" rx="16" ry="42" fill="#dc2626" transform="rotate(-20 130 240)"/>
              <ellipse cx="210" cy="240" rx="16" ry="42" fill="#b91c1c" transform="rotate(20 210 240)"/>
              
              {/* Mãos nas luvas */}
              <ellipse cx="120" cy="270" rx="12" ry="10" fill="#0f172a"/>
              <ellipse cx="220" cy="270" rx="12" ry="10" fill="#0f172a"/>
              
              {/* Pescoço */}
              <rect x="155" y="178" width="30" height="20" fill="#c2855c" rx="5"/>
              
              {/* Cabeça */}
              <ellipse cx="170" cy="160" rx="38" ry="42" fill="#a67c52"/>
              
              {/* Capacete - Base */}
              <ellipse cx="170" cy="140" rx="42" ry="45" fill="#dc2626"/>
              
              {/* Capacete - Viseira */}
              <ellipse cx="170" cy="145" rx="35" ry="28" fill="#1e293b" opacity="0.7"/>
              <ellipse cx="170" cy="145" rx="32" ry="25" fill="#0f172a" opacity="0.5"/>
              
              {/* Capacete - Reflexo na viseira */}
              <ellipse cx="165" cy="140" rx="12" ry="8" fill="#ffffff" opacity="0.3"/>
              
              {/* Capacete - Detalhes */}
              <path d="M 145 125 Q 170 115 195 125" stroke="#fbbf24" strokeWidth="3" fill="none"/>
              <circle cx="155" cy="135" r="3" fill="#fbbf24"/>
              <circle cx="185" cy="135" r="3" fill="#fbbf24"/>
              
              {/* Bag de entregas nas costas */}
              <rect x="195" y="210" width="35" height="45" rx="4" fill="#059669" stroke="#047857" strokeWidth="2"/>
              <rect x="200" y="215" width="25" height="3" rx="1" fill="#10b981"/>
              <rect x="200" y="225" width="25" height="3" rx="1" fill="#10b981"/>
              <text x="212" y="242" fontSize="16" fill="#ffffff" fontWeight="bold" textAnchor="middle">📦</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;