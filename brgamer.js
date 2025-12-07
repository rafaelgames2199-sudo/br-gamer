document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.carousel-slide-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Função para atualizar a visualização do carrossel
    function updateCarousel() {
        // Move o wrapper horizontalmente. Ex: slide 1: 0%, slide 2: -100%, slide 3: -200%
        const offset = -currentSlide * 100;
        wrapper.style.transform = `translateX(${offset}%)`;
    }

    // Evento para o botão PRÓXIMO
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides; // Vai para o próximo slide ou volta para o 1º (loop)
        updateCarousel();
    });

    // Evento para o botão ANTERIOR
    prevBtn.addEventListener('click', () => {
        // Se for o primeiro slide (0), volta para o último slide (totalSlides - 1)
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    // Função de Autoplay (Opcional)
    function startAutoplay() {
        setInterval(() => {
            nextBtn.click(); // Simula o clique no botão "próximo"
        }, 5000); // Troca a cada 5 segundos (5000ms)
    }

    // startAutoplay(); // Descomente para ativar o autoplay
});
