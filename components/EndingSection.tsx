"use client";
import { motion } from "framer-motion";

const VP = { once: true, margin: "-80px" };

const TAKEAWAYS = [
  { roman: "I",   text: "Nhìn xa hơn bề ngoài" },
  { roman: "II",  text: "Phân tích bản chất sâu xa" },
  { roman: "III", text: "Tư duy biện chứng toàn diện" },
];

export function EndingSection({
  revealed,
  onRestart,
}: {
  revealed: boolean;
  onRestart: () => void;
}) {
  if (!revealed) return null;

  return (
    <motion.section
      id="ending"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section section-bg-panel"
      style={{
        background: "var(--bg-alt)",
        padding: "160px 0",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Warm radial ambient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(201,169,98,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
        {/* Volume label */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <span
            aria-hidden="true"
            style={{ display: "block", width: 40, height: 1, background: "var(--border)" }}
          />
          <span className="vol-label">Kết Luận</span>
          <span
            aria-hidden="true"
            style={{ display: "block", width: 40, height: 1, background: "var(--border)" }}
          />
        </motion.div>

        {/* Big title — Cormorant */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.85, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.12,
            color: "var(--fg)",
            marginBottom: 20,
            maxWidth: 700,
            margin: "0 auto 20px",
          }}
        >
          Đừng chỉ nhìn thứ{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
            đang được hiển thị.
          </em>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.75, delay: 0.32 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            color: "var(--muted-fg)",
            lineHeight: 1.75,
            maxWidth: 520,
            margin: "0 auto 52px",
          }}
        >
          Muốn hiểu đúng một con người hay một sự vật, cần đi từ hiện tượng
          đến bản chất.
        </motion.p>

        {/* Ornate divider */}
        <div
          className="ornate-divider ornate-divider-sm on-alt"
          aria-hidden="true"
          style={{ margin: "0 auto 52px" }}
        />

        {/* Three takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, delay: 0.42 }}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginBottom: 60,
            flexWrap: "wrap",
          }}
        >
          {TAKEAWAYS.map((item) => (
            <div
              key={item.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 22px",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 2,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  minWidth: 20,
                }}
              >
                {item.roman}.
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--fg)",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Philosophical reference — ornate frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VP}
          transition={{ duration: 0.75, delay: 0.52 }}
          className="frame-ornate"
          style={{
            padding: "32px 44px",
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: 4,
            marginBottom: 56,
            maxWidth: 640,
            margin: "0 auto 56px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 9,
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--muted-fg)",
              marginBottom: 12,
            }}
          >
            ❧ Nguồn Tham Khảo
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--muted-fg)",
              lineHeight: 1.78,
              fontStyle: "italic",
            }}
          >
            Giáo trình Triết học Mác – Lênin, Chương 2: Chủ nghĩa duy vật
            biện chứng —{" "}
            <span style={{ color: "var(--accent)", fontStyle: "normal" }}>
              Phép biện chứng duy vật
            </span>
            , Các cặp phạm trù cơ bản.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={onRestart}
            className="btn-secondary"
            aria-label="Thử lại từ đầu"
          >
            ↺ Thử Lại Từ Đầu
          </button>
          <button
            className="btn-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Kết thúc trải nghiệm"
          >
            Kết Thúc Trải Nghiệm
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ delay: 0.85 }}
          style={{
            marginTop: 96,
            paddingTop: 36,
            borderTop: "1px solid var(--border)",
          }}
        >
          {/* Ornate top line */}
          <div
            className="ornate-divider ornate-divider-sm on-alt"
            aria-hidden="true"
            style={{ margin: "0 auto 28px" }}
          />

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--border)",
              lineHeight: 1.9,
            }}
          >
            Behind The CV — Bài Thuyết Trình Môn Triết Học Mác – Lênin
            <br />
            Chương II · Chủ Nghĩa Duy Vật Biện Chứng · Các Cặp Phạm Trù Cơ Bản
          </p>
        </motion.footer>
      </div>
    </motion.section>
  );
}
