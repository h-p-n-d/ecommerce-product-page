const cartBtn = document.querySelector("#cartBtn");
const popover = document.querySelector(".cart-popover");
const badge = document.querySelector(".cart-badge");
import { product } from "./productData.js";

cartBtn.addEventListener("click", () => {
  popover.classList.toggle("cart-popover-visibility");
  popover.classList.toggle("animate__fadeIn");
});

popover.addEventListener("click", (event) => {
  if (event.target.parentNode.tagName === "BUTTON") {
    console.log(event.target.parentNode.parentNode.getAttribute("name"));
    product.remove(event.target.parentNode.parentNode.getAttribute("name"));
    badge.classList.add("cart-popover-visibility");
  }
});
