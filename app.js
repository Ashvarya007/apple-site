document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const totalSlides = document.querySelectorAll('.carousel img').length;
    const carousel = document.querySelector('.carousel');
    const controlsContainer = document.querySelector('.carousel-controls');

    function showSlide(index) {
        const newTransformValue = -index * 100 / totalSlides + '%';
        carousel.style.transform = 'translateX(' + newTransformValue + ')';
        updateControls(index);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    function updateControls(index) {
        const controlButtons = document.querySelectorAll('.carousel-control-btn');
        controlButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });

        const allImages = document.querySelectorAll('.carousel img');
        allImages.forEach((img, i) => {
            img.classList.remove('current');
            img.classList.add(i === index ? 'current' : 'blur');
        });
    }

    // Create control buttons dynamically
    for (let i = 0; i < totalSlides; i++) {
        const controlBtn = document.createElement('div');
        controlBtn.className = 'carousel-control-btn';
        controlBtn.addEventListener('click', () => goToSlide(i));
        controlsContainer.appendChild(controlBtn);
    }

    // Initialize the first slide and set interval
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Change image every 3 seconds
});
