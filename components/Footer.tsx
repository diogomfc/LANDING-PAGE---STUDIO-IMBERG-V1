import React from 'react';
import { Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react';
import Button from './Button';
import { DISPLAY_PHONE, CONTACT_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="font-serif text-3xl text-gold-400 font-bold tracking-widest">
              SI
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Studio Imberg. Referência em estética avançada, proporcionando beleza, saúde e bem-estar com sofisticação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              {/* Add more social icons if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Menu</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#facial" className="hover:text-gold-400 transition-colors">Tratamentos Faciais</a></li>
              <li><a href="#corporal" className="hover:text-gold-400 transition-colors">Tratamentos Corporais</a></li>
              <li><a href="#doutor" className="hover:text-gold-400 transition-colors">Sobre Dr. Carlos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Av. Trindade, 254 - sala 1513<br />
                  Bethaville I, Barueri - SP<br />
                  06404-326
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>{DISPLAY_PHONE}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold-400 transition-colors break-all">{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Horário</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-500/50" />
                <span>Seg - Sex: 09h às 19h</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-500/50" />
                <span>Sáb: 09h às 14h</span>
              </li>
            </ul>
            <div className="mt-6">
               <Button variant="outline" className="!px-4 !py-2 text-xs w-full">Agendar Avaliação</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Studio Imberg. Todos os direitos reservados.</p>
          <p>Desenvolvido com excelência.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;