import { motion } from "framer-motion";
import { Package, FileText, ShoppingBag, Utensils, Pill, TruckIcon, Clock, Users } from "lucide-react";

const services = [
  { icon: Clock, title: "Entregas Rápidas na Cidade", desc: "Entregas expressas em São Paulo com agilidade e pontualidade." },
  { icon: FileText, title: "Coleta e Entrega de Documentos", desc: "Transporte seguro de documentos importantes e processos." },
  { icon: Package, title: "Pequenas Encomendas", desc: "Entrega de encomendas leves e pequenos volumes." },
  { icon: ShoppingBag, title: "E-commerce e Marketplaces", desc: "Entregas para lojas virtuais, Mercado Livre e Shopee." },
  { icon: Utensils, title: "Restaurantes e Delivery", desc: "Entregas para restaurantes e plataformas como iFood." },
  { icon: Pill, title: "Farmácias", desc: "Entrega rápida de medicamentos e produtos farmacêuticos." },
  { icon: Users, title: "Entregas Particulares", desc: "Serviço personalizado de coleta e entrega para pessoas físicas." },
  { icon: TruckIcon, title: "Retirada e Entrega de Mercadorias", desc: "Coleta em lojas e feira, entregas na região metropolitana." },
];

const ServicosSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Soluções completas de entrega para você e seu negócio
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover electric-accent relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative">
              <service.icon className="w-6 h-6 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Nota sobre plataformas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted-foreground/80 max-w-3xl mx-auto">
          <span className="font-semibold">Trabalho com diversas plataformas:</span> Realizo entregas usando Uber Flash, Lalamove, iFood, Mercado Livre, Shopee e outras. 
          Este é um site de serviços independentes, não oficial de nenhuma plataforma.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ServicosSection;