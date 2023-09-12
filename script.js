const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
let currentIndex = 0;

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const galleryImage = document.getElementById("galleryImage");

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    const imageUrl = images[currentIndex];
    galleryImage.src = imageUrl;
    galleryImage.alt = `Image ${currentIndex + 1}`;
}

// Initially, display the first image
updateImage();