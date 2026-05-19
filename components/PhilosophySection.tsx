"use client";
import { motion } from "framer-motion";

const VP = { once: true, margin: "-80px" };

const CARDS = [
  {
    roman: "I",
    title: "Hiện Tượng",
    accentColor: "var(--accent)",
    accentBorder: "rgba(201,169,98,0.22)",
    accentBg: "rgba(201,169,98,0.05)",
    content:
      "Hiện tượng là những biểu hiện bên ngoài mà con người có thể quan sát được trực tiếp. Trong tình huống này, hiện tượng là CV đẹp, cách trình bày chuyên nghiệp, những từ khóa ấn tượng và sự tự tin ban đầu của sinh viên A.",
    example: "CV · Từ Khóa · Phong Cách Trình Bày",
  },
  {
    roman: "II",
    title: "Bản Chất",
    accentColor: "#A0836A",
    accentBorder: "rgba(160,131,106,0.22)",
    accentBg: "rgba(160,131,106,0.05)",
    content:
      "Bản chất là những yếu tố bên trong, ổn định hơn, quyết định năng lực thật của con người. Ở đây, bản chất là khả năng tư duy, giải quyết vấn đề, thích ứng với tình huống và tạo ra giá trị thực tế.",
    example: "Tư Duy · Giải Quyết Vấn Đề · Năng Lực Thực",
  },
  {
    roman: "III",
    title: "Quan Hệ Biện Chứng",
    accentColor: "var(--muted-fg)",
    accentBorder: "rgba(156,139,122,0.22)",
    accentBg: "rgba(156,139,122,0.05)",
    content:
      "Hiện tượng có thể phản ánh bản chất, nhưng không phản ánh đầy đủ và đôi khi còn che giấu bản chất. Vì vậy, muốn nhận thức đúng sự vật, con người không nên dừng lại ở biểu hiện bên ngoài mà cần phân tích sâu hơn.",
    example: "Nhận Thức Đúng Đắn · Phân Tích Toàn Diện",
  },
];

export function PhilosophySection({ revealed }: { revealed: boolean }) {
  if (!revealed) return null;

  return (
    <motion.section
      id="philosophy"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section section-bg-panel"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="section-container">
        {/* Volume label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 44 }}
        >
          <span className="step-badge" aria-label="Volume IV">IV</span>
          <span className="vol-label">Volume IV — Liên Hệ Triết Học</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.75, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            color: "var(--fg)",
            marginBottom: 10,
          }}
        >
          Cặp phạm trù{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
            Bản Chất – Hiện Tượng
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.65, delay: 0.22 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            color: "var(--muted-fg)",
            marginBottom: 52,
            maxWidth: 540,
            lineHeight: 1.85,
          }}
        >
          Phép biện chứng duy vật chỉ ra rằng mọi sự vật đều có bản chất và
          hiện tượng — hai mặt thống nhất nhưng không đồng nhất.
        </motion.p>

        {/* Three classical cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.65, delay: 0.3 + i * 0.14 }}
              className="card-ornate"
              style={{
                padding: 32,
                background: card.accentBg,
                borderColor: card.accentBorder,
              }}
            >
              {/* Roman numeral header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    fontWeight: 500,
                    color: card.accentColor,
                    letterSpacing: "0.08em",
                    border: `1px solid ${card.accentBorder}`,
                    borderRadius: 2,
                    padding: "3px 8px",
                  }}
                >
                  {card.roman}
                </span>
                <div
                  style={{
                    height: 1,
                    flex: 1,
                    background: card.accentBorder,
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: card.accentColor,
                  marginBottom: 14,
                }}
              >
                {card.title}
              </h3>

              {/* Content */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.98rem",
                  color: "var(--muted-fg)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                {card.content}
              </p>

              {/* Example tag */}
              <span
                className="tag"
                style={{
                  color: card.accentColor,
                  borderColor: card.accentBorder,
                  background: "transparent",
                }}
              >
                {card.example}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #philosophy .section-container > div[style*="repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #philosophy .section-container > div[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
