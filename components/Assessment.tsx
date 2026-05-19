"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { aiAppendix, finalSummary, quizQuestions } from "@/data/content";
import { cn } from "@/lib/utils";

export function Assessment() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const complete = Object.keys(answers).length === quizQuestions.length;
  const score = useMemo(
    () =>
      quizQuestions.reduce(
        (total, question, index) =>
          total + (answers[index] === question.answerIndex ? 1 : 0),
        0,
      ),
    [answers],
  );

  const submit = () => {
    if (!complete) return;
    setSubmitted(true);
    window.setTimeout(() => {
      document
        .getElementById("exit-protocol")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <section id="assessment" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="os-shell p-5 md:p-8">
          <div className="flex flex-col gap-4 border-b border-white/12 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="hud-label text-magenta">EXIT PROTOCOL / QUIZ</p>
              <h2 className="display-title mt-3 text-5xl leading-none md:text-7xl">
                HUMAN CHECK
              </h2>
            </div>
            <div className="border border-white/12 bg-white/5 p-4">
              <p className="hud-label">CURRENT SCORE</p>
              <p className="font-monoish text-4xl font-black text-lime">
                {submitted ? `${score}/5` : "--/5"}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {quizQuestions.map((question, questionIndex) => {
              const selected = answers[questionIndex];
              return (
                <motion.article
                  key={question.question}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="border border-white/12 bg-black/20 p-4 md:p-5"
                >
                  <p className="hud-label text-cyan">
                    Question {questionIndex + 1} of {quizQuestions.length}
                  </p>
                  <h3 className="mt-3 font-monoish text-2xl font-black">
                    {question.question}
                  </h3>
                  <div className="mt-5 grid gap-3">
                    {question.options.map((option, optionIndex) => {
                      const picked = selected === optionIndex;
                      const correct = question.answerIndex === optionIndex;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setAnswers((current) => ({
                              ...current,
                              [questionIndex]: optionIndex,
                            }))
                          }
                          className={cn(
                            "min-h-12 border px-4 py-3 text-left font-monoish transition hover:translate-x-1 hover:border-cyan",
                            picked
                              ? "border-magenta bg-magenta/20 text-white"
                              : "border-white/12 bg-white/5 text-white/72",
                            submitted &&
                              correct &&
                              "border-lime bg-lime/15 text-white",
                          )}
                        >
                          <span className="mr-3 text-cyan">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {submitted ? (
                    <p
                      className={cn(
                        "mt-4 border-l-2 pl-4 leading-7",
                        selected === question.answerIndex
                          ? "border-lime text-white/76"
                          : "border-magenta text-magenta",
                      )}
                    >
                      {question.explanation}
                    </p>
                  ) : null}
                </motion.article>
              );
            })}
          </div>

          <button
            type="button"
            disabled={!complete}
            onClick={submit}
            className="mt-8 h-14 w-full border border-white bg-white font-monoish text-sm font-black uppercase tracking-[0.22em] text-void transition hover:bg-lime disabled:cursor-not-allowed disabled:opacity-40"
          >
            Submit Human Check
          </button>
        </div>

        <section
          id="exit-protocol"
          className="neo-border mt-10 bg-white p-6 text-void md:p-10"
        >
          <p className="font-monoish text-xs font-black uppercase tracking-[0.22em] text-void/60">
            FINAL SYSTEM OUTPUT
          </p>
          <h2 className="display-title mt-4 text-5xl leading-none md:text-7xl">
            FORM + CONTENT OR CRASH
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-void/76">
            {finalSummary}
          </p>
        </section>

        <footer className="mt-10 border border-white/12 bg-black/40 p-5 md:p-7">
          <p className="hud-label text-cyan">AI USAGE APPENDIX</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {aiAppendix.map((item) => (
              <div key={item.title} className="border border-white/12 bg-white/5 p-4">
                <h3 className="font-monoish text-sm font-black uppercase tracking-[0.2em]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-white/62">{item.text}</p>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
