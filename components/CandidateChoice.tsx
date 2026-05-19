"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Choice = "A" | "B" | null;

interface CandidateChoiceProps {
  onReveal: (choice: Choice) => void;
  revealed: boolean;
}

const CANDIDATE_A_TRAITS = [
  { roman: "I",   text: "Tốt nghiệp loại Giỏi" },
  { roman: "II",  text: "CV thiết kế chuyên nghiệp" },
  { roman: "III", text: "Keyword: Proactive, Leadership, Strategic Mindset" },
  { roman: "IV",  text: "Tự tin khi giới thiệu bản thân" },
];

const CANDIDATE_B_TRAITS = [
  { roman: "I",   text: "Tốt nghiệp loại Khá" },
  { roman: "II",  text: "CV trình bày đơn giản" },
  { roman: "III", text: "Có kinh nghiệm xử lý tình huống thực tế" },
  { roman: "IV",  text: "Bình tĩnh khi gặp vấn đề" },
];

const VP = { once: true, margin: "-80px" };

function CandidateCard({
  tagline,
  traits,
  type,
  choice,
  onChoose,
  revealed,
}: {
  tagline: string;
  traits: { roman: string; text: string }[];
  type: "A" | "B";
  choice: Choice;
  onChoose: () => void;
  revealed: boolean;
}) {
  const isSelected = choice === type;
  const isDimmed   = choice !== null && choice !== type;
  const isBrass    = type === "A";

  return (
    <motion.div
      animate={{
        opacity: isDimmed ? 0.3 : 1,
        scale: isDimmed ? 0.97 : isSelected ? 1.01 : 1,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`candidate-card${isSelected ? (isBrass ? " selected-brass" : " selected-crimson") : ""}${isDimmed ? " dimmed" : ""}`}
      onClick={revealed ? undefined : onChoose}
      style={{ cursor: revealed ? "default" : "pointer" }}
    >
      {/* Selected seal badge */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="wax-seal"
            aria-label="Đã chọn"
          >
            ✓
          </motion.div>
        )}
      </AnimatePresence>

      {/* Volume label */}
      <div
        className="vol-label"
        style={{ marginBottom: 12 }}
      >
        {isBrass ? "Ứng Viên · Alpha" : "Ứng Viên · Beta"}
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.9rem",
          fontWeight: 400,
          color: "var(--fg)",
          marginBottom: 8,
          lineHeight: 1.1,
        }}
      >
        Sinh Viên{" "}
        <em
          style={{
            color: isBrass ? "var(--accent)" : "#C05060",
            fontStyle: "italic",
          }}
        >
          {type}
        </em>
      </h3>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          color: "var(--muted-fg)",
          lineHeight: 1.6,
          marginBottom: 24,
          fontStyle: "italic",
        }}
      >
        {tagline}
      </p>

      {/* Divider */}
      <div
        aria-hidden="true"
        className="ornate-divider on-alt"
        style={{ marginBottom: 24, width: "100%" }}
      />

      {/* Traits list with Roman numerals */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
        {traits.map((t) => (
          <div
            key={t.roman}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 9,
                fontWeight: 500,
                color: "var(--accent)",
                letterSpacing: "0.08em",
                minWidth: 18,
                paddingTop: 3,
                flexShrink: 0,
              }}
            >
              {t.roman}.
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--muted-fg)",
                lineHeight: 1.5,
              }}
            >
              {t.text}
            </span>
          </div>
        ))}
      </div>

      {/* Action button */}
      {!revealed && (
        <button
          onClick={(e) => { e.stopPropagation(); onChoose(); }}
          className={isSelected ? "btn-primary" : "btn-secondary"}
          style={{ width: "100%", justifyContent: "center" }}
          aria-pressed={isSelected}
        >
          {isSelected ? `✓ Đã Chọn Sinh Viên ${type}` : `Chọn Sinh Viên ${type}`}
        </button>
      )}
    </motion.div>
  );
}

export function CandidateChoice({ onReveal, revealed }: CandidateChoiceProps) {
  const [choice, setChoice] = useState<Choice>(null);

  const handleChoose = (c: "A" | "B") => {
    if (revealed) return;
    setChoice(c);
  };

  const handleReveal = () => {
    if (!choice) return;
    onReveal(choice);
  };

  return (
    <section
      id="choose"
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
          <span className="step-badge" aria-label="Volume II">II</span>
          <span className="vol-label">Volume II — Lựa Chọn Của Bạn</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            marginBottom: 12,
            color: "var(--fg)",
          }}
        >
          Bạn sẽ tuyển ai?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            color: "var(--muted-fg)",
            marginBottom: 56,
            maxWidth: 500,
            lineHeight: 1.8,
          }}
        >
          Dựa trên thông tin hồ sơ bên dưới, hãy đưa ra lựa chọn trước khi xem kết quả.
        </motion.p>

        {/* Candidate Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 52,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            <CandidateCard
              tagline="CV nổi bật, thành tích đẹp, nhiều từ khóa ấn tượng"
              traits={CANDIDATE_A_TRAITS}
              type="A"
              choice={choice}
              onChoose={() => handleChoose("A")}
              revealed={revealed}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.65, delay: 0.38 }}
          >
            <CandidateCard
              tagline="CV đơn giản, ít phô trương, tập trung vào năng lực thực tế"
              traits={CANDIDATE_B_TRAITS}
              type="B"
              choice={choice}
              onChoose={() => handleChoose("B")}
              revealed={revealed}
            />
          </motion.div>
        </div>

        {/* Reveal button */}
        <AnimatePresence>
          {choice && !revealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                onClick={handleReveal}
                className="btn-primary"
                style={{ fontSize: 11 }}
                aria-label="Xem kết quả thực tế"
              >
                Xem Kết Quả Thực Tế
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {!choice && !revealed && (
          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--border)",
            }}
            aria-live="polite"
          >
            ↑ Hãy chọn một ứng viên để tiếp tục
          </p>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #choose .section-container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
