/**
 * Kevin Yu - Personal Website JavaScript
 * This file adds interactivity to your website (theme toggle, mobile menu, dynamic year).
 */

// Run scripts once the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Year in Footer
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    // Close menu when clicking any nav link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  // 3. Dark / Light Mode Toggle
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // Check saved theme in localStorage or system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-theme");
    if (themeIcon) themeIcon.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-theme");
    if (themeIcon) themeIcon.textContent = "🌙";
  }

  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");
      
      // Update icon and save preference
      if (themeIcon) {
        themeIcon.textContent = isDark ? "☀️" : "🌙";
      }
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // 4. Highlight Active Navigation Link on Scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  });
});
