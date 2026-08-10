import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, CheckCircle2, MessageCircle, Bus, ShieldCheck, ArrowRight } from 'lucide-react';
import { CARS } from '../data/cars';
import { Car } from '../types';

export interface FleetCategoryGroup {
  id: 'bus' | 'hiace' | 'elf';
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  priceDisplay: string;
  variantsCount: number;
  seatsRange: string;
  carIds: string[];
}

export const FLEET_GROUPS: FleetCategoryGroup[] = [
  {
    id: 'bus',
    title: 'Semua Bus Pariwisata',
    subtitle: 'Big Bus VIP Legrest, Big Bus Eksekutif, Medium Bus & Bus Luxury Motorhome',
    badge: 'BUS PARIWISATA',
    image: '/miyor.avif',
    priceDisplay: 'Start from Rp 2.000.000',
    variantsCount: 5,
    seatsRange: '18 - 59 Kursi',
    carIds: ['bigbus-legrest-30', 'bigbus-standard-40-59', 'medium-bus-legrest-18', 'medium-bus-standard', 'bus-luxury-motorhome']
  },
  {
    id: 'hiace',
    title: 'Semua Toyota Hiace',
    subtitle: 'Hiace Premio 14 Seat, Hiace Premio Luxury VIP, Hiace Commuter & Hiace Luxury Seat',
    badge: 'TOYOTA HIACE',
    image: '/hiace_premio.avif',
    priceDisplay: 'Start from Rp 1.100.000',
    variantsCount: 4,
    seatsRange: '10 - 14 Kursi',
    carIds: ['hiace-premio-luxury', 'hiace-premio-14', 'hiace-commuter-luxury', 'hiace-commuter-14']
  },
  {
    id: 'elf',
    title: 'Semua Elf & Minibus MPV',
    subtitle: 'Isuzu Elf Long 19 Seat, Elf Jumbo/Coaster, Elf Grandtour, Avanza & Innova Reborn',
    badge: 'ELF & MINIBUS',
    image: '/elf_long.avif',
    priceDisplay: 'Start from Rp 500.000',
    variantsCount: 6,
    seatsRange: '7 - 19 Kursi',
    carIds: ['elf-19-seat', 'elf-grandtour-18', 'elf-jumbo-coaster-18', 'elf-10-luxury', 'innova', 'avanza']
  }
];

interface FleetCategoryModalProps {
  group: FleetCategoryGroup | null;
  onClose: () => void;
  onSelectCar: (car: Car) => void;
}

export default function FleetCategoryModal({ group, onClose, onSelectCar }: FleetCategoryModalProps) {
  if (!group) return null;

  const groupCars = CARS.filter((car) => group.carIds.includes(car.id));

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6281283229616';
    const message = `Halo Pak Tri Jaya Mulyana (PT. SIAGA WISATA JAYA), saya berminat sewa armada: ${carName}. Mohon informasi ketersediaan jadwal & penawaran harga terbaik. Terima kasih!`;
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
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 text-left max-h-[calc(100vh-7rem)] flex flex-col my-auto"
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
                <span>{group.badge} — KATALOG LENGKAP ({groupCars.length} TIPE)</span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                {group.title}
              </h2>
              <p className="font-sans text-xs text-slate-300 font-medium leading-relaxed">
                {group.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Scrollable Content: Variants Grid */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {groupCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3 p-4 sm:p-5">
                    {/* Variant Image */}
                    <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[16/10] flex items-center justify-center p-2">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3 bg-blue-600 text-white font-display font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-md shadow-xs">
                        {car.category}
                      </div>

                      <div className="absolute top-3 right-3 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                        <Users className="w-3.5 h-3.5 text-blue-600" />
                        <span>{car.seats} Kursi</span>
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <span className="font-display font-black text-sm uppercase tracking-tight block drop-shadow-md">
                          {car.name}
                        </span>
                      </div>
                    </div>

                    {/* Variant Specs & Facilities */}
                    <div className="space-y-2 text-xs">
                      <p className="text-slate-600 font-medium line-clamp-2 text-[11px] leading-relaxed">
                        {car.description}
                      </p>

                      <div className="pt-2 border-t border-slate-100 space-y-1">
                        <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider block">
                          Fasilitas Utama:
                        </span>
                        <div className="grid grid-cols-1 gap-1">
                          {car.includeList.slice(0, 3).map((inc, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                              <span>{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                          <span className="font-display font-black text-sm text-blue-600">
                            {car.priceDisplay}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          Driver &amp; BBM Fleksibel
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-4 sm:p-5 pt-0 flex items-center gap-2">
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

          {/* Modal Sticky Footer */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800 shrink-0 z-20">
            <div className="text-xs">
              <span className="text-slate-400 block font-medium">Konsultasi ketersediaan armada?</span>
              <span className="font-bold text-white">Layanan Siaga Tour 24 Jam Non-Stop</span>
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
