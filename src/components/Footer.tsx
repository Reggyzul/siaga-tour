import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck, Award, Heart, Youtube, Instagram, Facebook } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  lang: 'ID' | 'EN';
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({ lang, onNavigateSection }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="footer-contact" className="bg-slate-950 text-white pt-16 pb-12 overflow-hidden relative border-t border-slate-800">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout Box */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 rounded-3xl p-8 border border-slate-700/80 shadow-2xl mb-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 text-left space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-800/50">
              KONSULTASI TOUR 24 JAM
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Rencanakan Perjalanan Bersama Pak Tri Jaya Mulyana
            </h3>
            <p className="font-sans text-xs text-slate-300 font-medium max-w-xl leading-relaxed">
              Solusi paket wisata Study Tour, Wisata Religi, Outbound, Gathering & Sewa Bus Pariwisata Terbaik & Amanah.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <a
              href="https://api.whatsapp.com/send?phone=6281283229616&text=Halo%20Pak%20Tri%20Jaya%20Mulyana%20(PT.%20SIAGA%20WISATA%20JAYA),%20saya%20ingin%20konsultasi%20paket%20tour%20dan%20sewa%20armada"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 hover:from-red-600 hover:to-amber-700 text-white font-sans font-bold text-xs uppercase px-7 py-4 rounded-full shadow-lg shadow-red-600/25 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 0812-8322-9616</span>
            </a>
          </div>
        </div>

        {/* Core Footer Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left border-b border-slate-800/80 pb-12">
          
          {/* Column 1: Company Profile & Logo */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white font-black flex items-center justify-center text-xl shadow-md shrink-0">
                ST
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white uppercase block">
                  PT. SIAGA <span className="text-red-500">WISATA JAYA</span>
                </span>
                <span className="font-sans text-[10px] font-bold text-red-400 tracking-wider block mt-0.5">
                  SIAGA TOUR — BERPENGALAMAN SEJAK 2010
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-md font-medium">
              Agen Perjalanan Wisata Terbaik, Amanah & mengedepankan Pelayanan Prima di Indonesia. Berpengalaman sejak tahun 2010 melayani 1.300+ pax wisatawan domestik (90%) dan WNA (10%).
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] font-extrabold text-red-400 uppercase tracking-wider block">PERSONA & SALAM</span>
              <p className="font-sans text-xs text-slate-300 italic">
                "Salam hangat dari Tri Jaya Mulyana — Mengedepankan Pelayanan Prima & Perjalanan Wisata Amanah."
              </p>
            </div>
          </div>

          {/* Column 2: Official Address & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-black text-sm uppercase text-red-500 tracking-wider">
              Lokasi & Kontak Resmi
            </h4>

            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Alamat Perusahaan:</span>
                  <span className="text-slate-400 leading-relaxed block">
                    Pejaten Barat, Pasar Minggu, Jakarta Selatan, DKI Jakarta
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">WhatsApp / Telepon:</span>
                  <a href="tel:081283229616" className="text-slate-300 hover:text-red-400 font-bold block">
                    0812-8322-9616 (Tri Jaya Mulyana)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Jam Operational:</span>
                  <span className="text-slate-400 block">Layanan Konsultasi 24 Jam Non-stop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links & Services */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-black text-sm uppercase text-red-500 tracking-wider">
              Layanan Utama
            </h4>

            <div className="space-y-2 text-xs text-slate-400 font-medium">
              <span className="block text-slate-300 font-bold">• Tour Wisata:</span>
              <p className="text-[11px] text-slate-400 leading-snug pl-3">
                Study Tour, Study Tiru, Wisata Edukasi, Religi, Outbound, Gathering & MICE.
              </p>
              
              <span className="block text-slate-300 font-bold pt-2">• Sewa Kendaraan:</span>
              <p className="text-[11px] text-slate-400 leading-snug pl-3">
                Sewa Bus Pariwisata, Hiace, Elf, Avanza, Innova & Antar-Jemput Karyawan/Bandara.
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM SOCIAL MEDIA & COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          
          {/* Left: Copyright */}
          <div className="flex items-center gap-2">
            <span>© 2026 PT. SIAGA WISATA JAYA (Siaga Tour). All rights reserved.</span>
          </div>

          {/* Center: SOCIAL MEDIA LINKS */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 shrink-0">
              Media Sosial Resmi:
            </span>

            <div className="flex items-center gap-2">
              {/* Instagram */}
              <a
                href="https://instagram.com/siagatour"
                target="_blank"
                rel="noreferrer"
                title="Instagram Official @siagatour"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-600 hover:to-purple-600 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/Siagatour"
                target="_blank"
                rel="noreferrer"
                title="Facebook Official Siagatour"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-[#1877F2] text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@siagatour"
                target="_blank"
                rel="noreferrer"
                title="TikTok Official @siagatour"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-black text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.9a6.34 6.34 0 0 0-5.11 2.5 6.34 6.34 0 0 0 1 8.87 6.34 6.34 0 0 0 8.7-1.39V10.2a8.27 8.27 0 0 0 5.52 2.1V8.85a4.8 4.8 0 0 1-3-2.16z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@siagatourtv"
                target="_blank"
                rel="noreferrer"
                title="YouTube Official @siagatourtv"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-[#FF0000] text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="flex items-center gap-1 text-slate-500">
            <span>Terbaik, Amanah & Pelayanan Prima</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
