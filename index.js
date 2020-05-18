addEventListener("load", startFunc);

function startFunc() {
  var red = document.querySelector("#red");
  var green = document.querySelector("#green");
  var blue = document.querySelector("#blue");
  var square = document.querySelector("#square");

  document.querySelector("#red-display").value = red.value;
  document.querySelector("#green-display").value = green.value;
  document.querySelector("#blue-display").value = blue.value;

  square.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;

  red.addEventListener("change", listenChange);
  green.addEventListener("change", listenChange);
  blue.addEventListener("change", listenChange);

  function listenChange(e) {
    var display = document.querySelector("#" + e.target.id + "-display");
    display.value = e.target.value;
    square.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  }
}
