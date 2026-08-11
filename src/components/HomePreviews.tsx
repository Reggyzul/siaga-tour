import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CARS } from '../data/cars';
import { TOUR_PACKAGES } from '../data/packages';
import { Car } from '../types';
import { Users, Calendar, ArrowRight, ChevronDown, Sparkles, Bus, Layers, ShieldCheck } from 'lucide-react';
import BusElfModal from './BusElfModal';

interface HomePreviewsProps {
  onNavigateToRentals: () => void;
  onNavigateToPackages: () => void;
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
}

export default function HomePreviews({
  onNavigateToRentals,
  onNavigateToPackages,
  onSelectCar,
  lang
}: HomePreviewsProps) {
  const [isBusElfModalOpen, setIsBusElfModalOpen] = useState(false);

  // Get specific car items for display
  const avanza = CARS.find(c => c.id === 'avanza') || CARS[0];
  const innova = CARS.find(c => c.id === 'innova') || CARS[1];
  const hiace = CARS.find(c => c.id === 'hiace-premio-14') || CARS[2];
  const displayedPackages = TOUR_PACKAGES.slice(0, 6);

  return (
    <div className="space-y-16 py-12 bg-slate-50 border-b border-slate-200/80">
      
      {/* 1. KATALOG ARMADA UNGGULAN (DENGAN BINGKAI GABUNGAN BUS & ELF) */}
      <section id="cars-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-display font-extrabold text-xs tracking-wider uppercase">
            <Bus className="w-4 h-4 text-blue-600" />
            <span>KATALOG ARMADA UNGGULAN</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Pilihan Armada Terawat &amp; Nyaman
          </h2>

          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />

          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Tersedia pilihan sewa Toyota Avanza, Toyota Innova, Toyota Hiace, serta **Bingkai Gabungan Armada Bus &amp; Elf Pariwisata**.
          </p>
        </div>

        {/* Fleet Grid: 4 Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          
          {/* Card 1: Avanza */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 aspect-[16/10] flex items-center justify-center p-3">
                <img src={avanza.image} alt={avanza.name} className="w-full h-auto object-contain max-h-[140px] drop-shadow-md group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2.5 left-2.5 bg-blue-50 text-blue-700 border border-blue-200 font-display font-bold text-[10px] uppercase px-2 py-0.5 rounded-full">
                  {avanza.category}
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-700 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>{avanza.seats} Kursi</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-base text-slate-900 tracking-tight">{avanza.name}</h3>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-2 mt-1">{avanza.description}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                  <span className="font-display font-black text-sm text-blue-600">{avanza.priceDisplay}</span>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <button onClick={() => onSelectCar(avanza)} className="w-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs uppercase py-2.5 px-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                <span>Pesan Armada</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Innova */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 aspect-[16/10] flex items-center justify-center p-3">
                <img src={innova.image} alt={innova.name} className="w-full h-auto object-contain max-h-[140px] drop-shadow-md group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2.5 left-2.5 bg-blue-50 text-blue-700 border border-blue-200 font-display font-bold text-[10px] uppercase px-2 py-0.5 rounded-full">
                  {innova.category}
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-700 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>{innova.seats} Kursi</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-base text-slate-900 tracking-tight">{innova.name}</h3>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-2 mt-1">{innova.description}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                  <span className="font-display font-black text-sm text-blue-600">{innova.priceDisplay}</span>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <button onClick={() => onSelectCar(innova)} className="w-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs uppercase py-2.5 px-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                <span>Pesan Armada</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: Hiace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 aspect-[16/10] flex items-center justify-center p-3">
                <img src={hiace.image} alt={hiace.name} className="w-full h-auto object-contain max-h-[140px] drop-shadow-md group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2.5 left-2.5 bg-blue-50 text-blue-700 border border-blue-200 font-display font-bold text-[10px] uppercase px-2 py-0.5 rounded-full">
                  {hiace.category}
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-700 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>{hiace.seats} Kursi</span>
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-base text-slate-900 tracking-tight">{hiace.name}</h3>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-2 mt-1">{hiace.description}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                  <span className="font-display font-black text-sm text-blue-600">{hiace.priceDisplay}</span>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <button onClick={() => onSelectCar(hiace)} className="w-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs uppercase py-2.5 px-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                <span>Pesan Armada</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 4: COMBINED BUS & ELF FRAME CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            onClick={() => setIsBusElfModalOpen(true)}
            className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-blue-500 rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer text-white"
          >
            <div className="space-y-3">
              {/* Photo Header */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] flex items-center justify-center">
                <img src="/miyor.avif" alt="Armada Bus & Elf Pariwisata" className="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white font-display font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-md">
                  GABUNGAN BUS &amp; ELF
                </div>

                <div className="absolute top-2.5 right-2.5 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>10 - 59 Kursi</span>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                  <span className="text-[10px] font-extrabold uppercase text-sky-300 block tracking-wider">
                    9 VARIANT TIPE BUS &amp; ELF
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-base text-white tracking-tight uppercase group-hover:text-sky-300 transition-colors">
                  Armada Bus &amp; Elf Pariwisata
                </h3>
                <p className="text-[11px] text-slate-300 font-medium line-clamp-2 mt-1">
                  Big Bus VIP Legrest, Big Bus Eksekutif, Medium Bus, Elf Long 19 Seat &amp; Motorhome Luxury.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                  <span className="font-display font-black text-sm text-sky-300">Start Rp 1.100.000</span>
                </div>
                <span className="text-[9px] font-extrabold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-700/60">
                  Lihat Detail Pop-up ➔
                </span>
              </div>
            </div>

            <div className="pt-3">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBusElfModalOpen(true);
                }} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase py-2.5 px-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Lihat Detail Tipe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Action Button: Selengkapnya (Halaman Armada) */}
        <div className="text-center pt-10">
          <button
            onClick={onNavigateToRentals}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-display font-black text-xs sm:text-sm uppercase rounded-2xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer tracking-wider"
          >
            <span>Selengkapnya</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </section>

      {/* 2. PREVIEW 6 PAKET TOUR */}
      <section id="packages-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pt-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-display font-extrabold text-xs tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>PAKET TOUR POPULER</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Paket Perjalanan Wisata Pilihan
          </h2>

          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />

          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Layanan Study Tour, Outbound, Wisata Religi &amp; Gathering Rombongan dengan pilihan Paket Menginap maupun One Day Tour (PP).
          </p>
        </div>

        {/* 6 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedPackages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-md shadow-sm">
                    {pkg.badge}
                  </div>

                  <div className="absolute top-3 right-3 bg-slate-900/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md border border-slate-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-sky-400" />
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-display font-black text-lg tracking-tight uppercase leading-snug">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3.5 text-left">
                  {/* Route Summary */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Rute Perjalanan
                    </span>
                    <p className="text-xs font-semibold text-slate-700 leading-snug">
                      {pkg.routeDisplay}
                    </p>
                  </div>

                  {/* Pricing Tiers Preview */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Mulai Dari</span>
                      <span className="font-display font-black text-base text-blue-600">
                        {pkg.minPrice} <span className="text-[10px] font-normal text-slate-500">/ org</span>
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      Eksekutif &amp; VIP
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={onNavigateToPackages}
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs uppercase py-3 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lihat Detail Paket</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button: Selengkapnya (Halaman Paket Tour) */}
        <div className="text-center pt-10">
          <button
            onClick={onNavigateToPackages}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-display font-black text-xs sm:text-sm uppercase rounded-2xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer tracking-wider"
          >
            <span>Selengkapnya</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </section>

      {/* POPUP MODAL FOR COMBINED BUS & ELF (TEXT ONLY, NO IMAGES IN POPUP) */}
      <BusElfModal
        isOpen={isBusElfModalOpen}
        onClose={() => setIsBusElfModalOpen(false)}
        onSelectCar={onSelectCar}
      />

    </div>
  );
}
