import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, Bus, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';
import BusElfModal from './BusElfModal';

interface TransportRentPageProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function TransportRentPage({ onSelectCar, lang, onNavigateHome }: TransportRentPageProps) {
  const [isBusElfModalOpen, setIsBusElfModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const t = TRANSLATIONS[lang];

  // Separate individual cars (Avanza, Innova, Hiace) from Bus & Elf
  const nonBusElfCars = CARS.filter(c => !c.category.includes('Bus') && !c.category.includes('Elf') && !c.id.includes('elf') && !c.id.includes('bus'));

  const categories = [
    { id: 'all', label: 'Semua Armada' },
    { id: 'cat1', label: 'Minibus MPV (Avanza & Innova)' },
    { id: 'cat2', label: 'Toyota Hiace' },
    { id: 'cat3', label: 'Bus & Elf Pariwisata' }
  ];

  const filteredCars = nonBusElfCars.filter(car => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'cat1') return car.category === 'Mini Bus';
    if (filterCategory === 'cat2') return car.category === 'Hiace';
    return true;
  });

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6281283229616';
    const message = `Halo Pak Tri Jaya Mulyana (PT. SIAGA WISATA JAYA), saya berminat sewa armada: ${carName}. Mohon informasi penawaran harga, jadwal & ketersediaan unit. Terima kasih!`;
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
            Siaga Tour menyediakan pilihan sewa kendaraan Toyota Avanza, Innova, Hiace, serta **Bingkai Gabungan Armada Bus &amp; Elf Pariwisata**.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                if (cat.id === 'cat3') {
                  setIsBusElfModalOpen(true);
                } else {
                  setFilterCategory(cat.id);
                }
              }}
              className={`px-5 py-3 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-[1.02]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Combined Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* COMBINED BUS & ELF CARD BINGKAI */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setIsBusElfModalOpen(true)}
            className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-blue-500 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left text-white"
          >
            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/miyor.avif"
                  alt="Armada Bus & Elf Pariwisata"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-blue-600 text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                  GABUNGAN BUS &amp; ELF
                </div>

                <div className="absolute top-3 right-3 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                  <Users className="w-3 h-3 text-blue-600" />
                  <span>10 - 59 Kursi</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors uppercase">
                    Armada Bus &amp; Elf Pariwisata
                  </h3>
                  <div className="w-16 h-1 bg-blue-500 rounded-full group-hover:w-28 transition-all duration-500" />
                </div>
              </div>

              <div className="p-5 pt-1 space-y-3">
                <p className="font-sans text-xs text-slate-300 font-medium leading-relaxed">
                  Menyediakan Big Bus VIP Legrest, Big Bus Eksekutif, Medium Bus, Elf Long 19 Seat, Coaster &amp; Motorhome Luxury.
                </p>

                <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-400 block">
                  9 Variant Tipe Bus &amp; Elf Tersedia
                </span>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span>Big Bus VIP Legrest 30 Seat &amp; Eksekutif 59 Seat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span>Medium Bus VIP 18 Seat &amp; Standard 35 Seat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span>Elf Long 19 Seat, Coaster &amp; Grandtour</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBusElfModalOpen(true);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Bus className="w-4 h-4" />
                <span>Lihat Pop-up Tipe Bus &amp; Elf</span>
              </button>
            </div>
          </motion.div>

          {/* INDIVIDUAL CAR CARDS (Avanza, Innova, Hiace) */}
          {filteredCars.map((car, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
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

      {/* POPUP MODAL FOR COMBINED BUS & ELF (TEXT ONLY, NO IMAGES IN POPUP) */}
      <BusElfModal
        isOpen={isBusElfModalOpen}
        onClose={() => setIsBusElfModalOpen(false)}
        onSelectCar={onSelectCar}
      />
    </div>
  );
}
