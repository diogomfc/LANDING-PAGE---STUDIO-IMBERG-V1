import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-white">O que dizem nossos clientes</h2>
          <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-dark-950 p-8 rounded-sm relative border border-white/5 hover:border-gold-500/20 transition-all"
            >
              <Quote className="absolute top-6 right-6 text-gold-600/20 w-8 h-8" />
              <div className="flex space-x-1 mb-6 text-gold-400">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-400 font-light italic mb-6 leading-relaxed">"{t.text}"</p>
              <h4 className="text-white font-serif tracking-wide">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;