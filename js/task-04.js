//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

//<div id="counter">
//  <button type="button" data-action="decrement">-1</button>
//  <span id="value">0</span>
//  <button type="button" data-action="increment">+1</button>
//</div>

//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;
};
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

//function increment() {
//  counterValue += 1;
//  document.getElementById("value").innerHTML = counterValue;
//}

//function decrement() {
//  counterValue -= 1;
//  document.getElementById("value").innerHTML = counterValue;
//}

//minusBtn.addEventListener("click", decrement);
//plusBtn.addEventListener("click", increment);
