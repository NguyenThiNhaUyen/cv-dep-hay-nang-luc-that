"use client";
import { motion } from "framer-motion";

interface Scene8EssencePhenomenonProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const COMPARISON = [
  {
    id: "hien-tuong",
    label: "Hiện Tượng (Surface)",
    color: "var(--brass)",
    bg: "rgba(184,136,42,0.07)",
    border: "rgba(184,136,42,0.25)",
    studentA: "CV thiết kế đẹp, bằng Giỏi, đầy từ khóa \"Proactive\", \"Leadership\"",
    studentB: "CV đơn giản, bằng Khá — ít điểm nhấn về hình thức",
    note: "Bên ngoài, dễ thay đổi, biểu hiện ra ngoài",
  },
  {
    id: "ban-chat",
    label: "Bản Chất (Essence)",
    color: "var(--crimson-light)",
    bg: "rgba(139,38,53,0.07)",
    border: "rgba(139,38,53,0.25)",
    studentA: "Thiếu năng lực thực chiến — học để có điểm, chưa quen giải bài toán thực tế",
    studentB: "Tư duy phân tích sắc bén — giải được bài toán kinh doanh thực của công ty",
    note: "Bên trong, ổn định, quyết định sự vật là gì",
  },
];

export function Scene8EssencePhenomenon({ isActive }: Scene8EssencePhenomenonProps) {
  return (
    <section className="scene scene-aged" aria-label="Scene 8: Bản chất và Hiện tượng">
      {/* Diagonal pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(184,136,42,0.03) 0, rgba(184,136,42,0.03) 1px, transparent 0, transparent 50%)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="scene-inner"
        style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 72, alignItems: "center" }}
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
            <em className="t-accent">Bản chất</em>
            {" "}và{" "}
            <span style={{ color: "var(--ink)" }}>Hiện tượng</span>
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
            style={{ marginBottom: 14, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Bản chất</strong>{" "}
            là tổng hợp những mặt, mối liên hệ tất nhiên, ổn định,{" "}
            <em>bên trong</em> sự vật — quyết định sự vật là gì.
          </motion.p>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="t-body"
            style={{ marginBottom: 22, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Hiện tượng</strong>{" "}
            là những biểu hiện <em>ra bên ngoài</em> mà con người có thể cảm nhận bằng giác quan.
          </motion.p>

          {/* Key principles */}
          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.55 }}
            style={{
              background: "rgba(184,136,42,0.07)",
              border: "1px solid rgba(184,136,42,0.2)",
              borderRadius: 3,
              padding: "16px 20px",
              marginBottom: 20,
            }}
          >
            <p className="t-scene-label" style={{ marginBottom: 10 }}>Nguyên Lý Cốt Lõi</p>
            {[
              "Bản chất quyết định hiện tượng — bản chất thế nào, hiện tượng thế đó.",
              "Hiện tượng có thể phản ánh bản chất, nhưng không bao giờ phản ánh đầy đủ toàn bộ bản chất.",
              "Hiện tượng có thể che lấp hoặc đánh lừa nhận thức nếu không thông qua thực tiễn để kiểm chứng.",
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="t-body"
                style={{ fontSize: "0.83rem", marginBottom: i < 2 ? 6 : 0, display: "flex", gap: 8 }}
              >
                <span style={{ color: "var(--brass)", flexShrink: 0 }}>→</span>
                {p}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.75 }}
          >
            <p className="t-quote" style={{ fontSize: "0.9rem" }}>
              "Bản chất không bộc lộ trực tiếp mà phải thông qua hoạt động thực tiễn.{" "}
              <em style={{ color: "var(--brass)" }}>Thực tiễn là thước đo duy nhất để đánh giá bản chất.</em>"
            </p>
          </motion.div>
        </div>

        {/* Right — comparison A vs B */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr 1fr",
              gap: 12,
              alignItems: "center",
              paddingBottom: 8,
              borderBottom: "1px solid rgba(44,36,22,0.1)",
            }}
          >
            <span />
            {["Sinh viên A", "Sinh viên B"].map((s, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: i === 0 ? "var(--brass)" : "var(--crimson-light)",
                  textAlign: "center",
                }}
              >
                {s}
              </span>
            ))}
          </motion.div>

          {COMPARISON.map((row, ri) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.4 + ri * 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr 1fr",
                gap: 12,
                alignItems: "start",
              }}
            >
              {/* Row label */}
              <div
                style={{
                  padding: "14px 16px",
                  background: row.bg,
                  border: `1px solid ${row.border}`,
                  borderRadius: 3,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 8.5,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: row.color,
                    marginBottom: 4,
                  }}
                >
                  {row.label}
                </p>
                <p className="t-body" style={{ fontSize: "0.75rem", color: "var(--ink-ghost)", fontStyle: "italic" }}>
                  {row.note}
                </p>
              </div>

              {/* Student A */}
              <div
                style={{
                  padding: "14px 16px",
                  background: "rgba(245,237,220,0.45)",
                  border: "1px solid rgba(44,36,22,0.1)",
                  borderRadius: 3,
                  minHeight: 70,
                }}
              >
                <span className="t-body" style={{ fontSize: "0.83rem", lineHeight: 1.7 }}>
                  {row.studentA}
                </span>
              </div>

              {/* Student B */}
              <div
                style={{
                  padding: "14px 16px",
                  background: "rgba(245,237,220,0.45)",
                  border: "1px solid rgba(44,36,22,0.1)",
                  borderRadius: 3,
                  minHeight: 70,
                }}
              >
                <span className="t-body" style={{ fontSize: "0.83rem", lineHeight: 1.7 }}>
                  {row.studentB}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Synthesis conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ delay: 0.9 }}
            style={{
              padding: "18px 22px",
              background: "rgba(44,36,22,0.06)",
              border: "1px solid var(--border-warm)",
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <p className="t-scene-label" style={{ marginBottom: 6 }}>Kết Luận</p>
            <p className="t-body" style={{ fontSize: "0.85rem" }}>
              Sự đánh giá qua một CV hoàn hảo rất dễ bị hiện tượng che lấp. Bằng việc đưa ra case study, nhà tuyển dụng đã dùng <em>thực tiễn</em> làm phép thử để bóc tách hiện tượng và chạm đến <em style={{ color: "var(--crimson-light)" }}>bản chất thực sự</em>.
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
        bản chất mới quyết định!
      </motion.span>

      {/* Connecting arrow */}
      <div aria-hidden="true" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", zIndex: 5, opacity: 0.4 }}>
        <div style={{ width: 28, height: 1, background: "var(--brass)" }} />
        <div style={{ width: 7, height: 7, borderRight: "1.5px solid var(--brass)", borderTop: "1.5px solid var(--brass)", transform: "rotate(45deg)", marginLeft: -2 }} />
      </div>
    </section>
  );
}
