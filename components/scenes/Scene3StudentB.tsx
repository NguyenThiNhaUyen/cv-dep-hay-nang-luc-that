"use client";
import { motion } from "framer-motion";

interface Scene3StudentBProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const INTERVIEW_MOMENTS = [
  {
    q: "Câu hỏi 1",
    prompt: "Phân tích tại sao doanh số tháng 3 giảm 18%?",
    answer: "B vẽ sơ đồ phân tích nguyên nhân, đưa ra 3 giả thuyết có số liệu.",
  },
  {
    q: "Câu hỏi 2",
    prompt: "Nếu ngân sách bị cắt 40%, bạn sẽ ưu tiên gì?",
    answer: "B trả lời bằng ma trận ưu tiên ROI — rõ ràng, thực tế.",
  },
  {
    q: "Câu hỏi 3",
    prompt: "Làm sao thuyết phục một khách hàng khó tính?",
    answer: "B kể câu chuyện thực, có kết quả cụ thể từ công việc bán thời gian.",
  },
];

export function Scene3StudentB({ isActive }: Scene3StudentBProps) {
  return (
    <section className="scene scene-parchment" aria-label="Scene 3: Sinh viên B">
      {/* Background watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: -80,
          transform: "translateY(-50%)",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(14rem, 22vw, 26rem)",
          fontWeight: 600,
          color: "rgba(139,38,53,0.05)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
      >
        B
      </div>

      <div
        className="scene-inner"
        style={{
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 80,
          alignItems: "start",
          paddingTop: 32,
        }}
      >
        {/* Left — Interview moments */}
        <div>
          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}
          >
            <span className="step-badge">III</span>
            <span className="t-scene-label">Buổi Phỏng Vấn</span>
          </motion.div>

          <motion.h2
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="t-heading"
            style={{ marginBottom: 24, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
          >
            Bắt rễ từ thực tiễn,{" "}
            <em className="t-crimson">linh hoạt</em>
            <br />
            và sắc bén.
          </motion.h2>

          {/* Interview moments */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {INTERVIEW_MOMENTS.map((moment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ delay: 0.25 + i * 0.15 }}
                className="scene-card"
                style={{ padding: "20px 24px" }}
              >
                <div style={{ display: "flex", gap: 14 }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(139,38,53,0.1)",
                    border: "1px solid rgba(139,38,53,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: 8,
                    color: "var(--crimson)",
                    letterSpacing: "0.1em",
                    flexShrink: 0,
                    marginTop: 2,
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "var(--ink-light)",
                      marginBottom: 6,
                    }}>
                      {moment.prompt}
                    </p>
                    <p className="t-body" style={{ fontSize: "0.85rem", color: "var(--ink-faded)" }}>
                      → {moment.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — B's simple CV + result */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="scene-card card-corners"
            style={{ marginBottom: 20 }}
          >
            {/* Wax seal — crimson */}
            <div
              style={{
                position: "absolute",
                top: -14,
                right: 28,
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, rgba(192,64,96,0.9), rgba(139,38,53,1))",
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
              B
            </div>

            <div style={{ marginBottom: 20 }}>
              <p className="t-scene-label" style={{ marginBottom: 8 }}>✦ Curriculum Vitae</p>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "var(--ink)",
                marginBottom: 4,
              }}>
                Trần Thị B
              </h3>
              <p className="t-body" style={{ color: "var(--ink-ghost)", fontSize: "0.85rem" }}>
                Cử nhân Quản trị Kinh doanh · Khá
              </p>
            </div>

            <div style={{ height: 1, background: "var(--border-warm)", marginBottom: 16 }} />

            {[
              { label: "Trường", value: "ĐH Kinh tế TP.HCM" },
              { label: "GPA", value: "2.85 / 4.00" },
              { label: "Kỹ năng", value: "Excel cơ bản · Tiếng Anh B2" },
              { label: "Kinh nghiệm", value: "Bán hàng 1.5 năm · Mentor sinh viên" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + i * 0.07 }}
                style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 10, marginBottom: 12 }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--crimson-light)", paddingTop: 2 }}>
                  {item.label}
                </span>
                <span className="t-body" style={{ fontSize: "0.88rem", color: "var(--ink-light)" }}>
                  {item.value}
                </span>
              </motion.div>
            ))}

            <div style={{ height: 1, background: "var(--border-warm)", margin: "16px 0" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(50,150,80,0.8)" }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(40,130,60,0.9)" }}>
                Được Nhận · Offer Chính Thức
              </span>
            </div>
          </motion.div>

          {/* Philosophy teaser */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ delay: 0.9 }}
            className="philosophy-badge"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>Tư duy thực chiến &gt; Bằng cấp tĩnh</span>
          </motion.div>
        </div>
      </div>

      {/* Handwritten annotation */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.3 }}
        className="annotation"
        style={{ position: "absolute", bottom: 100, right: 100, zIndex: 5, transform: "rotate(1deg)" }}
        aria-hidden="true"
      >
        thực lực &gt; bằng cấp!
      </motion.span>

      {/* Connecting arrow */}
      <div aria-hidden="true" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", zIndex: 5, opacity: 0.4 }}>
        <div style={{ width: 28, height: 1, background: "var(--brass)" }} />
        <div style={{ width: 7, height: 7, borderRight: "1.5px solid var(--brass)", borderTop: "1.5px solid var(--brass)", transform: "rotate(45deg)", marginLeft: -2 }} />
      </div>
    </section>
  );
}
