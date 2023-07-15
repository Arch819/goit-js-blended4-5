import storage from "./storage";
// ЗАДАЧА 1

// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними зміни.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};
const LOCAL_KEY = 'login-data'

let userData = {};
const form = document.querySelector('.login-form');
const loginBtn = document.querySelector('.login-btn');
const inputs = document.querySelectorAll('.login-input');


form.addEventListener('input', onSaveData);
form.addEventListener('submit', clickOnData);


function clickOnData(evt) {
  evt.preventDefault();
  const { email, password } = userData;
  if (!email || !password) {
    alert('Заповніть усі поля')
    return;
  }
  if (email !== USER_DATA.email || password !== USER_DATA.password) {
    alert('Не співпадають дані') 
    return;

  } 
  
  storage.save(LOCAL_KEY, userData);
  loginBtn.textContent = 'Logout';
  inputs.forEach(input => input.setAttribute('readonly', true));
  form.reset();
}

function onSaveData(event) {
  const { name, value } = event.target;

  userData[name] = value;

}



