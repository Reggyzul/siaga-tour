import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, CheckCircle2, Bus, Users, Globe, Building } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 bg-slate-50 text-[#0d1b37] overflow-hidden relative border-b border-slate-200 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="about-heading">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full border border-red-200">
            BERPENGALAMAN SEJAK 2010
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#0d1b37] tracking-tight leading-tight uppercase">
            PT. SIAGA WISATA JAYA (Siaga Tour)
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            "TERBAIK, AMANAH &amp; MENGEDEPANKAN PELAYANAN PRIMA" — Agen Perjalanan Wisata &amp; Sewa Bus Pariwisata Terpercaya di Indonesia.
          </p>
        </div>

        {/* 2-COLUMN VISION & MISSION CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: VISI PERUSAHAAN & PERSONA */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-slate-700/60 flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-amber-500/30 flex items-center justify-center text-red-400 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 block">VISI PERUSAHAAN</span>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                    PT. SIAGA WISATA JAYA
                  </h3>
                </div>
              </div>

              {/* Visi Statement */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <p className="font-sans text-xs sm:text-sm text-slate-100 leading-relaxed font-semibold italic">
                  "Menjadi Agen Perjalanan wisata Terbaik, Amanah &amp; mengedepankan Pelayanan Prima di Indonesia."
                </p>
              </div>

              {/* Data Track Record */}
              <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-slate-300 font-medium">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Pengalaman:</span>
                  <span className="font-bold text-white">Sejak Tahun 2010 (16+ Thn)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Transaksi (Jan-Jul 2025):</span>
                  <span className="font-bold text-red-400">1.300+ Pax Peserta</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Komposisi Wisatawan:</span>
                  <span className="font-bold text-green-400">90% Domestik | 10% WNA</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Kontak Persona:</span>
                  <span className="font-bold text-amber-400">Tri Jaya Mulyana</span>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 text-center">
              <span className="font-display font-extrabold text-xs text-red-400 tracking-wider uppercase block">
                WA: 0812-8322-9616 | Pejaten Barat, Jakarta Selatan
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: MISI UTAMA & SEGMENTASI */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 shadow-lg flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#dc2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#dc2626] block">MISI &amp; LAYANAN UTAMA</span>
                  <h3 className="font-display font-black text-xl text-[#0d1b37] uppercase tracking-tight">
                    Komitmen Pelayanan Prima
                  </h3>
                </div>
              </div>

              {/* Missions List */}
              <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span><strong>Misi Utama:</strong> Memperkenalkan Wisata Indonesia (alam, sejarah, religi, edukasi, &amp; petualangan) untuk wisatawan domestik &amp; mancanegara.</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span><strong>Layanan Tour:</strong> Study Tour, Study Tiru, Wisata Edukasi, Wisata Religi, Wisata Umum, Outbound, Inbound, Gathering, &amp; MICE.</span>
                </div>

                <div className="p-3 rounded-xl bg-red-50/80 border border-red-200 flex items-center gap-3 font-semibold text-red-950">
                  <Bus className="w-4 h-4 text-[#dc2626] shrink-0" />
                  <span><strong>Sewa Kendaraan:</strong> Antar-Jemput Hotel/Bandara, City Tour, Land Tour, Sewa Bus Pariwisata &amp; Antar-Jemput Karyawan.</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <Users className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Target Audiens:</strong> Skala Kecil (PAUD/TK), Skala Sedang (Open Trip/Outing/Arisan/Pengajian), &amp; Skala Besar (Pemerintah/Swasta/BUMN/Finance).</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
