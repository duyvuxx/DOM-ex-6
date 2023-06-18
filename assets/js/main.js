const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function getKey(e) {
  let key = e.key;
  let which = e.keyCode;
  $("#key").innerHTML = `Key pressed: ${key}`;
  $("#which").innerHTML = `Which is: ${which}`;
}

const fill = $("#fill");
fill.addEventListener("input", myFunction);

function myFunction(e) {
  $("#focus").innerHTML = `You wrote: ${e.target.value}`;
}
