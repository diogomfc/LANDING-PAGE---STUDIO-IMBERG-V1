import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Aesthetic Clinic Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-transparent to-dark-950/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-gold-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Estética Facial e Corporal
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Revele a sua <br />
            <span className="italic text-gold-300">melhor versão</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10 font-light">
            Protocolos exclusivos e tecnologia de ponta para realçar sua beleza natural com sofisticação e segurança.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button showIcon>Agende sua Avaliação</Button>
            <Button variant="text">Conheça nossos tratamentos</Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400/0 via-gold-400 to-gold-400/0" />
      </motion.div>
    </section>
  );
};

export default Hero;