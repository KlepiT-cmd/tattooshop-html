const imageFolder = "dist/css/image_resources";
let currentIndex = 0;
let imageNames = [];

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const galleryImage = document.getElementById("galleryImage");

fetchImageNames()
  .then(names => {
    imageNames = names;
    updateImage();
  })
  .catch(error => {
    console.error("Error fetching image names:", error);
  });

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + imageNames.length) % imageNames.length;
    updateImage();
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % imageNames.length;
    updateImage();
}

function updateImage() {
    const imageUrl = imageFolder + imageNames[currentIndex];
    galleryImage.src = imageUrl;
    galleryImage.alt = `Image ${currentIndex + 1}`;
}

function fetchImageNames() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hardcodedImageNames = [
        "dist/css/image_resources/11402281_1664475733789000_8984763305709497640_o.jpg",
        "dist/css/image_resources/11406683_1664476323788941_6947558052860505770_o.jpg",
        "dist/css/image_resources/56811270_2389365104633389_480095387126857728_n.jpg",
        "dist/css/image_resources/138970362_1976788055811755_6081487037281797155_n.jpg",
      ];
      resolve(hardcodedImageNames);
    }, 1000);
  });
}