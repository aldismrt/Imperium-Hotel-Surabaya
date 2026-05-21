"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

const facilities = [
  { id: "pool",     name: "Swimming Pool",    img: "/images/hero-pool.jpg",        desc: "Kolam renang infinity berarsitektur dramatis dengan sun deck dan layanan pool bar eksklusif." },
  { id: "gym",      name: "Fitness Center",   img: "/images/facility-gym.jpg",     desc: "Pusat kebugaran kelas dunia dengan peralatan terkini, personal trainer tersertifikasi, dan view kota 360°." },
  { id: "spa",      name: "Spa & Wellness",   img: "/images/facility-spa.jpg",     desc: "Sanctuary of serenity — nikmati perawatan spa premium dengan teknik tradisional Indonesia dan modern." },
  { id: "jacuzzi",  name: "Jacuzzi & Hot Tub",img: "/images/facility-jacuzzi.jpg", desc: "Relaksasi ultimate di jacuzzi privat dengan mineral water treatment dan suasana mewah." },
  { id: "parking",  name: "Valet Parking",    img: "/images/facility-parking.jpg", desc: "Layanan valet parking profesional 24 jam dengan kapasitas 300 kendaraan di area parkir bertingkat." },
];

export default function Facilities() {
  const [active, setActive] = useState(facilities[0]);

  return (
    <section id="facilities" style={{ padding: "7rem 4rem", backgroundColor: "var(--color-navy-mid)" }}>
      <SectionReveal>
        <span style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.8rem" }}>Hotel Facilities</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#faf8f4", lineHeight: 1.2 }}>
          World-Class <em style={{ fontStyle: "italic", color: "#e2c992" }}>Amenities</em>
        </h2>
      </SectionReveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", marginTop: "3.5rem", alignItems: "start" }}>
        {/* List */}
        <SectionReveal delay={0.1} direction="left">
          <div>
            {facilities.map((f, i) => (
              <button key={f.id} onClick={() => setActive(f)}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  width: "100%", padding: "1.3rem 0", paddingLeft: active.id === f.id ? "0.6rem" : "0",
                  background: "none", border: "none", borderTop: i === 0 ? "1px solid rgba(200,169,110,0.2)" : "none",
                  borderBottom: "1px solid rgba(200,169,110,0.2)", cursor: "pointer", textAlign: "left",
                  transition: "padding-left 0.3s ease",
                }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 300, color: active.id === f.id ? "var(--color-gold)" : "var(--color-cream)", transition: "color 0.3s" }}>{f.name}</span>
                <span style={{ color: active.id === f.id ? "var(--color-gold)" : "rgba(245,237,224,0.4)", fontSize: "1.1rem", transform: active.id === f.id ? "rotate(45deg)" : "none", transition: "all 0.3s" }}>+</span>
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Image */}
        <SectionReveal delay={0.2}>
          <div style={{ position: "relative", height: "520px", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.div key={active.id} style={{ position: "absolute", inset: 0 }}
                initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}>
                <Image src={active.img} alt={active.name} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem", background: "linear-gradient(to top, rgba(11,21,34,0.88), transparent)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 300, color: "#faf8f4", marginBottom: "0.5rem" }}>{active.name}</h3>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "rgba(245,237,224,0.7)" }}>{active.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #facilities { padding: 4rem 1.5rem !important; }
          #facilities > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
