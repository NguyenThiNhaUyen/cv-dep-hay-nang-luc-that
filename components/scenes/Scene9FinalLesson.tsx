"use client";
import { motion } from "framer-motion";

interface Scene9FinalLessonProps {
  isActive: boolean;
  onRestart: () => void;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const LESSONS = [
  {
    num: "I",
    title: "Nhìn xa hơn hiện tượng",
    desc: "Đừng để CV, bằng cấp hay thương hiệu trường che khuất năng lực thực chất của ứng viên.",
  },
  {
    num: "II",
    title: "Hiểu đúng nguyên nhân",
    desc: "Thành công không đến từ may mắn mà từ quá trình đầu tư thực chất, học đúng cách.",
  },
  {
    num: "III",
    title: "Chuyển hóa khả năng",
    desc: "Tiềm năng chỉ có giá trị khi được hiện thực hóa qua thực tiễn và trải nghiệm cụ thể.",
  },
];

export function Scene9FinalLesson({ isActive, onRestart }: Scene9FinalLessonProps) {
  return (
    <section className="scene scene-dark" aria-label="Scene 9: Kết luận">
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(184,136,42,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Decorative rings */}
      {[1.0, 0.72, 0.44].map((scale, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${scale * 82}vmin`,
            height: `${scale * 82}vmin`,
            borderRadius: "50%",
            border: "1px solid rgba(184,136,42,0.06)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}

      <div className="scene-inner" style={{ zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left — final message */}
          <div>
            <motion.div
              variants={FI}
              initial="hidden"
              animate={isActive ? "show" : "hidden"}
              transition={{ duration: 0.55 }}
              style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}
            >
              <span aria-hidden="true" style={{ display: "block", width: 32, height: 1, background: "rgba(184,136,42,0.4)" }} />
              <span className="t-scene-label">Kết Luận · Behind The CV</span>
            </motion.div>

            <motion.h2
              variants={FI}
              initial="hidden"
              animate={isActive ? "show" : "hidden"}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="t-display-light"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", marginBottom: 18 }}
            >
              Năng lực thật{" "}
              <em style={{ color: "var(--brass)", fontStyle: "italic" }}>
                quan trọng hơn
              </em>
              {" "}ngoại hình.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isActive ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{
                height: 1,
                width: 200,
                background: "linear-gradient(90deg, rgba(184,136,42,0.5), transparent)",
                marginBottom: 24,
              }}
            />

            <motion.p
              variants={FI}
              initial="hidden"
              animate={isActive ? "show" : "hidden"}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="t-body-dark"
              style={{ marginBottom: 32, lineHeight: 1.85 }}
            >
              Phép biện chứng duy vật không chỉ là lý thuyết triết học —
              đó là cách nhìn thế giới toàn diện hơn, sâu sắc hơn, và
              trung thực hơn với bản chất sự vật.
            </motion.p>

            {/* Reference */}
            <motion.div
              variants={FI}
              initial="hidden"
              animate={isActive ? "show" : "hidden"}
              transition={{ duration: 0.65, delay: 0.52 }}
              style={{
                padding: "18px 22px",
                background: "rgba(184,136,42,0.06)",
                border: "1px solid rgba(184,136,42,0.15)",
                borderRadius: 3,
                marginBottom: 32,
              }}
            >
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: 8,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(184,136,42,0.55)",
                marginBottom: 8,
              }}>
                ❧ Nguồn Tham Khảo
              </p>
              <p className="t-body-dark" style={{ fontSize: "0.85rem", fontStyle: "italic" }}>
                Giáo trình Triết học Mác–Lênin, Chương 2: Phép biện chứng duy vật —
                Các cặp phạm trù cơ bản. Bộ Giáo dục & Đào tạo, 2021.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={FI}
              initial="hidden"
              animate={isActive ? "show" : "hidden"}
              transition={{ duration: 0.6, delay: 0.68 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <button
                className="btn-brass"
                onClick={onRestart}
                aria-label="Xem lại từ đầu"
              >
                ↺ Xem Lại Từ Đầu
              </button>
              <button
                className="btn-outline"
                style={{ borderColor: "rgba(184,136,42,0.5)", color: "rgba(184,136,42,0.8)" }}
                onClick={() => window.print?.()}
                aria-label="In bài"
              >
                ↗ Chia Sẻ
              </button>
            </motion.div>
          </div>

          {/* Right — three lessons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {LESSONS.map((lesson, i) => (
              <motion.div
                key={lesson.num}
                initial={{ opacity: 0, x: 24 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                transition={{ delay: 0.3 + i * 0.18 }}
                className="scene-card-dark"
                style={{ display: "flex", gap: 18, alignItems: "flex-start" }}
              >
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(184,136,42,0.12)",
                  border: "1px solid rgba(184,136,42,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  letterSpacing: "0.08em",
                  color: "var(--brass)",
                  flexShrink: 0,
                }}>
                  {lesson.num}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: "rgba(245,237,220,0.9)",
                    marginBottom: 6,
                  }}>
                    {lesson.title}
                  </h3>
                  <p className="t-body-dark" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {lesson.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Footer seal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
              style={{
                textAlign: "center",
                paddingTop: 12,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, rgba(184,136,42,0.4), rgba(120,90,20,0.6))",
                  border: "1px solid rgba(184,136,42,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(245,237,220,0.6)",
                  fontSize: 18,
                }}
                  aria-hidden="true"
                >
                  ✦
                </div>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 8,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(184,136,42,0.35)",
                }}>
                  Triết Học Mác–Lênin
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: 52,
            paddingTop: 24,
            borderTop: "1px solid rgba(184,136,42,0.12)",
            textAlign: "center",
          }}
        >
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: 8,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(184,136,42,0.25)",
          }}>
            Behind The CV · Bài Thuyết Trình Môn Triết Học Mác–Lênin · Chương II · Phép Biện Chứng Duy Vật
          </p>
        </motion.div>
      </div>
    </section>
  );
}
