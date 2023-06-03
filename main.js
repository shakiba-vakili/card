let btn = document.querySelector("button");
let form = document.querySelector("form");
let section = document.querySelector("section");

btn.addEventListener("click", completedCardDetails);

function completedCardDetails(e) {
  e.preventDefault();

  form.classList.add("hide");
  section.classList.remove("hide");

  let cardNumber = document.getElementById("input-2").value;
  let card = "";
  card = document.querySelector(".p-f-1");

  // cvc
  document.querySelector(".p-b-1").innerHTML =
    document.getElementById("input-5").value;

  // card name
  document.querySelector(".p-f-2").innerHTML =
    document.getElementById("input-1").value;

  //card number

  let result = cardNumber.replace(/.{4}/g, "$& ");

  card.innerHTML = result;

  //card month
  document.querySelector(".m").innerHTML =
    document.getElementById("input-3").value;
  //card year
  document.querySelector(".y").innerHTML =
    document.getElementById("input-4").value;
}
