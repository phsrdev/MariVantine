// Seleciona os elementos necessários
const carousel = document.querySelector('.testimonial-carousel');
const items = document.querySelectorAll('.testimonial-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;
const totalItems = items.length;

// Atualiza a posição do carrossel
function updateCarousel() {
    const translateXValue = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateXValue}%)`;
}

// Botão "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
});

// Botão "Próximo"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});