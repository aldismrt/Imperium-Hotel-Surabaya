"use client";

import Image from "next/image";
import SectionReveal from "./SectionReveal";

const stats = [
  { num: "250+", label: "Kamar & Suite" },
  { num: "5★",   label: "Bintang Hotel" },
  { num: "15+",  label: "Tahun Berdiri" },
  { num: "98%",  label: "Guest Satisfaction" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
        padding: "7rem 4rem",
        backgroundColor: "var(--color-navy-mid)",
      }}
    >
      {/* Watermark */}
      <span style={{
        position: "absolute", right: "-2rem", top: "50%", transform: "translateY(-50%)",
        fontFamily: "var(--font-display)", fontSize: "13rem", fontWeight: 600,
        color: "rgba(200,169,110,0.035)", pointerEvents: "none", whiteSpace: "nowrap",
        userSelect: "none",
      }}>
        IMPERIUM
      </span>

      {/* Images */}
      <SectionReveal direction="left">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div style={{ gridColumn: "1 / 3", height: "320px", position: "relative", overflow: "hidden" }}>
            <Image src="/images/atrium.jpg" alt="Hotel Atrium" fill style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
          </div>
          <div style={{ height: "185px", position: "relative", overflow: "hidden" }}>
            <Image src="/images/exterior.jpg" alt="Exterior" fill style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
          </div>
          <div style={{ height: "185px", position: "relative", overflow: "hidden" }}>
            <Image src="/images/hero-pool.jpg" alt="Pool" fill style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
          </div>
        </div>
      </SectionReveal>

      {/* Text */}
      <SectionReveal delay={0.15}>
        <span style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.8rem" }}>
          Our Story
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#faf8f4", lineHeight: 1.2, marginBottom: "1.2rem" }}>
          A Legacy of <em style={{ fontStyle: "italic", color: "#e2c992" }}>Elegance</em>
        </h2>
        <div style={{ width: "55px", height: "1px", backgroundColor: "var(--color-gold)", marginBottom: "1.5rem" }} />
        <p style={{ fontSize: "0.88rem", lineHeight: 1.95, color: "rgba(245,237,224,0.55)", maxWidth: "500px" }}>
          Imperium Hotel hadir sebagai simbol kemewahan di jantung Kota Surabaya.
          Berdiri megah dengan arsitektur kontemporer, kami menawarkan pengalaman menginap
          yang tak tertandingi — memadukan keanggunan, kenyamanan, dan pelayanan prima kelas dunia.
        </p>
        <p style={{ fontSize: "0.88rem", lineHeight: 1.95, color: "rgba(245,237,224,0.55)", maxWidth: "500px", marginTop: "1rem" }}>
          Dengan lokasi strategis di pusat bisnis Surabaya, Imperium Hotel menjadi pilihan utama
          para eksekutif, wisatawan, dan keluarga yang menginginkan pengalaman terbaik di Kota Pahlawan.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "2.5rem" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ borderLeft: "2px solid var(--color-gold)", paddingLeft: "1rem" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,237,224,0.55)", marginTop: "0.3rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </SectionReveal>

      <style>{`
        @media (max-width: 768px) {
          #about { grid-template-columns: 1fr !important; padding: 4rem 1.5rem !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
