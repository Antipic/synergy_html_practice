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

function updateImage() {
    sliderImage.src = images[currentIndex];
    imageCounter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Инициализация слайдера
updateImage();