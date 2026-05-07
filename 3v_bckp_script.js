// =========================
// VIDEO FALLBACK SYSTEM
// =========================

const video = document.getElementById("heroVideo");

if (video) {

  // If video loads successfully
  video.addEventListener("canplay", () => {

    console.log("Video loaded successfully");

    video.style.display = "block";

  });

  // If video fails
  video.addEventListener("error", () => {

    console.log("Video failed to load");

    video.style.display = "none";

  });

  // Extra timeout protection
  setTimeout(() => {

    if (
      video.readyState === 0 ||
      video.networkState === 3
    ) {

      console.log("Fallback image activated");

      video.style.display = "none";
    }

  }, 4000);

}

// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

}

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

if (form) {

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    message.textContent =
      "Thank you! Your request has been submitted.";

    form.reset();

  });

}

// =========================
// SCROLL ANIMATIONS
// =========================

const animatedElements = document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.15
});

animatedElements.forEach(el => observer.observe(el));
