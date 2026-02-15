const slider = document.getElementById("shopItems");

let startX = 0;
let scrollLeft = 0;
let isDown = false;

/* TOUCH SUPPORT */
slider.addEventListener("touchstart", e => {
  startX = e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchmove", e => {
  const x = e.touches[0].pageX;
  const walk = startX - x;
  slider.scrollLeft = scrollLeft + walk;
});

/* MOUSE DRAG SUPPORT (DESKTOP) */
slider.addEventListener("mousedown", e => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => isDown = false);
slider.addEventListener("mouseup", () => isDown = false);

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = startX - x;
  slider.scrollLeft = scrollLeft + walk;
});
