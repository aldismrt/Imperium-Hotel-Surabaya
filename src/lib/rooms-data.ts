export interface Room {
  slug: string;
  type: string;
  name: string;
  tagline: string;
  price: number;
  priceLabel: string;
  size: number;
  maxGuests: number;
  bedType: string;
  heroImage: string;
  images: string[];
  shortDesc: string;
  longDesc: string;
  amenities: { category: string; items: string[] }[];
  highlights: { icon: string; label: string; value: string }[];
  policies: string[];
  features?: string[];
}

export const rooms: Room[] = [
  {
    slug: "presidential-suite",
    features: ["120 m²","King Bed","Butler 24H","Panoramic View"],
    type: "Flagship",
    name: "Presidential Suite",
    tagline: "The pinnacle of luxury — an experience reserved for the extraordinary.",
    price: 8500000,
    priceLabel: "Rp 8.500.000",
    size: 120,
    maxGuests: 4,
    bedType: "King Bed",
    heroImage: "/images/room-presidential.jpg",
    images: ["/images/room-presidential.jpg", "/images/atrium.jpg", "/images/facility-spa.jpg", "/images/hero-pool.jpg"],
    shortDesc: "Suite paling prestisius di Imperium Hotel — ruang tamu mewah dengan dekorasi klasik emas.",
    longDesc: `Presidential Suite adalah puncak kemewahan yang kami tawarkan. Dengan luas 120 m², suite ini dilengkapi ruang tamu private, dining room eksklusif, dan kamar mandi marble dengan bathtub freestanding. Layanan butler 24 jam siap memenuhi setiap kebutuhan Anda.\n\nDesain interior menggabungkan estetika klasik Eropa dengan sentuhan modern — dinding damask, furnitur bespoke, dan koleksi seni pilihan menciptakan suasana yang benar-benar tak tertandingi.\n\nPemandangan panoramik 270° dari lantai atas memperlihatkan skyline Surabaya yang memukau, dari siang hingga malam hari.`,
    highlights: [
      { icon: "📐", label: "Luas Kamar", value: "120 m²" },
      { icon: "👥", label: "Kapasitas", value: "Maks. 4 Tamu" },
      { icon: "🛏️", label: "Tipe Kasur", value: "King Bed" },
      { icon: "🏙️", label: "Pemandangan", value: "Panoramic City View" },
      { icon: "🛎️", label: "Butler", value: "24 Jam Dedicated" },
      { icon: "🍳", label: "Breakfast", value: "Complimentary for 2" },
    ],
    amenities: [
      { category: "Kamar & Ruang", items: ["Living Room Private", "Dining Room (6 Pax)", "Walk-in Wardrobe", "Home Office Corner", "Guest Toilet Terpisah"] },
      { category: "Kamar Mandi", items: ["Bathtub Freestanding Marble", "Rain Shower & Shower Bidet", "Double Vanity", "Heated Floor", "Toiletries Hermès"] },
      { category: "Teknologi", items: ["Smart TV 85\" 8K (3 Unit)", "Bose Sound System", "iPad Room Control", "High-speed WiFi 1 Gbps", "Video Call Studio"] },
      { category: "Layanan Eksklusif", items: ["Butler Service 24 Jam", "Limousine Airport Transfer", "Personal Concierge", "In-suite Dining Anytime", "Laundry & Pressing Gratis"] },
    ],
    policies: [
      "Check-in: 14:00 WIB | Check-out: 12:00 WIB",
      "Early check-in & late check-out tersedia (subject to availability)",
      "Pembatalan gratis hingga 72 jam sebelum kedatangan",
      "Hewan peliharaan tidak diperbolehkan",
      "Kawasan bebas rokok (smoking area tersedia di balkon)",
    ],
  },
  {
    slug: "junior-suite",
    features: ["60 m²","King Bed","Soaking Tub"],
    type: "Suite",
    name: "Junior Suite",
    tagline: "Ruang lebih luas, pengalaman lebih kaya — ideal untuk pasangan & keluarga kecil.",
    price: 3200000,
    priceLabel: "Rp 3.200.000",
    size: 60,
    maxGuests: 3,
    bedType: "King Bed",
    heroImage: "/images/room-suite.jpg",
    images: ["/images/room-suite.jpg", "/images/room-deluxe.jpg", "/images/facility-gym.jpg", "/images/hero-pool.jpg"],
    shortDesc: "Suite luas dengan area duduk terpisah dan view kota yang memukau — kemewahan yang terjangkau.",
    longDesc: `Junior Suite menawarkan ruang yang berlimpah dengan area duduk terpisah yang nyaman untuk bersantai atau bekerja. Dengan luas 60 m², suite ini memberikan rasa kemewahan yang sesungguhnya tanpa kompromi.\n\nKasur King ukuran premium dengan linen Frette Italia memastikan tidur terbaik Anda. Area kerja ergonomis dengan pencahayaan optimal sangat cocok untuk tamu bisnis.\n\nKamar mandi luas dengan bathtub soaking dan rain shower terpisah, dilengkapi toiletries premium dari brand internasional.`,
    highlights: [
      { icon: "📐", label: "Luas Kamar", value: "60 m²" },
      { icon: "👥", label: "Kapasitas", value: "Maks. 3 Tamu" },
      { icon: "🛏️", label: "Tipe Kasur", value: "King Bed" },
      { icon: "🏙️", label: "Pemandangan", value: "City & Garden View" },
      { icon: "🛁", label: "Bathtub", value: "Soaking Tub" },
      { icon: "🍳", label: "Breakfast", value: "Complimentary for 2" },
    ],
    amenities: [
      { category: "Kamar & Ruang", items: ["Sitting Area Terpisah", "Sofa & Coffee Table", "Walk-in Wardrobe", "Writing Desk Ergonomis", "Mini Bar Premium"] },
      { category: "Kamar Mandi", items: ["Bathtub Soaking", "Rain Shower Terpisah", "Double Sink", "Magnifying Mirror", "Toiletries L'Occitane"] },
      { category: "Teknologi", items: ["Smart TV 65\" 4K", "Bose Speaker", "USB & Wireless Charging", "High-speed WiFi 500 Mbps", "Coffee Machine Nespresso"] },
      { category: "Layanan", items: ["Turndown Service", "In-room Dining 24 Jam", "Laundry Express", "Concierge Service", "Welcome Fruit Basket"] },
    ],
    policies: [
      "Check-in: 14:00 WIB | Check-out: 12:00 WIB",
      "Early check-in & late check-out tersedia (subject to availability)",
      "Pembatalan gratis hingga 48 jam sebelum kedatangan",
      "Extra bed tersedia dengan biaya tambahan",
      "Kawasan bebas rokok",
    ],
  },
  {
    slug: "deluxe-room",
    features: ["40 m²","King Bed","City View"],
    type: "Deluxe",
    name: "Deluxe Room",
    tagline: "Kenyamanan premium dengan sentuhan hangat — pilihan sempurna untuk setiap perjalanan.",
    price: 1800000,
    priceLabel: "Rp 1.800.000",
    size: 40,
    maxGuests: 2,
    bedType: "King Bed",
    heroImage: "/images/room-deluxe.jpg",
    images: ["/images/room-deluxe.jpg", "/images/room-superior.jpg", "/images/dining-restaurant.jpg", "/images/facility-gym.jpg"],
    shortDesc: "Kamar Deluxe dengan desain hangat elegan — tempat untuk beristirahat setelah hari yang panjang.",
    longDesc: `Deluxe Room adalah pilihan terpopuler kami — menggabungkan kenyamanan premium dengan desain yang hangat dan mengundang. Luas 40 m² dengan layout yang direncanakan matang memaksimalkan setiap sudut ruangan.\n\nKasur King dengan topper premium dan linen 400-thread-count memastikan tidur berkualitas. Pencahayaan ambiance yang bisa disetel membuat Anda bisa menciptakan suasana sesuai mood.\n\nKamar mandi modern dengan rainfall shower dan produk perawatan premium. Mini bar dan coffee station lengkap untuk kebutuhan Anda.`,
    highlights: [
      { icon: "📐", label: "Luas Kamar", value: "40 m²" },
      { icon: "👥", label: "Kapasitas", value: "Maks. 2 Tamu" },
      { icon: "🛏️", label: "Tipe Kasur", value: "King Bed" },
      { icon: "🏙️", label: "Pemandangan", value: "City View" },
      { icon: "☕", label: "Fasilitas", value: "Coffee Station" },
      { icon: "🍳", label: "Breakfast", value: "Tersedia (Add-on)" },
    ],
    amenities: [
      { category: "Kamar", items: ["King Bed + Premium Topper", "Sofa Santai", "Writing Desk", "Mini Bar & Coffee Station", "Safe Deposit Box Digital"] },
      { category: "Kamar Mandi", items: ["Rainfall Shower", "Bathtub Standalone", "Hairdryer Profesional", "Magnifying Mirror", "Toiletries Crabtree & Evelyn"] },
      { category: "Teknologi", items: ["Smart TV 55\" 4K", "USB Charging Port", "High-speed WiFi 300 Mbps", "IPTV 200+ Channel", "Nespresso Machine"] },
      { category: "Layanan", items: ["Turndown Service", "In-room Dining (06.00–23.00)", "Laundry Service", "Daily Housekeeping", "Welcome Drink"] },
    ],
    policies: [
      "Check-in: 14:00 WIB | Check-out: 12:00 WIB",
      "Pembatalan gratis hingga 24 jam sebelum kedatangan",
      "Extra bed tersedia dengan biaya tambahan Rp 350.000",
      "Anak di bawah 5 tahun gratis (tanpa extra bed)",
      "Kawasan bebas rokok",
    ],
  },
  {
    slug: "superior-room",
    features: ["32 m²","King Bed","Work Desk"],
    type: "Superior",
    name: "Superior Room",
    tagline: "Ketenangan & kenyamanan modern — pilihan cerdas untuk traveler berkelas.",
    price: 1200000,
    priceLabel: "Rp 1.200.000",
    size: 32,
    maxGuests: 2,
    bedType: "King Bed",
    heroImage: "/images/room-superior.jpg",
    images: ["/images/room-superior.jpg", "/images/room-deluxe.jpg", "/images/facility-gym.jpg", "/images/dining-buffet.jpg"],
    shortDesc: "Superior Room minimalis modern dengan suasana tenang — sempurna untuk perjalanan bisnis.",
    longDesc: `Superior Room hadir dengan filosofi desain "less is more" — minimalis, bersih, dan elegan. Setiap elemen dipilih dengan cermat untuk menciptakan harmoni visual yang menenangkan.\n\nDengan luas 32 m², kamar ini efisien namun tidak pernah terasa sempit. Area kerja yang baik dengan pencahayaan yang tepat sangat mendukung produktivitas bisnis Anda.\n\nKasur King premium dengan duvet goose-down memastikan tidur yang nyenyak. Kamar mandi modern dengan shower rain yang menyegarkan siap memulai hari Anda dengan sempurna.`,
    highlights: [
      { icon: "📐", label: "Luas Kamar", value: "32 m²" },
      { icon: "👥", label: "Kapasitas", value: "Maks. 2 Tamu" },
      { icon: "🛏️", label: "Tipe Kasur", value: "King Bed" },
      { icon: "🏙️", label: "Pemandangan", value: "Garden / Pool View" },
      { icon: "💼", label: "Business", value: "Work Desk + WiFi 1 Gbps" },
      { icon: "🍳", label: "Breakfast", value: "Tersedia (Add-on)" },
    ],
    amenities: [
      { category: "Kamar", items: ["King Bed + Goose-down Duvet", "Ergonomic Work Desk", "Armchair", "Mini Bar", "Digital Safe"] },
      { category: "Kamar Mandi", items: ["Rain Shower", "Single Vanity", "Hairdryer", "Toiletries Premium", "Fluffy Bathrobe & Slippers"] },
      { category: "Teknologi", items: ["Smart TV 50\" 4K", "High-speed WiFi 1 Gbps", "USB Charging Hub", "Bluetooth Speaker", "IPTV 200+ Channel"] },
      { category: "Layanan", items: ["Daily Housekeeping", "In-room Dining (07.00–22.00)", "Laundry Service", "Wake-up Call", "Welcome Drink"] },
    ],
    policies: [
      "Check-in: 14:00 WIB | Check-out: 12:00 WIB",
      "Pembatalan gratis hingga 24 jam sebelum kedatangan",
      "Extra bed tersedia dengan biaya tambahan Rp 300.000",
      "Anak di bawah 5 tahun gratis (tanpa extra bed)",
      "Kawasan bebas rokok",
    ],
  },
  {
    slug: "twin-room",
    features: ["28 m²","Twin Bed","Dual Charging"],
    type: "Standard",
    name: "Twin Room",
    tagline: "Fleksibilitas & kenyamanan untuk dua — ideal untuk teman perjalanan & keluarga.",
    price: 980000,
    priceLabel: "Rp 980.000",
    size: 28,
    maxGuests: 2,
    bedType: "2 Single Beds",
    heroImage: "/images/room-twin.jpg",
    images: ["/images/room-twin.jpg", "/images/room-superior.jpg", "/images/dining-buffet.jpg", "/images/facility-parking.jpg"],
    shortDesc: "Twin Room dengan dua single bed — pilihan terbaik untuk dua orang yang ingin privasi masing-masing.",
    longDesc: `Twin Room dirancang khusus untuk dua tamu yang membutuhkan fleksibilitas — dua single bed terpisah dengan pencahayaan dan storage masing-masing yang independen.\n\nIdeal untuk rekan bisnis, sahabat perjalanan, atau orang tua dengan anak yang lebih besar. Setiap sisi memiliki nakas, lampu baca, dan charging port sendiri.\n\nKamar mandi kompak namun lengkap dengan semua amenities yang diperlukan. Desain ruangan yang efisien dengan warna netral menciptakan suasana yang nyaman dan bersih.`,
    highlights: [
      { icon: "📐", label: "Luas Kamar", value: "28 m²" },
      { icon: "👥", label: "Kapasitas", value: "Maks. 2 Tamu" },
      { icon: "🛏️", label: "Tipe Kasur", value: "2 Single Beds" },
      { icon: "🏙️", label: "Pemandangan", value: "City / Garden View" },
      { icon: "🔌", label: "Charging", value: "Dual per Sisi Kasur" },
      { icon: "🍳", label: "Breakfast", value: "Tersedia (Add-on)" },
    ],
    amenities: [
      { category: "Kamar", items: ["2 Single Bed Premium", "Individual Bedside Lighting", "Shared Work Desk", "Mini Bar", "Digital Safe"] },
      { category: "Kamar Mandi", items: ["Shower (Rain Head)", "Single Vanity", "Hairdryer", "Toiletries Standar", "Bathrobe & Slippers"] },
      { category: "Teknologi", items: ["Smart TV 43\" 4K", "High-speed WiFi 300 Mbps", "USB Charging per Sisi", "IPTV 200+ Channel", "Phone Desk"] },
      { category: "Layanan", items: ["Daily Housekeeping", "In-room Dining (07.00–22.00)", "Laundry Service", "Wake-up Call", "Welcome Drink"] },
    ],
    policies: [
      "Check-in: 14:00 WIB | Check-out: 12:00 WIB",
      "Pembatalan gratis hingga 24 jam sebelum kedatangan",
      "Tidak tersedia extra bed (kapasitas maksimal 2 tamu)",
      "Anak di bawah 5 tahun gratis berbagi kasur dengan orang tua",
      "Kawasan bebas rokok",
    ],
  },
];

export const getRoomBySlug = (slug: string) => rooms.find((r) => r.slug === slug);
export const getRelatedRooms = (currentSlug: string, count = 3) =>
  rooms.filter((r) => r.slug !== currentSlug).slice(0, count);
