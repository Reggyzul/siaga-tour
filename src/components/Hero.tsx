import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Search, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function Hero({ onExploreClick, lang, onBookingClick }: HeroProps) {
  const [destinationInput, setDestinationInput] = useState('Semua Paket Tour Wisata');
  const [travelDateInput, setTravelDateInput] = useState('');

  const t = TRANSLATIONS[lang];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6281283229616';
    const message = `Halo Pak Tri Jaya Mulyana (PT. SIAGA WISATA JAYA), saya ingin konsultasi paket wisata: ${destinationInput}${travelDateInput ? ` (Rencana Tanggal: ${travelDateInput})` : ''}. Mohon informasi ketersediaan & penawaran terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="home" className="relative pt-16 pb-4 bg-white overflow-hidden text-center">
      
      {/* 1. HERO MOUNTAIN SCENIC BANNER (Presisi Kebawah Dengan Struktur Sebelumnya) */}
      <div className="relative w-full min-h-[500px] sm:min-h-[540px] flex flex-col justify-between bg-slate-900 text-white overflow-hidden border-b border-slate-200">
        
        {/* Full-width Scenic Mountain Background Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920')`
          }}
        />

        {/* Dark Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/45 to-slate-950/75" />

        {/* Top Spacer: Memberikan jarak sedikit kebawah secara presisi */}
        <div className="h-20 sm:h-24" />

        {/* Hero Central Typography */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-6 text-center space-y-3 sm:space-y-4">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-lg"
            style={{ fontFamily: "'Great Vibes', cursive, serif" }}
          >
            {t.hero_explore}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none drop-shadow-lg"
          >
            {t.hero_title_1}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm font-sans font-bold text-red-300 tracking-wider uppercase drop-shadow-sm"
          >
            <span>{t.hero_motto}</span>
          </motion.div>
        </div>

        {/* Bottom Spacer inside Banner */}
        <div className="h-16 sm:h-20" />

      </div>

      {/* 2. ELEVATED SEARCH TOUR BOX */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-20">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 text-left">
          
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Field 1: Destination Category Selection */}
            <div className="md:col-span-5 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wide">
                {t.search_dest_cat}
              </label>
              <div className="flex items-center gap-2 mt-1 relative">
                <MapPin className="w-4 h-4 text-[#dc2626] shrink-0" />
                <select
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  className="w-full text-xs sm:text-sm font-black text-slate-900 focus:outline-none bg-transparent cursor-pointer appearance-none pr-4"
                >
                  <option value="Semua Paket Tour Wisata">Semua Paket Tour Wisata</option>
                  <option value="Paket Tour Menginap (Bali, Bromo, Jogja, Dieng, Semarang)">Paket Tour Menginap (Bali, Bromo, Jogja, Dieng, Semarang)</option>
                  <option value="Paket Tour One Day / PP (Lembang, Kuningan, Majalengka, Pangalengan, Anyer)">Paket Tour One Day / PP (Lembang, Kuningan, Majalengka, Pangalengan, Anyer)</option>
                  <option value="Paket Wisata Bali (5D4N)">Paket Wisata Bali (5D4N)</option>
                  <option value="Paket Wisata Bromo - Batu - Malang (4D)">Paket Wisata Bromo - Batu - Malang (4D)</option>
                  <option value="Paket Wisata Jogja - Solo - Klaten (3D)">Paket Wisata Jogja - Solo - Klaten (3D)</option>
                  <option value="Paket Wisata Semarang - Ungaran - Magelang (3D)">Paket Wisata Semarang - Ungaran - Magelang (3D)</option>
                  <option value="Paket Wisata Dieng - Wonosobo (3D)">Paket Wisata Dieng - Wonosobo (3D)</option>
                  <option value="Paket Wisata Lembang Bandung (PP)">Paket Wisata Lembang Bandung (PP)</option>
                  <option value="Paket Wisata Kuningan (PP)">Paket Wisata Kuningan (PP)</option>
                  <option value="Paket Wisata Majalengka (PP)">Paket Wisata Majalengka (PP)</option>
                  <option value="Paket Wisata Pangalengan + Rafting (PP)">Paket Wisata Pangalengan + Rafting (PP)</option>
                  <option value="Paket Wisata Pantai Anyer (PP)">Paket Wisata Pantai Anyer (PP)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-0 pointer-events-none" />
              </div>
            </div>

            {/* Field 2: Travel Dates */}
            <div className="md:col-span-4 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wide">
                {t.search_travel_date}
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-red-500 shrink-0" />
                <input
                  type="text"
                  value={travelDateInput}
                  onChange={(e) => setTravelDateInput(e.target.value)}
                  placeholder={t.search_date_placeholder}
                  className="w-full text-xs font-semibold text-slate-700 focus:outline-none bg-transparent placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Field 3: Search Tour Button */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-display font-extrabold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer tracking-wider"
              >
                <Search className="w-4 h-4" />
                <span>{t.search_btn}</span>
              </button>
            </div>

          </form>
        </div>

      </div>

    </section>
  );
}

