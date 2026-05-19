"use client";
import { motion } from "framer-motion";

export function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <section
      id="hero"
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Large corner flourishes (hero-level) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 32,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {/* Top-left */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: 52, height: 52,
          borderTop: "2px solid rgba(201,169,98,0.4)",
          borderLeft: "2px solid rgba(201,169,98,0.4)",
        }} />
        {/* Top-right */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: 52, height: 52,
          borderTop: "2px solid rgba(201,169,98,0.4)",
          borderRight: "2px solid rgba(201,169,98,0.4)",
        }} />
        {/* Bottom-left */}
        <div style={{
          position: "absolute", bottom: 0, left: 0,
          width: 52, height: 52,
          borderBottom: "2px solid rgba(201,169,98,0.4)",
          borderLeft: "2px solid rgba(201,169,98,0.4)",
        }} />
        {/* Bottom-right */}
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: 52, height: 52,
          borderBottom: "2px solid rgba(201,169,98,0.4)",
          borderRight: "2px solid rgba(201,169,98,0.4)",
        }} />
      </div>

      {/* ── Warm radial ambient (no neon) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 40%, rgba(201,169,98,0.08) 0%, transparent 65%)",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 760,
          padding: "0 32px",
          textAlign: "center",
        }}
      >
        {/* Volume label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 36,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: 44,
              height: 1,
              background: "var(--border)",
            }}
          />
          <span className="vol-label">Triết học Mác – Lênin · Chương II</span>
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: 44,
              height: 1,
              background: "var(--border)",
            }}
          />
        </motion.div>

        {/* Main Title — Cormorant Garamond */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
            color: "var(--fg)",
            marginBottom: 20,
          }}
        >
          Behind The{" "}
          <span
            style={{
              color: "var(--accent)",
              fontStyle: "italic",
            }}
          >
            CV
          </span>
        </motion.h1>

        {/* Ornate divider below title */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="ornate-divider ornate-divider-md"
          aria-hidden="true"
          style={{ marginBottom: 32 }}
        />

        {/* Italic subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--fg)",
            marginBottom: 16,
            lineHeight: 1.55,
          }}
        >
          Bạn đang nhìn bản chất hay chỉ nhìn hiện tượng?
        </motion.p>

        {/* Body description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            color: "var(--muted-fg)",
            maxWidth: 520,
            lineHeight: 1.8,
            marginBottom: 52,
          }}
        >
          Trong vài giây đầu tiên, chúng ta thường đánh giá một người qua CV,
          ngoại hình và cách họ thể hiện bản thân. Nhưng liệu những điều đó có
          phản ánh đúng năng lực thật?
        </motion.p>

        {/* CTA Button — Brass */}
        <motion.button
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="btn-primary"
          style={{ fontSize: 11 }}
          aria-label="Bắt đầu trải nghiệm tương tác"
        >
          Bắt Đầu Trải Nghiệm
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Academic credit line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            marginTop: 40,
            fontFamily: "var(--font-display)",
            fontSize: 9,
            fontWeight: 400,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--border)",
          }}
        >
          Phép Biện Chứng Duy Vật · Các Cặp Phạm Trù Cơ Bản
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 44,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 8,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--border)",
          }}
        >
          Scroll
        </span>
        <div className="animate-scroll" style={{ color: "var(--border)" }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
