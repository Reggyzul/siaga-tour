import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, Bus } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
}

export default function CarList({ onSelectCar, lang }: CarListProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const t = TRANSLATIONS[lang];

  const categories = [
    { id: 'all', label: 'Semua Armada' },
    { id: 'cat1', label: 'I. Big Bus Eksekutif/Legrest & Bus Medium' },
    { id: 'cat2', label: 'II. Mobil Hiace Rental' },
    { id: 'cat3', label: 'III. Mobil Mini Bus Rental' }
  ];

  const filteredCars = CARS.filter(car => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'cat1') return car.category.startsWith('I.');
    if (filterCategory === 'cat2') return car.category.startsWith('II.');
    if (filterCategory === 'cat3') return car.category.startsWith('III.');
    return true;
  });

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6282178284459';
    const message = `Halo Siaga Tour, saya berminat sewa armada: ${carName}. Mohon informasi penawaran harga & ketersediaan tanggal. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="cars" className="py-20 bg-slate-50 text-[#0d1b37] overflow-hidden relative border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3" id="cars-heading">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0d1b37] tracking-tight leading-tight">
            Destination Highlights & Transport Rent
          </h2>

          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />

          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium max-w-2xl mx-auto">
            Fasilitas Armada Lengkap: Bus Full AC, Toilet bersih, Full Karaoke, Selimut & Bantal.
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#dc2626] text-white shadow-md shadow-red-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              key={car.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
            >
              <div className="space-y-4">
                
                {/* Image Box */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 aspect-[16/10] flex items-center justify-center p-3">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-auto object-contain max-h-[170px] drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-red-50 text-red-700 border border-red-200 font-display font-bold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-xs">
                    {car.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-700 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-xs">
                    <Users className="w-3.5 h-3.5 text-[#dc2626]" />
                    <span>{car.seats} Kursi</span>
                  </div>
                </div>

                {/* Car Name & Sub-description */}
                <div>
                  <h3 className="font-display font-black text-xl text-[#0d1b37] group-hover:text-[#dc2626] transition-colors uppercase tracking-tight">
                    {car.name}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed mt-1 font-medium">
                    {car.description}
                  </p>
                </div>

                {/* FACILITIES CHECKLIST */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#dc2626] block">Fasilitas Utama:</span>
                  <div className="space-y-1">
                    {car.includeList.map((facility, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span className="line-clamp-1">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => handleWhatsAppBooking(car.name)}
                  className="flex-1 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-xs uppercase py-3 px-3 rounded-xl shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Pesan WA</span>
                </button>

                <button
                  onClick={() => onSelectCar(car)}
                  className="bg-slate-100 hover:bg-slate-200 text-[#0d1b37] border border-slate-200 font-sans font-bold text-xs uppercase py-3 px-3 rounded-xl transition-all cursor-pointer"
                  title="Form Reservasi Lengkap"
                >
                  Book Tour
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


