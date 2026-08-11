import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, CheckCircle2, MessageCircle, Bus, ShieldCheck } from 'lucide-react';
import { CARS } from '../data/cars';
import { Car } from '../types';

export type FleetTypeCategory = 'bus' | 'elf' | 'hiace';

interface FleetTypeModalProps {
  category: FleetTypeCategory | null;
  onClose: () => void;
  onSelectCar: (car: Car) => void;
}

export default function FleetTypeModal({ category, onClose, onSelectCar }: FleetTypeModalProps) {
  if (!category) return null;

  // Filter cars based on chosen category
  const filteredCars = CARS.filter(car => {
    if (category === 'bus') return car.category.includes('Bus') || car.id.includes('bus');
    if (category === 'elf') return car.category.includes('Elf') || car.id.includes('elf');
    if (category === 'hiace') return car.category === 'Hiace' || car.id.includes('hiace');
    return false;
  });

  const getTitleInfo = () => {
    if (category === 'bus') {
      return {
        badge: 'ARMADA BUS PARIWISATA',
        title: 'Pilihan Tipe Armada Bus Pariwisata',
        subtitle: 'Terdiri dari Big Bus VIP Legrest (30 Seat), Big Bus Eksekutif (40-59 Seat), Medium Bus Legrest VIP (18 Seat), Medium Bus (29-35 Seat) & Motorhome Suite.'
      };
    }
    if (category === 'elf') {
      return {
        badge: 'ARMADA ISUZU ELF',
        title: 'Pilihan Tipe Armada Isuzu Elf',
        subtitle: 'Terdiri dari Isuzu Elf Long (19 Seat), Elf Luxury (10 Seat), Elf Jumbo / Coaster (18 Seat) & Elf Grandtour (18 Seat).'
      };
    }
    return {
      badge: 'TOYOTA HIACE',
      title: 'Pilihan Tipe Armada Toyota Hiace',
      subtitle: 'Terdiri dari Toyota Hiace Premio 14 Seat, Hiace Premio Luxury VIP, Hiace Commuter 14 Seat & Hiace Commuter Luxury Seat.'
    };
  };

  const info = getTitleInfo();

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6281283229616';
    const message = `Halo Pak Tri Jaya Mulyana (PT. SIAGA WISATA JAYA), saya berminat sewa armada: ${carName}. Mohon informasi penawaran harga, jadwal & ketersediaan unit. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-start pt-20 sm:pt-24 pb-6 px-3 sm:px-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-0"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 text-left max-h-[calc(100vh-7rem)] flex flex-col my-auto"
        >
          {/* Modal Header */}
          <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-5 sm:p-6 shrink-0 border-b border-slate-800 z-20">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all flex items-center justify-center shadow-xl cursor-pointer z-50 hover:scale-110 border-2 border-white"
              title="Tutup Modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            <div className="space-y-1.5 pr-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-600/30 border border-blue-400/30 text-sky-300 text-[10px] font-extrabold uppercase tracking-widest">
                <Bus className="w-3.5 h-3.5" />
                <span>{info.badge} ({filteredCars.length} VARIANT)</span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                {info.title}
              </h2>
              <p className="font-sans text-xs text-slate-300 font-medium leading-relaxed">
                {info.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Scrollable Body - STRICTLY TEXT ONLY (NO IMAGES) */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3 group hover:border-blue-300"
                >
                  <div className="space-y-3">
                    {/* Header Info (No Image) */}
                    <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-1 border border-blue-200/60">
                          {car.category}
                        </span>
                        <h3 className="font-display font-black text-base text-slate-900 leading-snug">
                          {car.name}
                        </h3>
                      </div>
                      <div className="bg-slate-100 text-slate-800 font-sans text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 shrink-0 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-blue-600" />
                        <span>{car.seats} Kursi</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {car.description}
                    </p>

                    {/* Facilities List */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1.5">
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider block">
                        Fasilitas Utama Armada:
                      </span>
                      <div className="grid grid-cols-1 gap-1">
                        {car.includeList.slice(0, 4).map((inc, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Info */}
                    <div className="pt-1 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                        <span className="font-display font-black text-sm text-blue-600">
                          {car.priceDisplay}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Full AC &amp; Driver
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectCar(car);
                      }}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-display font-bold text-xs uppercase py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
                    >
                      <span>Detail Form</span>
                    </button>

                    <button
                      onClick={() => handleWhatsAppBooking(car.name)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase py-2.5 px-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Sewa WA</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800 shrink-0 z-20">
            <div className="text-xs">
              <span className="text-slate-400 block font-medium">Konsultasi ketersediaan armada?</span>
              <span className="font-bold text-white">Layanan Siaga Tour WA: 0812-8322-9616</span>
            </div>
            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-white font-display font-bold text-xs uppercase px-5 py-2.5 rounded-xl transition-colors cursor-pointer border border-slate-700"
            >
              Tutup
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
