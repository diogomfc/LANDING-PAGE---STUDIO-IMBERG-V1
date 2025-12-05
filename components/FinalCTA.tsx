import React from 'react';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Pronto para sua transformação?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">
          Agende sua avaliação personalizada com o Dr. Carlos Imberg e descubra o protocolo ideal para você.
        </p>
        <Button variant="primary" className="text-lg px-12 py-4 shadow-gold-500/20">
          Falar no WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;