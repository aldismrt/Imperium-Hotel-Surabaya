"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const images = [
  { src: "/images/atrium.jpg",           alt: "Hotel Atrium",    wide: true  },
  { src: "/images/facility-gym.jpg",     alt: "Fitness Center",  wide: false },
  { src: "/images/room-suite.jpg",       alt: "Junior Suite",    wide: false },
  { src: "/images/dining-restaurant.jpg",alt: "Restaurant",      wide: false },
  { src: "/images/facility-jacuzzi.jpg", alt: "Jacuzzi",         wide: true  },
  { src: "/images/facility-spa.jpg",     alt: "Spa",             wide: false },
  { src: "/images/facility-parking.jpg", alt: "Parking",         wide: false },
];

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const prev = () => setIdx(i => i !== null ? (i - 1 + images.length) % images.length : 0);
  const next = () => setIdx(i => i !== null ? (i + 1) % images.length : 0);

  return (
    <section id="gallery" style={{ padding: "7rem 4rem", backgroundColor: "var(--color-navy-mid)" }}>
      <SectionReveal>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.8rem" }}>Photo Gallery</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#faf8f4" }}>
            A Glimpse of <em style={{ fontStyle: "italic", color: "#e2c992" }}>Imperium</em>
          </h2>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3px" }}>
          {images.map((img, i) => (
            <div key={i} onClick={() => setIdx(i)}
              style={{ gridColumn: img.wide ? "span 2" : "span 1", height: "240px", position: "relative", overflow: "hidden", cursor: "pointer" }}
              className="gallery-item">
              <Image src={img.src} alt={img.alt} fill
                style={{ objectFit: "cover", filter: "brightness(0.82) saturate(0.9)", transition: "all 0.7s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.07)"; e.currentTarget.style.filter = "brightness(1) saturate(1.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "brightness(0.82) saturate(0.9)"; }} />
            </div>
          ))}
        </div>
      </SectionReveal>

      <AnimatePresence>
        {idx !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.96)" }}
            onClick={() => setIdx(null)}>
            <button onClick={() => setIdx(null)} style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none", cursor: "pointer", color: "rgba(245,237,224,0.5)", transition: "color 0.3s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--color-gold)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(245,237,224,0.5)")}>
              <X size={28} />
            </button>
            <button onClick={e => { e.stopPropagation(); prev(); }} style={{ position: "absolute", left: "2rem", background: "none", border: "none", cursor: "pointer", color: "rgba(245,237,224,0.5)" }}>
              <ChevronLeft size={36} />
            </button>
            <motion.div key={idx} onClick={e => e.stopPropagation()} initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.3 }}
              style={{ position: "relative", width: "90vw", maxWidth: "1100px", height: "80vh" }}>
              <Image src={images[idx].src} alt={images[idx].alt} fill style={{ objectFit: "contain" }} />
            </motion.div>
            <button onClick={e => { e.stopPropagation(); next(); }} style={{ position: "absolute", right: "2rem", background: "none", border: "none", cursor: "pointer", color: "rgba(245,237,224,0.5)" }}>
              <ChevronRight size={36} />
            </button>
            <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>
              {idx + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          #gallery { padding: 4rem 1.5rem !important; }
          #gallery .gallery-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
