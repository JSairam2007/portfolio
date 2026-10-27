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
  },
  {
    week: 7,
    title: "IoT & Connectivity: Connecting Hardware to the Web",
    category: "IoT & Cloud Connectivity",
    badgeClass: "badge-primary",
    status: "Completed",
    description: "Exploring how microcontrollers, web interfaces, cloud platforms, and automation services work together to connect physical hardware with digital systems.",
    overview: "During Week 07 of ProtoSem, I explored different ways to connect physical hardware with web interfaces and cloud-based platforms. The activities covered local LED control using an ESP32 web server, cloud communication through Adafruit IO and MQTT, event-based automation with IFTTT, and environmental monitoring using Firebase.\n\nThese tasks helped me understand how electronics, programming, web technologies, and cloud services can work together in IoT applications.",
    repoUrl: "https://github.com/JSairam2007/portfolio",
    tasks: [
      {
        id: "task-1",
        number: 1,
        category: "Web & Microcontroller",
        title: "Task 1 — ESP32 Web Server & HTML LED Control",
        shortDesc: "Designed and deployed an embedded HTTP web server on the ESP32 microcontroller using Arduino IDE to control an LED through a browser-based interface.",
        objective: "Understand how a microcontroller can host a web interface and respond to user commands to control a connected LED.",
        technicalExplanation: [
          "The ESP32 microcontroller operates simultaneously as an embedded computation unit and an HTTP web server on the local Wi-Fi network.",
          "An HTML-based control interface provides the graphical user experience delivered straight to the client browser.",
          "When a user interacts with the browser interface, an HTTP request is dispatched to the ESP32 IP address.",
          "The ESP32 parses the incoming request URI, processes the command, and drives the corresponding GPIO output pin HIGH or LOW to switch the LED.",
          "This task establishes the essential foundation bridging browser-based web development with physical embedded systems."
        ],
        workflows: [
          {
            title: "Hardware Control Flow",
            steps: ["Browser Interface", "HTTP Request", "ESP32 Web Server", "GPIO Output", "LED Response"]
          }
        ],
        technologies: ["ESP32", "Arduino IDE", "HTML", "HTTP", "GPIO"],
        reflection: "I learned how a web interface can be connected directly to a physical device. This activity helped me understand the relationship between browser-based controls, HTTP communication, and GPIO outputs, while introducing me to the integration of web development and embedded systems."
      },
      {
        id: "task-2",
        number: 2,
        category: "Cloud-Based IoT Control",
        title: "Task 2 — Adafruit IO Dashboard & MQTT",
        shortDesc: "Extended the local ESP32 web-control concept into a cloud-connected IoT system using Adafruit IO and MQTT.",
        objective: "Understand how a cloud dashboard can communicate with an ESP32 and support remote device control.",
        technicalExplanation: [
          "Adafruit IO serves as a centralized cloud IoT platform offering customizable visual dashboard widgets such as toggles, gauges, and feeds.",
          "MQTT (Message Queuing Telemetry Transport) operates as a lightweight, low-overhead publish-subscribe protocol connecting the ESP32 to cloud brokers.",
          "A cloud dashboard toggle action publishes a control command message to a designated feed topic.",
          "The ESP32 subscribes to the feed topic, receives message payloads instantly via MQTT, and updates GPIO output states accordingly.",
          "Cloud-based control decouples the client from local network subnets, transitioning from local LAN requests to scalable remote device management."
        ],
        workflows: [
          {
            title: "Cloud Actuation Flow",
            steps: ["Adafruit IO Dashboard", "MQTT Message", "ESP32", "GPIO Output", "Hardware Response"]
          }
        ],
        bidirectionalNote: "For bidirectional communication, device status and environmental information can also be published from the ESP32 back to an Adafruit IO cloud feed.",
        technologies: ["ESP32", "Adafruit IO", "MQTT", "Arduino IDE", "Cloud Dashboard"],
        reflection: "This activity introduced me to cloud-based IoT communication. I explored how MQTT can connect an ESP32 to Adafruit IO and how a dashboard can provide an interface for interacting with a physical device. It helped me understand how IoT systems can extend beyond direct local connections."
      },
      {
        id: "task-3",
        number: 3,
        category: "IoT Automation",
        title: "Task 3 — IFTTT + Adafruit IO IoT Automation",
        shortDesc: "Extended the cloud-based ESP32 control concept by exploring event-driven IoT automation using IFTTT, Adafruit IO, and MQTT.",
        objective: "Understand how events and triggers can initiate actions in an IoT system without requiring every action to be initiated manually.",
        technicalExplanation: [
          "IFTTT (If This Then That) operates as an integration service that automates cross-platform workflows connecting web services and IoT devices.",
          "Configured events or external triggers initiate automated conditional logic without requiring manual human interaction.",
          "IFTTT triggers dispatch automated webhook requests directly to the Adafruit IO platform.",
          "Adafruit IO passes the event-driven payload over MQTT to the connected ESP32 client.",
          "Demonstrates the architectural shift from direct human-in-the-loop control to event-driven automated responses."
        ],
        workflows: [
          {
            title: "Event-Driven Automation Flow",
            steps: ["Trigger or Event", "IFTTT Automation", "Adafruit IO", "MQTT", "ESP32", "Hardware Response"]
          }
        ],
        technologies: ["IFTTT", "Adafruit IO", "MQTT", "ESP32"],
        reflection: "I explored how event-driven automation can extend an IoT system beyond manual control. This activity helped me understand the relationship between online services, cloud communication, and hardware responses, as well as the role of automation in connected applications."
      },
      {
        id: "task-4",
        number: 4,
        category: "Environmental Monitoring & Remote Control",
        title: "Task 4 — Firebase IoT Monitoring Dashboard",
        shortDesc: "Explored an ESP32-based environmental monitoring and remote bulb-control system using Firebase, DHT11, and LDR sensors.",
        objective: "Understand how sensor data, cloud services, and a web dashboard can work together in an IoT monitoring system.",
        technicalExplanation: [
          "The ESP32 microcontroller interfaces with analog and digital sensors to gather live environmental conditions.",
          "The DHT11 sensor measures ambient temperature and relative humidity levels with digital signal output.",
          "The LDR (Light Dependent Resistor) circuit measures light intensity variations based on ambient illumination.",
          "Google Firebase provides a cloud backend for real-time synchronization and storage of telemetry feeds.",
          "A custom web dashboard reads live Firebase nodes and visualizes sensor telemetry for continuous monitoring.",
          "The connected dashboard interface supports bidirectional remote actuation, transmitting control commands to switch an electrical bulb."
        ],
        workflows: [
          {
            title: "Environmental Telemetry Monitoring Flow",
            steps: ["DHT11 & LDR Sensors", "ESP32", "Firebase", "Monitoring Dashboard"]
          },
          {
            title: "Remote Actuation Flow",
            steps: ["Dashboard", "Firebase Communication", "ESP32", "Bulb Control"]
          }
        ],
        technologies: ["ESP32", "DHT11", "LDR", "Firebase", "Web Dashboard", "Bulb and control hardware"],
        reflection: "This activity helped me understand how environmental sensors can provide information to a connected system and how cloud services can support monitoring through a web dashboard. I also explored the relationship between sensor inputs and remote hardware control."
      },
      {
        id: "task-5",
        number: 5,
        category: "IoT Monitoring & Data Management",
        title: "Task 5 — Firebase Logging, Automation & Data Export",
        shortDesc: "Explored an integrated IoT monitoring system combining environmental sensing, automatic lighting, Firebase-based information management, historical records, and data export.",
        objective: "Understand how monitoring and control can be extended with automated behaviour and historical data management.",
        technicalExplanation: [
          "Environmental sensing acts as the primary observational layer across physical spaces.",
          "Firebase maintains real-time records and structures historical time-series datasets for auditing.",
          "Autonomous control logic maps sensor inputs directly to lighting response thresholds without human intervention.",
          "A unified web dashboard provides both live instrumentation displays and chronological historical tables.",
          "Historical logs allow engineers to identify patterns, observe ambient fluctuations, and diagnose anomalies.",
          "Data export enables downloading structured logs for external spreadsheet or statistical data analysis."
        ],
        workflows: [
          {
            title: "Telemetry & Historical Records Flow",
            steps: ["Sensors", "ESP32", "Firebase", "Dashboard & Historical Records"]
          },
          {
            title: "Automatic Lighting Control Flow",
            steps: ["Sensor Information", "Control Logic", "ESP32", "Lighting Response"]
          },
          {
            title: "Data Export & Analytics Flow",
            steps: ["Historical Records", "Data Export", "External Analysis"]
          }
        ],
        technologies: ["ESP32", "DHT11", "LDR", "Firebase", "Web Dashboard", "IoT Data Logging", "Data Export"],
        reflection: "This task introduced me to the broader role of data management in IoT applications. I explored how monitoring, automatic lighting, and historical records can contribute to a more complete system, while learning why collected data can be useful for further analysis."
      }
    ],
    systemProgression: [
      {
        stage: 1,
        title: "Local Hardware Control",
        desc: "An ESP32-hosted web interface controls an LED through HTTP requests and GPIO outputs."
      },
      {
        stage: 2,
        title: "Cloud Connectivity",
        desc: "Adafruit IO and MQTT support communication between a cloud dashboard and an ESP32."
      },
      {
        stage: 3,
        title: "Event-Driven Automation",
        desc: "IFTTT introduces a way to connect triggers with actions in an IoT workflow."
      },
      {
        stage: 4,
        title: "Environmental Monitoring",
        desc: "Firebase supports an IoT monitoring workflow involving the ESP32, DHT11, LDR, and a web dashboard."
      },
      {
        stage: 5,
        title: "Logging and Data Management",
        desc: "Historical records, automatic lighting, and data export extend the monitoring workflow."
      }
    ],
    keyLearnings: {
      technical: [
        "ESP32 web-server fundamentals",
        "HTML-based device control",
        "HTTP communication and GPIO control",
        "MQTT communication",
        "Adafruit IO integration",
        "IFTTT automation concepts",
        "Firebase-based monitoring and data management",
        "Environmental sensing using DHT11 and LDR",
        "IoT data logging and export"
      ],
      systemIntegration: [
        "Connecting hardware with web interfaces",
        "Understanding communication between microcontrollers and cloud platforms",
        "Exploring the relationship between sensor data and user interfaces",
        "Understanding the roles of monitoring, control, automation, and data management"
      ],
      personalDevelopment: [
        "Practical problem-solving",
        "Technical observation",
        "Systems thinking",
        "Connecting web development with electronics",
        "Understanding end-to-end IoT workflows"
      ]
    },
    techGroups: [
      {
        name: "Microcontroller & Development",
        icon: "cpu",
        items: ["ESP32", "Arduino IDE"]
      },
      {
        name: "Web Technologies",
        icon: "globe",
        items: ["HTML", "HTTP", "GPIO-based control"]
      },
      {
        name: "Cloud & Communication",
        icon: "cloud",
        items: ["Adafruit IO", "MQTT", "IFTTT", "Firebase"]
      },
      {
        name: "Sensors & Hardware",
        icon: "activity",
        items: ["DHT11", "LDR", "LED", "Bulb and control hardware"]
      },
      {
        name: "Data Management",
        icon: "database",
        items: ["IoT data logging", "Historical records", "Data export"]
      }
    ],
    skills: [
      "ESP32 development",
      "Arduino IDE",
      "HTML-based device control",
      "IoT fundamentals",
      "MQTT communication",
      "Adafruit IO integration",
      "IFTTT automation concepts",
      "Firebase integration",
      "Sensor-based monitoring",
      "IoT dashboard concepts",
      "Data logging and export"
    ],
    challenges: "One of the most important aspects of this week's learning was understanding how different components work together in an IoT system. Connecting a web interface to a microcontroller introduced the relationship between software and physical hardware, while cloud platforms and messaging protocols demonstrated how communication can extend beyond a local connection.\n\nThe monitoring and automation tasks also helped me understand that an IoT application involves more than controlling a device. It can also involve collecting information, presenting it through an interface, maintaining historical records, and using information to support automated behaviour.\n\nOverall, the week helped me connect my learning in web development, electronics, and programming through practical IoT concepts.",
    summary: "Week 07 introduced me to different approaches to connecting physical hardware with digital systems. I explored local LED control through an ESP32 web server, cloud-based communication using Adafruit IO and MQTT, event-driven automation through IFTTT, and environmental monitoring using Firebase.\n\nThe later tasks extended these concepts into monitoring dashboards, automatic lighting, historical records, and data export. Together, these activities helped me develop a broader understanding of how embedded systems, web technologies, cloud platforms, and connected devices can work together in IoT applications.",
    insights: [
      "ESP32 web server architecture enables local browser-based hardware actuation over HTTP.",
      "MQTT protocol delivers lightweight publish-subscribe messaging between microcontrollers and cloud brokers like Adafruit IO.",
      "IFTTT service orchestration enables autonomous event-driven triggers without manual human intervention.",
      "Google Firebase enables real-time synchronization of environmental telemetry from DHT11 and LDR sensors to web dashboards.",
      "Data logging and export pipelines transform ephemeral sensor readings into persistent historical datasets for external analysis."
    ],
    activities: [
      "Task 1: Designed & deployed ESP32 HTTP web server for local HTML LED control.",
      "Task 2: Built Adafruit IO cloud dashboard with bidirectional MQTT telemetry feeds.",
      "Task 3: Configured IFTTT webhook event automations driving hardware responses.",
      "Task 4: Implemented Firebase IoT dashboard with DHT11 temperature/humidity and LDR light sensing.",
      "Task 5: Engineered Firebase telemetry logging, automatic lighting logic, and CSV data export."
    ],
    technologies: [
      "ESP32", "Arduino IDE", "HTML", "HTTP", "GPIO",
      "Adafruit IO", "MQTT", "IFTTT", "Firebase",
      "DHT11", "LDR", "LED", "Bulb and control hardware", "IoT data logging", "Data export"
    ],
    keyTakeaways: [
      "Stage 1: Bridge client-side web development with physical embedded firmware execution.",
      "Stage 2: Decouple direct networking through cloud-based MQTT publish-subscribe messaging.",
      "Stage 3: Automate IoT actions through event-driven service recipes without manual intervention.",
      "Stage 4: Stream real-time environmental telemetry to cloud databases and visual web dashboards.",
      "Stage 5: Persist, audit, and export time-series IoT sensor datasets for analytical workflows."
    ],
    featuredVisual: {
      icon: "wifi",
      badge: "IOT & CONNECTIVITY",
      title: "ESP32, Cloud Brokers & Firebase",
      sub: "HTTP Web Servers, MQTT Pub/Sub, IFTTT Automation, and Telemetry Logging"
    },
    gallery: [
      {
        title: "ESP32 Web Server & Local LED Control",
        caption: "Hosting an embedded web server on the ESP32 to trigger GPIO pins via local browser requests.",
        alt: "ESP32 HTTP Web Server LED Control Architecture",
        icon: "server"
      },
      {
        title: "Adafruit IO Cloud Dashboard & MQTT",
        caption: "Subscribing the ESP32 to MQTT broker topics on Adafruit IO for cloud-connected telemetry.",
        alt: "Adafruit IO and MQTT broker workflow",
        icon: "cloud"
      },
      {
        title: "IFTTT Event-Driven IoT Automation",
        caption: "Orchestrating automated actions connecting third-party triggers to Adafruit IO and ESP32.",
        alt: "IFTTT Event-Driven IoT Automation workflow",
        icon: "zap"
      },
      {
        title: "Firebase IoT Environmental Monitoring",
        caption: "Streaming real-time DHT11 temperature/humidity and LDR light readings to Firebase.",
        alt: "Firebase IoT Real-time Database and Environmental Dashboard",
        icon: "database"
      },
      {
        title: "Data Logging, Automatic Lighting & Export",
        caption: "Automated light actuation with LDR, persistent Firebase historical records, and external data export.",
        alt: "IoT Data Logging, Automation and CSV Export Pipeline",
        icon: "file-spreadsheet"
      }
    ],
    reflection: "One of the most important aspects of this week's learning was understanding how different components work together in an IoT system. Connecting a web interface to a microcontroller introduced the relationship between software and physical hardware, while cloud platforms and messaging protocols demonstrated how communication can extend beyond a local connection.\n\nThe monitoring and automation tasks also helped me understand that an IoT application involves more than controlling a device. It can also involve collecting information, presenting it through an interface, maintaining historical records, and using information to support automated behaviour.\n\nOverall, the week helped me connect my learning in web development, electronics, and programming through practical IoT concepts."
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
  if (weekPill) {
    weekPill.textContent = data.week === 7 ? "PROTOSEM · WEEK 07" : `WEEK ${data.week}`;
  }

  const weekTitle = document.getElementById("protoWeekTitle");
  if (weekTitle) weekTitle.textContent = data.title;

  const weekDesc = document.getElementById("protoWeekDesc");
  if (weekDesc) weekDesc.textContent = data.description;

  const weekOverview = document.getElementById("protoWeekOverview");
  if (weekOverview) weekOverview.textContent = data.overview;

  const backLink = document.getElementById("protoBackLink");
  const tasksContainer = document.getElementById("protoTasksContainer");
  const defaultBlocks = document.getElementById("protoDefaultBlocks");

  if (data.tasks && data.tasks.length > 0) {
    if (backLink) {
      backLink.style.display = "inline-flex";
      backLink.href = "#protosem";
      backLink.innerHTML = `<i data-lucide="arrow-left"></i> ProtoSem Overview`;
    }
    if (defaultBlocks) {
      defaultBlocks.style.display = "none";
    }
    if (tasksContainer) {
      tasksContainer.style.display = "block";
      renderProtoWeek7Tasks(tasksContainer, data);
    }
  } else {
    if (backLink) {
      backLink.style.display = "none";
    }
    if (tasksContainer) {
      tasksContainer.style.display = "none";
      tasksContainer.innerHTML = "";
    }
    if (defaultBlocks) {
      defaultBlocks.style.display = "block";
    }

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
  }

  // Refresh Lucide Icons in dynamically created elements
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Track active task inside Week 07
let currentProtoTaskIndex = 0;

function renderProtoWeek7Tasks(container, data) {
  if (!data.tasks || data.tasks.length === 0) return;
  if (currentProtoTaskIndex >= data.tasks.length) currentProtoTaskIndex = 0;
  const activeTask = data.tasks[currentProtoTaskIndex];

  // Build activity overview card grid
  const activityCardsHtml = data.tasks.map(task => `
    <div class="proto-activity-card">
      <div class="proto-activity-card-top">
        <span class="proto-activity-card-num">TASK 0${task.number}</span>
        <span class="proto-activity-card-cat">${task.category}</span>
      </div>
      <h5>${task.title.replace(/^Task \d+ [—\-] /, '')}</h5>
      <p>${task.shortDesc}</p>
      <div class="proto-activity-card-tags">
        ${task.technologies.slice(0, 4).map(t => `<span class="proto-tag">${t}</span>`).join('')}
        ${task.technologies.length > 4 ? `<span class="proto-tag">+${task.technologies.length - 4} more</span>` : ''}
      </div>
      <div class="proto-activity-card-footer">
        <span style="font-size: 0.75rem; color: var(--text-muted);">IoT Activity</span>
        <a href="./protosem/week-07/task-${task.number}.html" class="proto-activity-view-btn" target="_blank">
          <i data-lucide="external-link"></i> View More
        </a>
      </div>
    </div>
  `).join('');

  let html = `
    <div class="proto-tasks-wrapper">

      <!-- 0. Activity Cards Overview Grid -->
      <div class="proto-activity-cards-section">
        <div class="proto-activity-cards-section-header">
          <i data-lucide="layout-grid" style="width:18px;height:18px;color:var(--accent-primary);"></i>
          <h4>Week 07 — IoT Activities Overview</h4>
        </div>
        <div class="proto-activity-cards-grid">
          ${activityCardsHtml}
        </div>
      </div>

      <!-- 1. Task Tabs Navigation -->

      <div class="proto-tasks-nav-box">
        <div class="proto-task-tabs-header">
          <span class="proto-task-tabs-title"><i data-lucide="layers"></i> Weekly IoT Activities &amp; Tasks</span>
          <span class="proto-task-badge">5 Tasks</span>
        </div>
        <div class="proto-task-tabs-list" role="tablist" aria-label="Week 07 Tasks">
          ${data.tasks.map((task, idx) => `
            <button class="proto-task-tab ${idx === currentProtoTaskIndex ? 'active' : ''}" 
                    role="tab" 
                    aria-selected="${idx === currentProtoTaskIndex ? 'true' : 'false'}"
                    data-task-index="${idx}">
              <span class="proto-task-tab-num">${task.number}</span>
              <span>Task ${task.number}: ${task.title.replace(/^Task \d+ — /, '')}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- 2. Active Task Card -->
      <div class="proto-active-task-card" id="protoActiveTaskCard">
        <div class="proto-task-meta-top">
          <span class="category-badge badge-primary">${activeTask.category}</span>
          <span class="proto-task-pill">TASK 0${activeTask.number} OF 05</span>
        </div>

        <h4 class="proto-task-title">${activeTask.title}</h4>
        <p class="proto-task-short-desc">${activeTask.shortDesc}</p>

        <!-- Objective -->
        <div class="proto-objective-callout">
          <i data-lucide="target"></i>
          <div>
            <strong style="font-size: 0.85rem; color: var(--accent-primary); display: block; margin-bottom: 0.2rem;">OBJECTIVE</strong>
            <p class="proto-objective-text">${activeTask.objective}</p>
          </div>
        </div>

        <!-- Technical Explanation -->
        <div class="proto-technical-box">
          <h5 class="proto-technical-heading"><i data-lucide="file-code"></i> Technical Breakdown</h5>
          <ul class="proto-technical-list">
            ${activeTask.technicalExplanation.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        </div>

        <!-- Technical Workflow Diagram(s) -->
        <div class="proto-workflows-container">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">
            <i data-lucide="git-branch" style="width: 14px; height: 14px; color: var(--accent-primary); display: inline-block; vertical-align: middle;"></i>
            Conceptual System Workflow
          </div>
          ${activeTask.workflows.map(wf => `
            <div class="proto-wf-flow">
              <div class="proto-wf-label"><i data-lucide="corner-down-right"></i> ${wf.title}</div>
              <div class="proto-wf-steps">
                ${wf.steps.map((st, sIdx) => `
                  <div class="proto-wf-step">
                    <span class="proto-wf-step-num">${sIdx + 1}</span>
                    <span class="proto-wf-step-text">${st}</span>
                  </div>
                  ${sIdx < wf.steps.length - 1 ? `
                    <div class="proto-wf-arrow" aria-hidden="true">
                      <i data-lucide="arrow-right"></i>
                    </div>
                  ` : ''}
                `).join('')}
              </div>
            </div>
          `).join('')}
          ${activeTask.bidirectionalNote ? `
            <div class="proto-wf-bidirectional-note">
              <i data-lucide="arrow-left-right"></i>
              <span>${activeTask.bidirectionalNote}</span>
            </div>
          ` : ''}
        </div>

        <!-- Technologies Used in Task -->
        <div class="proto-block" style="margin: 0;">
          <h5 class="proto-technical-heading"><i data-lucide="cpu"></i> Task Technologies</h5>
          <div class="proto-tags">
            ${activeTask.technologies.map(t => `<span class="proto-tag">${t}</span>`).join('')}
          </div>
        </div>

        <!-- Learning Reflection -->
        <div class="proto-task-reflection-box">
          <div class="proto-task-reflection-title">
            <i data-lucide="message-square"></i> Student Learning Reflection
          </div>
          <p class="proto-task-reflection-text">"${activeTask.reflection}"</p>
        </div>
      </div>

      <!-- 3. Overall System Progression (5 Stages) -->
      <div class="proto-progression-box">
        <div class="proto-progression-header">
          <div class="proto-progression-icon"><i data-lucide="git-merge"></i></div>
          <div>
            <h4 class="proto-block-title">Overall System Progression</h4>
            <p class="proto-progression-sub">Five interconnected stages showing how the weekly tasks introduce progressive aspects of IoT development.</p>
          </div>
        </div>
        <div class="proto-progression-grid">
          ${data.systemProgression.map(stg => `
            <div class="proto-stage-card">
              <span class="proto-stage-badge">Stage ${stg.stage}</span>
              <h5 class="proto-stage-title">${stg.title}</h5>
              <p class="proto-stage-desc">${stg.desc}</p>
            </div>
          `).join('')}
        </div>
        <div class="proto-progression-note">
          <i data-lucide="info"></i>
          <span><strong>Architectural Context:</strong> These activities represent five related learning tasks exploring modular layers of IoT systems—from localized microcontroller GPIO control to cloud synchronization and analytical data export—rather than a single combined production monolith.</span>
        </div>
      </div>

      <!-- 4. Key Learnings (3 Categories) -->
      <div class="proto-learnings-box">
        <h4 class="proto-block-title"><i data-lucide="award"></i> Key Learnings &amp; Competencies</h4>
        <div class="proto-learnings-grid">
          <div class="proto-learning-card">
            <div class="proto-learning-card-header">
              <div class="proto-learning-icon"><i data-lucide="code"></i></div>
              <h5>Technical Learning</h5>
            </div>
            <ul class="proto-learning-list">
              ${data.keyLearnings.technical.map(item => `<li><i data-lucide="check"></i> <span>${item}</span></li>`).join('')}
            </ul>
          </div>
          <div class="proto-learning-card">
            <div class="proto-learning-card-header">
              <div class="proto-learning-icon"><i data-lucide="network"></i></div>
              <h5>System Integration</h5>
            </div>
            <ul class="proto-learning-list">
              ${data.keyLearnings.systemIntegration.map(item => `<li><i data-lucide="check"></i> <span>${item}</span></li>`).join('')}
            </ul>
          </div>
          <div class="proto-learning-card">
            <div class="proto-learning-card-header">
              <div class="proto-learning-icon"><i data-lucide="user-check"></i></div>
              <h5>Personal Development</h5>
            </div>
            <ul class="proto-learning-list">
              ${data.keyLearnings.personalDevelopment.map(item => `<li><i data-lucide="check"></i> <span>${item}</span></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- 5. Technologies & Hardware Components (5 Organized Categories) -->
      <div class="proto-tech-groups-box">
        <h4 class="proto-block-title"><i data-lucide="cpu"></i> Technologies &amp; Components</h4>
        <div class="proto-tech-groups-grid">
          ${data.techGroups.map(grp => `
            <div class="proto-tech-group-card">
              <div class="proto-tech-group-header">
                <i data-lucide="${grp.icon}"></i>
                <h6>${grp.name}</h6>
              </div>
              <div class="proto-tags">
                ${grp.items.map(it => `<span class="proto-tag">${it}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 6. Skills Developed (11 Skills) -->
      <div class="proto-block">
        <h4 class="proto-block-title"><i data-lucide="sparkles"></i> Skills Practiced &amp; Explored</h4>
        <div class="proto-skills-cloud">
          ${data.skills.map(sk => `<span class="proto-skill-chip"><i data-lucide="check-circle-2"></i> ${sk}</span>`).join('')}
        </div>
      </div>

      <!-- 7. Challenges and Reflection -->
      <div class="proto-block proto-challenges-box">
        <h4 class="proto-block-title"><i data-lucide="alert-circle"></i> Challenges &amp; Problem Solving</h4>
        <p class="proto-challenge-text">${data.challenges.replace(/\n\n/g, '</p><p class="proto-challenge-text" style="margin-top: 0.8rem;">')}</p>
      </div>

      <!-- 8. Weekly Summary -->
      <div class="proto-summary-box">
        <div class="proto-summary-header">
          <div class="proto-summary-icon"><i data-lucide="bookmark-check"></i></div>
          <h4 class="proto-summary-title">Weekly Summary — Week 07</h4>
        </div>
        <p class="proto-summary-text">${data.summary.replace(/\n\n/g, '</p><p class="proto-summary-text" style="margin-top: 0.8rem;">')}</p>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Add click handlers for task tabs
  const taskTabs = container.querySelectorAll(".proto-task-tab");
  taskTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetIdx = parseInt(tab.getAttribute("data-task-index"), 10);
      if (!isNaN(targetIdx) && targetIdx !== currentProtoTaskIndex) {
        currentProtoTaskIndex = targetIdx;
        renderProtoWeek7Tasks(container, data);
        if (window.lucide) lucide.createIcons();
      }
    });
  });

  if (window.lucide) lucide.createIcons();
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

