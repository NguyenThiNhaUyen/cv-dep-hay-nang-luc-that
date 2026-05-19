"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Mesh } from "three";
import { candidates } from "@/data/content";

export function Cover() {
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 0.25], [0, -80]);

  return (
    <section className="noise relative min-h-screen overflow-hidden px-4 py-5 md:px-8">
      <div className="absolute inset-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 7], fov: 48 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[3, 2, 5]} intensity={22} color="#00f5ff" />
          <pointLight position={[-3, -2, 4]} intensity={18} color="#ff2bd6" />
          <FloatingArtifacts />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-40px)] max-w-7xl flex-col">
        <header className="os-shell flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-cyan shadow-neon" />
            <span className="hud-label">INTERVIEW.EXE / GROUP_04</span>
          </div>
          <span className="hud-label hidden sm:inline">DIALECTICAL SCAN ONLINE</span>
        </header>

        <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div style={{ y: drift }}>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="hud-label text-cyan"
            >
              FAKE AI RECRUITMENT OPERATING SYSTEM
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="glitch display-title mt-4 text-[18vw] leading-[0.82] text-white sm:text-8xl lg:text-[8.4rem]"
            >
              INTERVIEW.EXE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/72"
            >
              Một hệ điều hành tuyển dụng giả lập đang quét hai hồ sơ: một CV
              hoàn hảo về hình thức và một năng lực thật được chứng minh trong
              thực tiễn. Câu hỏi của hệ thống: đâu là bản chất?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.55 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#simulation"
                className="neo-border bg-white px-6 py-4 text-center font-monoish text-sm font-black uppercase tracking-[0.2em] text-void transition hover:bg-cyan"
              >
                Boot Scanner
              </a>
              <a
                href="#diagnostics"
                className="border border-white/18 bg-white/8 px-6 py-4 text-center font-monoish text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur transition hover:border-magenta hover:text-magenta"
              >
                View Diagnostics
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotateX: 18, y: 30 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="os-shell scanline p-4 md:p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="hud-label text-cyan">LIVE CANDIDATE FEED</span>
              <span className="hud-label text-lime">REC ●</span>
            </div>
            <div className="grid gap-4">
              {candidates.map((candidate, index) => (
                <motion.article
                  key={candidate.id}
                  animate={{ y: [0, -10, 0], rotate: index === 0 ? [-1, 1, -1] : [1, -1, 1] }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="group border border-white/14 bg-white/8 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan/70"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-20 w-20 shrink-0 place-items-center border border-white/20 bg-black/30 font-display text-5xl">
                      {candidate.avatar}
                    </div>
                    <div>
                      <p className="hud-label">{candidate.code}</p>
                      <h2 className="mt-1 font-monoish text-2xl font-black uppercase">
                        {candidate.name}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-white/62">
                        {candidate.signal}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${candidate.scanScore}%` }}
                      transition={{ delay: 0.55 + index * 0.2, duration: 1 }}
                      className="h-full bg-gradient-to-r from-cyan via-magenta to-lime"
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingArtifacts() {
  const group = useRef<Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.16;
    group.current.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <group ref={group}>
      {[
        [-2.3, 1.2, 0, "#00f5ff"],
        [1.8, 0.8, -0.8, "#ff2bd6"],
        [-0.2, -1.1, -1.2, "#c6ff00"],
        [2.6, -1.35, -0.2, "#ffb000"],
      ].map(([x, y, z, color], index) => (
        <mesh key={`${color}-${index}`} position={[x as number, y as number, z as number]} rotation={[0.4, 0.2, 0.1]}>
          <boxGeometry args={[1.2, 1.7, 0.06]} />
          <meshStandardMaterial
            color={color as string}
            emissive={color as string}
            emissiveIntensity={0.9}
            metalness={0.2}
            roughness={0.18}
            transparent
            opacity={0.32}
          />
        </mesh>
      ))}
    </group>
  );
}
