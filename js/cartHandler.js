const cartBtn = document.querySelector("#cartBtn");
const popover = document.querySelector(".cart-popover");

cartBtn.addEventListener("click", () => {
  popover.classList.toggle("cart-popover-visibility");
});
