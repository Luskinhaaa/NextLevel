let currentSlide = 0; // Índice do slide atual
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

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

// Eventos de clique nos botões
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Inicializa o carrossel
showSlide(currentSlide);

// Configura o autoplay para mudar de slide a cada 3 segundos
setInterval(nextSlide, 3000);
