import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, Bus, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';
import FleetTypeModal, { FleetTypeCategory } from './FleetTypeModal';

interface TransportRentPageProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function TransportRentPage({ onSelectCar, lang, onNavigateHome }: TransportRentPageProps) {
  const [activeModalCategory, setActiveModalCategory] = useState<FleetTypeCategory | null>(null);
  const t = TRANSLATIONS[lang];

  // Individual MPV cars (Avanza, Innova)
  const mpvCars = CARS.filter(c => c.category === 'Mini Bus');

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6285283448585';
    const message = `Halo Siaga Tour, saya berminat sewa armada: ${carName}. Mohon informasi penawaran harga, jadwal & ketersediaan unit. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-white text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="relative w-full h-[230px] sm:h-[290px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest mb-1 shadow-md">
            <Bus className="w-3.5 h-3.5 text-blue-300" />
            <span>CV. ANUGRAH PARIWISATA TRANSPORTATION</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            Transport Rent
          </h1>

          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-blue-400 cursor-pointer">HOME</span> / TRANSPORT RENT
          </p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Page Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            Layanan Sewa Armada Pariwisata
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Layanan sewa kendaraan prima &amp; profesional untuk perjalanan wisata, study tour, gathering kantor, serta dinas keluarga.
          </p>
        </div>

        {/* 4 CATEGORY / FLEET CARDS GRID (WHITE CARD THEMING) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: BUS PARIWISATA (WHITE CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setActiveModalCategory('bus')}
            className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
          >
            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/bus.jpg"
                  alt="Bus Pariwisata"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-blue-600 text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                  BUS PARIWISATA
                </div>

                <div className="absolute top-3 right-3 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>18 - 59 Kursi</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors uppercase">
                    Bus Pariwisata
                  </h3>
                  <div className="w-16 h-1 bg-blue-500 rounded-full group-hover:w-28 transition-all duration-500" />
                </div>
              </div>

              <div className="p-5 pt-1 space-y-3">
                <p className="font-sans text-xs text-slate-600 font-medium leading-relaxed">
                  Menyediakan Big Bus VIP Legrest, Big Bus Eksekutif, Medium Bus VIP Legrest, Medium Bus Standard &amp; Motorhome Luxury.
                </p>

                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 block">
                  5 Variant Tipe Bus Tersedia
                </span>

                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Big Bus VIP Legrest 30 Seat &amp; Eksekutif 59 Seat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Medium Bus VIP 18 Seat &amp; Standard 35 Seat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Motorhome Suite VIP Luxury Hotel Berjalan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalCategory('bus');
                }}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Bus className="w-4 h-4" />
                <span>Lihat Tipe Bus</span>
              </button>
            </div>
          </motion.div>

          {/* CARD 2: ISUZU ELF (WHITE CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            onClick={() => setActiveModalCategory('elf')}
            className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
          >
            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/elf_long.jpg"
                  alt="Isuzu Elf"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-blue-600 text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                  ISUZU ELF
                </div>

                <div className="absolute top-3 right-3 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>10 - 19 Kursi</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors uppercase">
                    Isuzu Elf
                  </h3>
                  <div className="w-16 h-1 bg-blue-500 rounded-full group-hover:w-28 transition-all duration-500" />
                </div>
              </div>

              <div className="p-5 pt-1 space-y-3">
                <p className="font-sans text-xs text-slate-600 font-medium leading-relaxed">
                  Menyediakan Isuzu Elf Long 19 Seat, Elf Luxury 10 Seat, Elf Jumbo / Coaster 18 Seat &amp; Elf Grandtour.
                </p>

                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 block">
                  4 Variant Tipe Elf Tersedia
                </span>

                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Isuzu Elf Long 19 Seat Full AC &amp; Audio Karaoke</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Elf Luxury 10 Captain Seat Leather VIP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Elf Jumbo / Coaster High Ceiling 18 Seat</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalCategory('elf');
                }}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Bus className="w-4 h-4" />
                <span>Lihat Tipe Elf</span>
              </button>
            </div>
          </motion.div>

          {/* CARD 3: TOYOTA HIACE (WHITE CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            onClick={() => setActiveModalCategory('hiace')}
            className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
          >
            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/hiace_premio.jpg"
                  alt="Toyota Hiace"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 bg-blue-600 text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                  TOYOTA HIACE
                </div>

                <div className="absolute top-3 right-3 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>10 - 14 Kursi</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors uppercase">
                    Toyota Hiace
                  </h3>
                  <div className="w-16 h-1 bg-blue-500 rounded-full group-hover:w-28 transition-all duration-500" />
                </div>
              </div>

              <div className="p-5 pt-1 space-y-3">
                <p className="font-sans text-xs text-slate-600 font-medium leading-relaxed">
                  Toyota Hiace Premio 14 Seat, Hiace Premio Luxury VIP, Hiace Commuter 14 Seat &amp; Hiace Commuter Luxury Seat.
                </p>

                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 block">
                  4 Variant Tipe Hiace Tersedia
                </span>

                <div className="space-y-1.5 text-xs text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Hiace Premio 14 Seat Dual Zone Silent Kabin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Hiace Commuter 14 Seat &amp; Luxury Leather</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalCategory('hiace');
                }}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Bus className="w-4 h-4" />
                <span>Lihat Tipe Hiace</span>
              </button>
            </div>
          </motion.div>

          {/* CARD 4: INDIVIDUAL MPV CARDS (Avanza & Innova) */}
          {mpvCars.map((car, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              key={car.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-blue-600 text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                    {car.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                    <Users className="w-3 h-3 text-blue-600" />
                    <span>{car.seats} Kursi</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors">
                      {car.name}
                    </h3>
                    <div className="w-16 h-1 bg-blue-500 rounded-full group-hover:w-28 transition-all duration-500" />
                  </div>
                </div>

                <div className="p-5 pt-1 space-y-3">
                  <p className="font-sans text-xs text-slate-600 font-medium leading-relaxed">
                    {car.description}
                  </p>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 block">
                    Fasilitas Utama Armada:
                  </span>

                  <div className="space-y-1.5">
                    {car.includeList.slice(0, 4).map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => handleWhatsAppBooking(car.name)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Sewa Armada WA</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* POPUP MODAL (STRICTLY TEXT ONLY, NO IMAGES IN POPUP) FOR BUS / ELF / HIACE */}
      <FleetTypeModal
        category={activeModalCategory}
        onClose={() => setActiveModalCategory(null)}
        onSelectCar={onSelectCar}
      />
    </div>
  );
}
