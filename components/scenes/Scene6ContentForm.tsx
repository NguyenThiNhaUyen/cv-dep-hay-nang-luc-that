"use client";
import { motion } from "framer-motion";

interface Scene6ContentFormProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const EXAMPLES = [
  {
    col: "Hình Thức (Form)",
    desc: "Phương thức tồn tại & biểu hiện — thứ ta nhìn thấy đầu tiên",
    items: [
      "CV thiết kế đẹp, từ khóa đao to búa lớn",
      "Bằng tốt nghiệp loại Giỏi",
      "Danh sách chứng chỉ dài",
      "Ngôn ngữ hoa mỹ: \"Proactive\", \"Leadership\"",
    ],
    color: "var(--brass)",
    bg: "rgba(184,136,42,0.06)",
    border: "rgba(184,136,42,0.2)",
  },
  {
    col: "Nội Dung (Content)",
    desc: "Tổng hợp yếu tố tạo nên sự vật — thứ bên trong quyết định",
    items: [
      "Tư duy phân tích, giải bài toán thực tế",
      "Khả năng thực chiến trong phỏng vấn",
      "Kỹ năng đưa ra giải pháp cụ thể, khả thi",
      "Kinh nghiệm từ thực tiễn nghề nghiệp",
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
            style={{ marginBottom: 12, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Nội dung</strong>{" "}
            là tổng hợp <em>tất cả những mặt, yếu tố, quá trình</em> tạo nên sự vật —
            trả lời câu hỏi: <em style={{ color: "var(--brass)" }}>"Bên trong có gì?"</em>
          </motion.p>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="t-body"
            style={{ marginBottom: 16, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Hình thức</strong>{" "}
            là phương thức tồn tại và biểu hiện của nội dung —
            trả lời câu hỏi: <em style={{ color: "var(--brass)" }}>"Nó biểu hiện như thế nào?"</em>
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
              padding: "10px 14px",
              marginBottom: 14,
            }}
          >
            <p className="t-body" style={{ fontSize: "0.82rem", lineHeight: 1.7 }}>
              <span style={{ color: "var(--brass)" }}>⚖ Quan hệ:</span>{" "}
              Nội dung giữ vai trò <strong>quyết định</strong> hình thức.
              Hình thức phù hợp sẽ thúc đẩy nội dung phát triển;
              hình thức không phù hợp sẽ kìm hãm nội dung.
            </p>
          </motion.div>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.63 }}
            style={{
              background: "rgba(184,136,42,0.07)",
              border: "1px solid rgba(184,136,42,0.2)",
              borderRadius: 3,
              padding: "14px 18px",
              marginBottom: 16,
            }}
          >
            <p className="t-quote" style={{ fontSize: "0.88rem" }}>
              "Một CV chuyên nghiệp có giá trị vì hình thức phù hợp giúp nội dung được tiếp cận hiệu quả. Tuy nhiên, nếu hình thức tách rời nội dung thực chất, nó sẽ trở nên rỗng tuếch và thiếu thuyết phục."
            </p>
          </motion.div>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.6, delay: 0.76 }}
          >
            <p className="t-scene-label" style={{ marginBottom: 6 }}>Bài Học Thực Tiễn</p>
            <p className="t-body" style={{ fontSize: "0.84rem", lineHeight: 1.75 }}>
              Nhà tuyển dụng giỏi nhìn xuyên qua <em>hình thức CV</em> —
              tìm kiếm <em style={{ color: "var(--crimson-light)" }}>nội dung thực chất</em>:
              khả năng tư duy và giải quyết bài toán của công ty.
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
              <div style={{ padding: "4px 0 6px", marginBottom: 0 }}>
                <span className="t-body" style={{ fontSize: "0.75rem", color: "var(--ink-ghost)", fontStyle: "italic" }}>{col.desc}</span>
              </div>
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
              Trong trường hợp này, kết quả của B là minh chứng cho việc khi <em>nội dung vững vàng</em>, nó tự quyết định một hình thức thể hiện phù hợp và có sức thuyết phục thực tiễn.
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
        thống nhất biện chứng
      </motion.span>

      {/* Connecting arrow */}
      <div aria-hidden="true" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", zIndex: 5, opacity: 0.4 }}>
        <div style={{ width: 28, height: 1, background: "var(--brass)" }} />
        <div style={{ width: 7, height: 7, borderRight: "1.5px solid var(--brass)", borderTop: "1.5px solid var(--brass)", transform: "rotate(45deg)", marginLeft: -2 }} />
      </div>
    </section>
  );
}
