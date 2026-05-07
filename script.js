// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// =========================
// FAQ ACCORDION
// =========================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight =
        answer.scrollHeight + "px";
    }

  });

});

// =========================
// CONTACT FORM
// =========================

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  message.textContent =
    "Thank you! Your request has been submitted.";

  form.reset();

});

// =========================
// SCROLL ANIMATIONS
// =========================

const elements = document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));
