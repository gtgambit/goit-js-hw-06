//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputElem = document.querySelector("#name-input");
const textInput = document.querySelector("#name-input");

const outputElem = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  outputElem.textContent = event.target.value;
  if (event.target.value === "") {
    outputElem.textContent = "Anonymous";
  }
});

//const inputEl = document.querySelector("#name-input");

//const textInput = document.querySelector("#name-input");
//const output = document.querySelector("#name-output");

//textInput.addEventListener("input", (event) => {
//  output.textContent = event.target.value;

//  if (event.target.value === "") {
//    output.textContent = "Anonymous";
//  }
//});
