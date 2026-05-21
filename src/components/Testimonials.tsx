"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

const reviews = [
  { text: "Pengalaman menginap yang luar biasa. Pelayanan staf sangat profesional dan ramah, kamarnya bersih dan nyaman. Kolam renang dan spa-nya juga top banget. Pasti akan kembali lagi!", author: "Budi Santoso", origin: "Jakarta", date: "September 2024" },
  { text: "The Presidential Suite exceeded every expectation. The butler service was impeccable and the view of Surabaya at night was simply breathtaking. A true 5-star experience!", author: "Sarah Tan", origin: "Singapore", date: "November 2024" },
  { text: "Kami mengadakan acara pernikahan di sini dan semuanya berjalan sempurna. Tim event Imperium sangat profesional dan detail. Tamu kami sangat terkesan dengan venue dan pelayanannya.", author: "Rini & Dimas", origin: "Surabaya", date: "December 2024" },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ padding: "6rem 4rem", backgroundColor: "var(--color-navy)" }}>
      <SectionReveal>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.8rem" }}>Guest Reviews</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#faf8f4" }}>
            What Our <em style={{ fontStyle: "italic", color: "#e2c992" }}>Guests Say</em>
          </h2>
        </div>
      </SectionReveal>

      <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "var(--color-gold)", marginBottom: "2rem" }}>★ ★ ★ ★ ★</div>
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
            <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem,2.2vw,1.65rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.65, color: "var(--color-cream)", minHeight: "5em", marginBottom: "1.5rem" }}>
              "{reviews[idx].text}"
            </blockquote>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(245,237,224,0.55)" }}>
              — <span style={{ color: "var(--color-gold)" }}>{reviews[idx].author}</span>, {reviews[idx].origin} · {reviews[idx].date}
            </p>
          </motion.div>
        </AnimatePresence>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2rem" }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              style={{ height: "4px", borderRadius: "2px", border: "none", cursor: "pointer", transition: "all 0.3s", width: i === idx ? "22px" : "5px", backgroundColor: i === idx ? "var(--color-gold)" : "rgba(200,169,110,0.25)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
