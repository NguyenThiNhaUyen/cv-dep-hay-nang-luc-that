export const candidates = [
  {
    id: "student-a",
    name: "Nguyễn Văn A",
    code: "CANDIDATE_A.CV",
    type: "PHENOMENON_HEAVY",
    degree: "Bằng Giỏi",
    signal: "CV đẹp / keyword mạnh / thực chiến yếu",
    avatar: "A",
    neon: "cyan",
    scanScore: 42,
    cvSignals: [
      "Canva CV hoàn hảo, bố cục sáng, ngôn ngữ rất chuyên nghiệp.",
      "Keyword nổi bật: Proactive, Leadership, Strategic Thinking.",
      "Khi gặp bài toán doanh nghiệp: phản hồi chung chung, thiếu giải pháp.",
    ],
    hiddenReality:
      "Hình thức rất mạnh, nhưng nội dung năng lực chưa được hiện thực hóa trong phỏng vấn.",
    verdict:
      "A không thất bại vì CV đẹp. A thất bại vì hiện tượng đẹp không đủ thay thế bản chất năng lực.",
    interviewFeedback: {
      title: "WARNING: PHENOMENON BIAS DETECTED",
      text: "Bạn đang cho CV đẹp quyền quyết định quá lớn. Phép biện chứng duy vật yêu cầu đi từ hiện tượng bên ngoài đến bản chất bên trong, rồi kiểm chứng bằng thực tiễn.",
    },
    rejectFeedback: {
      title: "SCAN CLEAN: FORM NOT ENOUGH",
      text: "Bạn không phủ nhận thành tích của A, nhưng yêu cầu hình thức phải chứng minh được nội dung. Đây là thao tác tư duy biện chứng hợp lý.",
    },
  },
  {
    id: "student-b",
    name: "Trần Thị B",
    code: "CANDIDATE_B.REAL",
    type: "ESSENCE_ACTIVE",
    degree: "Bằng Khá",
    signal: "CV đơn giản / giải pháp thật / năng lực bật sáng",
    avatar: "B",
    neon: "magenta",
    scanScore: 91,
    cvSignals: [
      "CV văn bản đơn giản, ít trang trí, không phóng đại thành tích.",
      "Trong phỏng vấn, B phân tích đúng vấn đề công ty đang gặp.",
      "B đề xuất hướng xử lý có thể áp dụng và được chọn vào vòng tiếp theo.",
    ],
    hiddenReality:
      "Hình thức giản dị, nhưng nội dung năng lực xuất hiện rõ trong thực tiễn.",
    verdict:
      "B được chọn không phải vì may mắn hay quan hệ, mà vì khả năng đã chuyển hóa thành hiện thực.",
    interviewFeedback: {
      title: "CORE DETECTED: ESSENCE OVER SURFACE",
      text: "Bạn đã nhìn thấy năng lực trong hành động. Đây là cách đánh giá đặt trọng tâm vào nội dung, nguyên nhân thực tế và khả năng đã được hiện thực hóa.",
    },
    rejectFeedback: {
      title: "ERROR: FORM FILTER TOO AGGRESSIVE",
      text: "Nếu loại B chỉ vì CV đơn giản, hệ thống đã để hình thức che khuất nội dung. Năng lực thật không luôn phát sáng theo kiểu hào nhoáng.",
    },
  },
];

export const diagnostics = [
  {
    id: "essence-phenomenon",
    index: "01",
    title: "Bản chất ↔ Hiện tượng",
    command: "RUN /dialectics/essence.scan",
    glitch: "SURFACE ≠ CORE",
    definition:
      "Hiện tượng là cái biểu hiện ra bên ngoài; bản chất là mối liên hệ sâu bên trong quyết định giá trị thật của sự vật.",
    caseA:
      "A có hiện tượng rất đẹp: bằng Giỏi, CV chỉn chu, keyword mạnh. Nhưng bản chất năng lực chưa được chứng minh khi gặp vấn đề thực tế.",
    caseB:
      "B có hiện tượng giản dị: CV đơn giản, bằng Khá. Nhưng bản chất năng lực lộ rõ qua cách giải bài toán công ty.",
    output:
      "Không đánh giá con người chỉ qua lớp giao diện đầu tiên. Cần quét sâu vào năng lực được kiểm chứng.",
  },
  {
    id: "content-form",
    index: "02",
    title: "Nội dung ↔ Hình thức",
    command: "COMPARE /cv.form /ability.content",
    glitch: "PRETTY FILE, EMPTY PROCESS?",
    definition:
      "Nội dung là năng lực, phẩm chất, tư duy thật. Hình thức là cách nội dung được trình bày qua CV, bằng cấp, lời nói.",
    caseA:
      "A có hình thức tốt, nhưng hình thức chưa phản ánh đủ nội dung năng lực thực chiến.",
    caseB:
      "B có hình thức khiêm tốn, nhưng nội dung mạnh vì giải pháp đưa ra có giá trị trong phỏng vấn.",
    output:
      "Hình thức cần phục vụ nội dung. Nếu hình thức tách khỏi nội dung, nó trở thành lớp vỏ gây nhiễu.",
  },
  {
    id: "cause-effect",
    index: "03",
    title: "Nguyên nhân ↔ Kết quả",
    command: "TRACE /outcome/root-cause",
    glitch: "LUCK IS NOT A ROOT CAUSE",
    definition:
      "Nguyên nhân là những yếu tố tạo ra sự biến đổi; kết quả là điều xuất hiện do nguyên nhân trong điều kiện cụ thể.",
    caseA:
      "A trượt không phải đơn giản vì thiếu may mắn, mà vì chưa tạo ra nguyên nhân thuyết phục trong vòng phỏng vấn.",
    caseB:
      "B được chọn vì tạo ra nguyên nhân rõ ràng: hiểu vấn đề, phân tích đúng và đề xuất giải pháp.",
    output:
      "Khi phân tích kết quả, không nên đổ cho may rủi nếu có thể truy vết nguyên nhân thực tiễn.",
  },
  {
    id: "possibility-reality",
    index: "04",
    title: "Khả năng ↔ Hiện thực",
    command: "BOOT /potential/to-reality",
    glitch: "POTENTIAL NEEDS EXECUTION",
    definition:
      "Khả năng là cái có thể xảy ra khi có điều kiện; hiện thực là khả năng đã được thực hiện trong đời sống.",
    caseA:
      "A có khả năng phát triển nhờ nền tảng học tập tốt, nhưng khả năng ấy chưa thành hiện thực trong phỏng vấn.",
    caseB:
      "B biến khả năng thành hiện thực bằng hành động cụ thể: giải quyết vấn đề doanh nghiệp đặt ra.",
    output:
      "Năng lực chỉ có sức nặng khi được chạy trong môi trường thực tiễn, không chỉ nằm trong mô tả hồ sơ.",
  },
];

export const quizQuestions = [
  {
    question: "Hệ thống nhầm CV đẹp của A với năng lực thật là lỗi gì?",
    options: [
      "Nhầm hiện tượng với bản chất",
      "Nhầm nguyên nhân với màu sắc",
      "Nhầm khả năng với sở thích",
    ],
    answerIndex: 0,
    explanation:
      "CV đẹp là hiện tượng bên ngoài; bản chất năng lực phải được kiểm chứng qua thực tiễn.",
  },
  {
    question: "Trong ca tuyển dụng này, “nội dung” nằm ở đâu?",
    options: [
      "Template CV",
      "Keyword tiếng Anh",
      "Năng lực giải quyết vấn đề",
    ],
    answerIndex: 2,
    explanation:
      "Nội dung là năng lực thật, còn CV và keyword là hình thức biểu hiện.",
  },
  {
    question: "B được chọn chủ yếu vì nguyên nhân nào?",
    options: [
      "B có quan hệ nội bộ",
      "B giải được bài toán công ty",
      "B có CV nhiều màu hơn",
    ],
    answerIndex: 1,
    explanation:
      "Kết quả B được chọn xuất phát từ nguyên nhân thực tế: năng lực được thể hiện trong phỏng vấn.",
  },
  {
    question: "A có nền tảng tốt nhưng chưa vượt vòng đầu cho thấy điều gì?",
    options: [
      "Khả năng chưa tự động trở thành hiện thực",
      "Bằng Giỏi luôn vô nghĩa",
      "Phỏng vấn không cần thiết",
    ],
    answerIndex: 0,
    explanation:
      "Khả năng cần điều kiện và hành động phù hợp để chuyển hóa thành hiện thực.",
  },
  {
    question: "Cách nhìn biện chứng nhất khi tuyển dụng là gì?",
    options: [
      "Chỉ xem giao diện CV",
      "Chỉ tin cảm giác đầu tiên",
      "Đánh giá trong mối liên hệ với thực tiễn",
    ],
    answerIndex: 2,
    explanation:
      "Phép biện chứng duy vật yêu cầu xem xét sự vật trong mối liên hệ, vận động và thực tiễn cụ thể.",
  },
];

export const finalSummary =
  "Không nên đánh giá con người chỉ qua biểu hiện bên ngoài. Cần nhìn nhận bản chất, nội dung, nguyên nhân và khả năng được hiện thực hóa trong thực tiễn.";

export const aiAppendix = [
  {
    title: "TOOLS",
    text: "ChatGPT, Codex, Vercel.",
  },
  {
    title: "PURPOSE",
    text: "Tạo cấu trúc UI, hỗ trợ viết code, gợi ý dàn ý nội dung.",
  },
  {
    title: "LIMITATION",
    text: "AI chỉ hỗ trợ bản nháp; thành viên nhóm kiểm chứng nội dung với giáo trình chính thức và chỉnh sửa thủ công trước khi nộp.",
  },
];
