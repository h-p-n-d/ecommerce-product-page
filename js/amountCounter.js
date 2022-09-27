const minus = document.querySelector("#minusCount");
const plus = document.querySelector("#plusCount");
const amount = document.querySelector("#counterAmount");
const counter = document.querySelector("#counter");
const addCartBtn = document.querySelector(".add-cart");
const badge = document.querySelector(".cart-badge");
import { product } from "./productData.js";
let productAmount = 1;

counter.addEventListener("click", (event) => {
  if (event.target === plus) {
    productAmount++;
    amount.innerText = `${productAmount}`;
  } else if (event.target === minus && productAmount > 1) {
    productAmount--;
    amount.innerText = `${productAmount}`;
  }
});

addCartBtn.addEventListener("click", () => {
  product.add(productAmount);
  badge.innerText = `${product.productsCounter}`;
  badge.classList.remove("cart-popover-visibility");
});
