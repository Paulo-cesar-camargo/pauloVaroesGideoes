const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 8;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + 8) % 8;
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}
