function display(value) {
  document.querySelector("#textarea").value += value;
}

function calculate() {
  var answer = eval(document.getElementById("textarea").value);
  document.getElementById("textarea").value = answer;
}

function clr() {
  document.querySelector("#textarea").value = "";
}
