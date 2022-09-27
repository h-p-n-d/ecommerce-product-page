import "./js/amountCounter.js";
import "./js/thumbnailsHandler.js";
import "./js/cartHandler.js";
import "./js/lightbox.js";

import { product } from "./js/productData.js";

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("products")) {
    const storage = JSON.parse(localStorage.getItem("products"));
    console.log(storage);
    storage.forEach((item) => {
      console.log(item.prize);
      product.set(item.thumbnailSrc, item.name, item.prize, item.amount);
    });
  }
});
