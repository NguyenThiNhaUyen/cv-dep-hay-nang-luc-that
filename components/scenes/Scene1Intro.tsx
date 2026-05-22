"use client";
import { motion } from "framer-motion";

interface Scene1IntroProps {
  isActive: boolean;
  onNext: () => void;
}

const FI = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };

export function Scene1Intro({ isActive, onNext }: Scene1IntroProps) {
  return (
    <section className="scene scene-parchment" aria-label="Scene 1: Giới thiệu">
      {/* Large decorative circle */}
      <div
        aria-hidden="true"
        className="animate-breathe"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(70vw, 70vh)",
          height: "min(70vw, 70vh)",
          borderRadius: "50%",
          border: "1px solid rgba(184,136,42,0.12)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(50vw, 50vh)",
          height: "min(50vw, 50vh)",
          borderRadius: "50%",
          border: "1px solid rgba(184,136,42,0.08)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Rotating ornament */}
      <div
        aria-hidden="true"
        className="animate-rotate-slow"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(88vw, 88vh)",
          height: "min(88vw, 88vh)",
          borderRadius: "50%",
          border: "1px dashed rgba(184,136,42,0.07)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Corner flourishes */}
      {[
        { top: 40, left: 40, borderTop: true, borderLeft: true },
        { top: 40, right: 40, borderTop: true, borderRight: true },
        { bottom: 40, left: 40, borderBottom: true, borderLeft: true },
        { bottom: 40, right: 40, borderBottom: true, borderRight: true },
      ].map((corner, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 56,
            height: 56,
            top: corner.top,
            bottom: corner.bottom,
            left: corner.left,
            right: corner.right,
            borderTop: corner.borderTop ? "1.5px solid rgba(184,136,42,0.3)" : undefined,
            borderBottom: corner.borderBottom ? "1.5px solid rgba(184,136,42,0.3)" : undefined,
            borderLeft: corner.borderLeft ? "1.5px solid rgba(184,136,42,0.3)" : undefined,
            borderRight: corner.borderRight ? "1.5px solid rgba(184,136,42,0.3)" : undefined,
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      ))}

      {/* Center content */}
      <div className="scene-inner-center" style={{ zIndex: 10, marginTop: "-8vh" }}>
        {/* Overline label */}
        <motion.div
          variants={FI}
          initial="hidden"
          animate={isActive ? "show" : "hidden"}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <span aria-hidden="true" style={{ display: "block", width: 40, height: 1, background: "rgba(184,136,42,0.35)" }} />
          <span className="t-scene-label">Triết Học Mác–Lênin · Chương II</span>
          <span aria-hidden="true" style={{ display: "block", width: 40, height: 1, background: "rgba(184,136,42,0.35)" }} />
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={FI}
          initial="hidden"
          animate={isActive ? "show" : "hidden"}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="t-display"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)", marginBottom: 18 }}
        >
          Behind The{" "}
          <em className="t-accent" style={{ fontStyle: "italic" }}>CV</em>
        </motion.h1>

        {/* Ornate divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isActive ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.65, delay: 0.38 }}
          style={{
            height: 1,
            width: 280,
            margin: "0 auto 30px",
            background: "linear-gradient(90deg, transparent, rgba(184,136,42,0.5), transparent)",
            transformOrigin: "center",
          }}
        />

        {/* Italic subtitle */}
        <motion.p
          variants={FI}
          initial="hidden"
          animate={isActive ? "show" : "hidden"}
          transition={{ duration: 0.75, delay: 0.48 }}
          className="t-quote"
          style={{ marginBottom: 14, color: "var(--ink-light)" }}
        >
          Bạn đang nhìn bản chất hay chỉ nhìn hiện tượng?
        </motion.p>

        {/* Description */}
        <motion.p
          variants={FI}
          initial="hidden"
          animate={isActive ? "show" : "hidden"}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="t-body"
          style={{ marginBottom: 16, lineHeight: 1.85, maxWidth: 500, margin: "0 auto 16px" }}
        >
          Hai sinh viên tốt nghiệp. Hai con đường sự nghiệp khác nhau.
          Ai là người thực sự có năng lực, và ai chỉ có một "vỏ bọc" hoàn hảo?
        </motion.p>

        <motion.p
          variants={FI}
          initial="hidden"
          animate={isActive ? "show" : "hidden"}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.85rem",
            color: "var(--ink-ghost)",
            letterSpacing: "0.04em",
            lineHeight: 1.6,
            maxWidth: 480,
            margin: "0 auto 40px",
            paddingLeft: 16,
            borderLeft: "2px solid rgba(44,36,22,0.15)",
            textAlign: "left",
          }}
        >
          Phân tích tình huống tuyển dụng dưới góc nhìn các cặp phạm trù cơ bản của phép biện chứng duy vật.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={FI}
          initial="hidden"
          animate={isActive ? "show" : "hidden"}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}
        >
          <button
            className="btn-brass"
            onClick={onNext}
            aria-label="Bắt đầu hành trình"
          >
            Bắt Đầu Hành Trình
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <span
            className="animate-breathe"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--ink-ghost)",
            }}
          >
            ← → phím mũi tên để điều hướng
          </span>
        </motion.div>



        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            marginTop: 40,
            fontFamily: "var(--font-display)",
            fontSize: 8,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--ink-ghost)",
            textAlign: "center",
          }}
        >
          Phép Biện Chứng Duy Vật · Các Cặp Phạm Trù Cơ Bản
        </motion.p>
      </div>

      {/* Handwritten annotation */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="annotation"
        style={{ position: "absolute", bottom: 120, right: 80, zIndex: 5 }}
        aria-hidden="true"
      >
        khám phá →
      </motion.span>

      {/* Scene connector arrow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 32,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 0,
          zIndex: 5,
          opacity: 0.4,
        }}
      >
        <div style={{ width: 28, height: 1, background: "var(--brass)" }} />
        <div style={{
          width: 7, height: 7,
          borderRight: "1.5px solid var(--brass)",
          borderTop: "1.5px solid var(--brass)",
          transform: "rotate(45deg)",
          marginLeft: -2,
        }} />
      </div>
    </section>
  );
}
