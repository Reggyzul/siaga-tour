import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  // 1. AVANZA
  {
    id: 'avanza',
    name: 'Toyota Avanza (All New)',
    category: 'Mini Bus',
    pricePerDay: 500000,
    priceDisplay: '(Start from Rp 500.000)',
    image: '/avanza.jpg',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin Irit',
    includeList: ['AC Double Blower', 'Kabin Bersih & Harum', 'Audio Bluetooth', 'Driver Ramah', 'BBM / Non-BBM Fleksibel'],
    description: 'Pilihan hemat dan ekonomis untuk city tour, antar-jemput bandara/hotel, dan rombongan keluarga kecil.',
    rating: 4.8,
    reviewsCount: 125,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '6 - 7 Kursi' },
      { label: 'Tarif Sewa', value: '(Start from Rp 500.000)' },
      { label: 'Layanan Utama', value: 'City Tour, Bandara & Antar-Jemput' }
    ]
  },

  // 2. INNOVA
  {
    id: 'innova',
    name: 'Toyota Innova (Reborn / Zenix)',
    category: 'Mini Bus',
    pricePerDay: 900000,
    priceDisplay: '(Start from Rp 900.000)',
    image: '/innova.jpg',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Diesel / Bensin',
    includeList: ['AC Climate Control', 'Suspensi Nyaman & Empuk', 'Audio Screen Bluetooth', 'Driver Berpengalaman'],
    description: 'Mobil keluarga MPV premium dengan suspensi sangat empuk dan kabin ekstra nyaman.',
    rating: 4.9,
    reviewsCount: 140,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi' },
      { label: 'Tarif Sewa', value: '(Start from Rp 900.000)' },
      { label: 'Layanan Utama', value: 'Perjalanan Dinas, Tour Family & Land Tour' }
    ]
  },

  // 3. HIACE COMMUTER 14 SEAT
  {
    id: 'hiace-commuter-14',
    name: 'Toyota Hiace Commuter (14 Seat)',
    category: 'Hiace',
    pricePerDay: 1100000,
    priceDisplay: '(Start from Rp 1.100.000)',
    image: '/hiace_premio.jpg',
    seats: 14,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: ['AC Double Blower Multi-Zone', 'Reclining Seats', 'Audio System Bluetooth', 'Kabin Luas & Leger', 'Driver Handal'],
    description: 'Solusi transportasi rombongan sedang favorit untuk study tour, outing kantor, dan arisan.',
    rating: 4.9,
    reviewsCount: 118,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '14 Kursi Penumpang' },
      { label: 'Tarif Sewa', value: '(Start from Rp 1.100.000)' },
      { label: 'Fasilitas', value: 'Full AC, Audio System, Charger' }
    ]
  },

  // 4. HIACE COMMUTER LUXURY SEAT
  {
    id: 'hiace-commuter-luxury',
    name: 'Toyota Hiace Commuter Luxury Seat',
    category: 'Hiace',
    pricePerDay: 2200000,
    priceDisplay: '(Start from Rp 2.200.000)',
    image: '/hiace_premio.jpg',
    seats: 10,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: ['Captain Seats Leather Luxury', 'AC Multi-Zone', 'Smart TV / Audio System', 'Legrest Comfort', 'Driver VIP'],
    description: 'Minibus Hiace Commuter dengan interior modifikasi Captain Seat luxury untuk kenyamanan kelas bisnis.',
    rating: 5.0,
    reviewsCount: 92,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '8 - 10 Captain Seats' },
      { label: 'Tarif Sewa', value: '(Start from Rp 2.200.000)' },
      { label: 'Fasilitas', value: 'Captain Leather Seats, TV Audio, Port USB' }
    ]
  },

  // 5. HIACE PREMIO 14 SEAT
  {
    id: 'hiace-premio-14',
    name: 'Toyota Hiace Premio (14 Seat)',
    category: 'Hiace',
    pricePerDay: 1200000,
    priceDisplay: '(Start from Rp 1.200.000)',
    image: '/hiace_premio.jpg',
    seats: 14,
    transmission: 'Manual',
    fuel: 'Diesel Euro 4',
    includeList: ['AC Climate Control Multi-Zone', 'Kabin Kedap Suara', 'Reclining Seats Ergonomis', 'Desain Modern Head-Off', 'Driver Profesional'],
    description: 'Generasi Hiace Premio terbaru dengan kabin luas kedap suara dan keamanan modern.',
    rating: 4.9,
    reviewsCount: 130,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '14 Kursi Penumpang' },
      { label: 'Tarif Sewa', value: '(Start from Rp 1.200.000)' },
      { label: 'Fasilitas', value: 'Kabin Silent, AC Dual Zone, Reclining Seats' }
    ]
  },

  // 6. HIACE PREMIO LUXURY 14 SEAT
  {
    id: 'hiace-premio-luxury',
    name: 'Toyota Hiace Premio Luxury (14 Seat)',
    category: 'Hiace',
    pricePerDay: 2500000,
    priceDisplay: '(Start from Rp 2.500.000)',
    image: '/hiace_premio.jpg',
    seats: 14,
    transmission: 'Manual/Matic',
    fuel: 'Diesel Euro 4',
    includeList: ['Captain Seats Leather Premium', 'Smart TV Karaoke', 'Ambient Lighting', 'Legrest Executiv', 'Driver Service VIP'],
    description: 'Toyota Hiace Premio versi Luxury paling mewah untuk tamu instansi, VVIP, dan eksekutif.',
    rating: 5.0,
    reviewsCount: 85,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '10 - 14 VIP Seats' },
      { label: 'Tarif Sewa', value: '(Start from Rp 2.500.000)' },
      { label: 'Fasilitas', value: 'VIP Captain Seat, Smart Entertainment, Ambient Light' }
    ]
  },

  // 7. ELF 19 SEAT
  {
    id: 'elf-19-seat',
    name: 'Isuzu Elf Long (19 Seat)',
    category: 'Elf & Minibus',
    pricePerDay: 1100000,
    priceDisplay: '(Start from Rp 1.100.000)',
    image: '/elf_long.jpg',
    seats: 19,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: ['Full AC Ducting', 'Reclining Seats', 'Audio System & USB Charger', 'Bagasi Belakang', 'Driver Handal Rute Nusantara'],
    description: 'Microbus tangguh berkapasitas 19 kursi yang sangat efisien untuk rombongan outing sekolah / instansi.',
    rating: 4.8,
    reviewsCount: 96,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '19 Kursi Penumpang' },
      { label: 'Tarif Sewa', value: '(Start from Rp 1.100.000)' },
      { label: 'Fasilitas', value: 'Full AC Ducting, Audio Karaoke, Charger' }
    ]
  },

  // 8. ELF 10 LUXURY SEAT
  {
    id: 'elf-10-luxury',
    name: 'Isuzu Elf Luxury (10 Seat)',
    category: 'Elf & Minibus',
    pricePerDay: 1500000,
    priceDisplay: '(Start from Rp 1.500.000)',
    image: '/elf_long.jpg',
    seats: 10,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: ['Captain Seats Leather VIP', 'AC Louver Individual', 'Smart Entertainment', 'Kabin Ekstra Longgar', 'Driver Sopan'],
    description: 'Modifikasi Elf Luxury 10 seat dengan kursi longgar dan empuk untuk kenyamanan ekstra.',
    rating: 4.9,
    reviewsCount: 78,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '10 Captain Seats' },
      { label: 'Tarif Sewa', value: '(Start from Rp 1.500.000)' },
      { label: 'Fasilitas', value: 'Captain Leather Seats, Entertainment, Audio' }
    ]
  },

  // 9. ELF JUMBO / COASTER 18 SEAT
  {
    id: 'elf-jumbo-coaster-18',
    name: 'Elf Jumbo / Coaster (18 Seat)',
    category: 'Elf & Minibus',
    pricePerDay: 2200000,
    priceDisplay: '(Start from Rp 2.200.000)',
    image: '/elf_long.jpg',
    seats: 18,
    transmission: 'Manual',
    fuel: 'Diesel High Power',
    includeList: ['Full AC Louver Multi-Zone', 'High Ceiling Kabin Tinggi', 'Reclining Seats', 'Audio Karaoke', 'Driver Spesialis Land Tour'],
    description: 'Kendaraan Coaster / Elf Jumbo dengan atap tinggi (*high ceiling*) sehingga penumpang berdiri & jalan sangat leluasa.',
    rating: 4.9,
    reviewsCount: 64,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '18 Kursi Penumpang' },
      { label: 'Tarif Sewa', value: '(Start from Rp 2.200.000)' },
      { label: 'Fasilitas', value: 'High Ceiling, Full AC Multi-Zone, Audio Karaoke' }
    ]
  },

  // 10. ELF GRANDTOUR 18 SEAT
  {
    id: 'elf-grandtour-18',
    name: 'Elf Grandtour (18 Seat)',
    category: 'Elf & Minibus',
    pricePerDay: 2500000,
    priceDisplay: '(Start from Rp 2.500.000)',
    image: '/elf_long.jpg',
    seats: 18,
    transmission: 'Manual',
    fuel: 'Diesel Euro 4',
    includeList: ['Full AC Multi-Zone', 'Kabin Luxury Modern', 'Kursi Reclining Ergonomis', 'Audio Visual Karaoke', 'Driver Lisensi Pariwisata'],
    description: 'Armada Elf Grandtour kelas atas untuk kenyamanan perjalanan wisata antarkota & antarprovinsi.',
    rating: 4.9,
    reviewsCount: 71,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '18 Kursi Grandtour' },
      { label: 'Tarif Sewa', value: '(Start from Rp 2.500.000)' },
      { label: 'Fasilitas', value: 'Interior Premium, Full AC, Karaoke' }
    ]
  },

  // 11. MEDIUM BUS 29-35 SEAT
  {
    id: 'medium-bus-standard',
    name: 'Medium Bus Pariwisata (29-35 Seat)',
    category: 'Bus Pariwisata',
    pricePerDay: 2000000,
    priceDisplay: '(Start from Rp 2.000.000)',
    image: '/medium_bus.avif',
    seats: 35,
    transmission: 'Manual',
    fuel: 'Diesel High Power',
    includeList: ['Full AC Louver', 'Audio System & Karaoke', 'Reclining Seats 2-2', 'Bagasi Samping & Belakang', 'Kru & Driver Profesional'],
    description: 'Pilihan bus sedang terlaris untuk kegiatan ziarah, study tour sekolah, arisan, & outing komunitas.',
    rating: 4.9,
    reviewsCount: 155,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '29 - 35 Kursi Penumpang' },
      { label: 'Tarif Sewa', value: '(Start from Rp 2.000.000)' },
      { label: 'Fasilitas', value: 'Full AC, Sound Karaoke, Charger, Bagasi Samping' }
    ]
  },

  // 12. MEDIUM LEGREST BUS 18 SEAT
  {
    id: 'medium-bus-legrest-18',
    name: 'Medium Bus Legrest VIP (18 Seat)',
    category: 'Bus Pariwisata',
    pricePerDay: 3000000,
    priceDisplay: '(Start from Rp 3.000.000)',
    image: '/medium_bus.avif',
    seats: 18,
    transmission: 'Manual',
    fuel: 'Diesel High Power',
    includeList: ['Seats Legrest Jumbo VIP', 'Full AC', 'Toilet Bersih', 'Smart TV Karaoke', 'Dispenser & Bantal Selimut', 'Kru Pendamping'],
    description: 'Medium bus dengan konfigurasi khusus 18 kursi Legrest jumbo untuk kenyamanan perjalanan jarak jauh tanpa lelah.',
    rating: 5.0,
    reviewsCount: 88,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '18 Kursi Legrest Jumbo' },
      { label: 'Tarif Sewa', value: '(Start from Rp 3.000.000)' },
      { label: 'Fasilitas', value: 'Kursi Legrest, Toilet, Smart TV Karaoke, Bantal Selimut' }
    ]
  },

  // 13. BIG BUS 40-59 SEAT
  {
    id: 'bigbus-standard-40-59',
    name: 'Big Bus Eksekutif (40 - 59 Seat)',
    category: 'Bus Pariwisata',
    pricePerDay: 2700000,
    priceDisplay: '(Start from Rp 2.700.000)',
    image: '/zivanes.avif',
    seats: 59,
    transmission: 'Manual',
    fuel: 'Diesel Heavy Duty',
    includeList: ['Full AC Multi-Zone', 'Toilet Higienis', 'Full Sound System & Karaoke', 'Reclining Seats 2-2 / 2-3', 'Driver & Co-Driver Lisensi'],
    description: 'Armada Big Bus Eksekutif kapasitas besar paling pas untuk Study Tour PAUD/TK/Sekolah, Instansi BUMN, & Gathering Perusahaan.',
    rating: 4.9,
    reviewsCount: 210,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '40 - 59 Kursi Penumpang' },
      { label: 'Tarif Sewa', value: '(Start from Rp 2.700.000)' },
      { label: 'Fasilitas', value: 'Full AC, Toilet, Full Karaoke, Safety Belt' }
    ]
  },

  // 14. BIG BUS LEGREST 30 SEAT
  {
    id: 'bigbus-legrest-30',
    name: 'Big Bus Legrest VIP (30 Seat)',
    category: 'Bus Pariwisata',
    pricePerDay: 4200000,
    priceDisplay: '(Start from Rp 4.200.000)',
    image: '/miyor.avif',
    seats: 30,
    transmission: 'Manual',
    fuel: 'Diesel Air Suspension',
    includeList: ['Suspensi Udara (Air Suspension)', 'Seats Legrest Super VIP', 'Toilet Bersih', 'Smart TV Karaoke & Audio', 'Selimut & Bantal', 'Kru Tour Leader'],
    description: 'Big Bus kelas VIP Super Executive dengan suspensi udara halus dan 30 kursi Legrest ekstra empuk.',
    rating: 5.0,
    reviewsCount: 165,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '30 Kursi Legrest VIP' },
      { label: 'Tarif Sewa', value: '(Start from Rp 4.200.000)' },
      { label: 'Fasilitas', value: 'Air Suspension, Seats Legrest, Toilet, Smart TV, Bantal Selimut' }
    ]
  },

  // 15. BUS LUXURY (MOTORHOME)
  {
    id: 'bus-luxury-motorhome',
    name: 'Bus Luxury (Motorhome / VIP Suite)',
    category: 'Bus Pariwisata',
    pricePerDay: 6500000,
    priceDisplay: '(Start from Rp 6.500.000)',
    image: '/zivanes.avif',
    seats: 12,
    transmission: 'Manual/Matic',
    fuel: 'Diesel Air Suspension',
    includeList: ['Kabin Living Room Suite', 'Tempat Tidur Bed Kasur VIP', 'Dapur Ringan & Mini Bar', 'Toilet & Shower Murni', 'Karaoke Smart Home', 'Pramugari / Crew Dedicated'],
    description: 'Motorhome / Bus Luxury super eksklusif bergaya hotel berjalan dengan ruang santai, tempat tidur, mini bar & toilet shower.',
    rating: 5.0,
    reviewsCount: 42,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '10 - 15 Pax VIP' },
      { label: 'Tarif Sewa', value: '(Start from Rp 6.500.000)' },
      { label: 'Fasilitas', value: 'Living Room, Bed Bedroom, Kitchenette, Toilet Shower, Smart Home' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Hj. Syamsul Bahri',
    role: 'Panitia Tour Gathering BUMN Jakarta',
    text: 'Sangat puas menggunakan jasa PT. SIAGA WISATA JAYA (Siaga Tour)! Pelayanannya profesional sejak tahun 2010. Big Bus VIP nya amat nyaman, AC dingin, toilet bersih, bantal selimut lengkap. Mas Tri Jaya Mulyana dan tim Tour Leader sangat amanah memandu rombongan kami.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModel: 'Big Bus Legrest 30 Seat',
    date: '2025-06-15'
  },
  {
    id: '2',
    name: 'Dra. Hj. Endang Rahayu',
    role: 'Pengurus Arisan & Komunitas Pengajian Jakarta Selatan',
    text: 'Kami langganan sewa Hiace Premio & Elf Jumbo dari Siaga Tour Pejaten Barat. Pak Tri Jaya Mulyana sangat ramah dan kooperatif. Perjalanan ke Jogja dan Dieng sangat amanah, hemat, dan pelayanan primanya beneran terbukti!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Hiace Premio & Elf Jumbo',
    date: '2025-05-20'
  },
  {
    id: '3',
    name: 'dr. H. Hendra Wijaya',
    role: 'Ketua Outing Instansi Swasta',
    text: 'Pelayanan Siaga Tour untuk paket Wisata Bromo Malang sungguh luar biasa rapi! Fasilitas hotel, jeep Bromo, makan 10x dan busnya memuaskan 100%. Sangat merekomendasikan PT. SIAGA WISATA JAYA.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModel: 'Paket Wisata Bromo Malang',
    date: '2025-07-02'
  }
];
