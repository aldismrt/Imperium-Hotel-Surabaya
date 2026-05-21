"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { rooms } from "@/lib/rooms-data";

// Layout config: row 1 = [Presidential 2cols + Junior 1col], row 2 = [Deluxe + Superior + Twin 1col each]
const ROW1 = ["presidential-suite", "junior-suite"];
const ROW2 = ["deluxe-room", "superior-room", "twin-room"];

export default function Rooms() {
  const row1Rooms = rooms.filter(r => ROW1.includes(r.slug));
  const row2Rooms = rooms.filter(r => ROW2.includes(r.slug));

  const Card = ({ room, height, fontSize }: { room: typeof rooms[0]; height: string; fontSize: string }) => (
    <Link
      href={`/rooms/${room.slug}`}
      style={{ textDecoration: "none", display: "block", height }}
      className="room-home-card-wrapper"
    >
      <div style={{ position: "relative", overflow: "hidden", height: "100%", cursor: "pointer" }} className="room-home-card">

        {/* Image */}
        <Image
          src={room.heroImage} alt={room.name} fill
          style={{ objectFit: "cover", transition: "transform 0.9s ease" }}
          className="room-home-img"
        />

        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,21,34,0.94) 0%, rgba(11,21,34,0.05) 50%, transparent 100%)" }} />

        {/* Hover CTA */}
        <div className="room-home-hover" style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(11,21,34,0)", transition: "background 0.4s",
        }}>
          <span className="room-home-cta" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            border: "1px solid var(--color-gold)", color: "var(--color-gold)",
            padding: "0.65rem 1.5rem", fontSize: "0.63rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            opacity: 0, transform: "translateY(12px)", transition: "all 0.35s",
            backdropFilter: "blur(4px)", background: "rgba(11,21,34,0.3)",
          }}>
            Lihat Detail <ArrowRight size={12} />
          </span>
        </div>

        {/* Room info */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
          <p style={{ fontSize: "0.56rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.45rem" }}>
            {room.type}
          </p>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize, fontWeight: 300, color: "#faf8f4", marginBottom: "0.35rem", lineHeight: 1.15 }}>
            {room.name}
          </h3>
          <p style={{ fontSize: "0.7rem", color: "#e2c992", marginBottom: "0.7rem", letterSpacing: "0.04em" }}>
            {room.priceLabel}{" "}
            <span style={{ color: "rgba(245,237,224,0.38)", fontSize: "0.62rem" }}>/ malam</span>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {room.features?.slice(0, 3).map(f => (
              <span key={f} style={{
                fontSize: "0.52rem", letterSpacing: "0.12em", textTransform: "uppercase",
                color: "rgba(245,237,224,0.55)", background: "rgba(200,169,110,0.08)",
                border: "1px solid rgba(200,169,110,0.22)", padding: "0.2rem 0.5rem",
              }}>{f}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section id="rooms" style={{ padding: "7rem 4rem", backgroundColor: "var(--color-navy)" }}>

      {/* Header */}
      <SectionReveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.8rem" }}>
              Accommodation
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#faf8f4", lineHeight: 1.2 }}>
              Our <em style={{ fontStyle: "italic", color: "#e2c992" }}>Rooms & Suites</em>
            </h2>
          </div>
          <Link href="/rooms"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(245,237,224,0.3)", color: "var(--color-cream)", padding: "0.65rem 1.5rem", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--color-gold)"; el.style.color = "var(--color-gold)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(245,237,224,0.3)"; el.style.color = "var(--color-cream)"; }}>
            Semua Kamar <ArrowRight size={13} />
          </Link>
        </div>
      </SectionReveal>

      {/* ── ROW 1: Presidential (2/3 wide) + Junior Suite (1/3) ── */}
      <SectionReveal delay={0.08}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3px", marginBottom: "3px" }}>
          {row1Rooms.map((room, i) => (
            <Card
              key={room.slug}
              room={room}
              height={i === 0 ? "520px" : "520px"}
              fontSize={i === 0 ? "clamp(1.6rem,2.5vw,2.4rem)" : "1.5rem"}
            />
          ))}
        </div>
      </SectionReveal>

      {/* ── ROW 2: Deluxe + Superior + Twin (equal thirds) ── */}
      <SectionReveal delay={0.18}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3px" }}>
          {row2Rooms.map((room) => (
            <Card key={room.slug} room={room} height="360px" fontSize="1.4rem" />
          ))}
        </div>
      </SectionReveal>

      <style>{`
        .room-home-card:hover .room-home-img { transform: scale(1.07) !important; }
        .room-home-card:hover .room-home-hover { background: rgba(11,21,34,0.22) !important; }
        .room-home-card:hover .room-home-cta  { opacity: 1 !important; transform: translateY(0) !important; }

        @media (max-width: 900px) {
          #rooms { padding: 4rem 1.5rem !important; }
          #rooms > div:nth-child(2) > div,
          #rooms > div:nth-child(3) > div { grid-template-columns: 1fr !important; }
          .room-home-card-wrapper { height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
