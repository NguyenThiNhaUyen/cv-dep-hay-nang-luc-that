"use client";
import { motion } from "framer-motion";

interface Scene7CauseResultProps {
  isActive: boolean;
}

const FI = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const METHODOLOGIES = [
  "Muốn tìm nguyên nhân phải xem xét những gì xảy ra trước kết quả.",
  "Muốn loại bỏ kết quả xấu phải loại bỏ nguyên nhân sinh ra nó.",
  "Phân loại nguyên nhân để xử lý đúng. Phát huy cái tích cực, hạn chế cái tiêu cực.",
  "Cân nhắc hậu quả trước khi hành động.",
  "Cần tầm nhìn lâu dài vì kết quả hôm nay là nguyên nhân của tương lai.",
];

export function Scene7CauseResult({ isActive }: Scene7CauseResultProps) {
  return (
    <section className="scene scene-warm" aria-label="Scene 7: Nguyên nhân và Kết quả">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: `${(i + 1) * 16.66}%`,
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(44,36,22,0.04)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}

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
            <span className="step-badge">VII</span>
            <span className="t-scene-label">Cặp Phạm Trù II</span>
          </motion.div>

          <motion.h2
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="t-heading"
            style={{ marginBottom: 20 }}
          >
            <em className="t-accent">Nguyên nhân</em>
            {" "}và{" "}
            <span style={{ color: "var(--ink)" }}>Kết quả</span>
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
            style={{ marginBottom: 16, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Nguyên nhân</strong>{" "}
            là sự tác động lẫn nhau giữa các mặt trong sự vật, hiện tượng làm xuất hiện sự biến đổi nhất định.
          </motion.p>
          
          <motion.p
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="t-body"
            style={{ marginBottom: 24, lineHeight: 1.85 }}
          >
            <strong style={{ color: "var(--ink-light)", fontWeight: 500 }}>Kết quả</strong>{" "}
            là những biến đổi xuất hiện do nguyên nhân gây ra.
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
            <p className="t-scene-label" style={{ marginBottom: 8, color: "var(--brass)" }}>Phân biệt cần nhớ</p>
            <p className="t-body" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
              <strong>Nguyên cớ:</strong> Sự việc xảy ra ngay trước nhưng không sinh ra kết quả.<br />
              <strong>Điều kiện:</strong> Yếu tố hỗ trợ nhưng không trực tiếp sinh ra kết quả.
            </p>
          </motion.div>

          <motion.div
            variants={FI}
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            transition={{ duration: 0.65, delay: 0.6 }}
            style={{
              background: "rgba(184,136,42,0.07)",
              border: "1px solid rgba(184,136,42,0.2)",
              borderRadius: 3,
              padding: "18px 20px",
            }}
          >
            <p className="t-scene-label" style={{ marginBottom: 8 }}>Tính Quy Luật</p>
            <p className="t-quote" style={{ fontSize: "0.92rem" }}>
              Nguyên nhân có trước, kết quả có sau. Mối quan hệ này là{" "}
              <em style={{ color: "var(--brass)" }}>khách quan, tất yếu.</em>
            </p>
          </motion.div>
        </div>

        {/* Right — Đặc điểm Mối quan hệ */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ delay: 0.25 }}
          style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}
        >
          <div>
            <p className="t-scene-label" style={{ marginBottom: 12 }}>Đặc điểm Mối Quan Hệ qua Tình Huống Thực Tế</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.45 }}
                style={{
                  padding: "16px 20px",
                  background: "rgba(245,237,220,0.5)",
                  borderLeft: "2px solid var(--crimson-light)",
                  borderRadius: "0 3px 3px 0",
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--ink-light)", marginBottom: 6 }}>a. Một kết quả do nhiều nguyên nhân tạo thành</p>
                <div className="t-body" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>
                  <strong>Kết quả:</strong> 👉 A bị loại phỏng vấn.<br/>
                  <strong>Nhiều nguyên nhân:</strong> Thiếu kỹ năng thực tế, chỉ giỏi lý thuyết, CV quá màu mè, trả lời không thuyết phục, không giải quyết được bài toán công ty.<br/>
                  <span style={{ color: "var(--crimson-light)" }}>→ Không thể nói chỉ vì "xui" hay "thiên vị". Muốn giải quyết kết quả phải tìm và xử lý đầy đủ các nguyên nhân.</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.55 }}
                style={{
                  padding: "16px 20px",
                  background: "rgba(245,237,220,0.5)",
                  borderLeft: "2px solid var(--brass)",
                  borderRadius: "0 3px 3px 0",
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--ink-light)", marginBottom: 6 }}>b. Một nguyên nhân có thể dẫn đến nhiều kết quả</p>
                <div className="t-body" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>
                  <strong>Nguyên nhân:</strong> 👉 Chỉ chú trọng hình thức CV mà không phát triển năng lực thật.<br/>
                  <strong>Nhiều kết quả:</strong> Bị đánh giá thiếu thực lực, rớt phỏng vấn, mất cơ hội việc làm tốt, dễ sinh tâm lý đổ lỗi.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.65 }}
                style={{
                  padding: "16px 20px",
                  background: "rgba(245,237,220,0.5)",
                  borderLeft: "2px solid var(--crimson)",
                  borderRadius: "0 3px 3px 0",
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--ink-light)", marginBottom: 6 }}>c. Kết quả lại trở thành nguyên nhân mới</p>
                <div className="t-body" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>
                  <strong>Sinh viên A:</strong> Bị loại phỏng vấn → ấm ức → cho rằng người khác "ăn may" → không cải thiện kỹ năng → tiếp tục thất bại.<br/>
                  <strong>Sinh viên B:</strong> Được tuyển → làm việc thực tế → tích lũy kinh nghiệm → phát triển năng lực → thăng tiến.
                </div>
              </motion.div>

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
            <span className="t-scene-label" style={{ display: "inline-block", marginBottom: 12, color: "var(--brass)" }}>
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
        style={{ display: "block", marginTop: 20, color: "rgba(184,136,42,0.5)", position: "absolute", right: 60, top: 60 }}
        aria-hidden="true"
      >
        không có may mắn ngẫu nhiên
      </motion.span>
    </section>
  );
}
