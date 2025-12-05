import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Doctor: React.FC = () => {
  return (
    <section id="doutor" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Doctor Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 relative"
          >
            <div className="absolute top-4 -left-4 w-full h-full border border-gold-500/20 rounded-sm z-0" />
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              {/* 
                 IMPORTANT: Replace the src below with the local path to your uploaded image, e.g., "/dr-carlos.jpg"
                 I have removed the 'grayscale' class so your colorful photo will shine.
              */}
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                alt="Dr. Carlos Imberg" 
                className="w-full h-auto object-cover hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-dark-950 to-transparent h-24" />
            </div>
          </motion.div>

          {/* Doctor Bio */}
          <motion.div 
            className="w-full md:w-7/12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 text-sm tracking-[0.2em] uppercase mb-2 block">Especialista</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Dr. Carlos Imberg</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 italic border-l-2 border-gold-500 pl-6">
              "A verdadeira estética vai além da superfície. É sobre devolver a confiança e realçar a beleza única que existe em cada paciente."
            </p>

            <div className="space-y-4 text-gray-400 font-light mb-8">
              <p>
                Com anos de experiência em estética avançada, Dr. Carlos Imberg é referência em procedimentos que unem técnica apurada e visão artística. Seu atendimento é pautado no respeito à anatomia individual e na busca por resultados naturais e harmônicos.
              </p>
              <p>
                Especialista em harmonização facial e contorno corporal, dedica-se a atualizar constantemente seus conhecimentos com as tecnologias mais recentes do mercado, garantindo segurança e eficácia em cada protocolo realizado no Studio Imberg.
              </p>
            </div>

            <Button variant="outline">Agendar consulta com Dr. Carlos</Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Doctor;