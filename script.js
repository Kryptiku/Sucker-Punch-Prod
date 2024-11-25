document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showNextSlide() {
      slides[currentSlide].classList.remove("active");

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.add("active");
  }

  slides[currentSlide].classList.add("active");

  setInterval(showNextSlide, 5000);

  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = link.getAttribute("href").slice(1);
          const targetSection = document.getElementById(targetId);

          targetSection.scrollIntoView({ behavior: "smooth" });
      });
  });
});
