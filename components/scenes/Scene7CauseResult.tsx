"use client";
import { motion } from "framer-motion";

interface Scene7CauseResultProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const CHAIN_A = [
  { label: "Nguyên nhân", items: ["Học để lấy điểm, chạy theo chứng chỉ", "Ít thực hành thực tế", "Tư duy theo lý thuyết thuần túy"] },
  { label: "Kết quả", items: ["CV đẹp, GPA cao", "Kỹ năng ứng dụng yếu", "Thất bại khi gặp bài toán thực"] },
];

const CHAIN_B = [
  { label: "Nguyên nhân", items: ["Học qua làm thực tế", "Chủ động tìm bài toán thật", "Phát triển tư duy phân tích"] },
  { label: "Kết quả", items: ["CV đơn giản hơn", "Năng lực giải quyết vấn đề cao", "Được nhận vào vị trí quan trọng"] },
];

// Phan biet nguyen co / dieu kien
const NOTE_BOXES = [
  {
    title: "Nguyên cờ ≠ Nguyên nhân",
    content: "A “an may\u201d hay \u201ccó người quen\u201d chỉ là nguyên cọ — không phải nguyên nhân thực sự khiến B được nhận.",
    color: "rgba(184,136,42,0.8)",
  },
  {
    title: "Điều kiện hỗ trợ",
    content: "Buổi phỏng vấn chỉ là điều kiện — bản thân nó không sinh ra kết quả. Nguyên nhân thực là quá trình chuẩn bị năng lực của B.",
    color: "rgba(139,38,53,0.8)",
  },
];

export function Scene7CauseResult({ isActive }: Scene7CauseResultProps) {
  return (
    <section className="scene scene-warm" aria-label="Scene 7: Nguyên nhân và Kết quả">
      {/* Subtle grid lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: `${(i + 1) * 16.66}%`,
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(44,36,22,0.04)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}

      <div
        className="scene-inner"
        style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 72, alignItems: "start", paddingTop: 20 }}
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
            <span className="step-badge">VII</span>
            <span className="t-scene-label">Cặp Phạm Trù II</span>
          </motion.div>

          <motion.h2
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="t-heading"
            style={{ marginBottom: 20 }}
          >
            <em className="t-accent">Nguyên nhân</em>
            {" "}và{" "}
            <span style={{ color: "var(--ink)" }}>Kết quả</span>
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
            style={{ marginBottom: 12, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Nguyên nhân</strong>{" "}
            là sự tác động lẫn nhau giữa các mặt, sự vật — làm xuất hiện{" "}
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>kết quả</strong>:
            những biến đổi do nguyên nhân gây ra.
          </motion.p>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.4 }}
            style={{
              background: "rgba(184,136,42,0.05)",
              border: "1px solid rgba(184,136,42,0.15)",
              borderRadius: 3,
              padding: "10px 14px",
              marginBottom: 14,
            }}
          >
            <p className="t-body" style={{ fontSize: "0.82rem", lineHeight: 1.7 }}>
              <span style={{ color: "var(--brass)" }}>Phân biệt:</span>{" "}
              <strong>Nguyên cọ</strong> = xảy ra trước kết quả nhưng không sinh ra kết quả.{" "}
              <strong>Điều kiện</strong> = hỗ trợ nguyên nhân nhưng không trực tiếp sinh ra kết quả.
            </p>
          </motion.div>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="t-body"
            style={{ marginBottom: 20, lineHeight: 1.85 }}
          >
            Thành công của B không phải "may mắn" — đó là kết quả <em>tất yếu</em>{" "}
            của một quá trình đầu tư đúng hướng, tập trung vào thực chất.
          </motion.p>

          {/* Principle box */}
          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.55 }}
            style={{
              background: "rgba(184,136,42,0.07)",
              border: "1px solid rgba(184,136,42,0.2)",
              borderRadius: 3,
              padding: "18px 20px",
            }}
          >
            <p className="t-scene-label" style={{ marginBottom: 8 }}>Nguyên Lý</p>
            <p className="t-quote" style={{ fontSize: "0.92rem" }}>
              "Gieo nhân nào, gặt quả đó" —{" "}
              <em style={{ color: "var(--brass)" }}>
                không phải ngẫu nhiên, mà là tất yếu.
              </em>
            </p>
          </motion.div>

          {/* Annotation */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2 }}
            className="annotation"
            style={{ display: "block", marginTop: 20, color: "rgba(184,136,42,0.5)" }}
            aria-hidden="true"
          >
            không có may mắn ngẫu nhiên
          </motion.span>
        </div>

        {/* Right — cause-effect chains */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 8 }}>
          {[
            { label: "Sinh viên A", chain: CHAIN_A, accent: "var(--brass)" },
            { label: "Sinh viên B", chain: CHAIN_B, accent: "var(--crimson-light)" },
          ].map((student, si) => (
            <motion.div
              key={student.label}
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.25 + si * 0.2 }}
              className="scene-card"
              style={{ padding: "22px 26px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: `${student.accent}18`,
                  border: `1px solid ${student.accent}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  fontWeight: 600,
                  color: student.accent,
                }}>
                  {student.label.slice(-1)}
                </div>
                <span className="t-scene-label" style={{ color: student.accent }}>
                  {student.label}
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 12, alignItems: "start" }}>
                {student.chain.map((block, bi) => (
                  <div key={bi} style={{ display: "contents" }}>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 8,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: bi === 0 ? "var(--ink-faded)" : student.accent,
                        marginBottom: 8,
                      }}>
                        {block.label}
                      </p>
                      {block.items.map((item, ii) => (
                        <motion.div
                          key={ii}
                          initial={{ opacity: 0 }}
                          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 0.5 + si * 0.2 + ii * 0.08 }}
                          style={{
                            padding: "6px 10px",
                            background: "rgba(44,36,22,0.04)",
                            borderRadius: 2,
                            marginBottom: 4,
                          }}
                        >
                          <span className="t-body" style={{ fontSize: "0.8rem" }}>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    {bi === 0 && (
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: 22,
                        color: student.accent,
                        fontSize: 18,
                        fontWeight: 300,
                      }}>
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Connecting arrow */}
      <div aria-hidden="true" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", zIndex: 5, opacity: 0.4 }}>
        <div style={{ width: 28, height: 1, background: "var(--brass)" }} />
        <div style={{ width: 7, height: 7, borderRight: "1.5px solid var(--brass)", borderTop: "1.5px solid var(--brass)", transform: "rotate(45deg)", marginLeft: -2 }} />
      </div>
    </section>
  );
}
