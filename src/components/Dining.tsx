"use client";

import Image from "next/image";
import SectionReveal from "./SectionReveal";

const menuItems = [
  { name: "The Imperium Restaurant", desc: "Fine dining · Buka 06.00 – 23.00 · All-day dining", price: "À la carte" },
  { name: "The Grand Buffet",        desc: "Breakfast & Dinner Buffet · International Cuisine · 200+ menu", price: "Rp 185.000/org" },
  { name: "The Skybar Lounge",       desc: "Cocktails & Light Bites · Rooftop · 17.00 – 01.00", price: "Rp 80.000+" },
];

export default function Dining() {
  return (
    <section id="dining" style={{ padding: "7rem 4rem", backgroundColor: "var(--color-navy)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4.5rem", alignItems: "center" }}>
        <SectionReveal direction="left">
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "10px", height: "580px" }}>
            {["dining-restaurant", "dining-buffet"].map(img => (
              <div key={img} style={{ position: "relative", overflow: "hidden" }}>
                <Image src={`/images/${img}.jpg`} alt={img} fill style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <span style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.8rem" }}>Food & Beverage</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#faf8f4", lineHeight: 1.2 }}>
            Culinary <em style={{ fontStyle: "italic", color: "#e2c992" }}>Excellence</em>
          </h2>
          <div style={{ width: "55px", height: "1px", backgroundColor: "var(--color-gold)", margin: "1.5rem 0" }} />
          <p style={{ fontSize: "0.88rem", lineHeight: 1.95, color: "rgba(245,237,224,0.55)" }}>
            Nikmati pengalaman kuliner tak terlupakan di The Imperium Restaurant — menyajikan masakan Indonesia otentik
            dan hidangan internasional pilihan, diracik oleh Chef berbintang kami dengan cita rasa premium.
          </p>
          <div style={{ marginTop: "2rem" }}>
            {menuItems.map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "1.1rem 0", borderBottom: "1px solid rgba(200,169,110,0.2)" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 300, color: "var(--color-cream)" }}>{item.name}</p>
                  <p style={{ fontSize: "0.7rem", color: "rgba(245,237,224,0.55)", marginTop: "0.2rem" }}>{item.desc}</p>
                </div>
                <span style={{ fontSize: "0.8rem", color: "var(--color-gold)", paddingLeft: "1rem", whiteSpace: "nowrap" }}>{item.price}</span>
              </div>
            ))}
          </div>
          <a href="#contact" style={{ display: "inline-block", marginTop: "2rem", backgroundColor: "var(--color-gold)", color: "var(--color-navy)", padding: "0.9rem 2.5rem", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none", transition: "all 0.3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e2c992"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-gold)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
            Reserve a Table
          </a>
        </SectionReveal>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #dining { padding: 4rem 1.5rem !important; }
          #dining > div { grid-template-columns: 1fr !important; }
          #dining > div > div:first-child > div { height: 380px !important; }
        }
      `}</style>
    </section>
  );
}
