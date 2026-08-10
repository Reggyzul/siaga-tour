import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Globe, Star, MessageCircle, CheckCircle2, Sparkles, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface ServicesProps {
  lang: 'ID' | 'EN';
  onViewAllDestinations?: () => void;
}

export default function Services({ lang, onViewAllDestinations }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'in_sumbar' | 'out_sumbar' | 'internasional'>('all');
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (highlightTitle: string, categoryName: string) => {
    const waNumber = '6282178284459';
    const message = `Halo Siaga Tour, saya ingin berkonsultasi mengenai rute destinasi: ${highlightTitle} (${categoryName}). Mohon informasi jadwal, fasilitas hotel/restoran & penawaran harga terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const allDestinationHighlights = [
    // 1. IN SUMATERA BARAT
    {
      id: 'padang',
      categoryKey: 'in_sumbar',
      categoryName: 'In Sumatera Barat',
      title: 'Padang',
      subtitle: 'Kota Pantai, Kuliner & Sejarah',
      badge: 'Domestik Sumbar',
      image: '/dest_padang.avif',
      rating: 4.9,
      reviews: 145,
      spots: ['Pantai Air Manis & Malin Kundang', 'Kota Tua Padang & Jembatan Siti Nurbaya', 'Museum Adityawarman', 'Pantai Padang (Taplau) & Kuliner Minang']
    },
    {
      id: 'pesisir-selatan',
      categoryKey: 'in_sumbar',
      categoryName: 'In Sumatera Barat',
      title: 'Pesisir Selatan',
      subtitle: 'Mandeh, Painan & Salido',
      badge: 'Raja Ampat Sumbar',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      rating: 4.9,
      reviews: 130,
      spots: ['Kawasan Wisata Mandeh (Pulau Setan & Kapo-Kapo)', 'Bukit Langkisau Painan', 'Pantai Carocok & Pulau Cingkuak', 'Salido Painan (Kantor Pusat Siaga Tour)']
    },
    {
      id: 'bukittinggi',
      categoryKey: 'in_sumbar',
      categoryName: 'In Sumatera Barat',
      title: 'Bukittinggi',
      subtitle: 'Jam Gadang & Ngarai Sianok',
      badge: 'Ikon Wisata Sumbar',
      image: '/dest_bukittinggi.avif',
      rating: 5.0,
      reviews: 185,
      spots: ['Jam Gadang & Pasar Atas', 'Ngarai Sianok & Lobang Jepang', 'Taman Marga Satwa & Benteng Fort de Kock', 'Janjang Koto Gadang (Great Wall Minangkabau)']
    },
    {
      id: 'batu-sangkar',
      categoryKey: 'in_sumbar',
      categoryName: 'In Sumatera Barat',
      title: 'Batu Sangkar',
      subtitle: 'Pusat Kebudayaan Minangkabau',
      badge: 'Wisata Budaya',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
      rating: 4.8,
      reviews: 112,
      spots: ['Istana Basa Pagaruyung', 'Nagari Pariangan (Desa Terindah di Dunia)', 'Danau Singkarak', 'Batu Angsak & Balai Saruang']
    },
    {
      id: 'payakumbuh',
      categoryKey: 'in_sumbar',
      categoryName: 'In Sumatera Barat',
      title: 'Payakumbuh',
      subtitle: 'Lembah Harau & Kelok 9',
      badge: 'Pesona Tebing Alam',
      image: '/dest_payakumbuh.avif',
      rating: 4.9,
      reviews: 140,
      spots: ['Lembah Harau (Air Terjun & Tebing Granit)', 'Jembatan Layang Kelok 9', 'Kampung Eropa Harau', 'Padang Mangateh (New Zealand van Simalanggang)']
    },
    {
      id: 'alahan-panjang',
      categoryKey: 'in_sumbar',
      categoryName: 'In Sumatera Barat',
      title: 'Alahan Panjang',
      subtitle: 'Danau Diatas & Danau Dibawah',
      badge: 'Swiss van Sumatra',
      image: '/dest_alahan_panjang.avif',
      rating: 4.8,
      reviews: 98,
      spots: ['Danau Diatas & Danau Dibawah (Danau Kembar)', 'Kebun Teh Alahan Panjang', 'Bukit Cambai 360°', 'Kebun Strawberry & Sayur Segar']
    },

    // 2. OUT SUMATERA BARAT (NUSANTARA)
    {
      id: 'danau-toba',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Danau Toba & Samosir',
      subtitle: 'Sumatera Utara',
      badge: 'Destinasi Super Prioritas',
      image: '/dest_toba.avif',
      rating: 4.9,
      reviews: 160,
      spots: ['Pulau Samosir & Tomok', 'Parapat & Berastagi', 'Air Terjun Sipiso-piso', 'Taman Simalem Resort']
    },
    {
      id: 'sabang-aceh',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Titik O Km Sabang Aceh',
      subtitle: 'Nanggroe Aceh Darussalam',
      badge: 'Ujung Barat Indonesia',
      image: '/dest_sabang.avif',
      rating: 4.9,
      reviews: 125,
      spots: ['Tugu Nol Kilometer Indonesia', 'Pantai Iboih & Pulau Rubiah', 'Masjid Raya Baiturrahman Banda Aceh', 'Museum Tsunami Aceh']
    },
    {
      id: 'pekanbaru-riau',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Pekanbaru',
      subtitle: 'Provinsi Riau',
      badge: 'Wisata Melayu',
      image: '/dest_pekanbaru.avif',
      rating: 4.8,
      reviews: 95,
      spots: ['Masjid An-Nur Pekanbaru', 'Istana Siak Sri Indrapura', 'Pasar Bawah Pekanbaru', 'Danau Buatan Lembah Sari']
    },
    {
      id: 'batam',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Batam',
      subtitle: 'Kota Bisnis, Bahari & Belanja (Kepulauan Riau)',
      badge: 'Wisata Belanja & Bahari',
      image: '/dest_batam.avif',
      rating: 4.9,
      reviews: 138,
      spots: ['Jembatan Barelang Batam', 'Nagoya Shopping District', 'Welcome to Batam Landmark', 'Kuliner Seafood Harbour Bay']
    },
    {
      id: 'bintan',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Pulau Bintan',
      subtitle: 'Resort & Bahari Eksotis (Kepulauan Riau)',
      badge: 'Resort Kelas Dunia',
      image: '/dest_bintan.avif',
      rating: 4.9,
      reviews: 120,
      spots: ['Treasure Bay Bintan (Kolam Terbesar Asia)', 'Gurun Pasir Telaga Biru Bintan', 'Lagoi Bay Beach', 'Vihara Ksitigarbha Bodhisattva (1000 Patung)']
    },
    {
      id: 'bangka',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Pulau Bangka',
      subtitle: 'Pantai Granit & Kuliner Khas (Kembang Bangka)',
      badge: 'Pantai Granit',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      rating: 4.8,
      reviews: 110,
      spots: ['Pantai Parai Tenggiri', 'Pantai Matras Sungailiat', 'Danau Kaolin Bangka', 'Pusat Otak-otak & Kuliner Bangka']
    },
    {
      id: 'belitung',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Pulau Belitung',
      subtitle: 'Surga Laskar Pelangi (Bangka Belitung)',
      badge: 'Laskar Pelangi',
      image: '/dest_belitung.avif',
      rating: 4.9,
      reviews: 142,
      spots: ['Pantai Tanjung Tinggi (Batu Granit Raksasa)', 'Pulau Lengkuas & Mercusuar Bersejarah', 'Museum Kata Andrea Hirata', 'Danau Kaolin Belitung']
    },
    {
      id: 'bali',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Bali',
      subtitle: 'Pulau Dewata & Surga Wisata Dunia',
      badge: 'Island of Gods',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      rating: 5.0,
      reviews: 230,
      spots: ['Kintamani & Gunung Batur', 'Pura Tanah Lot & Uluwatu Sunset', 'Pantai Kuta, Seminyak & Nusa Dua', 'Tegalalang Rice Terrace & Ubud Art Market']
    },
    {
      id: 'lombok',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Lombok',
      subtitle: 'Pulau Seribu Masjid & Pantai Eksotis (NTB)',
      badge: 'Gili & Mandalika',
      image: '/dest_lombok.avif',
      rating: 4.9,
      reviews: 185,
      spots: ['Gili Trawangan, Gili Meno & Gili Air', 'Sirkuit Internasional Mandalika', 'Pantai Pink (Tangsi)', 'Desa Adat Sade & Sukarara']
    },
    {
      id: 'sumbawa',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Sumbawa',
      subtitle: 'Pesona Alam & Island Hopping (NTB)',
      badge: 'Savana Kenawa',
      image: '/dest_sumbawa.avif',
      rating: 4.8,
      reviews: 95,
      spots: ['Pulau Kenawa (Savana & Sunset)', 'Pulau Moyo & Air Terjun Mata Jitu', 'Pantai Lakey (Surfing World Spot)', 'Istana Dalam Loka Sumbawa']
    },
    {
      id: 'malang-bromo',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Malang & G. Bromo',
      subtitle: 'Jawa Timur',
      badge: 'Sunrise Favorite',
      image: '/dest_bromo.avif',
      rating: 5.0,
      reviews: 210,
      spots: ['Penanjakan Sunrise Bromo & Kawah Bromo', 'Pasir Berbisik & Bukit Teletubbies', 'Kota Batu Malang (Jatim Park, Museum Angkut)', 'Petik Apel & Coban Rondo']
    },
    {
      id: 'jogja',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Jogja',
      subtitle: 'Kota Budaya, Istimewa & Kuliner (DIY)',
      badge: 'Kota Budaya',
      image: '/dest_jogja.avif',
      rating: 5.0,
      reviews: 205,
      spots: ['Jalan Malioboro & Keraton Yogyakarta', 'Candi Borobudur & Candi Prambanan', 'Jeep Lava Tour Gunung Merapi', 'Pantai Parangtritis & HeHa Sky View']
    },
    {
      id: 'bandung',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Bandung',
      subtitle: 'Kota Kembang, Pegunungan & Belanja (Jawa Barat)',
      badge: 'Kota Kembang',
      image: '/dest_bandung.avif',
      rating: 4.9,
      reviews: 175,
      spots: ['Gunung Tangkuban Perahu', 'Kawah Putih Ciwidey', 'Dusun Bambu & Farmhouse Lembang', 'Jalan Riau & Cihampelas Shopping District']
    },
    {
      id: 'jakarta',
      categoryKey: 'out_sumbar',
      categoryName: 'Out Sumatera Barat',
      title: 'Jakarta',
      subtitle: 'Metropolis Capital & Theme Park (DKI Jakarta)',
      badge: 'Metropolitan Tour',
      image: '/dest_jakarta.avif',
      rating: 4.8,
      reviews: 160,
      spots: ['Monumen Nasional (Monas) & Kota Tua', 'Taman Impian Jaya Ancol & Dufan', 'Taman Mini Indonesia Indah (TMII)', 'Grand Indonesia & Senayan City']
    },

    // 3. INTERNASIONAL (MANCANEGARA)
    {
      id: 'singapura',
      categoryKey: 'internasional',
      categoryName: 'Internasional',
      title: 'Singapura',
      subtitle: 'Southeast Asia Lion City',
      badge: 'World Class City',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800',
      rating: 4.9,
      reviews: 175,
      spots: ['Marina Bay Sands & Merlion Park', 'Universal Studios Singapore (Sentosa)', 'Gardens by the Bay & Flower Dome', 'Orchard Road & Jewel Changi Airport']
    },
    {
      id: 'malaysia',
      categoryKey: 'internasional',
      categoryName: 'Internasional',
      title: 'Malaysia',
      subtitle: 'Truly Asia Destination',
      badge: 'Twin Towers & Genting',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800',
      rating: 4.8,
      reviews: 155,
      spots: ['Menara Kembar Petronas (KLCC)', 'Genting Highlands & Awana SkyWay Cable Car', 'Batu Caves Rainbow Stairs', 'Putrajaya & Dataran Merdeka']
    },
    {
      id: 'thailand',
      categoryKey: 'internasional',
      categoryName: 'Internasional',
      title: 'Thailand',
      subtitle: 'Land of Smiles',
      badge: 'Bangkok & Phuket',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=800',
      rating: 4.9,
      reviews: 145,
      spots: ['Wat Arun & Grand Palace Bangkok', 'Chaophraya River Cruise', 'Asiatique The Riverfront', 'Phuket Island & James Bond Island']
    },
    {
      id: 'korea',
      categoryKey: 'internasional',
      categoryName: 'Internasional',
      title: 'Korea Selatan',
      subtitle: 'K-Culture & Winter Wonderland',
      badge: 'Seoul & Nami Island',
      image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&q=80&w=800',
      rating: 5.0,
      reviews: 180,
      spots: ['Nami Island (Winter Sonata)', 'Gyeongbokgung Palace & Hanbok Dress', 'N Seoul Tower (Namsan)', 'Myeongdong Shopping Street & Hongdae']
    },
    {
      id: 'jepang',
      categoryKey: 'internasional',
      categoryName: 'Internasional',
      title: 'Jepang',
      subtitle: 'Land of the Rising Sun',
      badge: 'Tokyo & Mt. Fuji',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
      rating: 5.0,
      reviews: 210,
      spots: ['Gunung Fuji & Danau Kawaguchiko', 'Asakusa Sensoji Temple & Skytree Tokyo', 'Shibuya Crossing & Harajuku', 'Universal Studios Japan (Osaka)']
    },
    {
      id: 'eropa',
      categoryKey: 'internasional',
      categoryName: 'Internasional',
      title: 'Eropa',
      subtitle: 'European Dream Vacation',
      badge: 'Menara Eiffel & Swiss Alps',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
      rating: 5.0,
      reviews: 195,
      spots: ['Prancis (Menara Eiffel & Louvre)', 'Swiss (Mount Titlis & Interlaken)', 'Belanda (Keukenhof & Volendam)', 'Italia (Koloseum Roma & Venesia)']
    },
    {
      id: 'amerika',
      categoryKey: 'internasional',
      categoryName: 'Internasional',
      title: 'Amerika',
      subtitle: 'USA & Canada Discovery',
      badge: 'New York & Hollywood',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800',
      rating: 5.0,
      reviews: 185,
      spots: ['New York (Times Square & Patung Liberty)', 'Los Angeles (Hollywood & Universal Studios)', 'Las Vegas & Grand Canyon', 'Air Terjun Niagara & Washington D.C.']
    }
  ];

  const filteredHighlights = allDestinationHighlights.filter(item => {
    if (activeCategory === 'all') return true;
    return item.categoryKey === activeCategory;
  });

  // LANDING PAGE HASIL DIBATASI 6 DESTINASI (2 BARIS X 3 KOLOM)
  const displayedHighlights = filteredHighlights.slice(0, 6);

  return (
    <section id="destinations" className="pt-4 sm:pt-6 pb-16 bg-white text-[#0d1b37] overflow-hidden relative border-b border-slate-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5" id="destinations-heading">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] font-display font-extrabold text-xs tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-[#dc2626]" />
            <span>{t.dest_tag}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37] tracking-tight leading-tight">
            {t.dest_title}
          </h2>

          <div className="w-16 h-1 bg-red-500 mx-auto rounded-full" />

          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t.dest_desc}
          </p>
        </div>

        {/* PROMINENT TOP CATEGORY SELECTOR BUTTON BAR */}
        <div className="bg-slate-50 p-3.5 sm:p-4 rounded-3xl border border-slate-200 shadow-md max-w-4xl mx-auto text-center space-y-3">
          
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#dc2626] block">
              {t.dest_select_cat}
            </span>
            <h3 className="font-display font-black text-lg sm:text-xl text-[#0d1b37]">
              {t.dest_cat_subtitle}
            </h3>
          </div>

          {/* 4 STYLIZED CATEGORY BUTTONS */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-0.5">
            
            <button
              onClick={() => setActiveCategory('all')}
              className={`py-3 px-3.5 rounded-2xl font-display font-black text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-[#dc2626] to-red-600 text-white shadow-lg shadow-red-600/25 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Globe className="w-4 h-4 shrink-0" />
              <span>{t.dest_cat_all}</span>
            </button>

            <button
              onClick={() => setActiveCategory('in_sumbar')}
              className={`py-3 px-3.5 rounded-2xl font-display font-black text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeCategory === 'in_sumbar'
                  ? 'bg-gradient-to-r from-[#dc2626] to-red-600 text-white shadow-lg shadow-red-600/25 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <MapPin className="w-4 h-4 shrink-0 text-red-500" />
              <span>{t.dest_cat_in_sumbar}</span>
            </button>

            <button
              onClick={() => setActiveCategory('out_sumbar')}
              className={`py-3 px-3.5 rounded-2xl font-display font-black text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeCategory === 'out_sumbar'
                  ? 'bg-gradient-to-r from-[#dc2626] to-red-600 text-white shadow-lg shadow-red-600/25 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Compass className="w-4 h-4 shrink-0 text-red-500" />
              <span>{t.dest_cat_out_sumbar}</span>
            </button>

            <button
              onClick={() => setActiveCategory('internasional')}
              className={`py-3 px-3.5 rounded-2xl font-display font-black text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeCategory === 'internasional'
                  ? 'bg-gradient-to-r from-[#dc2626] to-red-600 text-white shadow-lg shadow-red-600/25 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Globe className="w-4 h-4 shrink-0 text-blue-500" />
              <span>{t.dest_cat_inter}</span>
            </button>

          </div>

        </div>

        {/* DESTINATIONS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
          {displayedHighlights.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div className="space-y-4">
                
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#dc2626] text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                    {item.badge}
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-red-500 fill-red-500" />
                    <span>{item.rating} ({item.reviews})</span>
                  </div>

                  {/* Title & Subtitle Overlay on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase text-red-300 tracking-wider block">
                      {item.categoryName}
                    </span>
                    <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug group-hover:text-red-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-16 h-1 bg-red-500 rounded-full group-hover:w-28 transition-all duration-500" />
                  </div>
                </div>

                {/* Body Details: List of Spots */}
                <div className="p-5 pt-1 space-y-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#dc2626] block">
                    {t.dest_spots_label}
                  </span>

                  <div className="space-y-1.5">
                    {item.spots.map((spot, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{spot}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleWhatsAppBooking(item.title, item.categoryName)}
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>{t.dest_wa_consult}</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* MINIMALIST & PRECISE FLOATING TEXT WITH BOUNCING ARROW */}
        <div className="pt-8 pb-2 flex flex-col items-center justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={onViewAllDestinations}
            className="group flex flex-col items-center gap-1.5 cursor-pointer text-center select-none"
            id="view-all-destinations-btn"
          >
            <span className="font-display font-black text-xs sm:text-sm uppercase tracking-[0.25em] text-slate-800 group-hover:text-[#dc2626] transition-colors duration-300">
              {t.dest_view_all}
            </span>
            <ChevronDown className="w-5 h-5 text-[#dc2626] group-hover:scale-125 transition-transform duration-300" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}


