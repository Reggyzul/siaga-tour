import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, Bus, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface TransportRentPageProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function TransportRentPage({ onSelectCar, lang, onNavigateHome }: TransportRentPageProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const t = TRANSLATIONS[lang];

  const categories = [
    { id: 'all', label: 'Semua Armada' },
    { id: 'cat1', label: 'Big Bus Eksekutif/Legrest & Bus Medium' },
    { id: 'cat2', label: 'Hiace' },
    { id: 'cat3', label: 'Mini Bus' }
  ];

  const filteredCars = CARS.filter(car => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'cat1') return car.category.includes('Big Bus');
    if (filterCategory === 'cat2') return car.category === 'Hiace';
    if (filterCategory === 'cat3') return car.category === 'Mini Bus';
    return true;
  });

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6282178284459';
    const message = `Halo Siaga Tour, saya berminat sewa armada: ${carName}. Mohon informasi penawaran harga, jadwal & ketersediaan unit. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-white text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER (Bayu Buana Style) */}
      <div className="relative w-full h-[230px] sm:h-[290px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest mb-1 shadow-md">
            <Bus className="w-3.5 h-3.5 text-red-300" />
            <span>CV. ANUGRAH PARIWISATA TRANSPORTATION</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            Transport Rent
          </h1>

          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-red-400 cursor-pointer">HOME</span> / TRANSPORT RENT
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
          <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Siaga Tour menyediakan pilihan armada bus eksekutif, Hiace, dan minibus MPV terawat dengan standar kenyamanan tinggi dan driver profesional berlisensi.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-[#dc2626] text-white shadow-lg shadow-red-600/25 scale-[1.02]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                {/* Photo Header: Original Full-Cover Display */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#dc2626] text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                    {car.category}
                  </div>

                  {/* Seat Capacity Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                    <Users className="w-3 h-3 text-red-600" />
                    <span>{car.seats} Kursi</span>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug group-hover:text-red-300 transition-colors">
                      {car.name}
                    </h3>
                    <div className="w-16 h-1 bg-red-500 rounded-full group-hover:w-28 transition-all duration-500" />
                  </div>
                </div>

                {/* Body Details: List of Facilities */}
                <div className="p-5 pt-1 space-y-3">
                  <p className="font-sans text-xs text-slate-600 font-medium leading-relaxed">
                    {car.description}
                  </p>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#dc2626] block">
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

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleWhatsAppBooking(car.name)}
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Sewa Armada WA</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}


