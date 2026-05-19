"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const VP = { once: true, margin: "-80px" };

const CATEGORIES = [
  {
    id: 1,
    roman: "I",
    pair: "Bản Chất – Hiện Tượng",
    sideA: { label: "Hiện Tượng", desc: "CV đẹp và cách nói ấn tượng" },
    sideB: { label: "Bản Chất",   desc: "Năng lực xử lý vấn đề thực tế" },
    content:
      "CV đẹp và cách nói ấn tượng là hiện tượng. Năng lực xử lý vấn đề mới là bản chất. A bị đánh giá sai vì quá chú trọng hình thức bên ngoài, còn B được tuyển vì thể hiện được năng lực thật.",
  },
  {
    id: 2,
    roman: "II",
    pair: "Nội Dung – Hình Thức",
    sideA: { label: "Hình Thức", desc: "Thiết kế CV, cách trình bày bản thân" },
    sideB: { label: "Nội Dung",  desc: "Năng lực, tư duy, khả năng giải quyết vấn đề" },
    content:
      "Hình thức là cách CV được thiết kế, cách ứng viên trình bày bản thân. Nội dung là năng lực, kinh nghiệm, tư duy và khả năng giải quyết vấn đề. Hình thức tốt có thể tạo ấn tượng ban đầu, nhưng nếu nội dung rỗng thì không đủ thuyết phục.",
  },
  {
    id: 3,
    roman: "III",
    pair: "Nguyên Nhân – Kết Quả",
    sideA: { label: "Nguyên Nhân", desc: "Thiếu năng lực thực tế trong phỏng vấn" },
    sideB: { label: "Kết Quả",    desc: "A bị loại · B được tuyển" },
    content:
      "Kết quả A bị loại không phải do B ăn may hay có người quen. Nguyên nhân sâu xa là A thiếu năng lực thực tế trong buổi phỏng vấn. Kết quả B được tuyển xuất phát từ việc B giải quyết được bài toán của công ty.",
  },
  {
    id: 4,
    roman: "IV",
    pair: "Khả Năng – Hiện Thực",
    sideA: { label: "Khả Năng",  desc: "Năng lực tiềm ẩn chưa được chứng minh" },
    sideB: { label: "Hiện Thực", desc: "Giải quyết bài toán thực tế trong phỏng vấn" },
    content:
      "Năng lực tiềm năng chỉ trở thành hiện thực khi được chứng minh qua hành động cụ thể. B đã biến khả năng của mình thành hiện thực trong buổi phỏng vấn, trong khi A giữ nguyên khả năng ở dạng tiềm năng mà không được thể hiện.",
  },
];

export function CategoriesSection({ revealed }: { revealed: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!revealed) return null;

  const active = CATEGORIES[activeIndex];

  return (
    <motion.section
      id="categories"
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
          <span className="step-badge" aria-label="Volume V">V</span>
          <span className="vol-label">Volume V — Ba Cặp Phạm Trù Được Vận Dụng</span>
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
            marginBottom: 12,
          }}
        >
          Triết học trong thực tiễn
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            color: "var(--muted-fg)",
            marginBottom: 48,
            maxWidth: 480,
            lineHeight: 1.85,
          }}
        >
          Mỗi cặp phạm trù giải thích một khía cạnh khác nhau của tình huống
          tuyển dụng này.
        </motion.p>

        {/* Tab navigation — classical style */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.55, delay: 0.32 }}
          role="tablist"
          aria-label="Cặp phạm trù"
          style={{ display: "flex", gap: 4, marginBottom: 28, flexWrap: "wrap" }}
        >
          {CATEGORIES.map((cat, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                onClick={() => setActiveIndex(i)}
                style={{
                  padding: "9px 20px",
                  borderRadius: 2,
                  border: `1.5px solid ${isActive ? "rgba(201,169,98,0.5)" : "var(--border)"}`,
                  background: isActive ? "rgba(201,169,98,0.1)" : "transparent",
                  color: isActive ? "var(--accent)" : "var(--muted-fg)",
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease-out",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontWeight: 600 }}>{cat.roman}</span>
                <span>{cat.pair}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active panel */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="card-ornate"
          style={{ padding: 48 }}
        >
          {/* Panel header */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "var(--accent)",
                border: "1px solid rgba(201,169,98,0.3)",
                borderRadius: 2,
                padding: "4px 12px",
              }}
            >
              {active.roman}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "var(--fg)",
              }}
            >
              {active.pair}
            </h3>
          </div>

          {/* Diagram: Side A ↔ Side B */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 48px 1fr",
              gap: 12,
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            {/* Side A */}
            <div
              style={{
                padding: "20px 24px",
                background: "rgba(201,169,98,0.05)",
                border: "1px solid rgba(201,169,98,0.2)",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 8,
                }}
              >
                {active.sideA.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  color: "var(--muted-fg)",
                  lineHeight: 1.55,
                }}
              >
                {active.sideA.desc}
              </div>
            </div>

            {/* Arrow */}
            <div
              aria-hidden="true"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                color: "var(--border)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ transform: "rotate(180deg)" }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* Side B */}
            <div
              style={{
                padding: "20px 24px",
                background: "rgba(156,139,122,0.06)",
                border: "1px solid rgba(156,139,122,0.2)",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--muted-fg)",
                  marginBottom: 8,
                }}
              >
                {active.sideB.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  color: "var(--muted-fg)",
                  lineHeight: 1.55,
                }}
              >
                {active.sideB.desc}
              </div>
            </div>
          </div>

          {/* Content */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--muted-fg)",
              lineHeight: 1.85,
              borderTop: "1px solid var(--border)",
              paddingTop: 28,
            }}
          >
            {active.content}
          </p>

          {/* Dot navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 32,
            }}
            role="group"
            aria-label="Điều hướng cặp phạm trù"
          >
            {CATEGORIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`step-dot ${activeIndex === i ? "active" : "inactive"}`}
                aria-label={`Cặp phạm trù ${CATEGORIES[i].roman}`}
                aria-pressed={activeIndex === i}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #categories .section-container > div[style*="grid-template-columns: 1fr 48px"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
