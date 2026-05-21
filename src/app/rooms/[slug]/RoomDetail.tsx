"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Check, Users, Maximize2, BedDouble } from "lucide-react";
import { Room, getRelatedRooms } from "@/lib/rooms-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RoomDetail({ room }: { room: Room }) {
  const related = getRelatedRooms(room.slug, 3);
  const [activeImg,  setActiveImg]  = useState(0);
  const [lightbox,   setLightbox]   = useState<number | null>(null);
  const [activeTab,  setActiveTab]  = useState<"amenities" | "policies">("amenities");
  const [checkin,    setCheckin]    = useState("");
  const [checkout,   setCheckout]   = useState("");
  const [guests,     setGuests]     = useState("2 Tamu");
  const [booked,     setBooked]     = useState(false);

  const gold  = "var(--color-gold)";
  const muted = "rgba(245,237,224,0.55)";

  const prevLight = () => setLightbox(i => i !== null ? (i - 1 + room.images.length) % room.images.length : 0);
  const nextLight = () => setLightbox(i => i !== null ? (i + 1) % room.images.length : 0);

  return (
    <>
      <Navbar />

      {/* ── HERO with switching image ── */}
      <div style={{ position: "relative", height: "80vh", minHeight: "540px", overflow: "hidden" }}>

        {/* Main image — animated switch */}
        <AnimatePresence mode="wait">
          <motion.div key={activeImg} style={{ position: "absolute", inset: 0 }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}>
            <Image src={room.images[activeImg]} alt={room.name} fill priority quality={90}
              style={{ objectFit: "cover" }} />
          </motion.div>
        </AnimatePresence>

        {/* Overlay — darker left, lighter right */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,21,34,0.78) 0%, rgba(11,21,34,0.15) 55%, rgba(11,21,34,0.0) 100%), linear-gradient(to top, rgba(11,21,34,0.6) 0%, transparent 40%)" }} />

        {/* Back button */}
        <Link href="/rooms" style={{
          position: "absolute", top: "7rem", left: "4rem", zIndex: 10,
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "rgba(245,237,224,0.65)", textDecoration: "none", transition: "color 0.3s",
        }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = gold)}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(245,237,224,0.65)")}>
          <ArrowLeft size={14} /> Semua Kamar
        </Link>

        {/* Room title — bottom left */}
        <div style={{ position: "absolute", bottom: "3rem", left: "4rem", right: "160px", zIndex: 10 }}>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ display: "inline-block", border: "1px solid rgba(200,169,110,0.5)", color: gold, fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", padding: "0.28rem 0.75rem", marginBottom: "0.75rem" }}>
            {room.type}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4.8rem)", fontWeight: 300, color: "#faf8f4", lineHeight: 1.05, marginBottom: "0.65rem" }}>
            {room.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            style={{ fontSize: "0.8rem", color: muted, fontStyle: "italic", maxWidth: "500px", lineHeight: 1.65 }}>
            {room.tagline}
          </motion.p>

          {/* Quick stats inline */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ display: "flex", gap: "2rem", marginTop: "1.2rem", flexWrap: "wrap" }}>
            {[
              { Icon: Maximize2, val: `${room.size} m²` },
              { Icon: Users,     val: `Maks. ${room.maxGuests} tamu` },
              { Icon: BedDouble, val: room.bedType },
            ].map(({ Icon, val }) => (
              <div key={val} style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <Icon size={12} style={{ color: gold }} />
                <span style={{ fontSize: "0.7rem", color: "rgba(245,237,224,0.65)", letterSpacing: "0.06em" }}>{val}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Thumbnail strip — bottom right */}
        <div style={{ position: "absolute", bottom: "3rem", right: "4rem", zIndex: 10, display: "flex", flexDirection: "column", gap: "6px" }}>
          {room.images.map((img, i) => (
            <button key={i} onClick={() => setActiveImg(i)}
              style={{
                width: "80px", height: "54px", position: "relative", overflow: "hidden",
                border: `2px solid ${i === activeImg ? gold : "rgba(255,255,255,0.18)"}`,
                cursor: "pointer", padding: 0, background: "none",
                transition: "border-color 0.3s, transform 0.2s",
                transform: i === activeImg ? "scale(1.05)" : "scale(1)",
              }}>
              <Image src={img} alt={`Photo ${i + 1}`} fill style={{ objectFit: "cover" }} />
              {i !== activeImg && <div style={{ position: "absolute", inset: 0, background: "rgba(11,21,34,0.4)" }} />}
            </button>
          ))}
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div style={{ backgroundColor: "var(--color-navy-mid)", padding: "0.85rem 4rem", borderBottom: "1px solid rgba(200,169,110,0.1)", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
        {[{ label: "Home", href: "/" }, { label: "Rooms & Suites", href: "/rooms" }, { label: room.name, href: "#" }].map((b, i, arr) => (
          <span key={b.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {i < arr.length - 1
              ? <Link href={b.href} style={{ fontSize: "0.68rem", color: "rgba(245,237,224,0.4)", textDecoration: "none" }}>{b.label}</Link>
              : <span style={{ fontSize: "0.68rem", color: gold }}>{b.label}</span>}
            {i < arr.length - 1 && <span style={{ color: "rgba(245,237,224,0.2)", fontSize: "0.7rem" }}>›</span>}
          </span>
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <main style={{ backgroundColor: "var(--color-navy)", padding: "5rem 4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "5rem", maxWidth: "1440px", margin: "0 auto" }}>

          {/* ══ LEFT COLUMN ══ */}
          <div>

            {/* Highlights grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", marginBottom: "4.5rem", border: "1px solid rgba(200,169,110,0.15)", overflow: "hidden" }}>
              {room.highlights.map((h) => (
                <div key={h.label} style={{ padding: "1.6rem 1.2rem", backgroundColor: "var(--color-navy-mid)", textAlign: "center", borderRight: "1px solid rgba(200,169,110,0.1)" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem", lineHeight: 1 }}>{h.icon}</div>
                  <div style={{ fontSize: "0.56rem", letterSpacing: "0.24em", textTransform: "uppercase", color: gold, marginBottom: "0.3rem" }}>{h.label}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-cream)", fontWeight: 400, lineHeight: 1.3 }}>{h.value}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ marginBottom: "4.5rem" }}>
              <span style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.38em", textTransform: "uppercase", color: gold, marginBottom: "0.8rem" }}>About This Room</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 300, color: "#faf8f4", marginBottom: "1.2rem" }}>
                Designed for <em style={{ fontStyle: "italic", color: "#e2c992" }}>Comfort</em>
              </h2>
              <div style={{ width: "50px", height: "1px", backgroundColor: gold, marginBottom: "1.8rem" }} />
              {room.longDesc.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontSize: "0.88rem", lineHeight: 2, color: muted, marginBottom: "1rem" }}>{para}</p>
              ))}
            </div>

            {/* Photo gallery */}
            <div style={{ marginBottom: "4.5rem" }}>
              <span style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.38em", textTransform: "uppercase", color: gold, marginBottom: "1.5rem" }}>Room Gallery</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "300px 220px", gap: "4px" }}>
                {room.images.map((img, i) => (
                  <div key={i} onClick={() => setLightbox(i)}
                    style={{ position: "relative", overflow: "hidden", cursor: "zoom-in", gridColumn: i === 0 ? "span 2" : "span 1", gridRow: i === 0 ? "span 1" : "auto" }}>
                    <Image src={img} alt={`${room.name} ${i + 1}`} fill
                      style={{ objectFit: "cover", filter: "brightness(0.85)", transition: "all 0.65s" }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.filter = "brightness(1)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "brightness(0.85)"; }}
                    />
                    <div style={{ position: "absolute", top: "0.6rem", right: "0.6rem", background: "rgba(11,21,34,0.65)", color: gold, fontSize: "0.58rem", padding: "0.18rem 0.5rem", backdropFilter: "blur(4px)", letterSpacing: "0.1em" }}>
                      {i + 1} / {room.images.length}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs: Fasilitas / Kebijakan */}
            <div>
              <div style={{ display: "flex", borderBottom: "1px solid rgba(200,169,110,0.18)", marginBottom: "2.5rem" }}>
                {(["amenities", "policies"] as const).map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      padding: "0.85rem 2.2rem", fontSize: "0.66rem",
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: activeTab === tab ? gold : muted,
                      borderBottom: activeTab === tab ? `2px solid ${gold}` : "2px solid transparent",
                      marginBottom: "-1px", transition: "all 0.3s",
                    }}>
                    {tab === "amenities" ? "Fasilitas Kamar" : "Kebijakan"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "amenities" ? (
                  <motion.div key="amen" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
                      {room.amenities.map((cat) => (
                        <div key={cat.category}>
                          <h4 style={{ fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: gold, marginBottom: "1.1rem" }}>{cat.category}</h4>
                          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                            {cat.items.map((item) => (
                              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.82rem", color: muted }}>
                                <Check size={11} style={{ color: gold, marginTop: "3px", flexShrink: 0 }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="pol" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                      {room.policies.map((p, i) => (
                        <div key={i} style={{ display: "flex", gap: "1rem", padding: "1.1rem 1.4rem", backgroundColor: "var(--color-navy-mid)", borderLeft: `2px solid ${gold}` }}>
                          <span style={{ fontSize: "0.56rem", color: gold, fontWeight: 600, marginTop: "2px", flexShrink: 0, letterSpacing: "0.05em" }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span style={{ fontSize: "0.82rem", color: muted, lineHeight: 1.7 }}>{p}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ══ RIGHT COLUMN — Sticky booking card ══ */}
          <div>
            <div style={{ position: "sticky", top: "100px", backgroundColor: "var(--color-navy-mid)", border: "1px solid rgba(200,169,110,0.22)", overflow: "hidden" }}>

              {/* Price header */}
              <div style={{ padding: "2rem 2rem 1.5rem", borderBottom: "1px solid rgba(200,169,110,0.15)", background: "linear-gradient(135deg, rgba(200,169,110,0.06), transparent)" }}>
                <p style={{ fontSize: "0.52rem", letterSpacing: "0.22em", textTransform: "uppercase", color: muted, marginBottom: "0.4rem" }}>Harga per Malam</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 300, color: gold, lineHeight: 1 }}>
                  {room.priceLabel}
                </p>
                <p style={{ fontSize: "0.65rem", color: muted, marginTop: "0.4rem" }}>Belum termasuk pajak & service 21%</p>
              </div>

              {/* Form */}
              <div style={{ padding: "1.6rem 2rem" }}>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase", color: gold, marginBottom: "1.2rem" }}>Cek Ketersediaan</p>

                {/* Check-in & Check-out side by side */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", marginBottom: "0.6rem" }}>
                  {[
                    { label: "Check In",  val: checkin,  set: setCheckin },
                    { label: "Check Out", val: checkout, set: setCheckout },
                  ].map(({ label, val, set }) => (
                    <div key={label} style={{ background: "rgba(11,21,34,0.5)", border: "1px solid rgba(200,169,110,0.22)", padding: "0.7rem 0.85rem" }}>
                      <label style={{ display: "block", fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: gold, marginBottom: "0.35rem" }}>{label}</label>
                      <input type="date" value={val} onChange={e => set(e.target.value)}
                        style={{ background: "none", border: "none", outline: "none", color: "var(--color-cream)", fontSize: "0.75rem", fontFamily: "var(--font-body)", width: "100%", colorScheme: "dark" as unknown as undefined }} />
                    </div>
                  ))}
                </div>

                {/* Guests */}
                <div style={{ background: "rgba(11,21,34,0.5)", border: "1px solid rgba(200,169,110,0.22)", padding: "0.7rem 0.85rem", marginBottom: "1.3rem" }}>
                  <label style={{ display: "block", fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: gold, marginBottom: "0.35rem" }}>Jumlah Tamu</label>
                  <select value={guests} onChange={e => setGuests(e.target.value)}
                    style={{ background: "none", border: "none", outline: "none", color: "var(--color-cream)", fontSize: "0.8rem", fontFamily: "var(--font-body)", cursor: "pointer", width: "100%" }}>
                    {Array.from({ length: room.maxGuests }, (_, i) => (
                      <option key={i + 1} value={`${i + 1} Tamu`} style={{ background: "#0b1522" }}>{i + 1} Tamu</option>
                    ))}
                  </select>
                </div>

                {/* Buttons */}
                <button onClick={() => { setBooked(true); setTimeout(() => setBooked(false), 4000); }}
                  style={{ width: "100%", backgroundColor: booked ? "#3d7a3d" : gold, color: "var(--color-navy)", border: "none", padding: "1rem", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, cursor: "pointer", transition: "all 0.3s", fontFamily: "var(--font-body)", marginBottom: "0.6rem" }}>
                  {booked ? "✓ Permintaan Terkirim!" : "Pesan Sekarang"}
                </button>
                <a href="tel:+62318000250"
                  style={{ display: "block", border: "1px solid rgba(200,169,110,0.3)", color: "rgba(245,237,224,0.7)", padding: "0.85rem", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", textAlign: "center", transition: "all 0.3s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = gold; el.style.color = gold; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(200,169,110,0.3)"; el.style.color = "rgba(245,237,224,0.7)"; }}>
                  📞 Hubungi Kami
                </a>
              </div>

              {/* Perks */}
              <div style={{ padding: "1.2rem 2rem 1.6rem", borderTop: "1px solid rgba(200,169,110,0.12)", display: "flex", flexDirection: "column", gap: "0.55rem", backgroundColor: "rgba(11,21,34,0.25)" }}>
                {["Best rate guarantee", "Free cancellation tersedia", "Breakfast dapat ditambahkan"].map(p => (
                  <div key={p} style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                    <Check size={10} style={{ color: gold, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.7rem", color: muted }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RELATED ROOMS ── */}
        <div style={{ marginTop: "7rem", paddingTop: "4.5rem", borderTop: "1px solid rgba(200,169,110,0.12)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <div>
              <span style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.38em", textTransform: "uppercase", color: gold, marginBottom: "0.7rem" }}>Kamar Lainnya</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.8rem)", fontWeight: 300, color: "#faf8f4" }}>
                Pilihan <em style={{ fontStyle: "italic", color: "#e2c992" }}>Lainnya</em>
              </h2>
            </div>
            <Link href="/rooms"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.66rem", letterSpacing: "0.18em", textTransform: "uppercase", color: gold, textDecoration: "none", transition: "opacity 0.3s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}>
              Semua Kamar <ArrowRight size={13} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3px" }}>
            {related.map((r) => (
              <Link key={r.slug} href={`/rooms/${r.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ overflow: "hidden" }} className="related-card">
                  <div style={{ height: "230px", position: "relative", overflow: "hidden" }}>
                    <Image src={r.heroImage} alt={r.name} fill
                      style={{ objectFit: "cover", transition: "transform 0.75s ease" }}
                      className="related-img" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,21,34,0.92) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.4rem" }}>
                      <p style={{ fontSize: "0.52rem", letterSpacing: "0.25em", textTransform: "uppercase", color: gold, marginBottom: "0.3rem" }}>{r.type}</p>
                      <p style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 300, color: "#faf8f4", marginBottom: "0.25rem" }}>{r.name}</p>
                      <p style={{ fontSize: "0.68rem", color: "#e2c992" }}>
                        {r.priceLabel} <span style={{ color: "rgba(245,237,224,0.38)", fontSize: "0.6rem" }}>/malam</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.96)", cursor: "zoom-out" }}
            onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)}
              style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none", cursor: "pointer", color: muted, transition: "color 0.3s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = gold)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = muted)}>
              <X size={26} />
            </button>
            <button onClick={e => { e.stopPropagation(); prevLight(); }}
              style={{ position: "absolute", left: "2rem", background: "none", border: "none", cursor: "pointer", color: muted, padding: "0.5rem" }}>
              <ChevronLeft size={34} />
            </button>
            <motion.div key={lightbox} onClick={e => e.stopPropagation()}
              initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ position: "relative", width: "88vw", maxWidth: "1200px", height: "82vh" }}>
              <Image src={room.images[lightbox]} alt={`${room.name} photo ${lightbox + 1}`} fill style={{ objectFit: "contain" }} />
            </motion.div>
            <button onClick={e => { e.stopPropagation(); nextLight(); }}
              style={{ position: "absolute", right: "2rem", background: "none", border: "none", cursor: "pointer", color: muted, padding: "0.5rem" }}>
              <ChevronRight size={34} />
            </button>
            <p style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", fontSize: "0.63rem", letterSpacing: "0.2em", textTransform: "uppercase", color: gold }}>
              {lightbox + 1} / {room.images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .related-card:hover .related-img { transform: scale(1.08) !important; }
        @media (max-width: 1024px) {
          main > div:first-child { grid-template-columns: 1fr !important; }
          main > div:first-child > div:last-child > div { position: static !important; }
        }
        @media (max-width: 768px) {
          main { padding: 3rem 1.5rem !important; }
          div[style*="80vh"] { height: 60vh !important; }
          div[style*="80vh"] a { left: 1.5rem !important; }
          div[style*="80vh"] > div:last-child { right: 1rem !important; bottom: 1.5rem !important; flex-direction: row !important; }
          div[style*="80vh"] > div:last-child button { width: 52px !important; height: 36px !important; }
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          div[style*="1fr 1fr"][style*="3rem"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
