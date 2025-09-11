const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.remove(
      "opacity-0",
      "pointer-events-none",
      "translate-y-8"
    );
    scrollBtn.classList.add("opacity-100", "translate-y-0");
  } else {
    scrollBtn.classList.add(
      "opacity-0",
      "pointer-events-none",
      "translate-y-8" // translate-y-8 means move the element down by 2rem (32px) (transform: translateY(2rem);).
    );
    scrollBtn.classList.remove("opacity-100", "translate-y-0");
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
