"use client";
import { motion } from "framer-motion";

interface Scene6ContentFormProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const RELATIONSHIPS = [
  {
    title: "Nội dung quyết định hình thức",
    desc: "Khi nội dung thay đổi thì hình thức cũng phải thay đổi theo. Ví dụ: Điện thoại hiện đại chuyển từ bàn phím cứng sang cảm ứng.",
  },
  {
    title: "Hình thức tác động trở lại nội dung",
    desc: "Hình thức phù hợp sẽ thúc đẩy nội dung; không phù hợp sẽ kìm hãm. Ví dụ: Cùng bài học, giáo viên dạy sinh động giúp học sinh dễ hiểu hơn.",
  },
  {
    title: "Luôn vận động và thay đổi",
    desc: "Khi nội dung phát triển vượt hình thức cũ, sẽ xuất hiện nhu cầu thay đổi hình thức mới. Ví dụ: Học online buộc phải đổi nền tảng.",
  },
];

const METHODOLOGIES = [
  "Khi xem xét sự vật phải chú ý cả nội dung và hình thức.",
  "Muốn đánh giá đúng phải đi sâu vào nội dung, tránh chỉ nhìn hình thức bên ngoài.",
  "Cần lựa chọn hình thức phù hợp để phát huy tốt nội dung.",
  "Khi nội dung thay đổi phải kịp thời đổi mới hình thức.",
  "Trong thực tiễn cần kết hợp nội dung tốt và hình thức phù hợp để đạt hiệu quả cao nhất.",
];

export function Scene6ContentForm({ isActive }: Scene6ContentFormProps) {
  return (
    <section className="scene scene-parchment" aria-label="Scene 6: Nội dung và Hình thức">
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
        style={{ zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 72, alignItems: "start", paddingTop: 20 }}
      >
        {/* Left — Khái niệm & Phân biệt */}
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
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Nội dung</strong>{" "}
            là tổng hợp <em>tất cả những mặt, yếu tố, quá trình</em> tạo nên sự vật.
            <br />
            <em style={{ color: "var(--brass)" }}>→ Trả lời câu hỏi: "Bên trong có gì?"</em>
          </motion.p>

          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="t-body"
            style={{ marginBottom: 24, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Hình thức</strong>{" "}
            là phương thức tồn tại và biểu hiện của nội dung; là cách sắp xếp, tổ chức các yếu tố.
            <br />
            <em style={{ color: "var(--brass)" }}>→ Trả lời câu hỏi: "Nó được biểu hiện thế nào?"</em>
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
            <p className="t-scene-label" style={{ marginBottom: 8, color: "var(--brass)" }}>Nguyên tắc chung</p>
            <p className="t-body" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
              Nội dung và hình thức gắn bó chặt chẽ. Không có nội dung nào tồn tại ngoài hình thức và ngược lại.
            </p>
          </motion.div>
        </div>

        {/* Right — Mối quan hệ & Ý nghĩa */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          {/* Mối quan hệ */}
          <div>
            <p className="t-scene-label" style={{ marginBottom: 12 }}>Đặc điểm Mối Quan Hệ</p>
            <div style={{ display: "grid", gap: 12 }}>
              {RELATIONSHIPS.map((rel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ delay: 0.45 + i * 0.1 }}
                  style={{
                    padding: "16px 20px",
                    background: "rgba(245,237,220,0.5)",
                    borderLeft: "2px solid var(--brass)",
                    borderRadius: "0 3px 3px 0",
                  }}
                >
                  <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--ink-light)", marginBottom: 4 }}>{rel.title}</p>
                  <p className="t-body" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>{rel.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ý nghĩa phương pháp luận */}
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
        style={{ position: "absolute", top: 85, right: 80, zIndex: 5 }}
        aria-hidden="true"
      >
        thống nhất biện chứng
      </motion.span>
    </section>
  );
}
