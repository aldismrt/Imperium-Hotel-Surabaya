"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Maximize2, BedDouble, Star } from "lucide-react";
import { rooms } from "@/lib/rooms-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const filters = ["Semua", "Suite", "Deluxe", "Superior", "Standard"];

export default function RoomsPage() {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua"
      ? rooms
      : rooms.filter((r) =>
          active === "Suite"
            ? r.type === "Flagship" || r.type === "Suite"
            : r.type === active
        );

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <div style={{ position: "relative", height: "52vh", minHeight: "400px", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/atrium.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          animation: "heroZoom 22s ease-in-out infinite alternate",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,21,34,0.55), rgba(11,21,34,0.88))" }} />

        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 2rem" }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", fontSize: "0.6rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "1.2rem", border: "1px solid rgba(200,169,110,0.35)", padding: "0.4rem 1.2rem" }}
          >
            <Star size={10} fill="currentColor" /> Accommodation <Star size={10} fill="currentColor" />
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.15 }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,7vw,5.5rem)", fontWeight: 300, color: "#faf8f4", lineHeight: 1.05 }}
          >
            Rooms <em style={{ fontStyle: "italic", color: "#e2c992" }}>&amp; Suites</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
            style={{ marginTop: "1rem", fontSize: "0.8rem", letterSpacing: "0.1em", color: "rgba(245,237,224,0.55)", maxWidth: "420px", lineHeight: 1.8 }}
          >
            250+ kamar & suite — dirancang untuk memenuhi standar kemewahan tertinggi di Surabaya
          </motion.p>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div style={{ backgroundColor: "var(--color-navy-mid)", padding: "0.85rem 4rem", borderBottom: "1px solid rgba(200,169,110,0.1)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Link href="/" style={{ fontSize: "0.68rem", color: "rgba(245,237,224,0.4)", textDecoration: "none", letterSpacing: "0.08em" }}>Home</Link>
        <span style={{ color: "rgba(245,237,224,0.2)", fontSize: "0.7rem" }}>›</span>
        <span style={{ fontSize: "0.68rem", color: "var(--color-gold)", letterSpacing: "0.08em" }}>Rooms & Suites</span>
      </div>

      {/* ── Filter bar ── */}
      <div style={{ backgroundColor: "var(--color-navy)", position: "sticky", top: "80px", zIndex: 40, borderBottom: "1px solid rgba(200,169,110,0.12)" }}>
        <div style={{ display: "flex", gap: 0, padding: "0 4rem", overflowX: "auto" }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "1.1rem 1.8rem", fontSize: "0.66rem",
                letterSpacing: "0.18em", textTransform: "uppercase", whiteSpace: "nowrap",
                color: active === f ? "var(--color-gold)" : "rgba(245,237,224,0.4)",
                borderBottom: active === f ? "2px solid var(--color-gold)" : "2px solid transparent",
                transition: "all 0.3s",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Room listing ── */}
      <main style={{ backgroundColor: "var(--color-navy)", padding: "4rem 4rem 8rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "3px" }}
          >
            {filtered.map((room, i) => (
              <motion.div
                key={room.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link href={`/rooms/${room.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ backgroundColor: "var(--color-navy-mid)", overflow: "hidden" }} className="listing-card">

                    {/* Image */}
                    <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                      <Image src={room.heroImage} alt={room.name} fill
                        style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
                        className="listing-img" />
                      {/* Type badge */}
                      <div style={{
                        position: "absolute", top: "1.1rem", left: "1.1rem",
                        border: "1px solid rgba(200,169,110,0.55)",
                        backgroundColor: "rgba(11,21,34,0.65)",
                        padding: "0.22rem 0.7rem", fontSize: "0.53rem",
                        letterSpacing: "0.25em", textTransform: "uppercase",
                        color: "var(--color-gold)", backdropFilter: "blur(6px)",
                      }}>
                        {room.type}
                      </div>
                      {/* Gradient */}
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "linear-gradient(to top, rgba(11,21,34,0.5), transparent)" }} />
                    </div>

                    {/* Content */}
                    <div style={{ padding: "1.8rem 2rem 2rem" }}>
                      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 300, color: "#faf8f4", marginBottom: "0.5rem", lineHeight: 1.15 }}>
                        {room.name}
                      </h2>
                      <p style={{ fontSize: "0.76rem", lineHeight: 1.75, color: "rgba(245,237,224,0.5)", marginBottom: "1.4rem" }}>
                        {room.shortDesc}
                      </p>

                      {/* Stats row */}
                      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.6rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(200,169,110,0.12)", flexWrap: "wrap" }}>
                        {[
                          { Icon: Maximize2, val: `${room.size} m²` },
                          { Icon: Users,     val: `Maks. ${room.maxGuests} Tamu` },
                          { Icon: BedDouble, val: room.bedType },
                        ].map(({ Icon, val }) => (
                          <div key={val} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                            <Icon size={12} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
                            <span style={{ fontSize: "0.68rem", color: "rgba(245,237,224,0.5)", letterSpacing: "0.04em" }}>{val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price + CTA */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <p style={{ fontSize: "0.52rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,237,224,0.35)", marginBottom: "0.2rem" }}>Mulai dari</p>
                          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1 }}>
                            {room.priceLabel}
                            <span style={{ fontSize: "0.65rem", color: "rgba(245,237,224,0.35)", fontFamily: "var(--font-body)", marginLeft: "0.3rem" }}>/malam</span>
                          </p>
                        </div>
                        <div className="listing-cta" style={{
                          display: "inline-flex", alignItems: "center", gap: "0.5rem",
                          backgroundColor: "var(--color-gold)", color: "var(--color-navy)",
                          padding: "0.7rem 1.4rem", fontSize: "0.62rem",
                          letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500,
                          transition: "all 0.3s",
                        }}>
                          Pilih Kamar <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "6rem 0" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 300, color: "rgba(245,237,224,0.25)" }}>
              Tidak ada kamar dalam kategori ini
            </p>
          </div>
        )}
      </main>

      <Footer />

      <style>{`
        .listing-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .listing-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }
        .listing-card:hover .listing-img { transform: scale(1.07) !important; }
        .listing-card:hover .listing-cta { background-color: #e2c992 !important; }
        @media (max-width: 768px) {
          main { padding: 3rem 1.5rem 5rem !important; }
          div[style*="sticky"] > div { padding: 0 1.5rem !important; }
          div[style*="repeat(auto-fill"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
