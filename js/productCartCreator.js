const cartBody = document.querySelector(".popover-body");
const cartEmpty = document.querySelector(".popover-body p");

export function createProductInCart(thumbnailSrc, name, prize, amount) {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "d-flex p-1 align-items-center");
  wrapper.setAttribute("name", name);
  wrapper.appendChild(createThumbnail(thumbnailSrc));
  wrapper.appendChild(createProductInfo(name, prize, amount));
  wrapper.appendChild(createRemoveButton());
  cartEmpty.classList.add("hidden");
  cartBody.insertBefore(wrapper, cartBody.firstChild);
  return wrapper;
}

function createThumbnail(thumbnailSrc) {
  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("class", "cart-thumbnail rounded-3");
  thumbnail.src = thumbnailSrc;
  thumbnail.alt = "thumbnail";
  return thumbnail;
}

function createProductInfo(name, prize, amount) {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "mx-4 d-flex flex-column justify-content-center");
  const productName = document.createElement("h6");
  productName.setAttribute("class", "m-0");
  productName.innerText = name;
  const productSumPrize = document.createElement("p");
  productSumPrize.setAttribute("class", "m-0");
  const productPrizeAndAmount = document.createElement("span");
  productPrizeAndAmount.setAttribute("class", "me-2 fw-normal");
  productPrizeAndAmount.innerText = `${prize} x ${amount}`;
  const productCartSum = document.createElement("span");
  productCartSum.setAttribute("class", "text-darkblue fw-bold");
  let resultPrize = Number(prize.replace("$", "")) * amount;
  productCartSum.innerText = `$${resultPrize.toFixed(2)}`;
  productSumPrize.append(productPrizeAndAmount, productCartSum);
  wrapper.append(productName, productSumPrize);
  return wrapper;
}

function createRemoveButton() {
  const button = document.createElement("button");
  button.setAttribute("class", "cart-remove");
  const trash = document.createElement("img");
  trash.alt = "";
  trash.src = "images/icon-delete.svg";
  button.appendChild(trash);
  return button;
}
