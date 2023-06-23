const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const pressKey = $(".press");
const input = $(".input");

const circleText = $(".circle h3");

const key = $(".key");
const locat = $(".location");
const which = $(".which");
const code = $(".code");

document.addEventListener("keydown", (event) => {
  circleText.innerHTML = event.key;

  key.nextElementSibling.innerHTML = event.key;
  locat.nextElementSibling.innerHTML = event.location;
  which.nextElementSibling.innerHTML = event.which;
  code.nextElementSibling.innerHTML = event.code;

  input.classList.remove("hide");
  pressKey.classList.add("hide");
});
