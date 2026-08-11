import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CARS } from '../data/cars';
import { TOUR_PACKAGES } from '../data/packages';
import { Car } from '../types';
import { Users, Calendar, ArrowRight, ChevronDown, Sparkles, Bus } from 'lucide-react';
import FleetTypeModal, { FleetTypeCategory } from './FleetTypeModal';

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
  const [activeModalCategory, setActiveModalCategory] = useState<FleetTypeCategory | null>(null);

  // Get specific car items for display
  const avanza = CARS.find(c => c.id === 'avanza') || CARS[0];
  const innova = CARS.find(c => c.id === 'innova') || CARS[1];
  const displayedPackages = TOUR_PACKAGES.slice(0, 6);

  return (
    <div className="space-y-16 py-12 bg-slate-50 border-b border-slate-200/80">
      
      {/* 1. KATALOG ARMADA UNGGULAN (FULL GAMBAR COVER BINGKAI SERAGAM UNTUK SEMUA ARMADA) */}
      <section id="cars-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pt-2">
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
            Layanan sewa kendaraan prima &amp; profesional untuk perjalanan wisata, study tour, gathering kantor, serta dinas keluarga.
          </p>
        </div>

        {/* Fleet Grid: 5 Display Cards (Full Frame Cover Image for All Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          
          {/* Card 1: Toyota Avanza (Full Cover Image Frame) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
          >
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] flex items-center justify-center">
                <img src={avanza.image} alt={avanza.name} className="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white font-display font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-md">
                  TOYOTA AVANZA
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs border border-slate-200">
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

          {/* Card 2: Toyota Innova (Full Cover Image Frame) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
          >
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] flex items-center justify-center">
                <img src={innova.image} alt={innova.name} className="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white font-display font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-md">
                  TOYOTA INNOVA
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs border border-slate-200">
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

          {/* Card 3: Toyota Hiace (Full Cover Image Frame) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            onClick={() => setActiveModalCategory('hiace')}
            className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer text-left"
          >
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] flex items-center justify-center">
                <img src="/hiace_premio.jpg" alt="Toyota Hiace" className="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white font-display font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-md">
                  TOYOTA HIACE
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs border border-slate-200">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>10 - 14 Kursi</span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-base text-slate-900 tracking-tight">
                  Toyota Hiace
                </h3>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-2 mt-1">
                  Hiace Premio 14 Seat, Premio Luxury VIP, Commuter 14 Seat &amp; Luxury Seat.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                  <span className="font-display font-black text-sm text-blue-600">Start Rp 1.100.000</span>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalCategory('hiace');
                }} 
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs uppercase py-2.5 px-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Lihat Tipe Hiace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 4: Isuzu Elf (Full Cover Image Frame) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            onClick={() => setActiveModalCategory('elf')}
            className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer text-left"
          >
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] flex items-center justify-center">
                <img src="/elf_long.jpg" alt="Isuzu Elf" className="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white font-display font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-md">
                  ISUZU ELF
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs border border-slate-200">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>10 - 19 Kursi</span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-base text-slate-900 tracking-tight">
                  Isuzu Elf
                </h3>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-2 mt-1">
                  Elf Long 19 Seat, Elf Luxury 10 Seat, Elf Jumbo/Coaster 18 Seat &amp; Elf Grandtour.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                  <span className="font-display font-black text-sm text-blue-600">Start Rp 1.100.000</span>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalCategory('elf');
                }} 
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs uppercase py-2.5 px-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Lihat Tipe Elf</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 5: Bus Pariwisata (Full Cover Image Frame) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            onClick={() => setActiveModalCategory('bus')}
            className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer text-left"
          >
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] flex items-center justify-center">
                <img src="/miyor.avif" alt="Bus Pariwisata" className="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white font-display font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-md">
                  BUS PARIWISATA
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs border border-slate-200">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>18 - 59 Kursi</span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-base text-slate-900 tracking-tight">
                  Bus Pariwisata
                </h3>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-2 mt-1">
                  Big Bus VIP Legrest, Big Bus Eksekutif, Medium Bus VIP, Medium Bus Standard &amp; Motorhome.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                  <span className="font-display font-black text-sm text-blue-600">Start Rp 2.000.000</span>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalCategory('bus');
                }} 
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs uppercase py-2.5 px-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Lihat Tipe Bus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

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
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
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

      {/* POPUP MODAL (STRICTLY TEXT ONLY, NO IMAGES IN POPUP) FOR BUS / ELF / HIACE */}
      <FleetTypeModal
        category={activeModalCategory}
        onClose={() => setActiveModalCategory(null)}
        onSelectCar={onSelectCar}
      />

    </div>
  );
}
