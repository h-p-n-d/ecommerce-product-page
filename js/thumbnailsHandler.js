const previewThumbnailsList = document.querySelectorAll(".preview-thumbnails img");
const previewThumbnails = document.querySelector(".preview-thumbnails");
const previewImage = document.querySelector(".preview-image img");

previewThumbnails.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    previewThumbnailsList.forEach((thumbnail, index) => {
      thumbnail.parentNode.classList.remove("thumb-active");
      if (event.target === thumbnail) {
        previewImage.setAttribute("src", `images/image-product-${index + 1}.jpg`);
        thumbnail.parentNode.classList.add("thumb-active");
      }
    });
  }
});
