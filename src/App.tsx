import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import DestinationHighlightsPage from './components/DestinationHighlightsPage';
import PackageTourPage from './components/PackageTourPage';
import TransportRentPage from './components/TransportRentPage';
import GalleryPage from './components/GalleryPage';
import BookingSteps from './components/BookingSteps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Car } from './types';
import { CARS } from './data/cars';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from './utils/translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'rentals' | 'destinations' | 'package-tour' | 'gallery'>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      if (currentPage === 'home') {
        const sections = ['home', 'destinations', 'cars', 'footer-contact'];
        const scrollPosition = window.scrollY + 250;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'about-page' || sectionId === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
    } else if (sectionId === 'cars' || sectionId === 'rentals' || sectionId === 'transport-rent') {
      setCurrentPage('rentals');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('rentals');
    } else if (sectionId === 'destinations-page' || sectionId === 'destinations') {
      setCurrentPage('destinations');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('destinations');
    } else if (sectionId === 'package-tour-page' || sectionId === 'package-tour' || sectionId === 'packages') {
      setCurrentPage('package-tour');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('package-tour');
    } else if (sectionId === 'gallery-page' || sectionId === 'gallery') {
      setCurrentPage('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('gallery');
    } else if (sectionId === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }
    }
  };

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppChat = () => {
    const waNumber = '6281283229616';
    const text = encodeURIComponent('Halo Pak Tri Jaya Mulyana (PT. SIAGA WISATA JAYA), saya ingin berkonsultasi mengenai paket tour & sewa kendaraan. Mohon bantuannya.');
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <div 
      className="relative min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white font-sans" 
      id="main-app-container"
    >
      
      {/* Navigation Header */}
      <Header 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        lang={lang} 
        setLang={setLang} 
        onBookingClick={() => setSelectedCar(CARS[0])}
      />

      {/* Main Page Content Flow */}
      <main className="relative z-10">
        {currentPage === 'home' ? (
          <>
            <Hero 
              onExploreClick={() => handleNavClick('destinations')} 
              lang={lang} 
              onBookingClick={() => setSelectedCar(CARS[0])} 
            />

            <Services 
              lang={lang} 
              onViewAllDestinations={() => handleNavClick('destinations')}
            />

            <BookingSteps lang={lang} />

            <Testimonials lang={lang} />
          </>
        ) : currentPage === 'about' ? (
          <AboutPage lang={lang} onNavigateHome={() => handleNavClick('home')} />
        ) : currentPage === 'destinations' ? (
          <DestinationHighlightsPage lang={lang} onNavigateHome={() => handleNavClick('home')} />
        ) : currentPage === 'package-tour' ? (
          <PackageTourPage lang={lang} onNavigateHome={() => handleNavClick('home')} />
        ) : currentPage === 'gallery' ? (
          <GalleryPage lang={lang} onNavigateHome={() => handleNavClick('home')} />
        ) : (
          <TransportRentPage 
            onSelectCar={handleSelectCar} 
            lang={lang} 
            onNavigateHome={() => handleNavClick('home')} 
          />
        )}
      </main>

      {/* Footer Contact */}
      <Footer onNavigateSection={handleNavClick} lang={lang} />

      {/* Booking Popup Modal */}
      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} lang={lang} onCarChange={setSelectedCar} />

      {/* FLOATING ASSISTANT AVATAR WIDGET */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700 mb-1"
              title="Kembali ke atas"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Official WhatsApp Floating Action Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsAppChat}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-all cursor-pointer border-2 border-white relative group"
          id="floating-whatsapp-widget"
          title="Chat WhatsApp Resmi Siaga Tour"
        >
          {/* Official WhatsApp SVG Logo */}
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.16 4.237 4.403-1.154z"/>
          </svg>

          {/* Online Pulse Status Dot */}
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white absolute bottom-0 right-0 shadow-xs animate-pulse" />
        </motion.div>

      </div>

    </div>
  );
}


