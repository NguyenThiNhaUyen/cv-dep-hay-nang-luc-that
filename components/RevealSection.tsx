"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealSectionProps {
  revealed: boolean;
  choice: "A" | "B" | null;
}

export function RevealSection({ revealed, choice }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (revealed && ref.current) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, [revealed]);

  if (!revealed) return null;

  return (
    <AnimatePresence>
      <motion.section
        id="reveal"
        ref={ref}
        key="reveal-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section section-border-top"
        style={{ background: "var(--bg)", overflow: "hidden" }}
      >
        <div className="section-container">
          {/* Volume label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 44 }}
          >
            <span className="step-badge" aria-label="Volume III">III</span>
            <span className="vol-label">Volume III — Kết Quả Phỏng Vấn</span>
          </motion.div>

          {/* Your choice chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 20px",
              borderRadius: 2,
              background: "rgba(201,169,98,0.08)",
              border: "1px solid rgba(201,169,98,0.28)",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 9,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted-fg)",
              }}
            >
              Lựa chọn của bạn:
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Sinh Viên {choice}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--fg)",
              marginBottom: 48,
              maxWidth: 680,
              lineHeight: 1.2,
            }}
          >
            Điều gì{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              thực sự xảy ra
            </em>{" "}
            trong phòng phỏng vấn?
          </motion.h2>

          {/* Result cards: A vs B */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginBottom: 52,
            }}
          >
            {/* A — Not hired */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="card-ornate"
              style={{ padding: 32 }}
            >
              <div style={{ marginBottom: 16 }}>
                <span
                  className="tag-crimson"
                  style={{ fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: "0.18em" }}
                >
                  ✗ Không Được Tuyển
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--fg)",
                  marginBottom: 12,
                }}
              >
                Sinh Viên A
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--muted-fg)",
                  lineHeight: 1.8,
                }}
              >
                Gây ấn tượng ban đầu bằng CV đẹp, nhưng khi gặp bài toán thực
                tế lại không đưa ra được hướng xử lý cụ thể. A nói nhiều về
                bản thân nhưng{" "}
                <em style={{ color: "var(--fg)" }}>thiếu khả năng giải quyết vấn đề.</em>
              </p>
            </motion.div>

            {/* B — Hired */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.62, duration: 0.6 }}
              className="card-ornate"
              style={{
                padding: 32,
                borderColor: "rgba(201,169,98,0.45)",
                background: "rgba(201,169,98,0.04)",
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <span
                  className="tag-brass"
                  style={{ fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: "0.18em" }}
                >
                  ✓ Được Tuyển Dụng
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--fg)",
                  marginBottom: 12,
                }}
              >
                Sinh Viên B
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--muted-fg)",
                  lineHeight: 1.8,
                }}
              >
                Tuy có CV đơn giản hơn, nhưng lại{" "}
                <em style={{ color: "var(--fg)" }}>
                  phân tích được tình huống, đưa ra giải pháp hợp lý
                </em>{" "}
                và chứng minh được năng lực thật qua hành động cụ thể.
              </p>
            </motion.div>
          </div>

          {/* Ornate divider */}
          <div
            className="ornate-divider ornate-divider-alt"
            aria-hidden="true"
            style={{ marginBottom: 52 }}
          />

          {/* Philosophical quote block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.8 }}
            className="frame-ornate"
            style={{
              textAlign: "center",
              padding: "48px 48px 40px",
              background: "var(--bg-alt)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              position: "relative",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 52,
                lineHeight: 1,
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(201,169,98,0.18)",
                marginBottom: 8,
              }}
            >
              "
            </div>
            <blockquote
              className="classical-quote"
              style={{ maxWidth: 580, margin: "0 auto 20px", color: "var(--fg)" }}
            >
              Hiện tượng không phải lúc nào cũng phản ánh đầy đủ bản chất.
            </blockquote>
            <cite
              style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontSize: 9,
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--muted-fg)",
                fontStyle: "normal",
              }}
            >
              — Phép Biện Chứng Duy Vật
            </cite>
          </motion.div>

          {/* Reaction note */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            style={{
              marginTop: 28,
              padding: "20px 24px",
              background: "rgba(61,51,43,0.4)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              borderLeft: "3px solid var(--accent)",
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.4rem",
                color: "var(--accent)",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ❝
            </span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 6,
                }}
              >
                Phản ứng của Sinh Viên A
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "var(--muted-fg)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                "B chắc ăn may hoặc có người quen trong công ty đó..." — A tự
                nhủ. Nhưng thực ra, A chưa nhận ra nguyên nhân thật sự nằm ở đâu.
              </p>
            </div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #reveal .section-container > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </motion.section>
    </AnimatePresence>
  );
}
