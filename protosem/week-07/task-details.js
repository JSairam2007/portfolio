/**
 * ProtoSem Week 07 Detail Page Scripts
 * Handles Theme Syncing, Table of Contents Spy, Interactive Checklists, and Lucide Icons
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeSync();
  initTableOfContents();
  initChecklistWidget();
  initCodeCopyButtons();

  if (window.lucide) {
    lucide.createIcons();
  }
});

// 1. Theme Synchronization with Main Portfolio
function initThemeSync() {
  const htmlRoot = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

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

// 2. Table of Contents Scroll Spy & Smooth Navigation
function initTableOfContents() {
  const tocLinks = document.querySelectorAll(".task-toc-link");
  const sections = document.querySelectorAll(".task-doc-section");

  if (!tocLinks.length || !sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        tocLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

// 3. Interactive Activity Checklist with Persistence & Progress
function initChecklistWidget() {
  const taskId = document.body.getAttribute("data-task-id") || "task-1";
  const storageKey = `sairam_${taskId}_checklist`;
  const checkboxes = document.querySelectorAll(".task-check-item input[type='checkbox']");
  const countDisplay = document.getElementById("checklistCount");
  const percentDisplay = document.getElementById("checklistPercent");
  const progressFill = document.getElementById("tocProgressFill");
  const tocPercent = document.getElementById("tocPercent");

  if (!checkboxes.length) return;

  // Load saved state
  let savedState = {};
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) savedState = JSON.parse(raw);
  } catch (e) {
    console.error("Checklist storage parse error", e);
  }

  // Restore states
  checkboxes.forEach((cb, idx) => {
    if (savedState[idx] === true) {
      cb.checked = true;
      cb.closest(".task-check-item").classList.add("completed");
    }

    cb.addEventListener("change", () => {
      if (cb.checked) {
        cb.closest(".task-check-item").classList.add("completed");
      } else {
        cb.closest(".task-check-item").classList.remove("completed");
      }
      updateChecklistProgress();
    });
  });

  function updateChecklistProgress() {
    let completed = 0;
    const currentState = {};

    checkboxes.forEach((cb, idx) => {
      if (cb.checked) completed++;
      currentState[idx] = cb.checked;
    });

    try {
      localStorage.setItem(storageKey, JSON.stringify(currentState));
    } catch (e) {}

    const total = checkboxes.length;
    const percent = Math.round((completed / total) * 100);

    if (countDisplay) countDisplay.textContent = `${completed} of ${total} Completed`;
    if (percentDisplay) percentDisplay.textContent = `${percent}%`;
    if (tocPercent) tocPercent.textContent = `${percent}%`;
    if (progressFill) progressFill.style.width = `${percent}%`;
  }

  updateChecklistProgress();
}

// 4. Code Block Copy to Clipboard
function initCodeCopyButtons() {
  const copyBtns = document.querySelectorAll(".task-copy-code-btn");
  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const codeBlock = btn.closest(".task-code-wrapper").querySelector("code");
      if (!codeBlock) return;

      navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="check"></i> Copied!`;
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          btn.innerHTML = originalText;
          if (window.lucide) lucide.createIcons();
        }, 2000);
      });
    });
  });
}
