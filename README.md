# 🏨 Imperium Hotel Surabaya — Next.js Website

Website hotel luxury profesional dibangun dengan **Next.js 14**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**.

---

## 🚀 Cara Menjalankan

### Development
```bash
npm install
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000)

### Production
```bash
npm install
npm run build
npm start
```

---

## 📁 Struktur Project

```
imperium-hotel/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + metadata SEO
│   │   ├── page.tsx          # Main page (assembles all sections)
│   │   └── globals.css       # CSS variables + Tailwind base
│   └── components/
│       ├── Navbar.tsx         # Sticky navbar dengan scroll effect
│       ├── Hero.tsx           # Hero section + parallax image
│       ├── About.tsx          # About hotel + stats
│       ├── Rooms.tsx          # Room grid (5 tipe kamar)
│       ├── Facilities.tsx     # Interactive facility switcher
│       ├── Dining.tsx         # Restaurant & dining section
│       ├── Gallery.tsx        # Photo gallery + lightbox
│       ├── Testimonials.tsx   # Auto-rotating testimonials
│       ├── BookingContact.tsx # Booking form + contact
│       ├── Footer.tsx         # Footer lengkap
│       └── SectionReveal.tsx  # Scroll animation wrapper
├── public/
│   └── images/               # Semua foto hotel (15 gambar)
├── tailwind.config.ts         # Custom colors: gold, navy, cream
└── next.config.ts             # Image optimization config
```

---

## 🎨 Tech Stack

| Library | Kegunaan |
|---|---|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animasi scroll & transisi |
| next/image | Optimasi gambar otomatis |
| Lucide React | Icon library |

---

## 🌐 Deploy ke Vercel

```bash
npm install -g vercel
vercel --prod
```

Atau push ke GitHub dan connect ke [vercel.com](https://vercel.com).

---

Built for portfolio purposes · Imperium Hotel Surabaya © 2025
