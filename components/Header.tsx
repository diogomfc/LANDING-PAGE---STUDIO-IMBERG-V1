import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      // Manual scroll with offset to account for fixed header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'O Studio', href: '#sobre' },
    { name: 'Facial', href: '#facial' },
    { name: 'Corporal', href: '#corporal' },
    { name: 'Especialista', href: '#doutor' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-dark-950/90 backdrop-blur-md py-4 border-white/5' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" className="flex flex-col items-center group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <div className="relative">
             <span className="font-serif text-3xl text-gold-400 tracking-widest font-bold">SI</span>
           </div>
           <span className="text-[10px] text-gray-400 tracking-[0.3em] uppercase group-hover:text-gold-300 transition-colors">Studio Imberg</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="outline" className="!px-6 !py-2 text-xs">
            Agendar Agora
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gold-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-950 border-b border-white/10 p-6 flex flex-col space-y-6 shadow-2xl animate-in slide-in-from-top-5 h-screen">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-center text-gray-300 hover:text-gold-400 uppercase tracking-widest text-lg"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
             href={WHATSAPP_LINK}
             target="_blank" 
             rel="noreferrer"
             className="w-full text-center py-4 bg-gold-400 text-dark-950 font-bold uppercase tracking-wider rounded-sm"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;