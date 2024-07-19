var names = ["pintu", "jintu", "rintu", "jintu", "jontu", "shatu"];
var selected = [];

function arrayCopy(names) {
  var selected = [];
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (selected.indexOf(name) == -1) {
      selected.push(name, "ontor");
    }
  }
  return selected;
}

function removeDublicate(names) {
  var selected = [];
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (selected.indexOf(name) == -1) {
      selected.push(name);
    }
  }
  return selected;
}

var dubblenameArry = arrayCopy(names);

// console.log(removeDublicate(dubblenameArry));

function canvasFunction() {
  var inputText = document.getElementById(2).value;
  var text = inputText;

  document.getElementById(1).innerText = text;
}
