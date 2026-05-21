# 🏨 Imperium Hotel Surabaya

> **Commercial hotel website** built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.  
> Designed as a professional portfolio project for a luxury 5-star hotel located in Surabaya, East Java, Indonesia.

---

## 📸 Preview

| Homepage Hero | Rooms Listing | Room Detail |
|---|---|---|
| <img width="1919" height="912" alt="image" src="https://github.com/user-attachments/assets/8b659887-3226-4b4b-86da-20253cb864f4" /> | <img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/d724be52-a800-4960-97d5-e251f46f80b7" /> | <img width="1913" height="1074" alt="image" src="https://github.com/user-attachments/assets/f07bc541-b6e5-48f3-9ba5-99be0c3240f7" />
 
 


---

## ✨ Features

- **Multi-page routing** — Homepage, `/rooms` listing, `/rooms/[slug]` detail per room type
- **5 Room types** with dedicated detail pages (Presidential Suite, Junior Suite, Deluxe, Superior, Twin)
- **Smart Navbar** — anchor scroll on homepage, full path navigation on inner pages
- **Scroll reveal animations** via Framer Motion
- **Interactive Facilities** switcher with animated image transitions
- **Photo Gallery** with lightbox (prev/next navigation + keyboard ESC)
- **Auto-rotating Testimonials** with animated dot indicators
- **Booking form** with date picker, room type & guest selector
- **Fully responsive** — mobile, tablet, desktop
- **Static Site Generation (SSG)** — all 10 pages pre-rendered at build time
- **SEO metadata** per page via Next.js Metadata API

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.6 | Framework — App Router, SSG, Image Optimization |
| [TypeScript](https://typescriptlang.org) | ^5 | Type safety across all components |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first styling with custom `@theme` tokens |
| [Framer Motion](https://www.framer.com/motion/) | ^12 | Scroll animations, page transitions, AnimatePresence |
| [Lucide React](https://lucide.dev) | ^1 | Icon library |
| [next/image](https://nextjs.org/docs/api-reference/next/image) | built-in | Automatic image optimization (AVIF/WebP) |
| [next/font](https://nextjs.org/docs/api-reference/next/font) | built-in | Google Fonts (Cormorant Garamond + Jost) |

---

## 📁 Project Structure

```
imperium-hotel/
├── public/
│   └── images/                  # 15 optimized hotel photos (JPEG)
│       ├── hero-pool.jpg
│       ├── room-presidential.jpg
│       ├── room-suite.jpg
│       ├── room-deluxe.jpg
│       ├── room-superior.jpg
│       ├── room-twin.jpg
│       ├── facility-gym.jpg
│       ├── facility-spa.jpg
│       ├── facility-jacuzzi.jpg
│       ├── facility-parking.jpg
│       ├── dining-restaurant.jpg
│       ├── dining-buffet.jpg
│       ├── atrium.jpg
│       ├── exterior.jpg
│       └── logo.jpg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout — Google Fonts, SEO metadata
│   │   ├── page.tsx              # Homepage — assembles all sections
│   │   ├── globals.css           # Tailwind v4 @theme tokens + global keyframes
│   │   └── rooms/
│   │       ├── page.tsx          # /rooms — listing page with filter tabs
│   │       └── [slug]/
│   │           ├── page.tsx      # Server component — generateStaticParams + metadata
│   │           └── RoomDetail.tsx # Client component — full room detail UI
│   │
│   ├── components/
│   │   ├── Navbar.tsx            # Fixed navbar — smart routing (home vs inner pages)
│   │   ├── Hero.tsx              # Full-screen hero — CSS bg parallax + Framer Motion
│   │   ├── About.tsx             # Hotel story section with stats grid
│   │   ├── Rooms.tsx             # Room grid preview → links to /rooms
│   │   ├── Facilities.tsx        # Interactive facility switcher with AnimatePresence
│   │   ├── Dining.tsx            # Restaurant & dining section
│   │   ├── Gallery.tsx           # Photo grid with lightbox
│   │   ├── Testimonials.tsx      # Auto-rotating guest reviews
│   │   ├── BookingContact.tsx    # Booking form + contact info
│   │   ├── Footer.tsx            # Full footer with links & socials
│   │   └── SectionReveal.tsx     # Reusable scroll animation wrapper
│   │
│   └── lib/
│       └── rooms-data.ts         # Centralized data — all 5 rooms with full details
│
├── tailwind.config.ts            # Content paths + custom color palette
├── next.config.ts                # Image formats (AVIF/WebP), compression
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.0.0`
- npm `>= 9.0.0`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/imperium-hotel.git
cd imperium-hotel

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build   # generates optimized static output
npm start       # serves the production build
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy — zero config required.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository directly at [vercel.com](https://vercel.com/new) for automatic deployments on every push.

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder, or connect via Netlify Git integration
```

> **Note:** This project uses Next.js App Router with SSG (`generateStaticParams`), making it compatible with any static hosting provider.

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-gold` | `#c8a96e` | Primary accent — borders, labels, prices |
| `--color-gold-light` | `#e2c992` | Hover states, italic text, highlights |
| `--color-gold-dark` | `#9a7b43` | Scrollbar, subtle accents |
| `--color-navy` | `#0b1522` | Primary background |
| `--color-navy-mid` | `#132038` | Section alternating background |
| `--color-cream` | `#f5ede0` | Primary text color |

### Typography

| Font | Usage |
|---|---|
| **Cormorant Garamond** (serif, weight 300/400/600) | Display headings, room names, prices |
| **Jost** (sans-serif, weight 300/400/500) | Body text, labels, navigation, buttons |

---

## 📄 Pages & Routes

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage with 8 sections |
| `/rooms` | Static | Room listing with category filter |
| `/rooms/presidential-suite` | SSG | Presidential Suite detail |
| `/rooms/junior-suite` | SSG | Junior Suite detail |
| `/rooms/deluxe-room` | SSG | Deluxe Room detail |
| `/rooms/superior-room` | SSG | Superior Room detail |
| `/rooms/twin-room` | SSG | Twin Room detail |

---

## 🏠 Room Types

| Room | Size | Capacity | Price/Night |
|---|---|---|---|
| Presidential Suite | 120 m² | 4 guests | Rp 8.500.000 |
| Junior Suite | 60 m² | 3 guests | Rp 3.200.000 |
| Deluxe Room | 40 m² | 2 guests | Rp 1.800.000 |
| Superior Room | 32 m² | 2 guests | Rp 1.200.000 |
| Twin Room | 28 m² | 2 guests | Rp 980.000 |

---

## 📝 Customization

### Adding / editing room data

All room content is centralized in `src/lib/rooms-data.ts`. Each room object includes:

```typescript
{
  slug: string           // URL slug → /rooms/[slug]
  name: string           // Display name
  type: string           // Badge label (Flagship | Suite | Deluxe | Superior | Standard)
  price: number          // Numeric price for calculations
  priceLabel: string     // Formatted price string
  heroImage: string      // Main image path from /public/images/
  images: string[]       // Gallery images array
  highlights: { icon, label, value }[]   // Quick stat cards
  amenities: { category, items[] }[]     // Amenity checklist by category
  policies: string[]     // Cancellation & house rules
  longDesc: string       // Multi-paragraph description
}
```

### Changing colors

Edit CSS variables in `src/app/globals.css` inside the `@theme {}` block:

```css
@theme {
  --color-gold: #c8a96e;    /* Change accent color here */
  --color-navy: #0b1522;    /* Change background here */
}
```

---

## 📸 Image Credits

All photos used in this project are sourced from **Unsplash** and **Pexels** under their respective free-use licenses.

| File | Photographer | Source |
|---|---|---|
| `hero-pool.jpg` | Unsplash | dynamic-hong-kong |
| `exterior.jpg` | Timothée Duran | Unsplash |
| `atrium.jpg` | Zoshua Colah | Unsplash |
| `room-deluxe.jpg` | Febrian Zakaria | Unsplash |
| `room-superior.jpg` | Linus Mimietz | Unsplash |
| `room-presidential.jpg` | Pexels / edithubpro | Pexels |
| `room-suite.jpg` | Pexels / svh-manali | Pexels |
| `room-twin.jpg` | Quang Nguyen Vinh | Pexels |
| `facility-gym.jpg` | Pexels / artbovich | Pexels |
| `dining-restaurant.jpg` | Pexels / cheng-shi-song | Pexels |
| `dining-buffet.jpg` | Pexels / hongyue-stone | Pexels |
| `facility-spa.jpg` | Pexels / olly | Pexels |
| `facility-jacuzzi.jpg` | Pexels / olly | Pexels |
| `facility-parking.jpg` | Pexels / andromeda99 | Pexels |

---

## 🤝 Contributing

This is a portfolio project. Feel free to fork and adapt it for your own use.

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ using **Next.js** · **TypeScript** · **Tailwind CSS v4** · **Framer Motion**

**Imperium Hotel Surabaya** — *Luxury Redefined*

</div>
