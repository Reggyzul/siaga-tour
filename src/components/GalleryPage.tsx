import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, X, MapPin, Users, ZoomIn, ChevronLeft } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GalleryPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function GalleryPage({ lang, onNavigateHome }: GalleryPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<{ image: string; title: string; subtitle: string; location: string } | null>(null);

  const t = TRANSLATIONS[lang];

  const galleryItems = [
    {
      id: 1,
      title: 'Fun Day Trip SMA 46 Jakarta',
      subtitle: 'Kuningan West Java (Telaga Cicerem & Arunika)',
      location: 'Kuningan, Jawa Barat',
      image: '/gallery_sma46_kuningan.jpg',
      badge: 'School Tour'
    },
    {
      id: 2,
      title: 'Petualangan Fun Offroad Jeep',
      subtitle: 'Wisata Offroad Rombongan Pantai & Pegunungan',
      location: 'Kawasan Wisata Offroad',
      image: '/gallery_jeep_offroad.jpg',
      badge: 'Jeep Offroad'
    },
    {
      id: 3,
      title: 'Gathering HAIRCODE AEON BSD',
      subtitle: 'Villa Shinta Corner & Rafting Pangalengan',
      location: 'Pangalengan, Bandung',
      image: '/gallery_haircode_pangalengan.jpg',
      badge: 'Corporate Gathering'
    },
    {
      id: 4,
      title: 'Open Trip Petualangan Bali With Love',
      subtitle: 'Wisata Rombongan Black Lava & Kintamani Bali',
      location: 'Kintamani & Black Lava, Bali',
      image: '/gallery_bali_with_love.jpg',
      badge: 'Bali With Love'
    },
    {
      id: 5,
      title: 'Wisata Religi Masjid Sheikh Zayed',
      subtitle: 'Kunjungan Rombongan Wisata Keagamaan Solo',
      location: 'Masjid Raya Sheikh Zayed, Surakarta',
      image: '/gallery_masjid_zayed.jpg',
      badge: 'Wisata Religi'
    },
    {
      id: 6,
      title: 'Rahayu River Tubing Kebumen',
      subtitle: 'Petualangan Wisata Air Tubing Sungai Rahayu Kebumen',
      location: 'Padureso, Kebumen',
      image: '/gallery_rahayu_tubing.jpg',
      badge: 'River Tubing'
    },
    {
      id: 7,
      title: 'Rihlah Musholla Al-Huda Jakarta',
      subtitle: 'Rombongan Ziarah & Wisata Bersama Big Bus Bagong',
      location: 'Pejaten Timur, Jakarta',
      image: '/gallery_rihlah_alhuda.jpg',
      badge: 'Rihlah & Bus Tour'
    },
    {
      id: 8,
      title: 'Rafting Cisadane KKCPN Jakarta Utara',
      subtitle: 'Outbound & Arung Jeram Sungai Cisadane Bogor',
      location: 'Sungai Cisadane, Bogor',
      image: '/gallery_rafting_cisadane.jpg',
      badge: 'Outbound Rafting'
    },
    {
      id: 9,
      title: 'Gathering SDN Lenteng Agung 01',
      subtitle: 'Watu Angkruk Serambi Dieng Plateau',
      location: 'Dieng Plateau, Wonosobo',
      image: '/gallery_sdn_lenteng_dieng.jpg',
      badge: 'School Gathering'
    },
    {
      id: 10,
      title: 'Open Trip Bromo - Semeru',
      subtitle: 'Eksplorasi Pesona Gunung Bromo & Semeru',
      location: 'Taman Nasional Bromo Tengger Semeru',
      image: '/gallery_bromo_semeru.jpg',
      badge: 'Bromo Semeru'
    }
  ];

  return (
    <div className="bg-slate-50 text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="relative w-full h-[260px] sm:h-[320px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{
            backgroundImage: `url('/gallery_bali_with_love.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 px-3.5 py-1 rounded-full text-sky-300 text-xs font-bold uppercase tracking-widest">
            <Camera className="w-4 h-4 text-sky-400" />
            <span>GALERI DOKUMENTASI RESMI SIAGA TOUR</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white drop-shadow-md">
            Dokumentasi Siaga Tour
          </h1>

          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <span onClick={onNavigateHome} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-1">
              <ChevronLeft className="w-4 h-4" /> BERANDA
            </span>
            <span>/</span>
            <span className="text-sky-400">GALERI DOKUMENTASI RESMI</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN GALLERY SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        {/* Intro Info */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
            Momen Berkesan Bersama Peserta
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Kumpulan dokumentasi foto asli kegiatan Study Tour, Outbound Gathering, Wisata Religi &amp; Petualangan Rombongan Siaga Tour.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end aspect-[4/3]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Badge Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-blue-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md border border-blue-400/30">
                  {item.badge}
                </span>
              </div>

              {/* Zoom Icon Top Right */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Content Bottom */}
              <div className="relative z-10 p-5 space-y-1.5 text-left text-white">
                <div className="flex items-center gap-1 text-[11px] font-bold text-sky-300">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{item.location}</span>
                </div>

                <h3 className="font-display font-black text-lg tracking-tight uppercase leading-snug group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-slate-300 font-medium line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX POPUP MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl text-left"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-white"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              <div className="relative aspect-[16/10] bg-slate-950">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>{selectedPhoto.location}</span>
                </div>
                <h3 className="font-display font-black text-xl text-white uppercase">
                  {selectedPhoto.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 font-medium">
                  {selectedPhoto.subtitle}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
