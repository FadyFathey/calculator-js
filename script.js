const mood = document.querySelector(".switch");
const calculator = document.querySelector(".calculator");
const inputs = document.querySelectorAll(".calculator input");
mood.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  inputs.forEach((input) => {
    input.classList.toggle("dark");
  });
});
