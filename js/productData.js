const thumbnail = document.querySelector(".thumb-active img");
const productName = document.querySelector("h1");
const productPrize = document.querySelector("h2 span");
const popoverBody = document.querySelector(".popover-body");
const checkoutBtn = document.querySelector(".checkout");
const cartEmpty = document.querySelector(".popover-body p");
const badge = document.querySelector(".cart-badge");
import { createProductInCart } from "./productCartCreator.js";

class Product {
  constructor() {
    this.products = new Array();
    this.productsCounter = 0;
  }

  add(amount) {
    const product = this.products.find((product) => product.name === productName.innerText);
    console.log(product);
    checkoutBtn.classList.remove("hidden");
    if (!product) {
      this.productsCounter += amount;
      createProductInCart(thumbnail.src, productName.innerText, productPrize.innerText, amount);
      this.products.push({ thumbnailSrc: thumbnail.src, name: productName.innerText, prize: productPrize.innerText, amount: amount });
      saveProductsInLocalStorage(this.products);
    } else {
      const productElement = document.querySelector(`div[name="${productName.innerText}"]`);
      popoverBody.removeChild(productElement);
      this.productsCounter += amount;
      createProductInCart(thumbnail.src, productName.innerText, productPrize.innerText, product.amount + amount);
      product.amount += amount;
      saveProductsInLocalStorage(this.products);
    }
  }

  set(thumbnailSrc, name, prize, amount) {
    checkoutBtn.classList.remove("hidden");
    this.productsCounter += amount;
    badge.innerText = `${this.productsCounter}`;
    createProductInCart(thumbnailSrc, name, prize, amount);
    this.products.push({ thumbnailSrc: thumbnailSrc, name: name, prize: prize, amount: amount });
    badge.classList.remove("cart-popover-visibility");
  }

  remove(name) {
    const index = this.products.findIndex((product) => product.name === name);
    this.productsCounter -= this.products[index].amount;
    const productElement = document.querySelector(`div[name="${name}"]`);
    this.products.splice(index, 1);
    popoverBody.removeChild(productElement);
    checkoutBtn.classList.add("hidden");
    cartEmpty.classList.remove("hidden");
    saveProductsInLocalStorage(this.products);
  }
}

function saveProductsInLocalStorage(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

export const product = new Product();
