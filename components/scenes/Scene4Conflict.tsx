"use client";
import { motion } from "framer-motion";

interface Scene4ConflictProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const A_THOUGHTS = [
  "B chỉ may mắn gặp đúng câu hỏi mình biết",
  "Nhà tuyển dụng không đánh giá đúng bằng cấp",
  "CV đẹp phải được trân trọng hơn",
  "Tôi làm nhiều hơn B gấp đôi, sao lại không được?",
];

export function Scene4Conflict({ isActive }: Scene4ConflictProps) {
  return (
    <section className="scene scene-aged" aria-label="Scene 4: Xung đột">
      {/* Atmospheric crack / tension line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: 1,
          background: "linear-gradient(to bottom, transparent, rgba(44,36,22,0.12), transparent)",
          zIndex: 2,
        }}
      />

      <div
        className="scene-inner"
        style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}
      >
        {/* Left — A's perspective */}
        <div>
          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}
          >
            <span className="step-badge">IV</span>
            <span className="t-scene-label">Quan Điểm Của A</span>
          </motion.div>

          <motion.h2
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="t-heading"
            style={{ marginBottom: 20, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
          >
            Góc nhìn dừng ở{" "}
            <em className="t-accent">hiện tượng.</em>
          </motion.h2>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="t-body"
            style={{ marginBottom: 24, lineHeight: 1.85 }}
          >
            Khi biết kết quả, A cho rằng B chỉ "ăn may". Thực chất, A đang đánh giá sự việc hoàn toàn từ lăng kính hiện tượng bề ngoài (CV, bằng cấp), mà bỏ qua bản chất năng lực thực sự được yêu cầu.
          </motion.p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {A_THOUGHTS.map((thought, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -14 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                transition={{ delay: 0.35 + i * 0.12 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "10px 16px",
                  background: "rgba(184,136,42,0.06)",
                  border: "1px solid rgba(184,136,42,0.15)",
                  borderRadius: 2,
                }}
              >
                <span style={{ color: "var(--brass)", fontSize: 12, lineHeight: 1.5, flexShrink: 0 }}>→</span>
                <span className="t-body" style={{ fontSize: "0.88rem", fontStyle: "italic" }}>
                  {thought}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — The real question */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="scene-card card-corners"
            style={{ padding: "40px 36px", textAlign: "center" }}
          >
            {/* Large question mark */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "6rem",
                lineHeight: 1,
                color: "rgba(184,136,42,0.15)",
                marginBottom: 20,
                fontWeight: 400,
              }}
            >
              ?
            </div>

            <p className="t-quote" style={{ marginBottom: 20, fontSize: "1.1rem" }}>
              Câu hỏi thực sự không phải là ai may mắn hơn — mà là:{" "}
              <em className="t-accent">chúng ta đang đánh giá điều gì?</em>
            </p>

            <div style={{ height: 1, background: "var(--border-warm)", margin: "24px 0" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Hiện tượng", desc: "CV, bằng cấp, ngoại hình, thương hiệu trường" },
                { label: "Bản chất", desc: "Tư duy, kỹ năng giải quyết vấn đề, thái độ thực tế" },
              ].map((item) => (
                <div key={item.label} style={{ textAlign: "left" }}>
                  <span className="t-scene-label" style={{ display: "block", marginBottom: 4 }}>
                    {item.label}
                  </span>
                  <p className="t-body" style={{ fontSize: "0.88rem" }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: "var(--border-warm)", margin: "24px 0" }} />

            <div className="philosophy-badge" style={{ justifyContent: "center", width: "100%" }}>
              Phép Biện Chứng Duy Vật
            </div>
          </motion.div>

          {/* Annotation */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
            className="annotation"
            style={{ display: "block", textAlign: "right", marginTop: 16, paddingRight: 20 }}
            aria-hidden="true"
          >
            mắc kẹt trong bề ngoài
          </motion.span>
        </div>
      </div>
    </section>
  );
}
