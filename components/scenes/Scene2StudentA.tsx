"use client";
import { motion } from "framer-motion";

interface Scene2StudentAProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const CV_ITEMS = [
  { label: "Trường", value: "ĐH Ngoại Thương — Xuất Sắc" },
  { label: "GPA", value: "3.87 / 4.00" },
  { label: "Kỹ năng", value: "Excel, PowerPoint, Canva, Tiếng Anh C1" },
  { label: "Hoạt động", value: "CLB Hùng Biện · BTC Hội Thảo · Top 5 Startup Contest" },
  { label: "Chứng chỉ", value: "CFA Level I · Google Analytics · HubSpot" },
];

export function Scene2StudentA({ isActive }: Scene2StudentAProps) {
  return (
    <section className="scene scene-warm" aria-label="Scene 2: Sinh viên A">
      {/* Background watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: -80,
          transform: "translateY(-50%)",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(14rem, 22vw, 26rem)",
          fontWeight: 600,
          color: "rgba(184,136,42,0.06)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
      >
        A
      </div>

      <div className="scene-inner" style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}>
        {/* Left — story */}
        <div>
          {/* Scene label */}
          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}
          >
            <span className="step-badge" aria-label="Scene 2">II</span>
            <span className="t-scene-label">Sinh Viên A</span>
          </motion.div>

          <motion.h2
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="t-heading"
            style={{ marginBottom: 16 }}
          >
            CV đẹp, bằng{" "}
            <em className="t-accent">xuất sắc,</em>
            <br />
            nhưng thất bại phỏng vấn.
          </motion.h2>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.22 }}
            style={{ marginBottom: 24 }}
          >
            <div style={{ width: 200, height: 1, background: "linear-gradient(90deg, var(--brass), transparent)" }} />
          </motion.div>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="t-body"
            style={{ marginBottom: 20, lineHeight: 1.85 }}
          >
            Sinh viên A tốt nghiệp loại xuất sắc, CV thiết kế chuyên nghiệp, sở hữu nền tảng lý thuyết vững chắc và nắm rõ các mô hình quản trị kinh điển. Hồ sơ bề ngoài đạt điểm tối đa.
          </motion.p>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="t-body"
            style={{ marginBottom: 28, lineHeight: 1.85 }}
          >
            Tuy nhiên, trong buổi phỏng vấn, khi đối mặt với một case study thực tiễn, A phân tích đúng sách vở nhưng không thể thích ứng với những dữ kiện thay đổi liên tục. A tối ưu tốt CV, giỏi thi cử, nhưng thiếu tư duy thực chiến.
          </motion.p>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.55 }}
            style={{
              borderLeft: "2px solid rgba(184,136,42,0.4)",
              paddingLeft: 20,
            }}
          >
            <p className="t-quote" style={{ fontSize: "1rem" }}>
              "Hình thức hoàn hảo — nhưng nội dung thực chất lại rập khuôn, thiếu linh hoạt."
            </p>
          </motion.div>
        </div>

        {/* Right — CV card */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotateY: -5 }}
          animate={isActive ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="scene-card card-corners"
          style={{ perspective: 1000 }}
        >
          {/* Wax seal style badge */}
          <div
            style={{
              position: "absolute",
              top: -14,
              right: 28,
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, rgba(184,136,42,0.9), rgba(120,90,20,1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(245,237,220,0.9)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2), inset 0 1px 3px rgba(255,255,255,0.2)",
            }}
            aria-hidden="true"
          >
            A
          </div>

          {/* CV Header */}
          <div style={{ marginBottom: 24 }}>
            <p className="t-scene-label" style={{ marginBottom: 8 }}>✦ Curriculum Vitae</p>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: 4,
            }}>
              Nguyễn Văn A
            </h3>
            <p className="t-body" style={{ color: "var(--ink-ghost)", fontSize: "0.85rem" }}>
              Cử nhân Kinh tế Quốc tế · Xuất Sắc
            </p>
          </div>

          <div style={{ height: 1, background: "var(--border-warm)", marginBottom: 20 }} />

          {/* CV Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CV_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 12 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 12, alignItems: "start" }}
              >
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 8,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--brass)",
                  paddingTop: 2,
                }}>
                  {item.label}
                </span>
                <span className="t-body" style={{ fontSize: "0.9rem", color: "var(--ink-light)" }}>
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          <div style={{ height: 1, background: "var(--border-warm)", margin: "20px 0" }} />

          {/* Result badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "rgba(139, 38, 53, 0.8)",
            }} />
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--crimson)",
            }}>
              Không Được Nhận
            </span>
          </div>
        </motion.div>
      </div>

      {/* Handwritten annotation */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2 }}
        className="annotation"
        style={{ position: "absolute", top: 90, left: 80, zIndex: 5 }}
        aria-hidden="true"
      >
        Hình thức ≠ Bản chất
      </motion.span>

      {/* Connecting arrows */}
      <div aria-hidden="true" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", zIndex: 5, opacity: 0.4 }}>
        <div style={{ width: 28, height: 1, background: "var(--brass)" }} />
        <div style={{ width: 7, height: 7, borderRight: "1.5px solid var(--brass)", borderTop: "1.5px solid var(--brass)", transform: "rotate(45deg)", marginLeft: -2 }} />
      </div>
    </section>
  );
}
