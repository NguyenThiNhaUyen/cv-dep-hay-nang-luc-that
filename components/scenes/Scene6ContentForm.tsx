"use client";
import { motion } from "framer-motion";

interface Scene6ContentFormProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const EXAMPLES = [
  {
    col: "Hình Thức (Form)",
    items: [
      "CV thiết kế đẹp, bố cục chuyên nghiệp",
      "Bằng tốt nghiệp loại xuất sắc",
      "Tên trường danh tiếng",
      "Danh sách chứng chỉ dài",
    ],
    color: "var(--brass)",
    bg: "rgba(184,136,42,0.06)",
    border: "rgba(184,136,42,0.2)",
  },
  {
    col: "Nội Dung (Content)",
    items: [
      "Tư duy phân tích vấn đề thực tế",
      "Khả năng đưa ra giải pháp khả thi",
      "Kỹ năng giao tiếp và thuyết phục",
      "Kinh nghiệm từ thực tiễn",
    ],
    color: "var(--crimson-light)",
    bg: "rgba(139,38,53,0.06)",
    border: "rgba(139,38,53,0.2)",
  },
];

export function Scene6ContentForm({ isActive }: Scene6ContentFormProps) {
  return (
    <section className="scene scene-parchment" aria-label="Scene 6: Nội dung và Hình thức">
      {/* Background ornament */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vmin",
          height: "80vmin",
          borderRadius: "50%",
          border: "1px solid rgba(184,136,42,0.06)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="scene-inner"
        style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 72, alignItems: "center" }}
      >
        {/* Left — explanation */}
        <div>
          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}
          >
            <span className="step-badge">VI</span>
            <span className="t-scene-label">Cặp Phạm Trù I</span>
          </motion.div>

          <motion.h2
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="t-heading"
            style={{ marginBottom: 20 }}
          >
            <em className="t-accent">Nội dung</em>
            {" "}và{" "}
            <span style={{ color: "var(--ink)" }}>Hình thức</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isActive ? { width: 180 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ height: 1, background: "linear-gradient(90deg, var(--brass), transparent)", marginBottom: 24 }}
          />

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="t-body"
            style={{ marginBottom: 16, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Nội dung</strong> là
            tổng hợp những yếu tố, quá trình tạo nên sự vật —
            tức là thứ bên trong, bản chất thực sự.
          </motion.p>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="t-body"
            style={{ marginBottom: 20, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Hình thức</strong> là
            phương thức tồn tại và biểu hiện của nội dung — thứ ta nhìn thấy đầu tiên.
          </motion.p>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.55 }}
            style={{
              background: "rgba(184,136,42,0.07)",
              border: "1px solid rgba(184,136,42,0.2)",
              borderRadius: 3,
              padding: "16px 20px",
              marginBottom: 20,
            }}
          >
            <p className="t-quote" style={{ fontSize: "0.95rem" }}>
              "Hình thức đẹp không tự nhiên tạo ra nội dung phong phú —
              nhưng nội dung tốt luôn tìm được hình thức phù hợp."
            </p>
          </motion.div>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.6, delay: 0.68 }}
          >
            <p className="t-scene-label" style={{ marginBottom: 6 }}>Bài Học</p>
            <p className="t-body" style={{ fontSize: "0.88rem" }}>
              Nhà tuyển dụng giỏi nhìn xuyên qua CV — tìm kiếm nội dung thực
              chất ẩn sau hình thức trình bày.
            </p>
          </motion.div>
        </div>

        {/* Right — comparison table */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          {EXAMPLES.map((col, ci) => (
            <div key={col.col}>
              <div
                style={{
                  padding: "10px 16px",
                  background: col.bg,
                  border: `1px solid ${col.border}`,
                  borderRadius: "3px 3px 0 0",
                  marginBottom: 0,
                }}
              >
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 8.5,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: col.color,
                }}>
                  {col.col}
                </span>
              </div>
              <div
                style={{
                  border: `1px solid ${col.border}`,
                  borderTop: "none",
                  borderRadius: "0 0 3px 3px",
                  overflow: "hidden",
                }}
              >
                {col.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    initial={{ opacity: 0, x: ci === 0 ? -10 : 10 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0 }}
                    transition={{ delay: 0.45 + ii * 0.1 }}
                    style={{
                      padding: "11px 16px",
                      borderBottom: ii < col.items.length - 1 ? `1px solid rgba(44,36,22,0.08)` : "none",
                      background: ii % 2 === 0 ? "rgba(245,237,220,0.5)" : "rgba(245,237,220,0.2)",
                    }}
                  >
                    <span className="t-body" style={{ fontSize: "0.84rem" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Synthesis note */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.9 }}
            style={{
              gridColumn: "1 / -1",
              padding: "16px 20px",
              background: "rgba(44,36,22,0.04)",
              border: "1px solid var(--border-warm)",
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <span className="t-scene-label" style={{ display: "inline-block", marginBottom: 6 }}>
              Kết Luận
            </span>
            <p className="t-body" style={{ fontSize: "0.85rem" }}>
              Trong trường hợp này: <em>B có nội dung tốt hơn, dù hình thức đơn giản hơn.</em>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Handwritten annotation */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2 }}
        className="annotation"
        style={{ position: "absolute", top: 85, right: 80, zIndex: 5 }}
        aria-hidden="true"
      >
        bản chất &gt; hiện tượng!
      </motion.span>

      {/* Connecting arrow */}
      <div aria-hidden="true" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", zIndex: 5, opacity: 0.4 }}>
        <div style={{ width: 28, height: 1, background: "var(--brass)" }} />
        <div style={{ width: 7, height: 7, borderRight: "1.5px solid var(--brass)", borderTop: "1.5px solid var(--brass)", transform: "rotate(45deg)", marginLeft: -2 }} />
      </div>
    </section>
  );
}
