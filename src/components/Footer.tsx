"use client";

import Image from "next/image";

const explore = [
  { href: "#about", label: "About Us" },
  { href: "#rooms", label: "Rooms & Suites" },
  { href: "#facilities", label: "Facilities" },
  { href: "#dining", label: "Restaurant" },
  { href: "#gallery", label: "Gallery" },
];
const services = [
  "Wedding Package",
  "MICE & Events",
  "Airport Transfer",
  "Spa Treatment",
  "Room Service 24H",
];
const contacts = [
  { label: "+62 31 8000 2500", href: "tel:+62318000250" },
  { label: "reservations@imperiumhotel.com", href: "mailto:reservations@imperiumhotel.com" },
  { label: "Jl. Pemuda No. 1, Surabaya 60271", href: "#" },
  { label: "Check-in: 14:00 WIB", href: "#" },
  { label: "Check-out: 12:00 WIB", href: "#" },
];
const socials = [
  { label: "IG", href: "#", title: "Instagram" },
  { label: "FB", href: "#", title: "Facebook" },
  { label: "TW", href: "#", title: "X / Twitter" },
  { label: "YT", href: "#", title: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      className="px-8 md:px-16 pt-20 pb-8 border-t"
      style={{ backgroundColor: "var(--color-navy-mid)", borderColor: "rgba(200,169,110,0.2)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-14">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/logo.jpg" alt="Imperium" width={34} height={34} className="object-contain" />
            <span
              className="text-xl font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
            >
              Imperium Hotel
            </span>
          </div>
          <p className="text-[0.78rem] leading-[1.85] max-w-[260px]" style={{ color: "var(--color-muted)" }}>
            Luxury redefined in the heart of Surabaya. Where every stay becomes
            an unforgettable memory crafted with care and elegance.
          </p>
          <div className="flex gap-2 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.title}
                className="w-9 h-9 flex items-center justify-center border text-[0.6rem] font-medium tracking-wider transition-all duration-300"
                style={{ borderColor: "rgba(200,169,110,0.22)", color: "rgba(245,237,224,0.5)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold)";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-gold)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.22)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,237,224,0.5)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <p className="text-[0.6rem] tracking-[0.28em] uppercase mb-5" style={{ color: "var(--color-gold)" }}>
            Explore
          </p>
          <ul className="flex flex-col gap-3">
            {explore.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[0.8rem] transition-colors duration-300 hover:text-gold" style={{ color: "var(--color-muted)" }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-[0.6rem] tracking-[0.28em] uppercase mb-5" style={{ color: "var(--color-gold)" }}>
            Services
          </p>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s}>
                <a href="#" className="text-[0.8rem] transition-colors duration-300 hover:text-gold" style={{ color: "var(--color-muted)" }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[0.6rem] tracking-[0.28em] uppercase mb-5" style={{ color: "var(--color-gold)" }}>
            Contact
          </p>
          <ul className="flex flex-col gap-3">
            {contacts.map((c) => (
              <li key={c.label}>
                <a href={c.href} className="text-[0.78rem] leading-snug transition-colors duration-300 hover:text-gold" style={{ color: "var(--color-muted)" }}>
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t" style={{ borderColor: "rgba(200,169,110,0.18)" }}>
        <p className="text-[0.68rem] tracking-[0.06em]" style={{ color: "var(--color-muted)" }}>
          © 2025 Imperium Hotel Surabaya. All Rights Reserved.
        </p>
        <p className="text-[0.68rem] tracking-[0.06em]" style={{ color: "var(--color-muted)" }}>
          Privacy Policy &nbsp;·&nbsp; Terms & Conditions
        </p>
      </div>
    </footer>
  );
}
