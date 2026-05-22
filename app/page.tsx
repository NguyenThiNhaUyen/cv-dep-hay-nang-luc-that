"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scene1Intro } from "@/components/scenes/Scene1Intro";
import { Scene2StudentA } from "@/components/scenes/Scene2StudentA";
import { Scene3StudentB } from "@/components/scenes/Scene3StudentB";
import { Scene4Conflict } from "@/components/scenes/Scene4Conflict";
import { Scene5Philosophy } from "@/components/scenes/Scene5Philosophy";
import { Scene6ContentForm } from "@/components/scenes/Scene6ContentForm";
import { Scene7CauseResult } from "@/components/scenes/Scene7CauseResult";
import { Scene8EssencePhenomenon } from "@/components/scenes/Scene8EssencePhenomenon";
import { Scene9FinalLesson } from "@/components/scenes/Scene9FinalLesson";
import { AIUsageModal } from "@/components/AIUsageModal";

const TOTAL_SCENES = 9;

const SCENE_LABELS = [
  "Giới Thiệu",
  "Sinh Viên A",
  "Sinh Viên B",
  "Xung Đột",
  "Triết Học",
  "Nội Dung & Hình Thức",
  "Nguyên Nhân & Kết Quả",
  "Bản Chất & Hiện Tượng",
  "Kết Luận",
];

export default function Home() {
  const [activeScenes, setActiveScenes] = useState<boolean[]>(new Array(TOTAL_SCENES).fill(false));
  const [currentScene, setCurrentScene] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Role-playing state
  const [hasMadeChoice, setHasMadeChoice] = useState(false);
  const [choice, setChoice] = useState<"A" | "B" | null>(null);
  
  // Modal state
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Force scene 0 to be active immediately
    setActiveScenes(prev => {
      const newArr = [...prev];
      newArr[0] = true;
      return newArr;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveScenes((prev) => {
              const newArr = [...prev];
              newArr[index] = true;
              return newArr;
            });
            setCurrentScene(index);
          }
        });
      },
      { threshold: 0.3 }
    );

    sceneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [hasMadeChoice]);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChoice = (c: "A" | "B") => {
    setChoice(c);
    setHasMadeChoice(true);
    setTimeout(() => {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }, 400);
  };

  return (
    <>
      <div className="parchment-texture" aria-hidden="true" />
      <div className="paper-vignette" aria-hidden="true" />

      {/* Title bar */}
      <header className="title-bar" style={{ zIndex: 600 }}>
        <span className="title-bar-brand">Behind The CV</span>
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
      </header>

      {/* Progress line — scroll-based */}
      <div className="progress-line" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${scrollProgress}%`, transition: "width 100ms ease-out" }} />
      </div>

      <div className="canvas-wrapper">
        <div className="canvas-track" style={{ paddingTop: 54 }}>
          
          <div ref={el => { sceneRefs.current[0] = el; }} data-index={0}>
            <Scene1Intro isActive={activeScenes[0]} onNext={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })} />
          </div>
          <div ref={el => { sceneRefs.current[1] = el; }} data-index={1}>
            <Scene2StudentA isActive={activeScenes[1]} />
          </div>
          <div ref={el => { sceneRefs.current[2] = el; }} data-index={2}>
            <Scene3StudentB isActive={activeScenes[2]} />
          </div>

          {/* INTERACTIVE ROLE-PLAYING CHOICE */}
          <div style={{
            minHeight: "40vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 20px",
            background: "linear-gradient(to bottom, transparent, rgba(44,36,22,0.03), transparent)"
          }}>
            {!hasMadeChoice ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: "center", maxWidth: 600 }}
              >
                <h3 className="t-heading" style={{ marginBottom: 16 }}>Đến lượt bạn đánh giá</h3>
                <p className="t-body" style={{ marginBottom: 40 }}>
                  Với tư cách là Giám đốc Nhân sự (HR), đứng trước hai ứng viên này, bạn sẽ chọn ai cho vị trí quản lý tập sự? Hãy đưa ra quyết định để xem triết lý ẩn sau lựa chọn của bạn.
                </p>
                <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
                  <button className="btn-outline" onClick={() => handleChoice("A")} style={{ width: 220, justifyContent: "center", borderColor: "var(--brass-dark)" }}>
                    Tuyển Sinh Viên A
                  </button>
                  <button className="btn-brass" onClick={() => handleChoice("B")} style={{ width: 220, justifyContent: "center", background: "var(--crimson-light)" }}>
                    Tuyển Sinh Viên B
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center" }}
              >
                <p className="t-scene-label" style={{ fontSize: 11, marginBottom: 12 }}>
                  Bạn đã chọn Sinh Viên {choice}
                </p>
                <p className="t-quote" style={{ color: "var(--ink)" }}>
                  Quyết định của bạn có giống với kết quả thực tế?<br/>
                  Hãy tiếp tục cuộn xuống để xem phân tích triết học.
                </p>
              </motion.div>
            )}
          </div>

          {/* REVEAL REMAINING SCENES ONLY AFTER CHOICE */}
          {hasMadeChoice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div ref={el => { sceneRefs.current[3] = el; }} data-index={3}>
                <Scene4Conflict isActive={activeScenes[3]} userChoice={choice} />
              </div>
              <div ref={el => { sceneRefs.current[4] = el; }} data-index={4}>
                <Scene5Philosophy isActive={activeScenes[4]} />
              </div>
              <div ref={el => { sceneRefs.current[5] = el; }} data-index={5}>
                <Scene6ContentForm isActive={activeScenes[5]} />
              </div>
              <div ref={el => { sceneRefs.current[6] = el; }} data-index={6}>
                <Scene7CauseResult isActive={activeScenes[6]} />
              </div>
              <div ref={el => { sceneRefs.current[7] = el; }} data-index={7}>
                <Scene8EssencePhenomenon isActive={activeScenes[7]} />
              </div>
              <div ref={el => { sceneRefs.current[8] = el; }} data-index={8}>
                <Scene9FinalLesson isActive={activeScenes[8]} onRestart={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
              </div>
            </motion.div>
          )}

        </div>
      </div>
      
      {/* AI Usage Report Button */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 600 }}>
        <button 
          className="btn-outline" 
          onClick={() => setIsAIModalOpen(true)}
          style={{ padding: "8px 16px", fontSize: 9, background: "rgba(245, 237, 220, 0.9)", backdropFilter: "blur(4px)" }}
        >
          ✦ AI Usage
        </button>
      </div>

      <AIUsageModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
    </>
  );
}
