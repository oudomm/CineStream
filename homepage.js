const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const section3 = document.querySelector(".section3");

menu.addEventListener("click", () => {
  section3.classList.remove("-translate-x-full");
  section3.classList.remove("absolute")
  section3.classList.add("translate-x-0");
});

close.addEventListener("click", () => {
  section3.classList.remove("translate-x-0");
    section3.classList.add("absolute")
  section3.classList.add("-translate-x-full");
});

 let currentSlide = 0;
  const totalSlides = 4; // Adjust based on number of slides

  function updateCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Optional: Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);
