import React from 'react';
import { Check, MapPin, Phone, Award, ShieldCheck, Bus, Users, TrendingUp, Building, Globe, Star, Calendar } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function AboutPage({ lang, onNavigateHome }: AboutPageProps) {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-white text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="relative w-full h-[240px] sm:h-[300px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <span className="text-red-400 font-black text-xs uppercase tracking-widest bg-red-950/80 px-3.5 py-1 rounded-full border border-red-800/50 inline-block">
            BERPENGALAMAN SEJAK TAHUN 2010
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            PT. SIAGA WISATA JAYA
          </h1>
          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-blue-400 cursor-pointer">BERANDA</span> / PROFIL &amp; TRACK RECORD
          </p>
        </div>
      </div>

      {/* MAIN CONTAINER CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* SECTION 1: PROFIL PERUSAHAAN & SALAM PERSONA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-md border border-blue-200 inline-block">
              PROFIL AGEN PERJALANAN WISATA
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              PT. SIAGA WISATA JAYA (Siaga Tour)
            </h2>
            <p className="font-sans text-slate-700 text-sm leading-relaxed font-medium">
              <strong>PT. SIAGA WISATA JAYA (Siaga Tour)</strong> adalah agen perjalanan wisata terpercaya yang berlokasi di <strong>Pejaten Barat, Pasar Minggu, Jakarta Selatan</strong>. Berpengalaman melayani rombongan tour sejak tahun <strong>2010</strong> dengan komitmen tinggi mengedepankan standar <strong>Pelayanan Prima &amp; Perjalanan Amanah</strong>.
            </p>
            <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
              Di bawah pimpinan <strong>Bang Jaya</strong>, kami hadir untuk memperkenalkan keindahan Indonesia — mulai dari wisata alam, sejarah, religi, edukasi, hingga petualangan — baik bagi wisatawan domestik maupun mancanegara.
            </p>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white space-y-1 shadow-md border border-slate-700">
              <span className="text-[10px] font-extrabold uppercase text-sky-400 tracking-wider">SALAM PERSONA &amp; KONTAK</span>
              <p className="font-sans text-xs font-semibold text-slate-200">
                "Salam dari Bang Jaya. Hubungi kami via WA 0852-8344-8585 untuk konsultasi itinerary &amp; penawaran terbaik."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-xl shadow-md">
                16+
              </div>
              <div>
                <span className="font-extrabold text-xs text-blue-600 uppercase block">REKAM JEJAK PANJANG</span>
                <span className="font-black text-lg text-slate-900 block">Tahun Pengalaman (2010 - 2026)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
                <span className="font-black text-2xl text-blue-600 block">1.300+</span>
                <span className="text-[11px] font-bold text-slate-600 block">Pax Transaksi (Jan-Jul 2025)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center">
                <span className="font-black text-2xl text-blue-600 block">90%</span>
                <span className="text-[11px] font-bold text-slate-600 block">Wisatawan Domestik</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: VISI & MISI */}
        <section className="space-y-8 border-t border-slate-200 pt-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display font-black text-3xl text-slate-900 uppercase">
              Visi &amp; Misi Perusahaan
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi Card */}
            <div className="p-7 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-sky-400" />
                <h3 className="font-display font-black text-xl text-white uppercase">Visi Perusahaan</h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed italic font-medium">
                "Menjadi Agen Perjalanan wisata Terbaik, Amanah &amp; mengedepankan Pelayanan Prima di Indonesia."
              </p>
            </div>

            {/* Misi Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
                <h3 className="font-display font-black text-xl text-slate-900 uppercase">Misi Perusahaan</h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Memperkenalkan Wisata Indonesia (alam, sejarah, religi, edukasi, &amp; petualangan) baik untuk wisatawan domestik maupun mancanegara dengan standar Pelayanan Prima.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: LAYANAN UTAMA & RENTAL KENDARAAN */}
        <section className="space-y-8 border-t border-slate-200 pt-12">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase">
            Layanan Utama PT. SIAGA WISATA JAYA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tour Services */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
              <h3 className="font-display font-bold text-lg text-blue-950 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Layanan Paket Tour Wisata
              </h3>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
                <li><strong>Study Tour &amp; Study Tiru:</strong> Untuk PAUD, TK, SD, SMP, SMA &amp; Perguruan Tinggi.</li>
                <li><strong>Wisata Edukasi &amp; Religi:</strong> Ziarah Wali, Kunjungan Sejarah &amp; Budaya.</li>
                <li><strong>Wisata Umum &amp; Petualangan:</strong> Paket Bali, Bromo, Jogja, Dieng, Semarang, Lembang, Anyer, dll.</li>
                <li><strong>Outbound, Gathering &amp; MICE:</strong> Gathering Perusahaan Swasta, BUMN, &amp; Instansi Pemerintah.</li>
              </ul>
            </div>

            {/* Vehicle Rental */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <Bus className="w-5 h-5 text-blue-600" />
                Layanan Sewa Kendaraan &amp; Bus
              </h3>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
                <li><strong>Sewa Bus Pariwisata:</strong> Big Bus Eksekutif (40-59 Seat), Big Bus VIP Legrest (28-30 Seat), Medium Bus (29-35 Seat).</li>
                <li><strong>Sewa Minibus &amp; MPV:</strong> Hiace Commuter/Premio, Hiace Luxury, Elf Long 19 Seat, Elf Coaster/Grandtour, Avanza, Innova &amp; Bus Luxury Motorhome.</li>
                <li><strong>Antar-Jemput:</strong> Transfer Hotel/Bandara, City Tour, Land Tour, &amp; Antar-Jemput Karyawan.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: SEGMENTASI PASAR & SOCIAL PROOF (JANUARI - JULI 2025) */}
        <section className="space-y-8 border-t border-slate-200 pt-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">
              SOCIAL PROOF &amp; REKAM JEJAK TRANSAKSI
            </span>
            <h2 className="font-display font-black text-3xl text-slate-900 uppercase">
              Komposisi Pelanggan &amp; Social Proof
            </h2>
            <p className="font-sans text-xs text-slate-600 font-medium">
              Data Transaksi Periode Januari - Juli 2025: Total 1.300+ Pax Peserta Tour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Skala Kecil */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">SKALA KECIL (20%)</span>
                <span className="text-xs font-bold bg-slate-100 px-2.5 py-0.5 rounded-full text-slate-700">20% Pax</span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">PAUD, TK &amp; Pekerja Informal</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Melayani kegiatan rekreasi dan study tour ringan untuk sekolah PAUD, TK, serta kelompok pekerja informal.
              </p>
            </div>

            {/* Skala Sedang */}
            <div className="p-6 rounded-2xl bg-blue-50/80 border-2 border-blue-500 shadow-md space-y-3 text-left relative">
              <span className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-xs">
                PORSI TERBESAR (75%)
              </span>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-blue-600">SKALA SEDANG (75%)</span>
                <span className="text-xs font-bold bg-blue-200 text-blue-950 px-2.5 py-0.5 rounded-full">75% Pax</span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">Open Trip, Outing, Arisan &amp; Pengajian</h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Pilihan favorit untuk outing kantor skala sedang, rombongan arisan, pengajian, alumni &amp; komunitas hobi.
              </p>
            </div>

            {/* Skala Besar */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">SKALA BESAR (5%)</span>
                <span className="text-xs font-bold bg-slate-100 px-2.5 py-0.5 rounded-full text-slate-700">5% Pax</span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">Instansi Pemerintah, BUMN &amp; Finance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Penanganan terintegrasi perjalanan dinas &amp; gathering perusahaan swasta, BUMN, perbankan &amp; finance.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
