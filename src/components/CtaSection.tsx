import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Ol%C3%A1!%20Preciso%20de%20um%20motoboy%20para%20entrega.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const CtaSection = () => (
  <section className="hero-gradient py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Precisa de Entrega Agora? Fale pelo WhatsApp
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10">
          Solicite seu orçamento gratuito e receba atendimento rápido para sua entrega.
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
                event_label: 'botao_whatsapp_cta'
              });
            }
          }}
        >
          <MessageCircle className="w-5 h-5" />
          Solicitar Entrega
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;