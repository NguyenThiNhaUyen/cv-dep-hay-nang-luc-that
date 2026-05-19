"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scene1Intro } from "@/components/scenes/Scene1Intro";
import { Scene2StudentA } from "@/components/scenes/Scene2StudentA";
import { Scene3StudentB } from "@/components/scenes/Scene3StudentB";
import { Scene4Conflict } from "@/components/scenes/Scene4Conflict";
import { Scene5Philosophy } from "@/components/scenes/Scene5Philosophy";
import { Scene6ContentForm } from "@/components/scenes/Scene6ContentForm";
import { Scene7CauseResult } from "@/components/scenes/Scene7CauseResult";
import { Scene8Possibility } from "@/components/scenes/Scene8Possibility";
import { Scene9FinalLesson } from "@/components/scenes/Scene9FinalLesson";

const TOTAL_SCENES = 9;

const SCENE_LABELS = [
  "Giới Thiệu",
  "Sinh Viên A",
  "Sinh Viên B",
  "Xung Đột",
  "Triết Học",
  "Nội Dung & Hình Thức",
  "Nguyên Nhân & Kết Quả",
  "Khả Năng & Hiện Thực",
  "Kết Luận",
];

// Whether a scene uses the dark background (for UI color switching)
const DARK_SCENES = new Set([4, 8]); // 0-indexed: scene 5 & 9

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const isDark = DARK_SCENES.has(currentScene);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      if (index < 0 || index >= TOTAL_SCENES) return;
      setIsAnimating(true);
      setCurrentScene(index);
      setTimeout(() => setIsAnimating(false), 900);
    },
    [isAnimating]
  );

  const goNext = useCallback(() => goTo(currentScene + 1), [currentScene, goTo]);
  const goPrev = useCallback(() => goTo(currentScene - 1), [currentScene, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  // Wheel navigation (with debounce)
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      if (wheelTimer.current) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Horizontal scroll
        if (e.deltaX > 40) goNext();
        else if (e.deltaX < -40) goPrev();
      } else {
        if (e.deltaY > 40) goNext();
        else if (e.deltaY < -40) goPrev();
      }
      wheelTimer.current = setTimeout(() => {
        wheelTimer.current = null;
      }, 1000);
    };
    window.addEventListener("wheel", handler, { passive: false });
    return () => {
      window.removeEventListener("wheel", handler);
      if (wheelTimer.current) clearTimeout(wheelTimer.current);
    };
  }, [goNext, goPrev]);

  // Touch navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) goNext();
        else goPrev();
      }
      touchStartX.current = null;
      touchStartY.current = null;
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // Hide tooltip after 4s
  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const progressPct = ((currentScene) / (TOTAL_SCENES - 1)) * 100;

  return (
    <>
      {/* ─── Texture overlays ─── */}
      <div className="parchment-texture" aria-hidden="true" />
      <div className="paper-vignette" aria-hidden="true" />

      {/* ─── Title bar ─── */}
      <header className="title-bar" style={{ zIndex: 600 }}>
        <span className="title-bar-brand">Behind The CV</span>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentScene}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.9rem",
                fontStyle: "italic",
                color: "var(--ink-faded)",
              }}
            >
              {SCENE_LABELS[currentScene]}
            </motion.span>
          </AnimatePresence>
          <span className="t-scene-num">
            {String(currentScene + 1).padStart(2, "0")} / {String(TOTAL_SCENES).padStart(2, "0")}
          </span>
        </div>
      </header>

      {/* ─── Progress line ─── */}
      <div className="progress-line" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      {/* ─── Main canvas ─── */}
      <div className="canvas-wrapper" style={{ top: 54 }}>
        {/* Horizontal connecting line (background) */}
        <div
          className="board-bg-line"
          aria-hidden="true"
          style={{
            left: 0,
            right: 0,
            top: "50%",
          }}
        />

        {/* Canvas track — slides horizontally */}
        <div
          className="canvas-track"
          style={{
            transform: `translateX(-${currentScene * 100}vw)`,
          }}
          role="region"
          aria-label="Horizontal philosophy board"
        >
          <Scene1Intro isActive={currentScene === 0} onNext={goNext} />
          <Scene2StudentA isActive={currentScene === 1} />
          <Scene3StudentB isActive={currentScene === 2} />
          <Scene4Conflict isActive={currentScene === 3} />
          <Scene5Philosophy isActive={currentScene === 4} />
          <Scene6ContentForm isActive={currentScene === 5} />
          <Scene7CauseResult isActive={currentScene === 6} />
          <Scene8Possibility isActive={currentScene === 7} />
          <Scene9FinalLesson isActive={currentScene === 8} onRestart={() => goTo(0)} />
        </div>
      </div>

      {/* ─── Left arrow ─── */}
      <button
        className="nav-arrow nav-arrow-left"
        onClick={goPrev}
        disabled={currentScene === 0}
        aria-label="Cảnh trước"
        style={{ top: "calc(50% + 27px)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ─── Right arrow ─── */}
      <button
        className="nav-arrow nav-arrow-right"
        onClick={goNext}
        disabled={currentScene === TOTAL_SCENES - 1}
        aria-label="Cảnh tiếp theo"
        style={{ top: "calc(50% + 27px)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      {/* ─── Scene dot navigation ─── */}
      <nav className="canvas-nav" aria-label="Điều hướng cảnh" style={{ bottom: 28 }}>
        {Array.from({ length: TOTAL_SCENES }, (_, i) => (
          <button
            key={i}
            className={`nav-dot${currentScene === i ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Cảnh ${i + 1}: ${SCENE_LABELS[i]}`}
            aria-current={currentScene === i ? "true" : undefined}
            title={SCENE_LABELS[i]}
          />
        ))}
      </nav>

      {/* ─── Keyboard hint tooltip ─── */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              bottom: 80,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 600,
              background: "rgba(44,36,22,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(184,136,42,0.2)",
              borderRadius: 4,
              padding: "8px 18px",
              fontFamily: "var(--font-display)",
              fontSize: 8,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(245,237,220,0.7)",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            ← → phím mũi tên · cuộn chuột · vuốt
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
