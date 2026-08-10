import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, Bus, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';
import FleetCategoryModal, { FLEET_GROUPS, FleetCategoryGroup } from './FleetCategoryModal';

interface TransportRentPageProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function TransportRentPage({ onSelectCar, lang, onNavigateHome }: TransportRentPageProps) {
  const [selectedGroup, setSelectedGroup] = useState<FleetCategoryGroup | null>(null);
  const t = TRANSLATIONS[lang];

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
            <span>KATALOG KATAGORI &amp; TIPE ARMADA RESMI</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Page Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            Pilihan Armada Berdasarkan Jenis
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Pilih kartu kategori **Semua Bus**, **Semua Hiace**, atau **Semua Elf** di bawah ini untuk menampilkan pop-up daftar beragam tipe &amp; fasilitasnya secara lengkap.
          </p>
        </div>

        {/* 3 GROUP CARDS AT TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FLEET_GROUPS.map((group, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={group.id}
              onClick={() => setSelectedGroup(group)}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative text-left"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5 bg-blue-600 text-white font-display font-black text-[10px] uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                    {group.badge}
                  </div>

                  <div className="absolute top-3.5 right-3.5 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-xs">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>{group.seatsRange}</span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 space-y-1">
                    <div className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase text-sky-300 tracking-wider">
                      <Layers className="w-3 h-3" />
                      <span>{group.variantsCount} Tipe Armada Tersedia</span>
                    </div>
                    <h3 className="font-display font-black text-xl text-white tracking-tight uppercase leading-snug group-hover:text-sky-200 transition-colors">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="font-sans text-xs text-slate-600 font-medium leading-relaxed">
                    {group.subtitle}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Tarif Sewa</span>
                      <span className="font-display font-black text-sm text-blue-600">
                        {group.priceDisplay}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                      Buka {group.variantsCount} Varian ➔
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedGroup(group);
                  }}
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Pilih &amp; Lihat Tipe {group.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fleet Group Category Popup Modal */}
      <FleetCategoryModal
        group={selectedGroup}
        onClose={() => setSelectedGroup(null)}
        onSelectCar={onSelectCar}
      />
    </div>
  );
}
