export interface TourTier {
  busType: string;
  capacity: string;
  pricePerPerson: string;
  hotelDetails: string;
  notes: string;
}

export interface TourPackage {
  id: string;
  title: string;
  categoryKey: 'domestik' | 'internasional';
  duration: string;
  route: string[];
  routeDisplay: string;
  image: string;
  badge: string;
  minPrice: string;
  tiers: TourTier[];
  highlights: string[];
  includes: string[];
  excludes: string[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  // 1. PAKET BALI (5D4N)
  {
    id: 'paket-bali-5d4n',
    title: 'PAKET WISATA BALI (5D4N)',
    categoryKey: 'domestik',
    duration: '5 Hari 4 Malam',
    route: ['Bali', 'Kintamani', 'Bedugul', 'Tanah Lot'],
    routeDisplay: 'Bali - Kintamani - Bedugul - Tanah Lot',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    badge: 'Favorit 2026/2027',
    minPrice: '(Start from Rp 2.500.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 43 Seat',
        capacity: 'Min. Rombongan 43 Pax',
        pricePerPerson: '(Start from Rp 2.500.000/org)',
        hotelDetails: 'Hotel 2 Malam di Bali',
        notes: 'Termasuk Makan 13x, Tiket Wisata, Jeep Wisata, Dokumentasi, Tour Guide & Tour Leader'
      },
      {
        busType: 'BIG BUS VIP 28 Seat Legrest',
        capacity: 'VIP Legrest 28 Pax',
        pricePerPerson: '(Start from Rp 2.800.000/org)',
        hotelDetails: 'Hotel 2 Malam di Bali (Kelas Premium)',
        notes: 'Termasuk Makan 13x, Tiket Wisata, Jeep Wisata, Dokumentasi, Tour Guide & Tour Leader'
      }
    ],
    highlights: [
      'Hotel 2 Malam di Bali & Makan 13x',
      'Eksplorasi Jeep Wisata & Tiket Masuk Objek Wisata',
      'Pendampingan Tour Guide & Tour Leader Berpengalaman',
      'Dokumentasi Lengkap, Free Snack & Air Mineral'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif / VIP Legrest AC',
      'Penginapan Hotel 2 Malam di Bali',
      'Makan 13x Sesuai Program',
      'Tiket Masuk Objek Wisata & Jeep Wisata',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Pengeluaran Pribadi di Luar Program',
      'Tipping Opsional Sukarela Driver & Crew'
    ]
  },

  // 2. PAKET BROMO - BATU - MALANG (4D)
  {
    id: 'paket-bromo-4d',
    title: 'PAKET WISATA BROMO - BATU - MALANG (4D)',
    categoryKey: 'domestik',
    duration: '4 Hari',
    route: ['Bromo', 'Batu', 'Malang'],
    routeDisplay: 'Bromo - Batu - Malang',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=800',
    badge: 'Popular Tour',
    minPrice: '(Start from Rp 1.900.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 43 Seat',
        capacity: 'Min. Rombongan 43 Pax',
        pricePerPerson: '(Start from Rp 1.900.000/org)',
        hotelDetails: 'Hotel 2 Malam di Malang',
        notes: 'Termasuk Makan 10x, Tiket Wisata, Jeep Wisata Bromo, Dokumentasi & Tour Leader'
      },
      {
        busType: 'BIG BUS VIP Legrest 28 Seat',
        capacity: 'VIP Legrest 28 Pax',
        pricePerPerson: '(Start from Rp 2.200.000/org)',
        hotelDetails: 'Hotel 2 Malam di Malang (Kelas Premium)',
        notes: 'Termasuk Makan 10x, Tiket Wisata, Jeep Wisata Bromo, Dokumentasi & Tour Leader'
      }
    ],
    highlights: [
      'Penanjakan Sunrise & Lautan Pasir Bromo dengan Jeep 4x4',
      'Hotel 2 Malam di Malang & Makan 10x',
      'Wisata Kota Batu & Petik Apel / Museum Angkut',
      'Layanan Full Tour Guide & Tour Leader'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif / VIP Legrest AC',
      'Hotel 2 Malam di Malang',
      'Makan 10x Sesuai Program',
      'Sewa Jeep Wisata Bromo & Tiket Masuk Wisata',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Sewa Kuda Bromo (Opsional)',
      'Pengeluaran Pribadi'
    ]
  },

  // 3. PAKET JOGJA - SOLO - KLATEN (3D)
  {
    id: 'paket-jogja-3d',
    title: 'PAKET WISATA JOGJA - SOLO - KLATEN (3D)',
    categoryKey: 'domestik',
    duration: '3 Hari',
    route: ['Jogja', 'Solo', 'Klaten'],
    routeDisplay: 'Jogja - Solo - Klaten',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=800',
    badge: 'Budaya & Edukasi',
    minPrice: '(Start from Rp 1.200.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 43 Seat',
        capacity: 'Min. Rombongan 43 Pax',
        pricePerPerson: '(Start from Rp 1.200.000/org)',
        hotelDetails: 'Hotel 1 Malam di Jogja',
        notes: 'Termasuk Makan 5x, Tiket Wisata, Jeep/VW Wisata, Dokumentasi & Tour Leader'
      },
      {
        busType: 'BIG BUS VIP Legrest Seat',
        capacity: 'VIP Legrest 28 Pax',
        pricePerPerson: '(Start from Rp 1.500.000/org)',
        hotelDetails: 'Hotel 1 Malam di Jogja (Kelas Premium)',
        notes: 'Termasuk Makan 5x, Tiket Wisata, Jeep/VW Wisata, Dokumentasi & Tour Leader'
      }
    ],
    highlights: [
      'Sensasi Seru Jeep Merapi Lava Tour / Wisata VW Safari',
      'Kunjungan Budaya Jogja, Solo & Klaten',
      'Hotel 1 Malam di Jogja & Makan 5x',
      'Dokumentasi Foto/Video & Pendampingan Tour Leader'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif / VIP Legrest AC',
      'Hotel 1 Malam di Jogja',
      'Makan 5x Sesuai Program',
      'Jeep Wisata Merapi / VW Tour & Tiket Masuk',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Belanja Pribadi di Malioboro',
      'Pengeluaran Pribadi'
    ]
  },

  // 4. PAKET SEMARANG - UNGARAN - MAGELANG (3D)
  {
    id: 'paket-semarang-3d',
    title: 'PAKET WISATA SEMARANG - UNGARAN - MAGELANG (3D)',
    categoryKey: 'domestik',
    duration: '3 Hari',
    route: ['Semarang', 'Ungaran', 'Magelang'],
    routeDisplay: 'Semarang - Ungaran - Magelang',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    badge: 'Semarang Tour',
    minPrice: '(Start from Rp 1.200.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 43 Seat',
        capacity: 'Min. Rombongan 43 Pax',
        pricePerPerson: '(Start from Rp 1.200.000/org)',
        hotelDetails: 'Hotel 1 Malam di Bandungan',
        notes: 'Termasuk Makan 5x, Tiket Wisata, Jeep Wisata, Dokumentasi & Tour Leader'
      },
      {
        busType: 'BIG BUS VIP Seat',
        capacity: 'VIP Legrest 28 Pax',
        pricePerPerson: '(Start from Rp 1.800.000/org)',
        hotelDetails: 'Hotel 1 Malam di Bandungan (Kelas Premium)',
        notes: 'Termasuk Makan 5x, Tiket Wisata, Jeep Wisata, Dokumentasi & Tour Leader'
      }
    ],
    highlights: [
      'Kawasan Sejuk Bandungan Ungaran & Wisata Magelang',
      'Hotel 1 Malam di Bandungan & Makan 5x',
      'Petualangan Jeep Wisata & Tiket Masuk Destinasi',
      'Dokumentasi Lengkap & Pendampingan Tour Leader'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif / VIP AC',
      'Hotel 1 Malam di Bandungan',
      'Makan 5x Sesuai Program',
      'Jeep Wisata & Tiket Masuk Objek Wisata',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 5. PAKET WONOSOBO - DIENG (3D)
  {
    id: 'paket-dieng-3d',
    title: 'PAKET WISATA DIENG - WONOSOBO (3D)',
    categoryKey: 'domestik',
    duration: '3 Hari',
    route: ['Wonosobo', 'Dieng'],
    routeDisplay: 'Wonosobo - Dieng',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800',
    badge: 'Negeri di Atas Awan',
    minPrice: '(Start from Rp 1.200.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 43 Seat',
        capacity: 'Min. Rombongan 43 Pax',
        pricePerPerson: '(Start from Rp 1.200.000/org)',
        hotelDetails: 'Glamping Dieng 1 Malam',
        notes: 'Termasuk Makan 5x, Tiket Wisata, Jeep Wisata Dieng, Dokumentasi & Tour Leader'
      },
      {
        busType: 'BIG BUS VIP 28 Seat',
        capacity: 'VIP Legrest 28 Pax',
        pricePerPerson: '(Start from Rp 1.500.000/org)',
        hotelDetails: 'Glamping Dieng 1 Malam (Kelas Premium)',
        notes: 'Termasuk Makan 5x, Tiket Wisata, Jeep Wisata Dieng, Dokumentasi & Tour Leader'
      }
    ],
    highlights: [
      'Pengalaman Menginap di Glamping Dieng (1 Malam)',
      'Eksplor Sikunir, Kawah Sikidang, Telaga Warna dengan Jeep',
      'Makan 5x, Tiket Masuk & Dokumentasi Photo/Video',
      'Kru Tour Leader & Tour Guide Ramah'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif / VIP AC',
      'Menginap 1 Malam di Glamping Dieng',
      'Makan 5x Sesuai Program',
      'Jeep Wisata Dieng & Tiket Masuk Objek Wisata',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 6. PAKET LEMBANG (PP / 1 HARI)
  {
    id: 'paket-lembang-pp',
    title: 'PAKET WISATA LEMBANG BANDUNG (PP)',
    categoryKey: 'domestik',
    duration: '1 Hari (Pulang Pergi)',
    route: ['Bandung', 'Lembang'],
    routeDisplay: 'Lembang - Bandung',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800',
    badge: 'One Day Tour',
    minPrice: '(Start from Rp 375.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 48 Seat',
        capacity: 'Kapasitas 48 Seat',
        pricePerPerson: '(Start from Rp 375.000/org)',
        hotelDetails: 'Tanpa Menginap (Pulang Pergi)',
        notes: 'Termasuk Makan 2x, 2 Tiket Masuk Wisata, Dokumentasi, Tourguide, Tourleader, Snack & Air Mineral'
      }
    ],
    highlights: [
      'Wisata Favorit Lembang Bandung (2 Destinasi Hits)',
      'Makan 2x & 2 Tiket Masuk Wisata',
      'Transportasi Big Bus Eksekutif 48 Seat AC',
      'Dokumentasi, Tour Guide & Tour Leader'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif 48 Seat Full AC',
      'Makan 2x Sesuai Program',
      '2 Tiket Masuk Objek Wisata Lembang',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Pengeluaran Pribadi di Lokasi Wisata'
    ]
  },

  // 7. PAKET KUNINGAN (PP / 1 HARI)
  {
    id: 'paket-kuningan-pp',
    title: 'PAKET WISATA KUNINGAN (PP)',
    categoryKey: 'domestik',
    duration: '1 Hari (Pulang Pergi)',
    route: ['Kuningan', 'Jawa Barat'],
    routeDisplay: 'Kuningan - Jawa Barat',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    badge: 'One Day Tour',
    minPrice: '(Start from Rp 350.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 48 Seat',
        capacity: 'Kapasitas 48 Seat',
        pricePerPerson: '(Start from Rp 350.000/org)',
        hotelDetails: 'Tanpa Menginap (Pulang Pergi)',
        notes: 'Termasuk Makan 2x, 2 Tiket Masuk Wisata, Dokumentasi, Tourguide, Tourleader, Snack & Air Mineral'
      }
    ],
    highlights: [
      'Destinasi Alam & Edukasi Kuningan Jawa Barat',
      'Makan 2x & 2 Tiket Masuk Wisata Pilihan',
      'Transport Big Bus Eksekutif 48 Seat AC',
      'Dokumentasi, Tour Guide & Tour Leader'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif 48 Seat Full AC',
      'Makan 2x Sesuai Program',
      '2 Tiket Masuk Wisata Kuningan',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 8. PAKET MAJALENGKA (PP / 1 HARI)
  {
    id: 'paket-majalengka-pp',
    title: 'PAKET WISATA MAJALENGKA (PP)',
    categoryKey: 'domestik',
    duration: '1 Hari (Pulang Pergi)',
    route: ['Majalengka', 'Jawa Barat'],
    routeDisplay: 'Majalengka - Jawa Barat',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    badge: 'One Day Tour',
    minPrice: '(Start from Rp 375.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 48 Seat',
        capacity: 'Kapasitas 48 Seat',
        pricePerPerson: '(Start from Rp 375.000/org)',
        hotelDetails: 'Tanpa Menginap (Pulang Pergi)',
        notes: 'Termasuk Makan 2x, 2 Tiket Masuk Wisata, Dokumentasi, Tourguide, Tourleader, Snack & Air Mineral'
      }
    ],
    highlights: [
      'Pesona Terasering & Destinasi Indah Majalengka',
      'Makan 2x & 2 Tiket Masuk Wisata',
      'Armada Big Bus Eksekutif 48 Seat',
      'Dokumentasi & Tim Pendamping Profesional'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif 48 Seat Full AC',
      'Makan 2x Sesuai Program',
      '2 Tiket Masuk Objek Wisata Majalengka',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 9. PAKET PANGALENGAN (PP / 1 HARI + RAFTING)
  {
    id: 'paket-pangalengan-pp',
    title: 'PAKET WISATA PANGALENGAN + RAFTING (PP)',
    categoryKey: 'domestik',
    duration: '1 Hari (Pulang Pergi)',
    route: ['Pangalengan', 'Sungai Palayangan'],
    routeDisplay: 'Pangalengan - Rafting Palayangan',
    image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&q=80&w=800',
    badge: 'Petualangan Outbound',
    minPrice: '(Start from Rp 475.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 48 Seat',
        capacity: 'Kapasitas 48 Seat',
        pricePerPerson: '(Start from Rp 475.000/org)',
        hotelDetails: 'Tanpa Menginap (Pulang Pergi)',
        notes: 'Termasuk Makan 2x, 2 Tiket Masuk Wisata, Rafting Palayangan, Dokumentasi, Tourguide, Tourleader, Snack & Air Mineral'
      }
    ],
    highlights: [
      'Petualangan Seru Rafting Sungai Palayangan Pangalengan',
      'Kebun Teh Pangalengan & Situ Cileunca',
      'Makan 2x, 2 Tiket Wisata & Paket Rafting Lengkap',
      'Dokumentasi, Tour Guide & Tour Leader'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif 48 Seat Full AC',
      'Makan 2x Sesuai Program',
      '2 Tiket Masuk Wisata & Paket Rafting Palayangan',
      'Peralatan Safety Rafting & Guide Profesional',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Pakaian Ganti & Pengeluaran Pribadi'
    ]
  },

  // 10. PAKET ANYER (PP / 1 HARI)
  {
    id: 'paket-anyer-pp',
    title: 'PAKET WISATA PANTAI ANYER (PP)',
    categoryKey: 'domestik',
    duration: '1 Hari (Pulang Pergi)',
    route: ['Anyer', 'Banten'],
    routeDisplay: 'Pantai Anyer - Banten',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    badge: 'Wisata Pantai',
    minPrice: '(Start from Rp 185.000)',
    tiers: [
      {
        busType: 'BIG BUS EKSEKUTIF 48 Seat',
        capacity: 'Kapasitas 48 Seat',
        pricePerPerson: '(Start from Rp 185.000/org)',
        hotelDetails: 'Tanpa Menginap (Pulang Pergi)',
        notes: 'Termasuk Tiket Masuk Wisata, Saung Pantai, Dokumentasi, Tourguide, Tourleader, Snack & Air Mineral'
      }
    ],
    highlights: [
      'Rekreasi Hemat Pantai Anyer Banten',
      'Fasilitas Saung Pantai & Tiket Masuk Wisata',
      'Transport Big Bus Eksekutif 48 Seat AC',
      'Dokumentasi, Tour Guide & Tour Leader'
    ],
    includes: [
      'Transportasi Big Bus Eksekutif 48 Seat Full AC',
      'Tiket Masuk Wisata Pantai Anyer & Saung',
      'Dokumentasi, Tour Guide & Tour Leader',
      'Snack & Air Mineral'
    ],
    excludes: [
      'Makan & Wahana Water Sport (Opsional)'
    ]
  },

  // 11. TOUR 3 NEGARA (MALAYSIA - SINGAPORE - THAILAND) - INTERNASIONAL
  {
    id: 'tour-3-negara-asia',
    title: 'TOUR 3 NEGARA (MALAYSIA - SINGAPORE - THAILAND)',
    categoryKey: 'internasional',
    duration: 'Multi-Durasi (3 s/d 7 Hari)',
    route: ['Malaysia', 'Singapore', 'Thailand (Hatyai)'],
    routeDisplay: 'Malaysia (KL & Genting) - Singapore (Merlion) - Thailand (Hatyai)',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=800',
    badge: 'Internasional Asia',
    minPrice: '(Start from Rp 2.400.000)',
    tiers: [
      {
        busType: 'Tour Short Escape (KL - Genting - Melaka)',
        capacity: '3 Hari 2 Malam (All In)',
        pricePerPerson: '(Start from Rp 2.400.000/org)',
        hotelDetails: 'Hotel Bintang 3* / 4* di Kuala Lumpur & Melaka (Gratis Cable Car Genting)',
        notes: 'Bebas Tentukan Tanggal Keberangkatan Sesuai Kesepakatan Dealing'
      },
      {
        busType: 'Tour 2 Negara (Malaysia - Singapore)',
        capacity: '4 Hari 3 Malam (All In)',
        pricePerPerson: '(Start from Rp 3.500.000/org)',
        hotelDetails: 'Hotel Bintang 3* / 4* di Kuala Lumpur & Singapore',
        notes: 'Bebas Tentukan Tanggal Keberangkatan Sesuai Kesepakatan Dealing'
      },
      {
        busType: 'Tour 3 Negara (Malaysia - Singapore - Thailand Hatyai)',
        capacity: '7 Hari 6 Malam (Land Tour Only)',
        pricePerPerson: '(Start from Rp 4.750.000/org)',
        hotelDetails: 'Hotel Bintang 3* / 4* di Malaysia, Singapore & Hatyai Thailand',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Private Group / Open Trip Flexible)'
      }
    ],
    highlights: [
      'Ikon Petronas Twin Towers Kuala Lumpur & Genting Highlands',
      'Merlion Park & Jewel Changi Airport Singapore',
      'Wisata Kuliner Malam & Belanja Hatyai Thailand',
      'Gratis Tiket Cable Car Genting Highlands'
    ],
    includes: [
      'Transportasi Privat (Van / Bus Pariwisata AC)',
      'Penginapan Hotel Bintang 3* & 4*',
      'Konsumsi Makan Sesuai Program & Air Mineral',
      'Tour Leader / Guide Berpengalaman',
      'Gratis Cable Car Genting Highlands'
    ],
    excludes: [
      'Tiket Pesawat PP (Opsional)',
      'Tipping Guide / Driver',
      'Pengeluaran Pribadi'
    ]
  }
];
