const quizData = [
    // 1. Creation & Innovation
    {
        question: "นวัตกรรม (Innovation) แตกต่างจาก ความคิดสร้างสรรค์ (Creativity) อย่างไร?",
        options: ["ความคิดสร้างสรรค์คือการคิดสิ่งใหม่ แต่นวัตกรรมคือการทำให้เกิดขึ้นจริงและมีคุณค่า", "เหมือนกันทุกประการ", "นวัตกรรมใช้อุปกรณ์ราคาแพงกว่า", "ความคิดสร้างสรรค์ใช้กับศิลปะเท่านั้น"],
        answer: 0,
        category: "Creation & Innovation"
    },
    {
        question: "Design Thinking มีความสำคัญอย่างไรต่อนวัตกรรม?",
        options: ["ช่วยให้เข้าใจปัญหาของผู้ใช้และสร้างทางแก้ไขที่ตรงจุด", "ช่วยให้ออกแบบสวยขึ้น", "ช่วยลดต้นทุนการผลิต", "ไม่ต้องใช้ความคิดสร้างสรรค์"],
        answer: 0,
        category: "Creation & Innovation"
    },
    {
        question: "กระบวนการใดที่ไม่ใช่ส่วนหนึ่งของ Design Thinking?",
        options: ["Empathize", "Define", "Ideate", "Ignore"],
        answer: 3,
        category: "Creation & Innovation"
    },
    {
        question: "Disruptive Innovation คืออะไร?",
        options: ["นวัตกรรมที่เปลี่ยนแปลงตลาดหรือพฤติกรรมผู้บริโภคอย่างสิ้นเชิง", "นวัตกรรมที่ค่อยเป็นค่อยไป", "นวัตกรรมที่ไม่ประสบความสำเร็จ", "การลอกเลียนแบบสินค้า"],
        answer: 0,
        category: "Creation & Innovation"
    },
    {
        question: "ทักษะใดสำคัญที่สุดสำหรับนกรสร้างสรรค์?",
        options: ["การเขียนโปรแกรม", "ความอยากรู้อยากเห็นและการสังเกต", "การคิดเลขเร็ว", "การวาดภาพ"],
        answer: 1,
        category: "Creation & Innovation"
    },
    {
        question: "Example of a Disruptive Technology?",
        options: ["Streaming Services (Netflix)", "CD Player", "Newspaper", "Landline Phone"],
        answer: 0,
        category: "Creation & Innovation"
    },
    {
        question: "การระดมสมอง (Brainstorming) มีจุดประสงค์เพื่ออะไร?",
        options: ["หาข้อสรุปทันที", "ได้ปริมาณไอเดียให้มากที่สุดโดยไม่ตัดสิน", "จับผิดไอเดียผู้อื่น", "พักผ่อน"],
        answer: 1,
        category: "Creation & Innovation"
    },
    {
        question: "MVP (Minimum Viable Product) คืออะไร?",
        options: ["สินค้าที่สมบูรณ์แบบที่สุด", "สินค้าที่มีฟีเจอร์น้อยที่สุดที่พอจะปล่อยสู่ตลาดเพื่อทดสอบสมมติฐาน", "สินค้าที่ราคาถูกที่สุด", "สินค้าที่ไม่มีใครต้องการ"],
        answer: 1,
        category: "Creation & Innovation"
    },
    {
        question: "อะไรคือหัวใจสำคัญของการสร้างนวัตกรรมในองค์กร?",
        options: ["วัฒนธรรมที่ยอมรับความล้มเหลวเพื่อการเรียนรู้", "กฎระเบียบที่เคร่งครัด", "การทำงานแยกส่วน", "การลงโทษคนทำผิด"],
        answer: 0,
        category: "Creation & Innovation"
    },
    {
        question: "Sprint ในบริบทของ Agile คืออะไร?",
        options: ["การวิ่งระยะสั้น", "ช่วงเวลาสั้นๆ ที่กำหนดไว้เพื่อทำงานชิ้นหนึ่งให้สำเร็จ", "ชื่อโปรแกรม", "การประชุมประจำปี"],
        answer: 1,
        category: "Creation & Innovation"
    },

    // 2. Web Development
    {
        question: "HTML ย่อมาจากอะไร?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: 0,
        category: "Web Development"
    },
    {
        question: "แท็กใดใช้สำหรับสร้างลิงก์?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1,
        category: "Web Development"
    },
    {
        question: "CSS ใช้ทำอะไร?",
        options: ["กำหนดโครงสร้างเว็บ", "จัดการฐานข้อมูล", "ตกแต่งหน้าตาเว็บไซต์", "ประมวลผลฝั่งเซิร์ฟเวอร์"],
        answer: 2,
        category: "Web Development"
    },
    {
        question: "JavaScript คืออะไร?",
        options: ["โปรแกรมแต่งรูป", "ภาษาโปรแกรมที่ทำให้เว็บมีการโต้ตอบได้", "ภาษาเดียวกับ Java", "ฐานข้อมูล"],
        answer: 1,
        category: "Web Development"
    },
    {
        question: "Responsive Design หมายถึงอะไร?",
        options: ["เว็บที่โหลดเร็ว", "เว็บที่รองรับการแสดงผลบนทุกขนาดหน้าจอ", "เว็บที่มีสีสันสวยงาม", "เว็บที่มีระบบสมาชิก"],
        answer: 1,
        category: "Web Development"
    },
    {
        question: "DOM ย่อมาจากอะไร?",
        options: ["Document Object Model", "Data Object Mode", "Digital Ordinance Model", "Desktop Oriented Mode"],
        answer: 0,
        category: "Web Development"
    },
    {
        question: "Framework ใดที่เป็นที่นิยมสำหรับ JavaScript?",
        options: ["Laravel", "Django", "React", "Flask"],
        answer: 2,
        category: "Web Development"
    },
    {
        question: "API ย่อมาจากอะไร?",
        options: ["Application Programming Interface", "Advanced Program Internet", "Apple Pie Ingredients", "Automated Processing Input"],
        answer: 0,
        category: "Web Development"
    },
    {
        question: "Git คืออะไร?",
        options: ["ภาษาเขียนเว็บ", "ระบบจัดการเวอร์ชัน (Version Control System)", "โปรแกรมวาดรูป", "เว็บเบราว์เซอร์"],
        answer: 1,
        category: "Web Development"
    },
    {
        question: "HTTP Status Code 404 หมายถึงอะไร?",
        options: ["Success", "Server Error", "Not Found", "Forbidden"],
        answer: 2,
        category: "Web Development"
    },

    // 3. UX/UI Design
    {
        question: "UX ย่อมาจากอะไร?",
        options: ["User Experience", "User Interface", "Universal Xylophone", "Unknown X-ray"],
        answer: 0,
        category: "UX/UI Design"
    },
    {
        question: "UI ย่อมาจากอะไร?",
        options: ["User Interface", "User Interaction", "Unique Identity", "Ultra Internet"],
        answer: 0,
        category: "UX/UI Design"
    },
    {
        question: "Wireframe คืออะไร?",
        options: ["กรอบรูป", "โครงสร้างร่างแบบหยาบๆ ของหน้าเว็บหรือแอป", "สายไฟ", "หน้าเว็บที่เสร็จสมบูรณ์"],
        answer: 1,
        category: "UX/UI Design"
    },
    {
        question: "สีโทนเย็น (Cool Colors) มักสื่อถึงอารมณ์ใด?",
        options: ["ตื่นเต้น เร่าร้อน", "สงบ น่าเชื่อถือ", "หิว", "อันตราย"],
        answer: 1,
        category: "UX/UI Design"
    },
    {
        question: "White Space (Negative Space) มีประโยชน์อย่างไร?",
        options: ["ทำให้เว็บดูโล่งเกินไป", "ช่วยให้อ่านง่ายและโฟกัสจุดสำคัญได้ดีขึ้น", "เสียพื้นที่โดยเปล่าประโยชน์", "ไม่มีประโยชน์"],
        answer: 1,
        category: "UX/UI Design"
    },
    {
        question: "Persona ในงาน UX คืออะไร?",
        options: ["บุคคลที่มีชื่อเสียง", "ตัวแทนกลุ่มผู้ใช้เป้าหมายที่สมมติขึ้น", "พนักงานในบริษัท", "โปรแกรมเมอร์"],
        answer: 1,
        category: "UX/UI Design"
    },
    {
        question: "Consistency (ความสม่ำเสมอ) สำคัญอย่างไรในงานดีไซน์?",
        options: ["ไม่สำคัญ", "ช่วยให้ผู้ใช้เรียนรู้การใช้งานได้เร็วและไม่สับสน", "ทำให้งานดูน่าเบื่อ", "ทำให้ใช้เวลานาน"],
        answer: 1,
        category: "UX/UI Design"
    },
    {
        question: "Usability Testing คือการทดสอบอะไร?",
        options: ["ทดสอบความสวยงาม", "ทดสอบความยากง่ายในการใช้งานจริงกับผู้ใช้", "ทดสอบความเร็วเน็ต", "ทดสอบความทนทาน"],
        answer: 1,
        category: "UX/UI Design"
    },
    {
        question: "Contrast (ความเปรียบต่าง) ช่วยเรื่องอะไร?",
        options: ["ทำให้อ่านยาก", "แยกองค์ประกอบและสร้างจุดเด่น", "ทำให้กลมกลืน", "ลดขนาดไฟล์"],
        answer: 1,
        category: "UX/UI Design"
    },
    {
        question: "โปรแกรมใดนิยมใช้ในงาน UI Design?",
        options: ["Notepad", "Figma", "Excel", "Calculator"],
        answer: 1,
        category: "UX/UI Design"
    },

    // 4. Digital Strategy
    {
        question: "Digital Strategy คืออะไร?",
        options: ["การซ่อมคอมพิวเตอร์", "การวางแผนใช้เทคโนโลยีดิจิทัลเพื่อบรรลุเป้าหมายทางธุรกิจ", "การเล่นเกมออนไลน์", "การขายของตลาดนัด"],
        answer: 1,
        category: "Digital Strategy"
    },
    {
        question: "SWOT Analysis ประกอบด้วยอะไรบ้าง?",
        options: ["Strengths, Weaknesses, Opportunities, Threats", "Sell, Win, Own, Try", "Sweet, Wet, Old, Tall", "Social, Web, Online, Team"],
        answer: 0,
        category: "Digital Strategy"
    },
    {
        question: "KPI ย่อมาจากอะไร?",
        options: ["Key Performance Indicator", "Key Point Index", "Keep People Interested", "Know Plan Idea"],
        answer: 0,
        category: "Digital Strategy"
    },
    {
        question: "Target Audience หมายถึงใคร?",
        options: ["พนักงานทุกคน", "กลุ่มเป้าหมายหรือลูกค้าที่เราต้องการสื่อสารด้วย", "คู่แข่ง", "ใครก็ได้"],
        answer: 1,
        category: "Digital Strategy"
    },
    {
        question: "Content Marketing คืออะไร?",
        options: ["การโฆษณาขายตรง", "การสร้างและส่งมอบเนื้อหาที่มีคุณค่าเพื่อดึงดูดกลุ่มเป้าหมาย", "การสแปมเมล", "การทำป้ายไวนิล"],
        answer: 1,
        category: "Digital Strategy"
    },
    {
        question: "Channel ใดเหมาะสมสำหรับ B2B Marketing มากที่สุด?",
        options: ["TikTok", "LinkedIn", "Snapchat", "Tinder"],
        answer: 1,
        category: "Digital Strategy"
    },
    {
        question: "Conversion Rate คืออะไร?",
        options: ["อัตราแลกเปลี่ยนเงิน", "สัดส่วนของผู้ที่กระทำตามเป้าหมายต่อจำนวนผู้เข้าชมทั้งหมด", "ความเร็วอินเทอร์เน็ต", "จำนวนพนักงาน"],
        answer: 1,
        category: "Digital Strategy"
    },
    {
        question: "Pain Point ของลูกค้าคืออะไร?",
        options: ["จุดที่ลูกค้าเจ็บ", "ปัญหาหรือความต้องการที่ลูกค้ากำลังเผชิญอยู่", "จุดที่ตั้งร้านค้า", "ราคาสินค้า"],
        answer: 1,
        category: "Digital Strategy"
    },
    {
        question: "Omnichannel หมายถึงอะไร?",
        options: ["มีช่องทางเดียว", "การเชื่อมโยงทุกช่องทางการขายและการสื่อสารให้เป็นหนึ่งเดียว", "การไม่มีหน้าร้าน", "การขายเฉพาะออนไลน์"],
        answer: 1,
        category: "Digital Strategy"
    },
    {
        question: "Brand Awareness คืออะไร?",
        options: ["ยอดขาย", "การที่ผู้คนรับรู้และจดจำแบรนด์ได้", "กำไรสุทธิ", "จำนวนสาขา"],
        answer: 1,
        category: "Digital Strategy"
    },

    // 5. SEO & Performance
    {
        question: "SEO ย่อมาจากอะไร?",
        options: ["Search Engine Optimization", "Social Engine Online", "Super Easy Option", "Site Error Output"],
        answer: 0,
        category: "SEO & Performance"
    },
    {
        question: "ทำไมหน้าเว็บต้องโหลดเร็ว?",
        options: ["ไม่สำคัญ", "เพื่อประสบการณ์ผู้ใช้ที่ดี (UX) และอันดับ SEO ที่ดีขึ้น", "เพื่อให้เปลืองเน็ตน้อยลง", "เพื่อให้เจ้าของเว็บดีใจ"],
        answer: 1,
        category: "SEO & Performance"
    },
    {
        question: "Alt Text ในรูปภาพมีไว้เพื่ออะไร?",
        options: ["ตกแต่งรูป", "อธิบายรูปภาพสำหรับ Search Engine และผู้พิการทางสายตา", "ซ่อนรูป", "ทำให้รูปชัดขึ้น"],
        answer: 1,
        category: "SEO & Performance"
    },
    {
        question: "Keyword คืออะไร?",
        options: ["รหัสผ่าน", "คำค้นหาที่ผู้ใช้ใช้ใน Search Engine", "ชื่อเว็บไซต์", "ยี่ห้อคีย์บอร์ด"],
        answer: 1,
        category: "SEO & Performance"
    },
    {
        question: "Backlink คืออะไร?",
        options: ["ลิงก์เสีย", "ลิงก์จากเว็บไซต์อื่นที่ชี้มายังเว็บไซต์เรา", "ลิงก์ภายในเว็บตัวเอง", "ปุ่มกดกลับ"],
        answer: 1,
        category: "SEO & Performance"
    },
    {
        question: "Meta Description คืออะไร?",
        options: ["โค้ดลับ", "ข้อความสรุปเนื้อหาหน้าเว็บที่แสดงในผลการค้นหา", "ชื่อเรื่อง", "ที่อยู่บริษัท"],
        answer: 1,
        category: "SEO & Performance"
    },
    {
        question: "Lazy Loading ช่วยเรื่อง Performance อย่างไร?",
        options: ["ทำให้โหลดช้าลง", "โหลดรูปภาพหรือคอนเทนต์เมื่อจำเป็นเท่านั้น (เช่น เมื่อเลื่อนถึง)", "โหลดทุกอย่างพร้อมกัน", "ไม่ช่วยอะไร"],
        answer: 1,
        category: "SEO & Performance"
    },
    {
        question: "HTTPS มีความสำคัญอย่างไร?",
        options: ["ทำให้เว็บสวยขึ้น", "เพิ่มความปลอดภัยในการรับส่งข้อมูลและส่งผลดีต่อ SEO", "ทำให้เว็บราคาแพง", "ไม่มีผลอะไร"],
        answer: 1,
        category: "SEO & Performance"
    },
    {
        question: "Mobile-First Indexing คืออะไร?",
        options: ["Google ให้ความสำคัญกับเว็บไซต์เวอร์ชันมือถือในการจัดอันดับ", "ทำเว็บให้คอมพิวเตอร์ก่อน", "ดัชนีหุ้นมือถือ", "การโฆษณาบนมือถือ"],
        answer: 0,
        category: "SEO & Performance"
    },
    {
        question: "เครื่องมือใดใช้ตรวจสอบ Performance ของเว็บไซต์?",
        options: ["Photoshop", "Google PageSpeed Insights", "Word", "PowerPoint"],
        answer: 1,
        category: "SEO & Performance"
    }
];
