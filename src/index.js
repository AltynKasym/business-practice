import "./style/style.scss";

// Бургер меню

const burgerMenu = document.querySelector(".header__burgerMenu");
const menuItem = document.querySelectorAll(".header__nav-list-item");
const MenuCloseButton = document.querySelector(".header__closeButton");
const menu = document.querySelector(".header__nav");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", openMenu);
MenuCloseButton.addEventListener("click", closeMenu);
menuItem.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

function openMenu() {
  menu.classList.add("visable");
  body.style.overflowY = "hidden";
}

function closeMenu() {
  menu.classList.remove("visable");
  body.style.overflowY = "auto";
}

// Форма для заявки

const bannerButton = document.querySelector(".banner-button");
const formCloseButton = document.querySelector(".form-closeButton");
const mainForm = document.querySelector(".form");

bannerButton.addEventListener("click", openForm);
formCloseButton.addEventListener("click", closeForm);

function openForm() {
  mainForm.classList.add("form-visable");
  body.style.overflowY = "hidden";
}

function closeForm() {
  mainForm.classList.remove("form-visable");
  body.style.overflowY = "auto";
  formStatus.classList.remove("form-status-visiable");
  input.forEach((item, id) => {
    item.value = "";
  });
}

// Валидация
const input = document.querySelectorAll(".form-input");
const warning = document.querySelectorAll(".form-warning");
const sendButton = document.querySelector(".form-button");
const formStatus = document.querySelector(".form-status");

sendButton.addEventListener("click", sendData);

input.forEach((item, id) => {
  item.oninput = function () {
    if (item.value.trim().length < 1) {
      warning[id].style.visibility = "visible";
    } else {
      warning[id].style.visibility = "hidden";
    }
  };
});

function sendData(e) {
  e.preventDefault();
  let k = 0;
  input.forEach((item, id) => {
    if (item.value.trim().length < 1) {
      warning[id].style.visibility = "visible";
    } else {
      warning[id].style.visibility = "hidden";
      k++;
    }
  });
  if (k === 3) {
    (sendButton.innerText = "Идет отправка..."),
      sendButton.setAttribute("disabled", ""),
      (sendButton.style.background = "#9fa7b0"),
      setTimeout(() => {
        sendButton.innerText = "Отправить";
        sendButton.removeAttribute("disabled", "");
        formStatus.classList.add("form-status-visiable");
        (sendButton.style.background = "#47cf34"),
          input.forEach((item, id) => {
            item.value = "";
          });
      }, 3000);
  }
  console.log(
    `Имя: ${input[0].value}, e-mail:${input[1].value}, Текст: ${input[2].value}`
  );
}
