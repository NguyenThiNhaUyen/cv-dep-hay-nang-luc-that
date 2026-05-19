"use client";
import { motion } from "framer-motion";

interface Scene8PossibilityProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const SCENARIOS = [
  {
    id: "a-stuck",
    title: "A — Hiện thực",
    desc: "Có nhiều khả năng tiềm ẩn (bằng giỏi, chứng chỉ nhiều) nhưng năng lực thực tế chưa chuyển hóa thành hiện thực trong buổi phỏng vấn.",
    tag: "Khả Năng ≠ Hiện Thực",
    color: "var(--brass)",
  },
  {
    id: "b-real",
    title: "B — Hiện thực",
    desc: "Khả năng (GPA trung bình, CV đơn giản) tuy hạn chế về hình thức — nhưng qua nỗ lực thực tế, đã hiện thực hóa thành năng lực giải quyết vấn đề.",
    tag: "Khả Năng → Hiện Thực",
    color: "var(--crimson-light)",
  },
];

export function Scene8Possibility({ isActive }: Scene8PossibilityProps) {
  return (
    <section className="scene scene-aged" aria-label="Scene 8: Khả năng và Hiện thực">
      {/* Diagonal pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, rgba(184,136,42,0.03) 0, rgba(184,136,42,0.03) 1px, transparent 0, transparent 50%)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="scene-inner"
        style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72, alignItems: "center" }}
      >
        {/* Left — concept */}
        <div>
          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}
          >
            <span className="step-badge">VIII</span>
            <span className="t-scene-label">Cặp Phạm Trù III</span>
          </motion.div>

          <motion.h2
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="t-heading"
            style={{ marginBottom: 20 }}
          >
            <em className="t-accent">Khả năng</em>
            {" "}và{" "}
            <span style={{ color: "var(--ink)" }}>Hiện thực</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isActive ? { width: 160 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{ height: 1, background: "linear-gradient(90deg, var(--brass), transparent)", marginBottom: 24 }}
          />

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="t-body"
            style={{ marginBottom: 16, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Khả năng</strong> là
            cái chưa có mà có thể có được, còn tiềm ẩn trong sự vật dưới dạng
            xu hướng.
          </motion.p>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="t-body"
            style={{ marginBottom: 24, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Hiện thực</strong> là
            những gì đã hình thành, đang tồn tại và biểu hiện ra ngoài qua
            thực tiễn.
          </motion.p>

          {/* Arrow diagram */}
          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.56 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 20px",
              background: "rgba(184,136,42,0.06)",
              border: "1px solid rgba(184,136,42,0.18)",
              borderRadius: 3,
              marginBottom: 20,
            }}
          >
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--ink-faded)" }}>
              Khả năng
            </span>
            <span style={{ color: "var(--brass)", fontSize: "1.2rem", fontWeight: 300 }}>→</span>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", color: "var(--ink-ghost)" }}>
              (nỗ lực + điều kiện)
            </span>
            <span style={{ color: "var(--brass)", fontSize: "1.2rem", fontWeight: 300 }}>→</span>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--ink)" }}>
              Hiện thực
            </span>
          </motion.div>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.7 }}
          >
            <p className="t-scene-label" style={{ marginBottom: 8 }}>Quan Trọng</p>
            <p className="t-body" style={{ fontSize: "0.88rem", lineHeight: 1.8 }}>
              Không phải ai có nhiều khả năng nhất đều đạt hiện thực tốt nhất.
              Điều kiện và nỗ lực chuyển hóa mới là quyết định.
            </p>
          </motion.div>
        </div>

        {/* Right — two scenario cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {SCENARIOS.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: 24 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="scene-card card-corners"
              style={{ padding: "26px 30px" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                }}>
                  {s.title}
                </h3>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 8,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: s.color,
                  padding: "4px 10px",
                  border: `1px solid ${s.color}40`,
                  borderRadius: 2,
                  whiteSpace: "nowrap",
                }}>
                  {s.tag}
                </span>
              </div>
              <p className="t-body" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}

          {/* Key insight */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ delay: 0.85 }}
            style={{
              padding: "18px 22px",
              background: "rgba(44,36,22,0.06)",
              border: "1px solid rgba(44,36,22,0.1)",
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <p className="t-quote" style={{ fontSize: "0.9rem" }}>
              Năng lực thực tế{" "}
              <em style={{ color: "var(--brass)" }}>
                là hiện thực đã được chuyển hóa.
              </em>
              {" "}Bằng cấp chỉ là khả năng tiềm ẩn.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Handwritten annotation */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2 }}
        className="annotation"
        style={{ position: "absolute", bottom: 100, left: 80, zIndex: 5 }}
        aria-hidden="true"
      >
        tiềm năng chưa = kết quả
      </motion.span>

      {/* Connecting arrow */}
      <div aria-hidden="true" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", zIndex: 5, opacity: 0.4 }}>
        <div style={{ width: 28, height: 1, background: "var(--brass)" }} />
        <div style={{ width: 7, height: 7, borderRight: "1.5px solid var(--brass)", borderTop: "1.5px solid var(--brass)", transform: "rotate(45deg)", marginLeft: -2 }} />
      </div>
    </section>
  );
}
