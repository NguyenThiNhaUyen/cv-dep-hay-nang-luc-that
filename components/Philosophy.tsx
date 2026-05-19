"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { diagnostics } from "@/data/content";
import { cn } from "@/lib/utils";

export function Philosophy() {
  const [activeId, setActiveId] = useState(diagnostics[0].id);
  const active = diagnostics.find((item) => item.id === activeId) ?? diagnostics[0];

  return (
    <section id="diagnostics" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="hud-label text-cyan">SYSTEM DIAGNOSTICS</p>
            <h2 className="display-title mt-3 text-5xl leading-none md:text-7xl">
              DIALECTIC CORE
            </h2>
          </div>
          <p className="max-w-xl leading-8 text-white/62">
            Bốn cặp phạm trù không còn là thẻ ghi nhớ. Chúng là bốn module
            chẩn đoán cách hệ thống đọc con người: nhìn bề mặt, quét nội dung,
            truy nguyên nhân và kiểm chứng hiện thực.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-3">
            {diagnostics.map((item) => {
              const selected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "group border p-5 text-left transition hover:-translate-y-1",
                    selected
                      ? "border-cyan bg-cyan/10 shadow-neon"
                      : "border-white/12 bg-white/5 hover:border-magenta",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-5xl leading-none text-white/20 group-hover:text-magenta/60">
                      {item.index}
                    </span>
                    <span
                      className={cn(
                        "hud-label",
                        selected ? "text-cyan" : "text-white/46",
                      )}
                    >
                      {selected ? "ACTIVE" : "IDLE"}
                    </span>
                  </div>
                  <h3 className="mt-4 font-monoish text-2xl font-black uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/56">
                    {item.command}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="os-shell scanline min-h-[620px] p-5 md:p-7">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, x: 36, filter: "blur(12px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -28, filter: "blur(10px)" }}
                transition={{ duration: 0.35 }}
              >
                <p className="hud-label text-lime">{active.command}</p>
                <h3 className="glitch mt-4 font-display text-5xl leading-none md:text-7xl">
                  {active.glitch}
                </h3>
                <div className="mt-8 grid gap-4">
                  <DiagnosticLine label="Định nghĩa" text={active.definition} />
                  <DiagnosticLine label="Ứng viên A" text={active.caseA} />
                  <DiagnosticLine label="Ứng viên B" text={active.caseB} />
                </div>
                <div className="mt-8 border border-lime/40 bg-lime/10 p-5">
                  <p className="hud-label text-lime">OUTPUT</p>
                  <p className="mt-3 text-lg leading-8 text-white/78">
                    {active.output}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagnosticLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="border border-white/12 bg-white/5 p-4">
      <p className="hud-label text-magenta">{label}</p>
      <p className="mt-2 leading-7 text-white/72">{text}</p>
    </div>
  );
}
