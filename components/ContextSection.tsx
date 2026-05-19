"use client";
import { motion } from "framer-motion";

const VP = { once: true, margin: "-80px" };

export function ContextSection() {
  return (
    <section
      id="context"
      className="section section-border-top"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container">
        {/* Volume label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ duration: 0.55 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 44,
          }}
        >
          <span className="step-badge" aria-label="Volume I">I</span>
          <span className="vol-label">Volume I — Tình Huống</span>
        </motion.div>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.75, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--fg)",
                marginBottom: 20,
              }}
            >
              Hai ứng viên,
              <br />
              <em style={{ color: "var(--accent)" }}>một buổi phỏng vấn.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="drop-cap"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.08rem",
                color: "var(--muted-fg)",
                lineHeight: 1.85,
                marginBottom: 32,
              }}
            >
              Hai sinh viên cùng tham gia phỏng vấn tại một tập đoàn lớn. Một
              người có CV rất đẹp, một người có CV khá đơn giản.{" "}
              <span style={{ color: "var(--fg)", fontStyle: "italic" }}>
                Nếu chỉ nhìn hồ sơ, bạn sẽ chọn ai?
              </span>
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, delay: 0.38 }}
              style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
            >
              {["Tuyển Dụng Thực Tế", "Đánh Giá Ứng Viên", "Triết Học Ứng Dụng"].map(
                (t) => (
                  <span key={t} className="tag-brass">
                    {t}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right: Classical quote card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="card-ornate"
            style={{ padding: "40px 36px", overflow: "hidden" }}
          >
            {/* Brass left accent bar */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 3,
                background: "linear-gradient(to bottom, var(--accent), transparent)",
                borderRadius: "4px 0 0 4px",
              }}
            />

            <div style={{ paddingLeft: 20 }}>
              {/* Decorative quote glyph */}
              <div
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 56,
                  lineHeight: 1,
                  color: "rgba(201,169,98,0.2)",
                  fontStyle: "italic",
                  marginBottom: 12,
                  fontWeight: 400,
                }}
              >
                "
              </div>

              <p className="classical-quote" style={{ marginBottom: 28, color: "var(--muted-fg)" }}>
                Trong cuộc sống, chúng ta thường bị thu hút bởi những thứ bề
                ngoài trước khi tìm hiểu sâu hơn về bản chất bên trong.
              </p>

              {/* Stats row */}
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: 24,
                  display: "flex",
                  gap: 24,
                }}
              >
                {[
                  { num: "2", label: "Ứng Viên" },
                  { num: "1", label: "Kết Quả" },
                  { num: "IV", label: "Phạm Trù" },
                ].map((stat, i, arr) => (
                  <div key={stat.label} style={{ display: "flex", alignItems: "stretch", gap: 24 }}>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.8rem",
                          fontWeight: 500,
                          color: "var(--accent)",
                          lineHeight: 1,
                          marginBottom: 4,
                        }}
                      >
                        {stat.num}
                      </div>
                      <div className="vol-label" style={{ color: "var(--muted-fg)" }}>
                        {stat.label}
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        aria-hidden="true"
                        style={{ width: 1, background: "var(--border)", alignSelf: "stretch" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive mobile */}
      <style>{`
        @media (max-width: 768px) {
          #context .section-container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
