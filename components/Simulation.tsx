"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { candidates } from "@/data/content";
import { cn } from "@/lib/utils";

type Decision = "reject" | "interview";

export function Simulation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [decision, setDecision] = useState<Decision | null>(null);
  const [dragHint, setDragHint] = useState("Kéo thẻ hoặc bấm quyết định");

  const candidate = candidates[activeIndex];
  const feedback = useMemo(() => {
    if (!candidate || !decision) return null;
    return decision === "interview"
      ? candidate.interviewFeedback
      : candidate.rejectFeedback;
  }, [candidate, decision]);

  const decide = (next: Decision) => {
    if (!candidate) return;
    setDecision(next);
  };

  const next = () => {
    setDecision(null);
    setDragHint("Kéo thẻ hoặc bấm quyết định");
    setActiveIndex((current) => current + 1);
  };

  const restart = () => {
    setActiveIndex(0);
    setDecision(null);
  };

  return (
    <section id="simulation" className="relative px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="hud-label text-magenta">RECRUITER DESK / DRAG MODE</p>
            <h2 className="display-title mt-3 text-5xl leading-none md:text-7xl">
              AI SCANNER
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-white/66">
            Bạn là người vận hành hệ thống. Kéo thẻ sang phải để Interview,
            kéo sang trái để Reject. Mỗi lựa chọn mở khóa “The Mirror”: phản
            hồi triết học về cách hệ thống đọc hiện tượng, bản chất, nội dung
            và thực tiễn.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="os-shell min-h-[580px] p-4 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="hud-label text-cyan">QUEUE: 02 FILES</span>
              <span className="hud-label">{dragHint}</span>
            </div>

            <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden border border-white/10 bg-black/20">
              <AnimatePresence mode="wait">
                {candidate && !decision ? (
                  <motion.article
                    key={candidate.id}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.45}
                    onDrag={(_, info) => {
                      if (info.offset.x > 80) setDragHint("INTERVIEW?");
                      else if (info.offset.x < -80) setDragHint("REJECT?");
                      else setDragHint("Đang quét...");
                    }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 120) decide("interview");
                      else if (info.offset.x < -120) decide("reject");
                      else setDragHint("Kéo mạnh hơn để quyết định");
                    }}
                    initial={{ opacity: 0, scale: 0.92, rotateY: -18 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.88 }}
                    whileHover={{ rotateX: 4, rotateY: -4, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="scanline w-[min(92vw,430px)] cursor-grab border border-cyan/40 bg-white/10 p-5 shadow-neon backdrop-blur-2xl active:cursor-grabbing"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="hud-label">{candidate.code}</p>
                        <h3 className="mt-2 font-display text-5xl leading-none">
                          {candidate.avatar}
                        </h3>
                      </div>
                      <div className="border border-white/18 px-3 py-2 text-right">
                        <p className="hud-label">SCAN SCORE</p>
                        <p className="font-monoish text-3xl font-black text-lime">
                          {candidate.scanScore}
                        </p>
                      </div>
                    </div>
                    <h4 className="mt-6 font-monoish text-3xl font-black uppercase">
                      {candidate.name}
                    </h4>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/50">
                      {candidate.degree} / {candidate.type}
                    </p>
                    <div className="mt-6 space-y-3">
                      {candidate.cvSignals.map((signal) => (
                        <p key={signal} className="border-l border-cyan/50 pl-3 leading-7 text-white/72">
                          {signal}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 border border-magenta/40 bg-magenta/10 p-4">
                      <p className="hud-label text-magenta">HIDDEN REALITY</p>
                      <p className="mt-2 leading-7 text-white/76">
                        {candidate.hiddenReality}
                      </p>
                    </div>
                  </motion.article>
                ) : null}
              </AnimatePresence>

              {!candidate ? (
                <div className="p-6 text-center">
                  <p className="hud-label text-lime">QUEUE COMPLETE</p>
                  <h3 className="glitch mt-3 font-display text-5xl leading-none">
                    SCAN FINISHED
                  </h3>
                  <p className="mx-auto mt-5 max-w-xl leading-8 text-white/66">
                    Hệ thống không tìm “người có CV đẹp nhất”. Hệ thống tìm
                    quan hệ giữa hình thức, nội dung, nguyên nhân và năng lực
                    được hiện thực hóa.
                  </p>
                  <button
                    type="button"
                    onClick={restart}
                    className="mt-7 border border-white/20 bg-white px-6 py-4 font-monoish text-sm font-black uppercase tracking-[0.2em] text-void transition hover:bg-lime"
                  >
                    Reboot Simulation
                  </button>
                </div>
              ) : null}
            </div>

            {candidate && !decision ? (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <DecisionButton onClick={() => decide("reject")} variant="ghost">
                  Reject
                </DecisionButton>
                <DecisionButton onClick={() => decide("interview")} variant="solid">
                  Interview
                </DecisionButton>
              </div>
            ) : null}
          </div>

          <div className="os-shell scanline min-h-[580px] p-5 md:p-6">
            <p className="hud-label text-lime">THE MIRROR / PHILOSOPHY FEEDBACK</p>
            <AnimatePresence mode="wait">
              {feedback && candidate ? (
                <motion.div
                  key={`${candidate.id}-${decision}`}
                  initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-8"
                >
                  <p className="font-monoish text-sm uppercase tracking-[0.24em] text-white/42">
                    {candidate.code} / {decision}
                  </p>
                  <h3 className="glitch mt-4 font-display text-4xl leading-none text-white md:text-5xl">
                    {feedback.title}
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-white/72">
                    {feedback.text}
                  </p>
                  <div className="mt-7 border border-cyan/30 bg-cyan/10 p-4">
                    <p className="hud-label text-cyan">SYSTEM VERDICT</p>
                    <p className="mt-2 leading-7 text-white/76">
                      {candidate.verdict}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={next}
                    className="mt-7 w-full border border-white/20 bg-white px-6 py-4 font-monoish text-sm font-black uppercase tracking-[0.2em] text-void transition hover:bg-cyan"
                  >
                    {activeIndex < candidates.length - 1
                      ? "Load Next File"
                      : "Complete Scan"}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 space-y-5"
                >
                  {["ESSENCE", "FORM", "CAUSE", "REALITY"].map((label) => (
                    <div key={label} className="border border-white/12 bg-white/5 p-4">
                      <p className="hud-label">{label}_MODULE</p>
                      <div className="mt-3 h-2 overflow-hidden bg-white/8">
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                          className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan to-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionButton({
  children,
  onClick,
  variant,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant: "ghost" | "solid";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-14 border font-monoish text-sm font-black uppercase tracking-[0.22em] transition",
        variant === "solid"
          ? "border-white bg-white text-void hover:bg-cyan"
          : "border-white/25 bg-white/5 text-white hover:border-magenta hover:text-magenta",
      )}
    >
      {children}
    </button>
  );
}
