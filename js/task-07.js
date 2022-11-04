//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

//<input id="font-size-control" type="range" min="16" max="96" />
//<br />
//<span id="text">Abracadabra!</span>

const magicIn = document.querySelector("#font-size-control");
const magicOut = document.querySelector("#text");

magicIn.addEventListener("change", (event) => {
  magicOut.style.fontSize = `${event.target.value}px`;
});
