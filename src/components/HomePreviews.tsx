import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TOUR_PACKAGES } from '../data/packages';
import { Car } from '../types';
import { Users, Calendar, ArrowRight, ChevronDown, Sparkles, Bus, Layers, ShieldCheck } from 'lucide-react';
import FleetCategoryModal, { FLEET_GROUPS, FleetCategoryGroup } from './FleetCategoryModal';

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
  const [selectedGroup, setSelectedGroup] = useState<FleetCategoryGroup | null>(null);
  const displayedPackages = TOUR_PACKAGES.slice(0, 6);

  return (
    <div className="space-y-16 py-12 bg-slate-50 border-b border-slate-200/80">
      
      {/* 1. KATALOG ARMADA DENGAN 3 KARTU KATEGORI UTAMA (BUS, HIACE, ELF/MINIBUS) */}
      <section id="cars-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-display font-extrabold text-xs tracking-wider uppercase">
            <Bus className="w-4 h-4 text-blue-600" />
            <span>KATALOG KATEGORI ARMADA UNGGULAN</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Pilihan Armada Berdasarkan Jenis &amp; Kapasitas
          </h2>

          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />

          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Klik kartu kategori di bawah ini untuk melihat beragam pilihan tipe armada **Semua Bus**, **Semua Hiace**, serta **Semua Elf &amp; Minibus MPV**.
          </p>
        </div>

        {/* 3 Main Category Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FLEET_GROUPS.map((group, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={group.id}
              onClick={() => setSelectedGroup(group)}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
            >
              <div>
                {/* Photo Header Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-blue-600 text-white font-display font-black text-[10px] uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                    {group.badge}
                  </div>

                  {/* Seat Range Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-xs">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>{group.seatsRange}</span>
                  </div>

                  {/* Title Overlay */}
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

                {/* Card Content */}
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
                      Lihat {group.variantsCount} Varian ➔
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedGroup(group);
                  }}
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lihat Pilihan {group.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
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

      {/* Popup Category Modal for Grouped Fleet (Semua Bus, Semua Hiace, Semua Elf) */}
      <FleetCategoryModal
        group={selectedGroup}
        onClose={() => setSelectedGroup(null)}
        onSelectCar={onSelectCar}
      />

    </div>
  );
}
