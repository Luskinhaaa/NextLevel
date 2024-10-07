let currentSlide = 0; // Índice do slide atual
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let autoplayInterval; // Variável para armazenar o intervalo do autoplay
let isAutoplaying = true; // Variável para controlar se o autoplay está ativo

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Função para ir para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop de volta ao primeiro slide
    showSlide(currentSlide);
}

// Função para ir para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop de volta ao último slide
    showSlide(currentSlide);
}

// Funções para iniciar e parar o autoplay
function startAutoplay() {
    if (isAutoplaying) return; // Se já estiver em autoplay, não faz nada
    autoplayInterval = setInterval(nextSlide, 3000); // Inicia o autoplay
    isAutoplaying = true; // Atualiza o estado do autoplay
}

function stopAutoplay() {
    clearInterval(autoplayInterval); // Para o autoplay
    isAutoplaying = false; // Atualiza o estado do autoplay
}

// Eventos de clique nos botões
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Adiciona eventos de mouse para parar e iniciar o autoplay
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', stopAutoplay); // Para o autoplay ao passar o mouse
carouselContainer.addEventListener('mouseleave', startAutoplay); // Retorna ao autoplay ao sair

// Inicializa o carrossel
showSlide(currentSlide);

// Inicia o autoplay
startAutoplay();
