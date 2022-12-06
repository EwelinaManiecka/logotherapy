// $(".alert").alert();

// document.body.style.backgroundColor("#red");
const currentDay = document.querySelector(".head-date__current");
const currentDate = document.querySelector(".head-date__current-day");
// const card = document.querySelector(".card__inner");
const modal = document.querySelector(".modal");
const sendMeBtn = document.querySelector(".send-me");
const closeIcon = document.querySelector(".modal__close-btn");
const card = document.querySelector(".card__inner");
const card2 = document.querySelector(".card__inner2");

const closeModalBtn = document.querySelector(".modal__close-btn");

const day = new Date();

console.log(day.getFullYear());
// console.log(day.toString());

currentDay.textContent = day.toLocaleString("default", { weekday: "long" });
// currentDate.textContent = Date();

//data loguje za dużo danych - potrzeba samej daty, bez czasu

// card.addEventListener("click", function() {
//     card.classList.toggle("is-flipped")
// })

sendMeBtn.onclick = function () {
   modal.style.display = "block";
};

closeModalBtn.onclick = function () {
   modal.style.display = "none";
};

window.onclick = function (e) {
   if (e.target == modal) {
      modal.style.display = "none";
   }
};

card.addEventListener("click", function (e) {
   card.classList.toggle("is-flipped");
});

card2.addEventListener("click", function (e) {
   card2.classList.toggle("is-flipped");
});
