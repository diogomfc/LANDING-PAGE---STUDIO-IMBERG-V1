import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { FACIAL_PROCEDURES, BODY_PROCEDURES_COL1, BODY_PROCEDURES_COL2 } from '../constants';

const Services: React.FC = () => {
  return (
    <>
      {/* Facial Section */}
      <section id="facial" className="py-24 bg-dark-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Tratamentos</span>
            <h2 className="font-serif text-4xl text-white mt-3">Estética Facial</h2>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACIAL_PROCEDURES.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 bg-dark-950/50 border border-white/5 hover:border-gold-500/30 hover:bg-dark-950 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles className="w-12 h-12 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif text-gray-100 mb-3 group-hover:text-gold-300 transition-colors">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Section */}
      <section id="corporal" className="py-24 bg-dark-950 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Bem-estar</span>
            <h2 className="font-serif text-4xl text-white mt-3">Estética Corporal</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-light">
              Tecnologias avançadas para remodelar seu corpo e elevar sua autoestima.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Column 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-900/50 p-8 md:p-12 rounded-sm border border-white/5 hover:border-gold-500/20 transition-colors"
            >
              <ul className="space-y-4">
                {BODY_PROCEDURES_COL1.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-5 h-5 text-gold-500/50 group-hover:text-gold-400 transition-colors shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-light text-lg group-hover:text-white transition-colors">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2 */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-dark-900/50 p-8 md:p-12 rounded-sm border border-white/5 hover:border-gold-500/20 transition-colors"
            >
              <ul className="space-y-4">
                {BODY_PROCEDURES_COL2.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-5 h-5 text-gold-500/50 group-hover:text-gold-400 transition-colors shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-light text-lg group-hover:text-white transition-colors">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;