"use client";
import { motion } from "framer-motion";

const VP = { once: true, margin: "-80px" };

const AI_TOOLS = [
  {
    roman: "I",
    tool: "ChatGPT",
    purpose: "Hỗ trợ xây dựng ý tưởng, nội dung triết học và kịch bản thuyết trình",
  },
  {
    roman: "II",
    tool: "Claude / Cursor",
    purpose: "Hỗ trợ viết code giao diện website",
  },
  {
    roman: "III",
    tool: "CapCut AI",
    purpose: "Hỗ trợ phụ đề hoặc giọng đọc nếu có video minh họa",
  },
  {
    roman: "IV",
    tool: "Canva / Figma AI",
    purpose: "Hỗ trợ ý tưởng hình ảnh và bố cục thiết kế",
  },
];

export function AITransparencySection({ revealed }: { revealed: boolean }) {
  if (!revealed) return null;

  return (
    <motion.section
      id="ai-transparency"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section section-border-top"
      style={{ background: "var(--bg)" }}
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
          <span className="step-badge" aria-label="Volume VII">VII</span>
          <span className="vol-label">Volume VII — Minh Bạch Sử Dụng AI</span>
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
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "var(--fg)",
                marginBottom: 16,
              }}
            >
              AI được sử dụng như thế nào?
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
                lineHeight: 1.85,
                marginBottom: 32,
              }}
            >
              Chúng tôi công khai các công cụ AI đã được sử dụng trong quá
              trình tạo ra dự án này.
            </motion.p>

            {/* Note box — classical left-bar style */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, delay: 0.36 }}
              style={{
                padding: "20px 24px",
                background: "rgba(201,169,98,0.05)",
                border: "1px solid rgba(201,169,98,0.2)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 8,
                }}
              >
                ❧ Lưu Ý
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--muted-fg)",
                  lineHeight: 1.75,
                }}
              >
                AI chỉ được sử dụng như công cụ hỗ trợ sáng tạo. Nhóm vẫn
                chịu trách nhiệm kiểm chứng, chỉnh sửa và trình bày nội dung
                cuối cùng.
              </p>
            </motion.div>
          </div>

          {/* Right: Classical ledger table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.75, delay: 0.28 }}
          >
            {/* Table header */}
            <div
              className="classical-table-header"
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 16,
                borderRadius: "4px 4px 0 0",
              }}
            >
              <div className="vol-label" style={{ color: "var(--muted-fg)" }}>
                Công Cụ
              </div>
              <div className="vol-label" style={{ color: "var(--muted-fg)" }}>
                Mục Đích
              </div>
            </div>

            {/* Table rows */}
            <div className="classical-table">
              {AI_TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.tool}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: 0.42 + i * 0.09 }}
                  className="classical-table-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: 16,
                    padding: "16px 20px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Tool name */}
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 8,
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        color: "var(--accent)",
                        marginBottom: 4,
                      }}
                    >
                      {tool.roman}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "var(--fg)",
                        lineHeight: 1.4,
                      }}
                    >
                      {tool.tool}
                    </div>
                  </div>

                  {/* Purpose */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "var(--muted-fg)",
                      lineHeight: 1.65,
                    }}
                  >
                    {tool.purpose}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #ai-transparency .section-container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
