"use client";
import { motion } from "framer-motion";

const VP = { once: true, margin: "-80px" };

const INSIGHTS = [
  {
    roman: "I",
    title: "AI Tạo CV",
    desc: "AI có thể tạo CV đẹp trong 30 giây — nhưng không thể tạo ra năng lực thật cho bạn.",
  },
  {
    roman: "II",
    title: "Personal Branding",
    desc: "Mạng xã hội giúp xây dựng hình ảnh, nhưng hình ảnh không thay thế được kỹ năng.",
  },
  {
    roman: "III",
    title: "Tư Duy Biện Chứng",
    desc: "Nhìn xa hơn vẻ bề ngoài để đánh giá đúng bản chất con người và sự vật.",
  },
];

export function RealitySection({ revealed }: { revealed: boolean }) {
  if (!revealed) return null;

  return (
    <motion.section
      id="reality"
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
          <span className="step-badge" aria-label="Volume VI">VI</span>
          <span className="vol-label">Volume VI — Liên Hệ Thực Tế Hiện Nay</span>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
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
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Trong thời đại{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                AI & mạng xã hội
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.7, delay: 0.22 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--muted-fg)",
                lineHeight: 1.88,
                marginBottom: 22,
              }}
            >
              Con người càng dễ tạo ra một hình ảnh đẹp về bản thân: CV đẹp
              hơn, portfolio chuyên nghiệp hơn, bài đăng cá nhân được trau
              chuốt hơn. Nhưng điều đó cũng khiến việc đánh giá con người dễ
              bị lệch nếu chỉ nhìn vào vẻ ngoài.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.7, delay: 0.34 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--muted-fg)",
                lineHeight: 1.88,
                marginBottom: 36,
              }}
            >
              Vì vậy,{" "}
              <em style={{ color: "var(--fg)", fontStyle: "italic" }}>
                tư duy biện chứng
              </em>{" "}
              giúp chúng ta nhìn nhận sự vật toàn diện hơn, từ hiện tượng đi
              sâu vào bản chất.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, delay: 0.46 }}
              style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
            >
              {["AI Tạo Nội Dung", "Portfolio Ảo", "Personal Branding", "Tư Duy Phản Biện"].map(
                (tag) => (
                  <span key={tag} className="tag-brass">{tag}</span>
                )
              )}
            </motion.div>
          </div>

          {/* Right: insight ledger cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.75, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {INSIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: 0.42 + i * 0.12 }}
                className="card-ornate"
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                {/* Roman numeral badge */}
                <span className="step-badge" aria-hidden="true">{item.roman}</span>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.1rem",
                      fontWeight: 400,
                      color: "var(--accent)",
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "var(--muted-fg)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #reality .section-container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
