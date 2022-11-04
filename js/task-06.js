//Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

//<input
//  type="text"
//  id="validation-input"
//  data-length="6"
//  placeholder="Please enter 6 symbols"
///>

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const dataInput = document.querySelector("#validation-input");
dataInput.addEventListener("blur", (event) => {
  if (event.target.value.length == dataInput.getAttribute("data-length")) {
    dataInput.classList.add("valid");
    if (dataInput.classList.contains("invalid")) {
      dataInput.classList.remove("invalid");
    }
  } else {
    if (dataInput.classList.contains("valid")) {
      dataInput.classList.remove("valid");
    }
    dataInput.classList.add("invalid");
  }
});
