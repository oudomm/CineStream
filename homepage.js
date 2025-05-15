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
