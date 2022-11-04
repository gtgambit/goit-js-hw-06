//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const bodyBuddy = document.querySelector("body");
const colorGo = document.querySelector(".color");

colorBtn.addEventListener("click", (event) => {
  let magicColor = getRandomHexColor();
  bodyBuddy.style.backgroundColor = magicColor;
  colorGo.textContent = magicColor;
});
