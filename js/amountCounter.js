const minus = document.querySelector("#minusCount");
const plus = document.querySelector("#plusCount");
const amount = document.querySelector("#counterAmount");
const counter = document.querySelector("#counter");
let productAmount = 0;

counter.addEventListener("click", (event) => {
  if (event.target === plus) {
    productAmount++;
    amount.innerText = `${productAmount}`;
  } else if (event.target === minus && productAmount > 0) {
    productAmount--;
    amount.innerText = `${productAmount}`;
  }
});
