"use client";

import { motion, AnimatePresence } from "framer-motion";

interface AIUsageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIUsageModal({ isOpen, onClose }: AIUsageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: "absolute", inset: 0, background: "rgba(28, 22, 12, 0.85)", backdropFilter: "blur(12px)" }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="scene-card"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 800,
              maxHeight: "85vh",
              overflowY: "auto",
              background: "var(--parchment)",
              zIndex: 10,
              padding: "40px",
            }}
          >
            <div className="card-corners" aria-hidden="true" />
            
            <button 
              onClick={onClose}
              style={{
                position: "absolute", top: 24, right: 24, 
                background: "transparent", border: "none", 
                fontSize: 24, color: "var(--ink-faded)", cursor: "pointer"
              }}
            >
              ×
            </button>

            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <span className="t-scene-label">Phụ Lục Minh Bạch (AI Usage Report)</span>
              <h2 className="t-heading" style={{ fontSize: "2rem", marginTop: 8 }}>Báo Cáo Ứng Dụng AI</h2>
              <p className="t-body" style={{ fontSize: "0.9rem", marginTop: 12 }}>
                Tài liệu này minh bạch hóa quá trình nhóm sử dụng Trí Tuệ Nhân Tạo trong việc phát triển Sản Phẩm Sáng Tạo "Behind The CV".
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Row 1 */}
              <div style={{ borderLeft: "3px solid var(--brass)", paddingLeft: 16 }}>
                <h3 className="t-quote" style={{ fontSize: "1.1rem", marginBottom: 8, color: "var(--ink)" }}>1. Công cụ sử dụng</h3>
                <p className="t-body" style={{ fontSize: "0.9rem" }}>
                  <strong>Google Gemini Pro 1.5 / Antigravity</strong>: Hỗ trợ lập trình (Coding AI Assistant), phân tích cấu trúc, thiết kế giao diện UI/UX và gợi ý tinh chỉnh nội dung hàn lâm.
                </p>
              </div>

              {/* Row 2 */}
              <div style={{ borderLeft: "3px solid var(--brass)", paddingLeft: 16 }}>
                <h3 className="t-quote" style={{ fontSize: "1.1rem", marginBottom: 8, color: "var(--ink)" }}>2. Mục đích sử dụng</h3>
                <ul className="t-body" style={{ fontSize: "0.9rem", marginLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}>
                  <li>Phát triển giao diện web (HTML/CSS/React/Framer Motion) theo phong cách Luxury Editorial.</li>
                  <li>Tái cấu trúc (refactoring) nội dung từ dạng câu chuyện HR thông thường sang bài phân tích chuyên sâu về Triết học Mác - Lênin.</li>
                  <li>Chuyển đổi trải nghiệm từ Slide ngang sang Game Nhập Vai Tương Tác.</li>
                </ul>
              </div>

              {/* Row 3 */}
              <div style={{ borderLeft: "3px solid var(--brass)", paddingLeft: 16 }}>
                <h3 className="t-quote" style={{ fontSize: "1.1rem", marginBottom: 8, color: "var(--ink)" }}>3. Prompt chính (Main Prompts)</h3>
                <div style={{ background: "rgba(184, 136, 42, 0.05)", padding: 12, borderRadius: 4, fontFamily: "monospace", fontSize: "0.85rem", color: "var(--ink-light)" }}>
                  "Tôi muốn đưa nội dung các cặp phạm trù vào project để thuyết trình tình huống sinh viên A và B..."<br/><br/>
                  "Làm sao để web này không giống slide thuyết trình mà giống một Sản phẩm sáng tạo / Game nhập vai như cô giáo yêu cầu?"
                </div>
              </div>

              {/* Row 4 */}
              <div style={{ borderLeft: "3px solid var(--brass)", paddingLeft: 16 }}>
                <h3 className="t-quote" style={{ fontSize: "1.1rem", marginBottom: 8, color: "var(--ink)" }}>4. Kết quả và Phần chỉnh sửa của sinh viên</h3>
                <p className="t-body" style={{ fontSize: "0.9rem", marginBottom: 8 }}>
                  <strong>Kết quả:</strong> Bộ source code Next.js hoàn chỉnh với hiệu ứng scrollytelling. Các đoạn văn phân tích các cặp phạm trù (Nội dung - Hình thức, Bản chất - Hiện tượng) được AI gợi ý diễn đạt theo ngôn ngữ học thuật.
                </p>
                <p className="t-body" style={{ fontSize: "0.9rem" }}>
                  <strong>Sinh viên chỉnh sửa & kiểm chứng:</strong> Nhóm đã chủ động đối chiếu toàn bộ lý luận AI sinh ra với <em>Giáo trình Triết học Mác - Lênin (2019/2021)</em>. Nhóm quyết định luồng câu chuyện, tùy chỉnh màu sắc/font chữ, và duyệt sửa các từ ngữ chưa chính xác (ví dụ AI từng viết sai "Nguyên cọ", nhóm đã phát hiện và yêu cầu sửa thành "Nguyên cớ"). Sản phẩm phản ánh tư duy thiết kế và biên tập của sinh viên.
                </p>
              </div>
            </div>

            <div className="ornate-line" style={{ margin: "32px 0 24px" }} />
            
            <p className="t-scene-label" style={{ textAlign: "center", fontSize: 8 }}>
              Cam kết liêm chính học thuật: AI chỉ đóng vai trò hỗ trợ công cụ, không thay thế tư duy sáng tạo của sinh viên.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
