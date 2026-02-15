const mangaContainer = document.querySelector('.carousel-container');
let scrollAmount = 0;
let slideTimer;

function startAutoScroll() {
    slideTimer = setInterval(() => {
        mangaContainer.scrollLeft += 1;
        // Reset if reached end (infinite loop feeling)
        if(mangaContainer.scrollLeft >= (mangaContainer.scrollWidth - mangaContainer.clientWidth)) {
            mangaContainer.scrollLeft = 0;
        }
    }, 20); // Adjust speed here
}

function stopAutoScroll() {
    clearInterval(slideTimer);
}

// Start scrolling initially
startAutoScroll();

// Pause on interaction
mangaContainer.addEventListener('mouseenter', stopAutoScroll);
mangaContainer.addEventListener('mouseleave', startAutoScroll);
mangaContainer.addEventListener('touchstart', stopAutoScroll);
mangaContainer.addEventListener('touchend', startAutoScroll);
