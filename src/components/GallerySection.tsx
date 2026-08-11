import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, X, MapPin, Users, ZoomIn } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GallerySectionProps {
  lang: 'ID' | 'EN';
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gathering' | 'destinasi'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];

  const galleryItems = [
    {
      id: 1,
      category: 'gathering',
      title: 'Fun Day Trip SMA 46 Jakarta',
      subtitle: 'Kuningan West Java (Telaga Cicerem & Arunika)',
      location: 'Kuningan, Jawa Barat',
      badge: 'Fun Day Trip',
      image: '/gallery_sma46_kuningan.jpg'
    },
    {
      id: 2,
      category: 'destinasi',
      title: 'Petualangan Fun Offroad Jeep',
      subtitle: 'Wisata Offroad Rombongan Pantai & Pegunungan',
      location: 'Kawasan Wisata Offroad',
      badge: 'Jeep Offroad',
      image: '/gallery_jeep_offroad.jpg'
    },
    {
      id: 3,
      category: 'gathering',
      title: 'Gathering HAIRCODE AEON BSD',
      subtitle: 'Villa Shinta Corner & Rafting Pangalengan',
      location: 'Pangalengan, Bandung Selatan',
      badge: 'Outbound Gathering',
      image: '/gallery_haircode_pangalengan.jpg'
    },
    {
      id: 4,
      category: 'destinasi',
      title: 'Open Trip Petualangan Bali With Love',
      subtitle: 'Wisata Rombongan Black Lava & Kintamani Bali',
      location: 'Kintamani & Black Lava, Bali',
      badge: 'Bali With Love',
      image: '/gallery_bali_with_love.jpg'
    },
    {
      id: 5,
      category: 'destinasi',
      title: 'Wisata Religi Masjid Sheikh Zayed',
      subtitle: 'Kunjungan Rombongan Wisata Keagamaan Solo',
      location: 'Masjid Raya Sheikh Zayed, Surakarta',
      badge: 'Wisata Religi',
      image: '/gallery_masjid_zayed.jpg'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white overflow-hidden relative border-b border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="gallery-heading">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-sky-300 font-display font-extrabold text-xs tracking-wider uppercase">
            <Camera className="w-4 h-4 text-blue-400" />
            <span>DOKUMENTASI RESMI SIAGA TOUR</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            Galeri <span className="text-blue-500">Dokumentasi Peserta</span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />

          <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
            Dokumentasi asli kegiatan Study Tour, Gathering Perusahaan, Outbound &amp; Wisata Religi peserta PT. SIAGA WISATA JAYA.
          </p>

          {/* FILTER BUTTONS */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-display font-bold uppercase transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              Semua Foto ({galleryItems.length})
            </button>
            <button
              onClick={() => setActiveFilter('gathering')}
              className={`px-4 py-2 rounded-full text-xs font-display font-bold uppercase transition-all cursor-pointer ${
                activeFilter === 'gathering'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              Gathering &amp; School Tour
            </button>
            <button
              onClick={() => setActiveFilter('destinasi')}
              className={`px-4 py-2 rounded-full text-xs font-display font-bold uppercase transition-all cursor-pointer ${
                activeFilter === 'destinasi'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              Destinasi &amp; Offroad
            </button>
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                key={item.id}
                onClick={() => setSelectedPhoto(item.image)}
                className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/90 shadow-md hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 cursor-pointer flex flex-col justify-end aspect-[4/3]"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-600/90 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md backdrop-blur-xs border border-blue-400/30">
                    {item.badge}
                  </span>
                </div>

                {/* Zoom Icon Top Right */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Info Bottom */}
                <div className="relative z-10 p-5 space-y-1.5 text-left">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-sky-300">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-display font-black text-lg text-white tracking-tight uppercase leading-snug group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-300 font-medium line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
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
              className="relative z-10 max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedPhoto}
                alt="Dokumentasi Siaga Tour Full"
                className="w-full h-auto max-h-[80vh] object-contain bg-slate-950"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
