import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-600/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold-500/30" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl shadow-gold-900/10">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Studio Imberg Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark-900/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold-500/30" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-400 text-sm tracking-[0.2em] uppercase mb-2">Sobre o Studio</h2>
            <h3 className="font-serif text-4xl text-white mb-6">Excelência em cada detalhe</h3>
            <p className="text-gray-400 leading-relaxed mb-6 font-light">
              O <strong className="text-gold-300">Studio Imberg</strong> nasceu com o propósito de oferecer uma experiência estética única, unindo tecnologia avançada a um olhar humanizado e artístico sobre a beleza.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 font-light">
              Acreditamos que cada paciente é único. Por isso, nossos protocolos são personalizados para atender às necessidades específicas do seu rosto e corpo, sempre priorizando a naturalidade e a segurança em cada procedimento.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <span className="block text-3xl font-serif text-gold-400 mb-1">+5000</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Procedimentos Realizados</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-gold-400 mb-1">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Satisfação e Segurança</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;