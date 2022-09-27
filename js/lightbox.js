const lightbox = document.querySelector(".lightbox");
const previewImage = document.querySelector(".preview-image");
const lightboxCloseBtn = document.querySelector(".lightbox-close");
const previous = document.querySelector(".lightbox-button-left");
const next = document.querySelector(".lightbox-button-right");
const thumbnailList = document.querySelectorAll(".lightbox-thumbnails div");
const lightboxPreview = document.querySelector(".lightbox-preview");

let currentIndex = 1;

previewImage.addEventListener("click", () => {
  lightbox.style.visibility = "visible";
  lightbox.classList.toggle("animate__fadeIn");
});

lightboxCloseBtn.addEventListener("click", () => {
  lightbox.style.visibility = "hidden";
  lightbox.classList.toggle("animate__fadeIn");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === next || event.target === next.firstElementChild) {
    nextImage();
  } else if (event.target === previous || event.target === previous.firstElementChild) {
    previousImage();
  }
});

thumbnailList.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    switchActiveThumbnail(index + 1);
    lightboxPreview.src = `images/image-product-${index + 1}.jpg`;
    currentIndex = index + 1;
  });
});

function nextImage() {
  if (currentIndex < 4) {
    currentIndex++;
  } else {
    currentIndex = 1;
  }
  lightboxPreview.src = `images/image-product-${currentIndex}.jpg`;
  switchActiveThumbnail(currentIndex);
}

function previousImage() {
  if (currentIndex > 1) {
    currentIndex--;
  } else {
    currentIndex = 4;
  }
  lightboxPreview.src = `images/image-product-${currentIndex}.jpg`;
  switchActiveThumbnail(currentIndex);
}

function switchActiveThumbnail(index) {
  thumbnailList.forEach((thumbnail) => {
    if (thumbnail.firstElementChild.src.includes(`images/image-product-${index}-thumbnail.jpg`)) {
      return thumbnail.classList.add("lightbox-thumbnail-active");
    }
    thumbnail.classList.remove("lightbox-thumbnail-active");
  });
}
