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

// --- 9. ProtoSem Internship & Learning Journal Data & Controller ---
const PROTOSEM_WEEKS = [
  {
    week: 0,
    title: "Orientation & Team Building",
    category: "Orientation & Methodology",
    badgeClass: "badge-primary",
    status: "Completed",
    description: "Started the ProtoSem journey through program orientation, team-building activities, personality assessment, and an introduction to workplace organization.",
    overview: "Week 0 focused on understanding the ProtoSem program and preparing for the learning journey ahead. The orientation introduced the program, its learning environment, and the importance of collaboration and structured work practices.",
    insights: [
      "The orientation introduced the program, its learning environment, and the importance of collaboration and structured work practices.",
      "The Marshmallow Tower Challenge provided an opportunity to work with others, share ideas, and approach a practical task within a limited time.",
      "The 16 Personalities assessment introduced personality-based reflection and helped identify individual working preferences.",
      "The 5S methodology workshop introduced the importance of organizing workspaces, maintaining order, and building disciplined working habits."
    ],
    activities: [
      "ProtoSem orientation and learning framework introduction.",
      "Team-building activities focused on interdisciplinary communication.",
      "Marshmallow Tower Challenge practical structural exercise.",
      "16 Personalities assessment for self-awareness and team dynamics.",
      "Introduction to the 5S methodology for organized workspace management."
    ],
    technologies: [
      "5S Methodology",
      "16 Personalities Assessment",
      "Team Building",
      "Collaborative Problem-Solving"
    ],
    skills: [
      "Teamwork",
      "Communication",
      "Creativity",
      "Critical Thinking",
      "Problem Solving"
    ],
    challenges: "The Marshmallow Tower Challenge involved developing a stable structure while working within a limited time. The activity highlighted the importance of collaboration, planning, and testing ideas.",
    keyTakeaways: [
      "Understand the learning environment.",
      "Recognize the importance of teamwork.",
      "Apply structured thinking to practical challenges.",
      "Understand the value of workplace organization.",
      "Reflect on individual working preferences."
    ],
    featuredVisual: {
      icon: "compass",
      badge: "PROTOSEM ONBOARDING",
      title: "Orientation & 5S Foundations",
      sub: "Team-building, 16 Personalities assessment, and workplace discipline"
    },
    gallery: [
      {
        title: "5S Methodology Workshop",
        caption: "Introduction to organizing workspaces, maintaining order, and building disciplined working habits.",
        alt: "5S Methodology workspace organization principles",
        icon: "layout-grid"
      },
      {
        title: "Marshmallow Tower Challenge",
        caption: "Hands-on collaborative challenge to develop a stable structure within a constrained time frame.",
        alt: "Marshmallow Tower practical teamwork activity",
        icon: "users"
      },
      {
        title: "16 Personalities Assessment",
        caption: "Personality-based reflection mapping individual working styles and collaborative strengths.",
        alt: "16 Personalities self-assessment framework",
        icon: "user-check"
      }
    ],
    reflection: "Week 0 established the mindset and behavioral foundation for the entire ProtoSem journey. Learning how different personalities collaborate, experiencing time-constrained prototyping in the Marshmallow Tower Challenge, and internalizing the 5S methodology demonstrated that disciplined organization and clear team communication are as essential to engineering success as technical skills."
  },
  {
    week: 6,
    title: "Microcontrollers, Embedded Systems & Electronics",
    category: "Embedded Systems & Electronics",
    badgeClass: "badge-warning",
    status: "Completed",
    description: "Attended a full-day Arduino and basic electronics workshop, explored microcontrollers and electronic component circuits, and developed an ESP32-based game called Dote Move.",
    overview: "Week 6 focused on understanding microcontrollers, microprocessors, and the fundamentals of embedded systems. The Arduino and basic electronics workshop introduced practical electronic circuits and the role of electronic components in embedded applications. The activities helped connect theoretical concepts with hardware assembly and practical implementation.",
    insights: [
      "Week 6 focused on understanding microcontrollers, microprocessors, and the fundamentals of embedded systems.",
      "The Arduino and basic electronics workshop introduced practical electronic circuits and the role of electronic components in embedded applications.",
      "The activities helped connect theoretical concepts with hardware assembly and practical implementation.",
      "Gained hands-on experience assembling and soldering an electronic circuit powered by a battery source.",
      "Developed a game called Dote Move using an ESP32, where the objective was to dodge falling dots.",
      "As the player's score increased, the game became more challenging, with the speed and number of falling dots increasing.",
      "Explored game logic, score-based difficulty, and the implementation of an interactive project using a microcontroller."
    ],
    activities: [
      "Attended a full-day Arduino and basic electronics workshop.",
      "Explored microcontrollers and basic electronic circuits.",
      "Assembled an electronic circuit using a battery source.",
      "Practised soldering and electronic component assembly.",
      "Developed the Dote Move game using an ESP32.",
      "Implemented increasing difficulty based on the player's score."
    ],
    technologies: [
      "ESP32",
      "Arduino & Basic Electronics Concepts",
      "Electronic Components",
      "Battery-Powered Circuits",
      "Soldering"
    ],
    skills: [
      "Embedded Systems Fundamentals",
      "Electronics Assembly",
      "Soldering",
      "Microcontroller-Based Development",
      "Game Logic",
      "Score-Based Difficulty Design",
      "Problem Solving"
    ],
    challenges: "The Dote Move game required the falling-dot behaviour and difficulty to respond to the player's score. As the score increased, both the speed and the number of falling dots needed to increase, making the game progressively more challenging.",
    keyTakeaways: [
      "Understand the basic role of microcontrollers in embedded systems.",
      "Gain practical exposure to electronic component assembly.",
      "Connect basic electronics concepts with hands-on implementation.",
      "Explore interactive game development using the ESP32.",
      "Understand how game difficulty can change according to player progress."
    ],
    featuredVisual: {
      icon: "cpu",
      badge: "CYBER-PHYSICAL SYSTEMS",
      title: "ESP32 'Dote Move' & Electronics Lab",
      sub: "Circuit soldering, battery-powered systems, and game loop difficulty scaling"
    },
    gallery: [
      {
        title: "ESP32 'Dote Move' Game Logic",
        caption: "Developing interactive game mechanics on ESP32 with progressive difficulty based on player score.",
        alt: "Dote Move game logic and difficulty scaling on ESP32",
        icon: "gamepad-2"
      },
      {
        title: "Battery-Powered Circuit Assembly",
        caption: "Hands-on component placement and soldering of a functional electronic circuit powered by battery.",
        alt: "Assembled battery-powered electronic circuit",
        icon: "battery-charging"
      },
      {
        title: "Arduino & Electronics Workshop",
        caption: "Connecting theoretical circuit principles with breadboarding, component testing, and microcontrollers.",
        alt: "Arduino and electronics workshop exploration",
        icon: "circuit-board"
      }
    ],
    reflection: "Week 6 provided tangible, physical engineering experience. Moving from software abstractions to circuit breadboarding, component soldering, and battery power brought electronics fundamentals to life. Implementing the Dote Move game on the ESP32 reinforced how score-driven game logic and timing constraints operate in resource-efficient embedded microcontrollers."
  }
];

let currentProtoWeekIndex = 0;
let currentLightboxIndex = 0;

function renderProtoSemWeek(index) {
  if (index < 0 || index >= PROTOSEM_WEEKS.length) return;
  currentProtoWeekIndex = index;
  const data = PROTOSEM_WEEKS[index];

  // Update tabs active state
  const tabs = document.querySelectorAll(".proto-week-tab");
  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
    } else {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    }
  });

  // Update prev / next button states
  const prevBtn = document.getElementById("protoPrevBtn");
  const nextBtn = document.getElementById("protoNextBtn");
  if (prevBtn) prevBtn.disabled = (index === 0);
  if (nextBtn) nextBtn.disabled = (index === PROTOSEM_WEEKS.length - 1);

  // Update status label
  const statusNumber = document.getElementById("currentWeekNumber");
  if (statusNumber) statusNumber.textContent = `Week ${data.week}`;

  // Update Left Panel: Media & Meta
  const featuredMedia = document.getElementById("protoFeaturedMedia");
  if (featuredMedia) {
    featuredMedia.innerHTML = `
      <div class="featured-visual-icon">
        <i data-lucide="${data.featuredVisual.icon}"></i>
      </div>
      <span class="featured-visual-badge">${data.featuredVisual.badge}</span>
      <h3 class="featured-visual-title">${data.featuredVisual.title}</h3>
      <p class="featured-visual-sub">${data.featuredVisual.sub}</p>
    `;
  }

  const metaCategory = document.getElementById("protoMetaCategory");
  if (metaCategory) {
    metaCategory.textContent = data.category;
    metaCategory.className = `category-badge ${data.badgeClass}`;
  }

  const metaStatus = document.getElementById("protoMetaStatus");
  if (metaStatus) metaStatus.textContent = data.status;

  const metaTitle = document.getElementById("protoMetaTitle");
  if (metaTitle) metaTitle.textContent = data.title;

  // Update Gallery Grid
  const galleryGrid = document.getElementById("protoGalleryGrid");
  const galleryCount = document.getElementById("protoGalleryCount");
  if (galleryGrid) {
    galleryGrid.innerHTML = "";
    if (data.gallery && data.gallery.length > 0) {
      if (galleryCount) galleryCount.textContent = `${data.gallery.length} Items`;
      data.gallery.forEach((item, imgIdx) => {
        const card = document.createElement("div");
        card.className = "proto-gallery-card";
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `View ${item.title}`);
        card.innerHTML = `
          <div class="proto-gallery-icon">
            <i data-lucide="${item.icon || 'image'}"></i>
          </div>
          <span class="proto-gallery-label">${item.title}</span>
        `;
        card.addEventListener("click", () => openProtoLightbox(imgIdx));
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProtoLightbox(imgIdx);
          }
        });
        galleryGrid.appendChild(card);
      });
    } else {
      if (galleryCount) galleryCount.textContent = "0 Items";
      galleryGrid.innerHTML = `<p class="modal-text" style="grid-column: 1/-1; font-size: 0.85rem; color: var(--text-muted);">No additional gallery items documented for this week.</p>`;
    }
  }

  // Update Right Panel: Header
  const weekPill = document.getElementById("protoWeekPill");
  if (weekPill) weekPill.textContent = `WEEK ${data.week}`;

  const weekTitle = document.getElementById("protoWeekTitle");
  if (weekTitle) weekTitle.textContent = data.title;

  const weekDesc = document.getElementById("protoWeekDesc");
  if (weekDesc) weekDesc.textContent = data.description;

  const weekOverview = document.getElementById("protoWeekOverview");
  if (weekOverview) weekOverview.textContent = data.overview;

  // Update Learning Insights
  const insightsList = document.getElementById("protoInsightsList");
  if (insightsList) {
    insightsList.innerHTML = "";
    data.insights.forEach(ins => {
      const div = document.createElement("div");
      div.className = "proto-insight-item";
      div.textContent = ins;
      insightsList.appendChild(div);
    });
  }

  // Update Practical Activities
  const activitiesList = document.getElementById("protoActivitiesList");
  if (activitiesList) {
    activitiesList.innerHTML = "";
    data.activities.forEach(act => {
      const li = document.createElement("li");
      li.textContent = act;
      activitiesList.appendChild(li);
    });
  }

  // Update Technologies Tags
  const techTags = document.getElementById("protoTechTags");
  if (techTags) {
    techTags.innerHTML = "";
    data.technologies.forEach(tech => {
      const span = document.createElement("span");
      span.className = "proto-tag";
      span.textContent = tech;
      techTags.appendChild(span);
    });
  }

  // Update Skills Learned Chips
  const skillsTags = document.getElementById("protoSkillsTags");
  if (skillsTags) {
    skillsTags.innerHTML = "";
    data.skills.forEach(skill => {
      const span = document.createElement("span");
      span.className = "proto-skill-chip";
      span.textContent = skill;
      skillsTags.appendChild(span);
    });
  }

  // Update Challenges
  const challengeBox = document.getElementById("protoChallengeBox");
  const challengeText = document.getElementById("protoChallengeText");
  if (challengeBox && challengeText) {
    if (data.challenges && data.challenges.trim().length > 0) {
      challengeBox.style.display = "block";
      challengeText.textContent = data.challenges;
    } else {
      challengeBox.style.display = "none";
    }
  }

  // Update Key Takeaways
  const takeawaysList = document.getElementById("protoTakeawaysList");
  if (takeawaysList) {
    takeawaysList.innerHTML = "";
    data.keyTakeaways.forEach(tk => {
      const li = document.createElement("li");
      li.textContent = tk;
      takeawaysList.appendChild(li);
    });
  }

  // Refresh Lucide Icons in dynamically created elements
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Lightbox Open & Navigation
function openProtoLightbox(imgIndex) {
  const currentWeek = PROTOSEM_WEEKS[currentProtoWeekIndex];
  if (!currentWeek || !currentWeek.gallery || currentWeek.gallery.length === 0) return;

  currentLightboxIndex = imgIndex;
  const item = currentWeek.gallery[imgIndex];

  const modal = document.getElementById("protoLightboxModal");
  const media = document.getElementById("lightboxMedia");
  const title = document.getElementById("lightboxTitle");
  const caption = document.getElementById("lightboxCaption");
  const counter = document.getElementById("lightboxCounter");

  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption;
  if (counter) counter.textContent = `${imgIndex + 1} / ${currentWeek.gallery.length}`;

  if (media) {
    media.innerHTML = `
      <div class="lightbox-media-icon">
        <i data-lucide="${item.icon || 'image'}"></i>
      </div>
      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">${item.title}</h3>
      <span class="category-badge badge-primary">${currentWeek.category}</span>
    `;
  }

  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  if (window.lucide) lucide.createIcons();
}

function closeProtoLightbox() {
  const modal = document.getElementById("protoLightboxModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function navigateProtoLightbox(direction) {
  const currentWeek = PROTOSEM_WEEKS[currentProtoWeekIndex];
  if (!currentWeek || !currentWeek.gallery || currentWeek.gallery.length === 0) return;

  let newIndex = currentLightboxIndex + direction;
  if (newIndex < 0) newIndex = currentWeek.gallery.length - 1;
  if (newIndex >= currentWeek.gallery.length) newIndex = 0;

  openProtoLightbox(newIndex);
}

// Open Full Reflection Modal
function openProtoReflectionModal() {
  const data = PROTOSEM_WEEKS[currentProtoWeekIndex];
  if (!data) return;

  const modal = document.getElementById("protoReflectionModal");
  const badge = document.getElementById("protoModalBadge");
  const status = document.getElementById("protoModalStatus");
  const title = document.getElementById("protoModalTitle");
  const overview = document.getElementById("protoModalOverview");
  const insights = document.getElementById("protoModalInsights");
  const activities = document.getElementById("protoModalActivities");
  const tech = document.getElementById("protoModalTech");
  const skills = document.getElementById("protoModalSkills");
  const challenges = document.getElementById("protoModalChallenges");
  const takeaways = document.getElementById("protoModalTakeaways");
  const reflection = document.getElementById("protoModalReflection");

  if (badge) {
    badge.textContent = data.category;
    badge.className = `category-badge ${data.badgeClass}`;
  }
  if (status) status.textContent = data.status;
  if (title) title.textContent = `Week ${data.week}: ${data.title}`;
  if (overview) overview.textContent = data.overview;

  if (insights) {
    insights.innerHTML = "";
    data.insights.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      insights.appendChild(li);
    });
  }

  if (activities) {
    activities.innerHTML = "";
    data.activities.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      activities.appendChild(li);
    });
  }

  if (tech) {
    tech.innerHTML = "";
    data.technologies.forEach(t => {
      const span = document.createElement("span");
      span.className = "tech-pill";
      span.textContent = t;
      tech.appendChild(span);
    });
  }

  if (skills) {
    skills.innerHTML = "";
    data.skills.forEach(s => {
      const span = document.createElement("span");
      span.className = "proto-skill-chip";
      span.textContent = s;
      skills.appendChild(span);
    });
  }

  if (challenges) challenges.textContent = data.challenges;

  if (takeaways) {
    takeaways.innerHTML = "";
    data.keyTakeaways.forEach(tk => {
      const li = document.createElement("li");
      li.textContent = tk;
      takeaways.appendChild(li);
    });
  }

  if (reflection) reflection.textContent = `"${data.reflection}"`;

  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  if (window.lucide) lucide.createIcons();
}

function closeProtoReflectionModal() {
  const modal = document.getElementById("protoReflectionModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

// Initialize ProtoSem Module
function initProtoSem() {
  const tabsContainer = document.getElementById("protoWeekTabs");
  const prevBtn = document.getElementById("protoPrevBtn");
  const nextBtn = document.getElementById("protoNextBtn");

  if (tabsContainer) {
    tabsContainer.innerHTML = "";
    PROTOSEM_WEEKS.forEach((item, idx) => {
      const tab = document.createElement("button");
      tab.className = `proto-week-tab ${idx === 0 ? 'active' : ''}`;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", idx === 0 ? "true" : "false");
      tab.setAttribute("aria-controls", "protosemMainCard");
      tab.innerHTML = `<i data-lucide="calendar"></i> Week ${item.week}`;
      tab.addEventListener("click", () => renderProtoSemWeek(idx));
      tabsContainer.appendChild(tab);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentProtoWeekIndex > 0) {
        renderProtoSemWeek(currentProtoWeekIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentProtoWeekIndex < PROTOSEM_WEEKS.length - 1) {
        renderProtoSemWeek(currentProtoWeekIndex + 1);
      }
    });
  }

  // Reflection modal buttons
  const openDetailBtn = document.getElementById("openProtoDetailModalBtn");
  if (openDetailBtn) openDetailBtn.addEventListener("click", openProtoReflectionModal);

  const closeDetailBtn = document.getElementById("protoModalCloseBtn");
  if (closeDetailBtn) closeDetailBtn.addEventListener("click", closeProtoReflectionModal);

  const doneDetailBtn = document.getElementById("protoModalDoneBtn");
  if (doneDetailBtn) doneDetailBtn.addEventListener("click", closeProtoReflectionModal);

  const reflectionOverlay = document.getElementById("protoReflectionModal");
  if (reflectionOverlay) {
    reflectionOverlay.addEventListener("click", (e) => {
      if (e.target === reflectionOverlay) closeProtoReflectionModal();
    });
  }

  // Lightbox modal buttons
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeProtoLightbox);

  const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", () => navigateProtoLightbox(-1));

  const lightboxNextBtn = document.getElementById("lightboxNextBtn");
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", () => navigateProtoLightbox(1));

  const lightboxOverlay = document.getElementById("protoLightboxModal");
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener("click", (e) => {
      if (e.target === lightboxOverlay) closeProtoLightbox();
    });
  }

  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    const isReflectionOpen = reflectionOverlay && reflectionOverlay.classList.contains("active");
    const isLightboxOpen = lightboxOverlay && lightboxOverlay.classList.contains("active");

    if (e.key === "Escape") {
      if (isReflectionOpen) closeProtoReflectionModal();
      if (isLightboxOpen) closeProtoLightbox();
    } else if (isLightboxOpen) {
      if (e.key === "ArrowLeft") navigateProtoLightbox(-1);
      if (e.key === "ArrowRight") navigateProtoLightbox(1);
    }
  });

  // Render initial week
  renderProtoSemWeek(0);
}

// --- 10. DOM Initialization ---
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
  initProtoSem();
});

