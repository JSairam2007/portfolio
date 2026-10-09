/**
 * J SAIRAM - PORTFOLIO INTERACTION ENGINE
 * Handles Theme Toggling, Dynamic Typing, Project Filtering, Detail Modals, & Form Actions
 */

// --- 1. Project Detailed Data Dictionary ---
const PROJECT_DETAILS = {
  "aidly": {
    title: "AIDLY – AI-Powered Healthcare & Caregiver Platform",
    category: "AI + Healthcare & Web",
    badgeClass: "badge-primary",
    status: "Featured Prototype",
    description: "AIDLY is a full-featured digital healthcare portal conceptualized to connect patients, elderly individuals, and families with skilled, certified caregivers through an intuitive web interface with verified credentials and transparent pricing.",
    features: [
      "Verified Caregiver Directory: Rigorous verification workflows and transparent rate structures.",
      "Integrated AI Health Chatbot: Conversational assistant providing 24/7 medicine guidance and verified health information.",
      "Personalized Matching Engine: Recommends caregivers according to clinical specialization and proximity.",
      "Real-World Healthcare Feedback: Structured review loops with families and healthcare professionals."
    ],
    techStack: ["AI Chatbot", "Web Platform", "HealthTech", "UI/UX", "Identity Verification", "REST APIs"],
    takeaways: "Designed to dismantle the friction families face when seeking urgent home care, balancing empathy-driven interface design with rigorous safety and informational transparency."
  },

  "rural-skills": {
    title: "Skill-Building Platform for Rural Youth",
    category: "Web & EdTech",
    badgeClass: "badge-accent",
    status: "Social Impact Concept",
    description: "A targeted digital education initiative crafted to empower youth in rural areas by equipping them with industry-relevant vocational skills, digital literacy, and immediate employment pathways.",
    features: [
      "Structured Curricula: Practical skill modules designed for offline-first and low-bandwidth environments.",
      "Career & Job Gateway: Direct linkage between qualified local talent and regional employers.",
      "Multimedia Learning Hub: Interactive digital tutorials, assessments, and progress metrics.",
      "Architectural Presentation: Formulated as a comprehensive 7-slide strategic implementation proposal."
    ],
    techStack: ["Web Platform", "EdTech Architecture", "UI/UX Accessibility", "Digital Empowerment"],
    takeaways: "Addresses digital divide challenges in rural regions, focusing on low-bandwidth optimization and high-impact educational retention."
  },

  "smart-fuel": {
    title: "Smart Petrol/Fuel Level Monitoring System",
    category: "IoT & Security",
    badgeClass: "badge-warning",
    status: "Hardware Prototype",
    description: "An embedded hardware and sensor telemetry system designed to monitor vehicle fuel levels in real time, detecting unauthorized or abrupt fuel drains and triggering immediate anti-theft alarms.",
    features: [
      "Continuous Fuel-Level Telemetry: Accurate sensing of liquid levels in vehicular tanks.",
      "Anomalous Loss Detection: Heuristics distinguishing regular consumption from rapid theft or leakages.",
      "Immediate Threat Alerting: Triggers audible alarms and vehicle owner notifications upon sudden drops.",
      "Circuit Integration: Microcontroller interfacing with level transducers and warning peripherals."
    ],
    techStack: ["Embedded C", "IoT Sensors", "Microcontroller", "Circuit Prototyping", "Telemetry Analysis"],
    takeaways: "Demonstrated how hardware edge logic can protect automotive owners from widespread logistical and personal fuel theft vulnerabilities."
  },

  "automotive-nlp": {
    title: "AI-Based Multilingual Automotive Complaint Analysis",
    category: "AI & NLP",
    badgeClass: "badge-primary",
    status: "Automotive Tech",
    description: "An artificial intelligence processing pipeline built to analyze incoming customer service calls at automotive service centers across diverse regional languages and dialects.",
    features: [
      "Multilingual Dialect Parsing: Transcribes and processes customer complaints in multiple regional languages.",
      "Automatic Fault Extraction: Identifies specific automotive components (brakes, transmission, engine) mentioned in conversations.",
      "Sentiment & Urgency Scoring: Computes caller frustration indices to prioritize critical safety complaints.",
      "Service Center Analytics: Transforms messy conversational audio into structured operational dashboards."
    ],
    techStack: ["Python", "Natural Language Processing", "Speech-to-Text", "Sentiment Analysis", "Data Analytics"],
    takeaways: "Bridges the gap between regional customer dialect diversity and standardized automotive service logging, accelerating defect diagnosis."
  },

  "cars-hallucinate": {
    title: "When Cars Hallucinate: Failure of AI in Autonomous Driving",
    category: "Research & AI Safety",
    badgeClass: "badge-danger",
    status: "Academic Research",
    description: "An investigative research analysis exploring how deep neural networks and perception systems in self-driving vehicles misinterpret visual environments, leading to catastrophic decision failures.",
    features: [
      "Perception Anomaly Taxonomy: In-depth categorization of camera, LiDAR, and radar illusion triggers.",
      "Adversarial Road Conditions: Edge-case analysis of reflection, glare, shadow, and rare obstacle misclassifications.",
      "Decision-Making Chain Failures: How perceptual hallucinations propagate into erratic steering and braking commands.",
      "Safety Engineering Mitigations: Proposals for redundant fusion models and fail-safe perception guardrails."
    ],
    techStack: ["Autonomous Driving", "Computer Vision", "Deep Learning Safety", "Sensor Fusion", "Edge Cases"],
    takeaways: "Highlighted the urgent need for multi-sensor redundancy and rigorous adversarial testing before deploying Level 4/5 autonomy in human environments."
  },

  "auto-backend": {
    title: "Automotive Backend & Database Design",
    category: "Backend & DB",
    badgeClass: "badge-accent",
    status: "System Architecture",
    description: "A comprehensive data modeling and backend systems project exploring relational schemas, entity relationships, and transaction lifecycles for automotive dealership and service center ecosystems.",
    features: [
      "Relational Entity-Relationship (ER) Design: Robust schema connecting vehicles, owners, mechanics, and parts.",
      "Database Normalization: Optimized schemas minimizing redundancy and eliminating update anomalies.",
      "Automotive Business Logic: Modeled ticketing, inventory forecasting, warranty workflows, and billing.",
      "VS Code Project Engineering: Structured code organization and database query optimization."
    ],
    techStack: ["Relational Database", "SQL", "ER Diagrams", "Data Normalization", "Backend Architecture"],
    takeaways: "Deepened practical mastery of translating messy real-world business requirements into clean, mathematically normalized relational database systems."
  },

  "iot-lab": {
    title: "Sensor-Based Embedded Systems & IoT Lab",
    category: "Hardware & IoT",
    badgeClass: "badge-warning",
    status: "Hardware Lab",
    description: "An experimental hardware laboratory series focused on hands-on physical computing, Raspberry Pi interfacing, sensor data acquisition, and real-time edge actuators.",
    features: [
      "Raspberry Pi GPIO Interfacing: Direct software-to-pin communication using Python and C scripts.",
      "Sensor & Actuator Suites: Connected ultrasonic distance sensors, temperature monitors, relays, and servo motors.",
      "Edge Computing Paradigms: Executing preliminary signal filtering on-device prior to network transmission.",
      "Circuit Breadboarding: Safe electrical design, voltage dividers, and pull-up/pull-down resistor topologies."
    ],
    techStack: ["Raspberry Pi", "Sensors & Actuators", "Circuit Design", "GPIO Programming", "Edge Computing"],
    takeaways: "Ground-level understanding of physical electronic constraints, electrical noise filtering, and embedded operating systems."
  },

  "kaziranga": {
    title: "Kaziranga National Park – Nature Conservation Study",
    category: "Conservation Science",
    badgeClass: "badge-success",
    status: "Team Case Study",
    description: "An environmental research case study and structured presentation analyzing biodiversity preservation, one-horned rhinoceros conservation, and eco-tech interventions at Kaziranga National Park.",
    features: [
      "Biodiversity Threat Analysis: Evaluated flood patterns, habitat fragmentation, and poaching pressures.",
      "Surveillance & Tech Solutions: Explored drone patrols and camera-trap monitoring implementations.",
      "Concise Visual Synthesis: Crafted an impactful 4-slide nature-themed presentation for team dissemination.",
      "Actionable Policy Takeaways: Summarized balanced community involvement and strict ecological enforcement."
    ],
    techStack: ["Conservation Science", "Biodiversity Research", "Case Study", "Slide Deck Design", "Team Work"],
    takeaways: "Demonstrated multidisciplinary communication, distilling intricate ecological and geopolitical conservation problems into clear, compelling slides."
  },

  "special-ed": {
    title: "Digital Support for Special Education",
    category: "Assistive Tech & UX",
    badgeClass: "badge-primary",
    status: "Research & Design",
    description: "An empathetic research investigation proposing digital assistive software to support neurodivergent students who face hurdles with emotional regulation, social cues, and school peer relationships.",
    features: [
      "Emotional Cue Translation: Conceptualized interactive digital aids to help students decode facial and social expressions.",
      "Isolation & Self-Esteem Focus: Tackling peer isolation with gamified positive-reinforcement social loops.",
      "Inclusive User Experience: High-contrast, sensory-friendly UI parameters minimizing cognitive overload.",
      "Educator Integration: Dashboards allowing special educators and counselors to track student emotional comfort."
    ],
    techStack: ["Assistive Technology", "Inclusive UI/UX", "Special Education", "Empathy-Driven Engineering"],
    takeaways: "Reinforced that technology must serve the most vulnerable, highlighting accessibility principles that benefit all software users."
  }
};

// --- 2. Dynamic Typing Effect ---
const TYPING_PHRASES = [
  "AI & Machine Learning",
  "Full-Stack Web Development",
  "Embedded Systems & IoT",
  "Relational Database Design",
  "Kumaraguru College of Tech"
];

function initTypingAnimation() {
  const typingElement = document.getElementById("typingText");
  if (!typingElement) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const eraseSpeed = 50;
  const pauseEnd = 1600;

  function typeTick() {
    const currentPhrase = TYPING_PHRASES[phraseIndex];

    if (isDeleting) {
      charIndex--;
      typingElement.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      typingElement.textContent = currentPhrase.substring(0, charIndex);
    }

    let delay = isDeleting ? eraseSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % TYPING_PHRASES.length;
      delay = 400;
    }

    setTimeout(typeTick, delay);
  }

  typeTick();
}

// --- 3. Theme Toggle (Dark / Light with Persistence) ---
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem("sairam_portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? "dark" : "light");

  htmlRoot.setAttribute("data-theme", initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlRoot.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      htmlRoot.setAttribute("data-theme", newTheme);
      localStorage.setItem("sairam_portfolio_theme", newTheme);
      if (window.lucide) lucide.createIcons();
    });
  }
}

// --- 4. Mobile Menu Toggle ---
function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// --- 5. Project Filtering ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const categories = card.getAttribute("data-category") || "";

        if (filterVal === "all" || categories.includes(filterVal)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// --- 6. Project & Bio Modals ---
function initModals() {
  const modalOverlay = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalDoneBtn = document.getElementById("modalDoneBtn");
  const openButtons = document.querySelectorAll(".open-modal-btn");

  const bioModal = document.getElementById("bioModal");
  const bioCloseBtn = document.getElementById("bioModalCloseBtn");
  const bioDoneBtn = document.getElementById("bioDoneBtn");
  const viewResumeBtn = document.getElementById("viewResumeBtn");
  const bioContactBtn = document.getElementById("bioContactBtn");

  // Populate & open project modal
  function openProjectModal(projectId) {
    const project = PROJECT_DETAILS[projectId];
    if (!project) return;

    document.getElementById("modalTitle").textContent = project.title;
    const catBadge = document.getElementById("modalCategory");
    catBadge.textContent = project.category;
    catBadge.className = `category-badge ${project.badgeClass}`;

    document.getElementById("modalStatus").textContent = project.status;
    document.getElementById("modalDescription").textContent = project.description;
    document.getElementById("modalTakeaways").textContent = project.takeaways;

    // Features list
    const featuresList = document.getElementById("modalFeaturesList");
    featuresList.innerHTML = "";
    project.features.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      featuresList.appendChild(li);
    });

    // Tech pills
    const techStack = document.getElementById("modalTechStack");
    techStack.innerHTML = "";
    project.techStack.forEach(t => {
      const span = document.createElement("span");
      span.className = "tech-pill";
      span.textContent = t;
      techStack.appendChild(span);
    });

    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (window.lucide) lucide.createIcons();
  }

  function closeProjectModal() {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function openBioModal() {
    bioModal.classList.add("active");
    bioModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeBioModal() {
    bioModal.classList.remove("active");
    bioModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const pId = btn.getAttribute("data-project");
      openProjectModal(pId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener("click", closeProjectModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  // Bio modal handlers
  if (viewResumeBtn) viewResumeBtn.addEventListener("click", openBioModal);
  if (bioCloseBtn) bioCloseBtn.addEventListener("click", closeBioModal);
  if (bioDoneBtn) bioDoneBtn.addEventListener("click", closeBioModal);
  if (bioContactBtn) {
    bioContactBtn.addEventListener("click", () => {
      closeBioModal();
    });
  }
  if (bioModal) {
    bioModal.addEventListener("click", (e) => {
      if (e.target === bioModal) closeBioModal();
    });
  }

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      closeBioModal();
    }
  });

  // Modal contact button
  const modalContactBtn = document.getElementById("modalContactBtn");
  if (modalContactBtn) {
    modalContactBtn.addEventListener("click", () => {
      closeProjectModal();
    });
  }
}

// --- 7. Interactive Contact Form ---
function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusBox = document.getElementById("formStatus");

  if (!form || !statusBox) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const subject = document.getElementById("messageSubject").value.trim();
    const message = document.getElementById("messageBody").value.trim();

    if (!name || !email || !message) {
      statusBox.className = "form-status error";
      statusBox.textContent = "Please fill out all required fields.";
      return;
    }

    // Submit state simulation
    const submitBtn = document.getElementById("submitFormBtn");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending Message...";

    setTimeout(() => {
      statusBox.className = "form-status success";
      statusBox.textContent = `Thank you, ${name}! Your message has been prepared. In production, this can connect to your email API or Formspree.`;

      // Reset form
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      if (window.lucide) lucide.createIcons();

      setTimeout(() => {
        statusBox.style.display = "none";
      }, 7000);
    }, 800);
  });
}

// --- 8. Scroll Spy & Navbar Highlight ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// --- 9. DOM Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  initTheme();
  initTypingAnimation();
  initMobileMenu();
  initProjectFilters();
  initModals();
  initContactForm();
  initScrollSpy();
});
