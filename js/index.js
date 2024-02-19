let setCount = 0;
const perSeatPrice = 550;
let couponApplied = 0;

const cards = document.getElementsByClassName("card");
const applyCouponBtn = document.getElementById("apply-coupon-btn");
const inputCoupon = document.getElementById("input-coupon");
const grandTotalText = document.getElementById("grand-total-text");
const couponContainer = document.getElementById("coupon-container");
const modalContainer = document.getElementById("use-modal");
const inputName = document.getElementById("passenger-name");
const inputNumber = document.getElementById("phone-number");
const inputEmail = document.getElementById("email");

modalContainer.addEventListener("click", function () {
  if (inputName.value.length < 3) {
    inputName.classList.add("border-red-500");
  } else {
    inputName.classList.remove("border-red-500");
  }
  if (inputNumber.value.length == 11) {
    inputNumber.classList.add("border-red-500");
  } else {
    inputNumber.classList.remove("border-red-500");
  }
  if (inputEmail.value.length < 4) {
    inputEmail.classList.add("border-red-500");
  } else {
    inputEmail.classList.remove("border-red-500");
  }

  if (
    inputName.value.length < 3 ||
    inputNumber.value.length == 11 ||
    inputEmail.value.length < 3
  ) {
  } else {
    my_modal_1.showModal();
    inputName.value = "";
    inputNumber.value = "";
    inputEmail.value = "";
  }
});

let totalPrice = 0;

applyCouponBtn.addEventListener("click", function () {
  if (inputCoupon.value === "NEW15") {
    discountFun(15);
    couponApplied = 15;
    couponContainer.classList.add("hidden");
  } else if (inputCoupon.value === "Couple 20") {
    discountFun(20);
    couponApplied = 20;
    couponContainer.classList.add("hidden");
  }
});

function discountFun(percentage) {
  const coupleDiscount = (totalPrice / 100) * percentage;
  const coupleGrandTotal = totalPrice - coupleDiscount;
  grandTotalText.innerText = coupleGrandTotal;
}

for (const card of cards) {
  card.addEventListener("click", function (e) {
    if (card.classList.contains("bg-green-500")) {
      return;
    }
    if (setCount >= 4) {
      alert("You can not select more than 4 seat");

      return;
    }

    card.classList.add("bg-green-500");
    card.classList.add("text-white");
    setCount++;
    const count = document.getElementById("set-count");
    count.innerText = setCount;

    const seatLeft = document
      .getElementById("seat-left")
      .innerText.split(" ")[0];
    const convert = parseInt(seatLeft);

    const updateSeat = convert - 1;
    decrementSeat("seat-left", updateSeat);
    // add seat no and price
    const perSeat = document
      .getElementById("seat-price")
      .innerText.split(" ")[0];
    const convertPerseat = parseInt(perSeat);
    // console.log(convertPerseat);
    const cardName = card.innerText;
    const seatContainer = document.getElementById("seat-container");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = cardName;
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    const p3 = document.createElement("p");
    p3.innerText = convertPerseat;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    seatContainer.appendChild(li);
    // total price
    totalPrice = setCount * perSeatPrice;
    document.getElementById("total-price").innerText = totalPrice;
    discountFun(couponApplied);
  });
}

function decrementSeat(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
