"use client";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { id: 1, roman: "I",   label: "Nhìn CV" },
  { id: 2, roman: "II",  label: "Chọn" },
  { id: 3, roman: "III", label: "Kết Quả" },
  { id: 4, roman: "IV",  label: "Phân Tích" },
];

interface ProgressBarProps {
  currentStep: number;
  visible: boolean;
}

export function ProgressBar({ currentStep, visible }: ProgressBarProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -44 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -44 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: "rgba(28,23,20,0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #4A3F35",
            padding: "0 32px",
          }}
          role="navigation"
          aria-label="Tiến độ trải nghiệm"
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo — Cinzel */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: "var(--accent)" }}>Behind</span>
              <span style={{ color: "var(--border)", fontSize: 9 }}>✶</span>
              <span style={{ color: "var(--muted-fg)" }}>The CV</span>
            </div>

            {/* Steps */}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {STEPS.map((step, i) => {
                const isDone   = currentStep > step.id;
                const isActive = currentStep === step.id;

                return (
                  <div key={step.id} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "5px 14px",
                        borderRadius: 2,
                        background: isActive
                          ? "rgba(201,169,98,0.12)"
                          : isDone
                          ? "rgba(201,169,98,0.06)"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(201,169,98,0.4)"
                          : isDone
                          ? "1px solid rgba(201,169,98,0.18)"
                          : "1px solid transparent",
                        transition: "all 0.35s ease-out",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 9,
                          fontWeight: 500,
                          letterSpacing: "0.12em",
                          color: isActive
                            ? "var(--accent)"
                            : isDone
                            ? "rgba(201,169,98,0.55)"
                            : "var(--border)",
                          transition: "color 0.3s ease-out",
                        }}
                      >
                        {step.roman}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 9,
                          fontWeight: 400,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: isActive
                            ? "var(--accent)"
                            : isDone
                            ? "rgba(201,169,98,0.5)"
                            : "var(--muted-fg)",
                          whiteSpace: "nowrap",
                          transition: "color 0.3s ease-out",
                        }}
                      >
                        {step.label}
                      </span>
                    </div>

                    {i < STEPS.length - 1 && (
                      <div
                        style={{
                          width: 16,
                          height: 1,
                          background: isDone ? "rgba(201,169,98,0.3)" : "var(--border)",
                          transition: "background 0.3s ease-out",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: fraction */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 9,
                color: "var(--muted-fg)",
                letterSpacing: "0.15em",
              }}
            >
              {currentStep}&thinsp;/&thinsp;{STEPS.length}
            </div>
          </div>

          {/* Brass progress line */}
          <div
            style={{
              height: 2,
              background: "var(--muted)",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <motion.div
              animate={{ width: `${(currentStep / STEPS.length) * 100}%` }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              style={{
                height: "100%",
                background: "var(--brass-gradient)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
