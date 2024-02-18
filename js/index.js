let setCount = 0;
const perSeatPrice = 550;
const cards = document.getElementsByClassName("card");
const applyCouponBtn = document.getElementById("apply-coupon-btn");
const inputCoupon = document.getElementById("input-coupon");
const grandTotalText = document.getElementById("grand-total-text");
let totalPrice = 0;

applyCouponBtn.addEventListener("click", function () {
  if (inputCoupon.value === "NEW15") {
    const discount = (totalPrice / 100) * 15;
    const grandTotal = totalPrice - discount;
    grandTotalText.innerText = grandTotal;
    return;
  } else if (inputCoupon.value === "Couple20") {
    const coupleDiscount = (totalPrice / 100) * 20;
    console.log(coupleDiscount);
    const coupleGrandTotal = totalPrice - coupleDiscount;
    grandTotalText.innerText = coupleGrandTotal;
    return;
  } else {
    return "invalid coupon";
  }
});
for (const card of cards) {
  card.addEventListener("click", function (e) {
    console.log(card);
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
    grandTotalText.innerText = totalPrice;
  });
}

function decrementSeat(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
