document.addEventListener("DOMContentLoaded", () => {

  const reveals = document.querySelectorAll(".reveal");

  function loopScrollAnimation() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const bottom = el.getBoundingClientRect().bottom;

      if (top < windowHeight - 100 && bottom > 100) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", loopScrollAnimation);
  loopScrollAnimation();

});
