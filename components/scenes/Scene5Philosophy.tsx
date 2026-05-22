"use client";
import { motion } from "framer-motion";

interface Scene5PhilosophyProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const CATEGORIES = [
  { num: "I", name: "Nội Dung & Hình Thức", scene: 6 },
  { num: "II", name: "Nguyên Nhân & Kết Quả", scene: 7 },
  { num: "III", name: "Bản Chất & Hiện Tượng", scene: 8 },
];

export function Scene5Philosophy({ isActive }: Scene5PhilosophyProps) {
  return (
    <section
      className="scene scene-dark"
      aria-label="Scene 5: Lăng kính triết học"
      style={{ overflow: "hidden" }}
    >
      {/* Large background text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(8rem, 18vw, 22rem)",
          fontWeight: 600,
          color: "rgba(184,136,42,0.04)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          zIndex: 1,
        }}
      >
        Dialectica
      </div>

      {/* Radial ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(60vw, 60vh)",
          height: "min(60vw, 60vh)",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(184,136,42,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Three concentric rings */}
      {[0.9, 0.65, 0.4].map((scale, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            width: `${scale * 85}vmin`,
            height: `${scale * 85}vmin`,
            borderRadius: "50%",
            border: "1px solid rgba(184,136,42,0.08)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      ))}

      <div className="scene-inner-center" style={{ zIndex: 10 }}>
        {/* Label */}
        <motion.div
          variants={FI}
          initial="hidden"
          animate={isActive ? "show" : "hidden"}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 36 }}
        >
          <span aria-hidden="true" style={{ display: "block", width: 40, height: 1, background: "rgba(184,136,42,0.4)" }} />
          <span className="t-scene-label">Phép Biện Chứng Duy Vật</span>
          <span aria-hidden="true" style={{ display: "block", width: 40, height: 1, background: "rgba(184,136,42,0.4)" }} />
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={FI}
          initial="hidden"
          animate={isActive ? "show" : "hidden"}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="t-display-light"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: 20 }}
        >
          Lăng Kính{" "}
          <em style={{ color: "var(--brass)", fontStyle: "italic" }}>Triết Học</em>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isActive ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            height: 1,
            width: 220,
            margin: "0 auto 28px",
            background: "linear-gradient(90deg, transparent, rgba(184,136,42,0.5), transparent)",
          }}
        />

        {/* Description */}
        <motion.p
          variants={FI}
          initial="hidden"
          animate={isActive ? "show" : "hidden"}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="t-body-dark"
          style={{ marginBottom: 48, maxWidth: 640, margin: "0 auto 48px", lineHeight: 1.85 }}
        >
          Phép biện chứng duy vật không nhìn sự vật qua những biểu hiện cô lập, tĩnh tại, mà luôn đặt chúng trong mối liên hệ phổ biến, sự vận động không ngừng và bản chất bên trong. Hãy cùng dùng lăng kính này để giải mã bài toán nhân sự trên.
        </motion.p>

        {/* Three category pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ delay: 0.6 + i * 0.12 }}
              className="scene-card-dark"
              style={{ padding: "18px 24px", textAlign: "left", minWidth: 180 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  color: "var(--brass)",
                  letterSpacing: "0.1em",
                }}>
                  {cat.num}
                </span>
                <div style={{ flex: 1, height: 1, background: "rgba(184,136,42,0.2)" }} />
              </div>
              <p style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.95rem",
                color: "rgba(245,237,220,0.85)",
                fontWeight: 400,
              }}>
                {cat.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Marx quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1 }}
          style={{ marginTop: 48 }}
        >
          <p style={{
            fontFamily: "var(--font-fell)",
            fontSize: "0.9rem",
            fontStyle: "italic",
            color: "rgba(184,136,42,0.55)",
            letterSpacing: "0.02em",
          }}>
            "The philosophers have only interpreted the world, in various ways.
            The point, however, is to change it."
          </p>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: 8,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(184,136,42,0.35)",
            marginTop: 8,
          }}>
            — Karl Marx, Theses on Feuerbach, 1845
          </p>
        </motion.div>
      </div>

      {/* Handwritten annotation — light */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.4 }}
        className="annotation"
        style={{
          position: "absolute",
          top: 100,
          right: 80,
          color: "rgba(184,136,42,0.3)",
          zIndex: 5,
        }}
        aria-hidden="true"
      >
        3 cặp phạm trù →
      </motion.span>

      {/* Connecting arrow */}
      <div aria-hidden="true" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", zIndex: 5, opacity: 0.35 }}>
        <div style={{ width: 28, height: 1, background: "var(--brass)" }} />
        <div style={{ width: 7, height: 7, borderRight: "1.5px solid var(--brass)", borderTop: "1.5px solid var(--brass)", transform: "rotate(45deg)", marginLeft: -2 }} />
      </div>
    </section>
  );
}
