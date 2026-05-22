"use client";
import { motion } from "framer-motion";

interface Scene8EssencePhenomenonProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const CHARACTERISTICS = [
  {
    title: "Bản chất quyết định hiện tượng",
    desc: "Bản chất như thế nào thì biểu hiện ra hiện tượng như thế đó. Ví dụ: Người chăm chỉ thường có kết quả tốt.",
  },
  {
    title: "Hiện tượng không phản ánh đầy đủ",
    desc: "Hiện tượng có thể che giấu hoặc phản ánh không hoàn toàn bản chất. Ví dụ: Quảng cáo hấp dẫn nhưng chất lượng kém.",
  },
  {
    title: "Sự biến đổi",
    desc: "Bản chất tương đối ổn định, hiện tượng thường biến đổi nhanh hơn.",
  },
];

const METHODOLOGIES = [
  "Khi nhận thức sự vật phải đi từ hiện tượng đến tìm hiểu bản chất bên trong.",
  "Không nên đánh giá sự việc chỉ qua biểu hiện bên ngoài.",
  "Muốn giải quyết đúng vấn đề phải tác động vào bản chất của nó.",
  "Cần phân tích nhiều hiện tượng khác nhau để tránh nhận xét phiến diện.",
  "Phải biết phân biệt hiện tượng thật và hiện tượng giả tạo.",
  "Nhìn nhận vấn đề khách quan, toàn diện và lâu dài.",
];

export function Scene8EssencePhenomenon({ isActive }: Scene8EssencePhenomenonProps) {
  return (
    <section className="scene scene-aged" aria-label="Scene 8: Bản chất và Hiện tượng">
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(184,136,42,0.03) 0, rgba(184,136,42,0.03) 1px, transparent 0, transparent 50%)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="scene-inner"
        style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 72, alignItems: "start", paddingTop: 20 }}
      >
        {/* Left — Khái niệm & Đặc điểm */}
        <div>
          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}
          >
            <span className="step-badge">VIII</span>
            <span className="t-scene-label">Cặp Phạm Trù III</span>
          </motion.div>

          <motion.h2
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="t-heading"
            style={{ marginBottom: 20 }}
          >
            <em className="t-accent">Bản chất</em>
            {" "}và{" "}
            <span style={{ color: "var(--ink)" }}>Hiện tượng</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isActive ? { width: 160 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{ height: 1, background: "linear-gradient(90deg, var(--brass), transparent)", marginBottom: 24 }}
          />

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="t-body"
            style={{ marginBottom: 14, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Bản chất</strong>{" "}
            là tổng hợp những mặt, mối liên hệ tất nhiên, ổn định,{" "}
            <em>bên trong</em> sự vật — quyết định sự vật là gì.
          </motion.p>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="t-body"
            style={{ marginBottom: 22, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Hiện tượng</strong>{" "}
            là những biểu hiện <em>ra bên ngoài</em> mà con người có thể cảm nhận bằng giác quan.
          </motion.p>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.5 }}
            style={{
              background: "rgba(184,136,42,0.05)",
              border: "1px solid rgba(184,136,42,0.15)",
              borderRadius: 3,
              padding: "16px 20px",
              marginBottom: 14,
            }}
          >
            <p className="t-scene-label" style={{ marginBottom: 8, color: "var(--brass)" }}>Mối quan hệ</p>
            <p className="t-body" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
              Bản chất bao giờ cũng bộc lộ qua hiện tượng. Không có bản chất nào tồn tại ngoài hiện tượng và không có hiện tượng nào hoàn toàn không phản ánh bản chất.
            </p>
          </motion.div>
        </div>

        {/* Right — So sánh & Ý nghĩa */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ delay: 0.25 }}
          style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 8 }}
        >
          <div>
            <p className="t-scene-label" style={{ marginBottom: 12 }}>Đặc điểm Mối Quan Hệ</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CHARACTERISTICS.map((char, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ delay: 0.45 + i * 0.1 }}
                  style={{
                    padding: "16px 20px",
                    background: "rgba(245,237,220,0.5)",
                    borderLeft: "2px solid var(--brass)",
                    borderRadius: "0 3px 3px 0",
                  }}
                >
                  <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--ink-light)", marginBottom: 4 }}>{char.title}</p>
                  <p className="t-body" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>{char.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.9 }}
            style={{
              padding: "20px 24px",
              background: "rgba(44,36,22,0.04)",
              border: "1px solid var(--border-warm)",
              borderRadius: 3,
            }}
          >
            <span className="t-scene-label" style={{ display: "inline-block", marginBottom: 12, color: "var(--crimson-light)" }}>
              Ý Nghĩa Phương Pháp Luận
            </span>
            <ul style={{ paddingLeft: 16, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {METHODOLOGIES.map((item, i) => (
                <li key={i} className="t-body" style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2 }}
        className="annotation"
        style={{ position: "absolute", bottom: 40, left: 80, zIndex: 5 }}
        aria-hidden="true"
      >
        bản chất mới quyết định!
      </motion.span>
    </section>
  );
}
