"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "#about",      label: "About" },
  { href: "#rooms",      label: "Rooms" },
  { href: "#facilities", label: "Facilities" },
  { href: "#dining",     label: "Dining" },
  { href: "#gallery",    label: "Gallery" },
  { href: "#contact",    label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // If not on homepage, prefix anchor links with "/"
  const isHome = pathname === "/";
  const href = (anchor: string) => (isHome ? anchor : `/${anchor}`);
  const bookHref = isHome ? "#contact" : "/#contact";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 4rem", height: "80px",
          backdropFilter: scrolled ? "blur(14px)" : "blur(2px)",
          background: scrolled
            ? "rgba(11,21,34,0.97)"
            : "linear-gradient(to bottom, rgba(11,21,34,0.90), transparent)",
          borderBottom: scrolled
            ? "1px solid rgba(200,169,110,0.22)"
            : "1px solid rgba(200,169,110,0.05)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
          transition: "all 0.45s ease",
        }}
      >
        {/* ── Logo → always goes to homepage ── */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
        >
          <Image
            src="/images/logo.jpg"
            alt="Imperium Logo"
            width={36} height={36}
            style={{ objectFit: "contain" }}
          />
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "1.2rem",
            fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--color-gold)",
          }}>
            Imperium
          </span>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={href(item.href)}
                style={{
                  textDecoration: "none", color: "var(--color-cream)",
                  fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase",
                  fontWeight: 400, transition: "color 0.3s", position: "relative", paddingBottom: "4px",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-cream)")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <Link
          href={bookHref}
          className="desktop-cta"
          style={{
            border: "1px solid var(--color-gold)", color: "var(--color-gold)",
            padding: "0.55rem 1.6rem", fontSize: "0.68rem",
            letterSpacing: "0.18em", textTransform: "uppercase",
            textDecoration: "none", transition: "all 0.3s",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--color-gold)";
            el.style.color = "var(--color-navy)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "transparent";
            el.style.color = "var(--color-gold)";
          }}
        >
          Book Now
        </Link>

        {/* ── Mobile hamburger ── */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "var(--color-cream)", padding: "4px",
            display: "none",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed", top: "80px", left: 0, right: 0, zIndex: 999,
            background: "rgba(11,21,34,0.98)",
            borderTop: "1px solid rgba(200,169,110,0.18)",
            padding: "1.8rem 2rem 2rem",
            display: "flex", flexDirection: "column", gap: "1.3rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={href(item.href)}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--color-cream)", textDecoration: "none",
                fontSize: "0.9rem", letterSpacing: "0.14em", textTransform: "uppercase",
                transition: "color 0.3s", paddingBottom: "1rem",
                borderBottom: "1px solid rgba(200,169,110,0.1)",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-cream)")}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={bookHref}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block", textAlign: "center",
              border: "1px solid var(--color-gold)", color: "var(--color-gold)",
              padding: "0.9rem", fontSize: "0.72rem",
              letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none", marginTop: "0.4rem", transition: "all 0.3s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--color-gold)";
              el.style.color = "var(--color-navy)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--color-gold)";
            }}
          >
            Book Now
          </Link>
        </div>
      )}

      {/* ── Responsive styles ── */}
      <style>{`
        .desktop-nav  { display: flex !important; }
        .desktop-cta  { display: inline-block !important; }
        .mobile-menu-btn { display: none !important; }

        @media (max-width: 900px) {
          nav { padding: 0 1.5rem !important; }
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
