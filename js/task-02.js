//Напиши скрипт, который для каждого элемента массива ingredients:

//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//const mainEl = document.querySelector(`#ingredients`);
//const ingredientsEl = [];
//ingredients.forEach((el) => {
//  const superLi = document.createElement("li");
//  superLi.classList.add("item");
//  superLi.textContent = el;
//  ingredientsEl.push(superLi);
//});
//mainEl.append(...ingredientsEl);

const ingredientEl = document.querySelector(`#ingredients`);
const ingredientsList = [];

ingredients.forEach((el) => {
  const ingredienstItem = document.createElement("li");
  ingredienstItem.classList.add("item");
  ingredienstItem.textContent = el;
  ingredientsList.push(ingredienstItem);
});

ingredientEl.append(...ingredientsList);
