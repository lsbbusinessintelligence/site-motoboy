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
          className="flex flex-col items-center gap-6 mt-12 lg:mt-0"
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
          
          {/* Avatar Grande do Motoboy com efeito 70% real + 30% desenho */}
          <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl shadow-2xl p-8 max-w-md">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/images/avatar-motoboy.png" 
                alt="Motoboy LSB" 
                className="w-full h-auto shadow-lg"
                style={{
                  filter: 'contrast(1.25) saturate(1.4) brightness(1.05)',
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
              {/* Overlay sutil para efeito ilustrado */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(220,38,38,0.08) 100%)',
                  mixBlendMode: 'overlay'
                }}
              />
            </div>
            
            {/* Depoimento */}
            <div className="mt-6 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-800 font-semibold text-base mb-2">
                "Motoboy rápido e profissional!"
              </p>
              <p className="text-gray-600 text-sm">
                Cliente via LSB Intelligence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;