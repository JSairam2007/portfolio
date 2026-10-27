# J Sairam – Portfolio Website

A personal portfolio website tailored for **J Sairam**, student at **Kumaraguru College of Technology (KCT)**, showcasing skills across AI & Machine Learning, Web Development, Embedded Systems & IoT, Database Architecture, and UI/UX Design.

---

## 🚀 Quick Start

1. **Open directly in browser**:
   - Double-click [`index.html`](file:///C:/Users/J%20Sairam/.gemini/antigravity/scratch/portfolio/index.html) in Windows File Explorer, or right-click and choose **Open with > Chrome / Edge / Firefox**.
   - No build tools, Node.js, or complex installations required!

2. **Run with Live Server (VS Code / Antigravity)**:
   - If using a live server extension, right-click `index.html` and click **Open with Live Server**.

---

## 📁 File Structure

```
portfolio/
├── index.html        # Semantic HTML5 webpage with structured sections
├── style.css         # Modern responsive CSS design system (Dark & Light theme support)
├── script.js         # Interactive engine (filtering, modal popups, theme toggle, typing effect)
└── README.md         # Guide and customization instructions
```

---

## 🌟 Featured Sections & Content

- **Hero & Profile Showcase**:
  - Greeting, dynamic typing role rotator, Kumaraguru College of Technology badge.
  - Interactive code terminal card showing core JSON profile data and live stats.
  - Quick action buttons ("View Projects", "Get In Touch", "Quick Bio").

- **About Me**:
  - Highlights background at Kumaraguru College of Technology.
  - Four pillars: Academic Background, AI & Smart Systems, Full-Stack & Databases, and IoT & Embedded Hardware.

- **Technical Competencies Matrix (6 Domains)**:
  1. **Programming**: C, Python, C++, Java (Basics), Data Structures & OOP.
  2. **AI & ML**: Machine Learning, NLP, Sentiment Analysis, AI Chatbots, Perception Failures in Autonomous Systems.
  3. **Web Development**: HTML5, Modern CSS3, JavaScript (ES6+), Responsive Design, UI/UX Architecture.
  4. **Database Management**: Relational Data Modeling, SQL, ER Diagrams, Normalization, Business Workflows.
  5. **UI/UX & Digital Design**: Human-Centered Design, Wireframing, Prototyping, Special Ed Accessibility.
  6. **Embedded Systems & IoT**: Raspberry Pi, Sensors & Actuators, Circuit Design, Edge Computing.

- **Featured Projects & Prototypes (9 Interactive Cards & Modals)**:
  1. **AIDLY** – AI-Powered Healthcare & Caregiver Platform
  2. **Skill-Building Platform for Rural Youth**
  3. **Smart Petrol/Fuel Level Monitoring System**
  4. **AI-Based Multilingual Automotive Complaint Analysis**
  5. **When Cars Hallucinate**: Failure of AI in Autonomous Driving
  6. **Automotive Backend & Database Design**
  7. **Sensor-Based Embedded Systems / IoT Lab**
  8. **Kaziranga National Park** – Nature Conservation Case Study
  9. **Digital Support for Special Education**

- **Filterable Category Tabs**:
  - All Projects (9)
  - AI & ML
  - Web & Platforms
  - IoT & Embedded
  - Research & Case Studies

- **Interactive Detail Modal**:
  - Click **"Project Details"** on any card to view detailed problem statements, feature breakdown, tech stack badges, and engineering takeaways.

- **ProtoSem — Innovation Engineering Journey (Weekly Learning Journal)**:
  - Documenting hands-on engineering, embedded systems, design thinking, and digital fabrication during the ProtoSem Fellowship.
  - Interactive weekly timeline & tab switcher (Week 0, Week 6, etc.).
  - Left panel: featured visual representation, category badge, and clickable prototype/activity gallery grid.
  - Right panel: weekly learning insights, activities performed, technologies & tools, skills learned, challenges & problem-solving callout, and key takeaways.
  - Interactive Lightbox: full preview of gallery items with title, caption, counter, and keyboard navigation.
  - Detailed Reflection Modal: comprehensive view of weekly engineering reflections and practical contributions.

- **Academic & Project Journey**:
  - Chronological timeline illustrating academic and technical milestones.

- **Contact & Connect Section**:
  - Direct contact cards (Email, Coimbatore / KCT, LinkedIn, GitHub).
  - Working client-side contact form with real-time feedback and validation.

---

## 📘 How to Add a New ProtoSem Week

To add a new week (e.g., Week 1, Week 2, Week 7...), open [`script.js`](file:///C:/Users/J%20Sairam/.gemini/antigravity/scratch/portfolio/script.js) and append a new object to the `PROTOSEM_WEEKS` array:

```javascript
{
  week: 1,
  title: "Your Week Title Here",
  category: "Domain / Category",
  badgeClass: "badge-accent", // badge-primary, badge-warning, badge-success, badge-accent
  status: "Completed",
  description: "One-sentence summary of what was accomplished this week.",
  overview: "Detailed narrative overview of the week's focus.",
  insights: [
    "Insight bullet point 1...",
    "Insight bullet point 2..."
  ],
  activities: [
    "Practical activity 1...",
    "Practical activity 2..."
  ],
  technologies: [
    "Tool 1", "Framework 2"
  ],
  skills: [
    "Skill 1", "Skill 2"
  ],
  challenges: "Describe the specific technical hurdle encountered and how it was solved.",
  keyTakeaways: [
    "Key engineering lesson 1...",
    "Key engineering lesson 2..."
  ],
  featuredVisual: {
    icon: "cpu", // Lucide icon name (e.g. cpu, layers, circuit-board, code)
    badge: "MODULE BADGE",
    title: "Visual Card Title",
    sub: "Short subtitle"
  },
  gallery: [
    {
      title: "Activity / Screenshot Title",
      caption: "Detailed explanation of what this artifact or photo represents.",
      alt: "Meaningful accessibility text",
      icon: "camera"
    }
  ],
  reflection: "Personal engineering reflection on what was learned and how it changes your approach."
}
```

The weekly tab selector, navigation buttons, and detail modals will automatically render the new week!

---

## 🎨 Features & Customization

- **Dark / Light Theme Toggle**: Seamlessly switch between futuristic dark glassmorphism and clean high-contrast light mode with localStorage persistence.
- **Easy Updates**:
  - To change contact email or social links, search for `sairam.j@example.com` or `https://github.com` in `index.html`.
  - To add more projects, update `PROJECT_DETAILS` in `script.js` and add a corresponding card in `index.html`.

---

## 🌐 Free Deployment Options

- **GitHub Pages**:
  1. Create a GitHub repo named `portfolio` (or `<username>.github.io`).
  2. Push these files to the repository.
  3. Under repo Settings -> Pages, select branch `main` and save. Your site is live in seconds!
- **Vercel / Netlify**:
  - Simply drag and drop this `portfolio` folder directly into the Netlify Drop dashboard for instant free hosting with SSL.
