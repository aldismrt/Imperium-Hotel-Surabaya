"use client";

import { useState } from "react";
import SectionReveal from "./SectionReveal";

const roomTypes = ["Twin Room", "Superior Room", "Deluxe Room", "Junior Suite", "Presidential Suite"];
const guestOpts = ["1 Tamu", "2 Tamu", "3 Tamu", "4+ Tamu"];

export default function BookingContact() {
  const [form, setForm] = useState({ checkin: "", checkout: "", room: "Deluxe Room", guests: "2 Tamu" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const fieldStyle: React.CSSProperties = {
    flex: 1, display: "flex", flexDirection: "column", padding: "0.9rem 1.3rem",
    backgroundColor: "rgba(11,21,34,0.78)",
    borderRight: "1px solid rgba(200,169,110,0.2)",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: "0.5rem", letterSpacing: "0.22em", textTransform: "uppercase",
    color: "var(--color-gold)", marginBottom: "0.35rem",
  };
  const inputStyle: React.CSSProperties = {
    background: "none", border: "none", outline: "none",
    color: "var(--color-cream)", fontSize: "0.8rem", fontFamily: "var(--font-body)",
    colorScheme: "dark" as unknown as undefined,
  };

  return (
    <section id="contact" style={{
      position: "relative", padding: "8rem 4rem", textAlign: "center",
      backgroundImage: "url(/images/exterior.jpg)", backgroundSize: "cover",
      backgroundPosition: "center", backgroundAttachment: "fixed",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(11,21,34,0.85)" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <SectionReveal>
          <span style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.8rem" }}>Book Direct & Save</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 300, color: "#faf8f4" }}>
            Plan Your <em style={{ fontStyle: "italic", color: "#e2c992" }}>Perfect Stay</em>
          </h2>
          <div style={{ width: "55px", height: "1px", backgroundColor: "var(--color-gold)", margin: "1.5rem auto 2.5rem" }} />
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <form onSubmit={handleSubmit} style={{ display: "flex", maxWidth: "760px", margin: "0 auto 1.5rem", border: "1px solid rgba(200,169,110,0.25)", flexWrap: "wrap" }}>
            <div style={fieldStyle}>
              <label style={labelStyle}>Check In</label>
              <input type="date" value={form.checkin} onChange={e => setForm({...form, checkin: e.target.value})} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Check Out</label>
              <input type="date" value={form.checkout} onChange={e => setForm({...form, checkout: e.target.value})} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Tipe Kamar</label>
              <select value={form.room} onChange={e => setForm({...form, room: e.target.value})} style={{ ...inputStyle, cursor: "pointer" }}>
                {roomTypes.map(r => <option key={r} style={{ background: "#0b1522" }}>{r}</option>)}
              </select>
            </div>
            <div style={{ ...fieldStyle, borderRight: "none" }}>
              <label style={labelStyle}>Tamu</label>
              <select value={form.guests} onChange={e => setForm({...form, guests: e.target.value})} style={{ ...inputStyle, cursor: "pointer" }}>
                {guestOpts.map(g => <option key={g} style={{ background: "#0b1522" }}>{g}</option>)}
              </select>
            </div>
            <button type="submit"
              style={{ backgroundColor: sent ? "#5a8a5a" : "var(--color-gold)", color: "var(--color-navy)", border: "none", padding: "0 2rem", minWidth: "150px", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", transition: "all 0.3s", fontFamily: "var(--font-body)" }}>
              {sent ? "✓ Terkirim!" : "Check Availability"}
            </button>
          </form>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.08em", color: "rgba(245,237,224,0.55)" }}>
            📞 <a href="tel:+62318000250" style={{ color: "#e2c992", textDecoration: "none" }}>+62 31 8000 2500</a>
            {" "}|{" "}
            ✉ <a href="mailto:reservations@imperiumhotel.com" style={{ color: "#e2c992", textDecoration: "none" }}>reservations@imperiumhotel.com</a>
            {" "}|{" "}
            📍 Jl. Pemuda No. 1, Surabaya 60271
          </p>
        </SectionReveal>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 5rem 1.5rem !important; background-attachment: scroll !important; }
          #contact form { flex-direction: column !important; }
          #contact form > div { border-right: none !important; border-bottom: 1px solid rgba(200,169,110,0.2) !important; }
          #contact form > button { padding: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
