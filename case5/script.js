const images = [
    'https://picsum.photos/id/1018/500/300',
    'https://picsum.photos/id/1015/500/300',
    'https://picsum.photos/id/1019/500/300',
    'https://picsum.photos/id/1016/500/300',
    'https://picsum.photos/id/1020/500/300'
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const imageCounter = document.getElementById('image-counter');
const feedbackBtn = document.getElementById('feedback-btn');

let autoSlideInterval;

function logError(message) {
    console.error(`[Slider Error]: ${message}`);
}

function updateImage() {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = 1;
        imageCounter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
    }, 300);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 5000); // Смена каждые 5 секунд
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        img.src = url;
    });
}

async function loadImages() {
    try {
        await Promise.all(images.map(preloadImage));
        console.log('All images preloaded successfully');
    } catch (error) {
        logError(error.message);
    }
}

nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextImage();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevImage();
    startAutoSlide();
});

sliderImage.addEventListener('mouseenter', stopAutoSlide);
sliderImage.addEventListener('mouseleave', startAutoSlide);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        stopAutoSlide();
        prevImage();
        startAutoSlide();
    } else if (e.key === 'ArrowRight') {
        stopAutoSlide();
        nextImage();
        startAutoSlide();
    }
});

feedbackBtn.addEventListener('click', () => {
    const feedback = prompt('Пожалуйста, оставьте ваш отзыв о слайдере:');
    if (feedback) {
        console.log(`Получен отзыв: ${feedback}`);
        // Здесь можно добавить код для отправки отзыва на сервер
        alert('Спасибо за ваш отзыв!');
    }
});

sliderImage.onerror = () => logError(`Failed to load image: ${sliderImage.src}`);

// Инициализация слайдера
loadImages().then(() => {
    updateImage();
    startAutoSlide();
});