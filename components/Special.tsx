import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Special: React.FC = () => {
  return (
    <section className="py-32 relative bg-dark-950 overflow-hidden flex items-center justify-center">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-dark-950 z-1" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-gold-300 mb-6">Protocolos Exclusivos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Descubra o auge do cuidado pessoal com nossas combinações exclusivas de tratamentos, desenhadas para resultados transformadores.
          </p>
          <Button variant="primary" className="text-lg px-10 py-4">Conhecer Protocolos</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Special;