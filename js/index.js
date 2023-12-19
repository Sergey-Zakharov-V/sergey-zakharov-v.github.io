let tg = window.Telegram.WebApp;

tg.expand()

element = document.querySelector(".test");

element.innerHTML = tg.initDataUnsafe.user.username;