// Seleciona os elementos necessários
const carousel = document.querySelector('.testimonial-carousel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.testimonial-item').length;

// Função para atualizar a posição do carrossel
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
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

// Inicia o carrossel com o primeiro item visível
updateCarousel();
