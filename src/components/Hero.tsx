"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background image via CSS (reliable across environments) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-pool.jpg')",
          animation: "heroZoom 22s ease-in-out infinite alternate",
          transformOrigin: "center center",
        }}
      />

      {/* ── Overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,21,34,0.82) 0%, rgba(11,21,34,0.30) 45%, rgba(11,21,34,0.72) 100%)",
        }}
      />

      {/* ── Vertical side text ── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div
          className="w-px h-20"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.5), transparent)" }}
        />
        <span
          className="text-[0.52rem] tracking-[0.3em] uppercase rotate-90 my-5 whitespace-nowrap"
          style={{ color: "rgba(200,169,110,0.5)" }}
        >
          Surabaya • Est. 2010
        </span>
        <div
          className="w-px h-20"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.5), transparent)" }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8 px-5 py-2 text-[0.6rem] tracking-[0.35em] uppercase"
          style={{
            border: "1px solid rgba(200,169,110,0.5)",
            color: "var(--color-gold)",
          }}
        >
          <span>★</span>
          <span>Surabaya's Finest Luxury Hotel</span>
          <span>★</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8.5vw, 7rem)",
            fontWeight: 300,
            lineHeight: 1.02,
            color: "#faf8f4",
          }}
        >
          Where{" "}
          <em style={{ fontStyle: "italic", color: "#e2c992" }}>Grandeur</em>
          <br />
          Meets Comfort
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-4 mb-10 text-[0.75rem] tracking-[0.28em] uppercase"
          style={{ color: "rgba(245,237,224,0.55)" }}
        >
          Jl. Pemuda No. 1, Surabaya &nbsp;—&nbsp; Est. 2010
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#contact"
            className="text-[0.72rem] tracking-[0.2em] uppercase font-medium px-8 py-3.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-navy)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#e2c992";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-gold)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Reserve Your Stay
          </a>
          <a
            href="#rooms"
            className="text-[0.72rem] tracking-[0.2em] uppercase font-light px-8 py-3.5 transition-all duration-300"
            style={{
              border: "1px solid rgba(245,237,224,0.35)",
              color: "var(--color-cream)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,237,224,0.35)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-cream)";
            }}
          >
            Explore Rooms
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 flex flex-col items-center gap-2"
        style={{ animation: "scrollBob 2.2s ease-in-out infinite", transform: "translateX(-50%)" }}
      >
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, var(--color-gold), transparent)" }}
        />
        <span
          className="text-[0.58rem] tracking-[0.22em] uppercase"
          style={{ color: "rgba(245,237,224,0.5)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
