let inp = document.getElementById("input");
let divide = document.getElementById("divide");
let clear = document.getElementById("clr");
let ans = document.getElementById("ans");
let mult = document.getElementById("multiply");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let zero = document.getElementById("block0");
let one = document.getElementById("block1");
let two = document.getElementById("block2");
let three = document.getElementById("block3");
let four = document.getElementById("block4");
let five = document.getElementById("block5");
let six = document.getElementById("block6");
let seven = document.getElementById("block7");
let eight = document.getElementById("block8");
let nine = document.getElementById("block9");
let dot = document.getElementById("dot");

// if(validate.value>64 && validate.value<91)
// {

// }
// if(validate.value>96 && validate.value<123)
// {
//     alert('enter numbers')
//     return
// }
ans.addEventListener("click", function () {
  if (inp.value.includes("+")) {
    let x = inp.value.split("+").map(Number);
    inp.value = x[0] + x[1];
    inp.innerHTML = parseInt(inp.value);
  } else if (inp.value.includes("-")) {
    let x = inp.value.split("-").map(Number);
    inp.value = x[0] - x[1];
    inp.innerHTML = parseInt(inp.value);
  } else if (inp.value.includes("*")) {
    let x = inp.value.split("*").map(Number);
    inp.value = x[0] * x[1];
    inp.innerHTML = parseInt(inp.value);
  } else if (inp.value.includes("/")) {
    let x = inp.value.split("/").map(Number);
    inp.value = x[0] / x[1];
    inp.innerHTML = parseInt(inp.value);
  }
});
inp.addEventListener("keypress", function (event) {
  console.log(event.key == "Enter");
  if (event.key == "Enter") {
    event.preventDefault();
    ans.click();
  }
});

clear.addEventListener("click", function () {
  inp.value = "";
});
divide.addEventListener("click", function () {
  inp.value += "/";
});
mult.addEventListener("click", function () {
  inp.value += "*";
});
minus.addEventListener("click", function () {
  inp.value += "-";
});
plus.addEventListener("click", function () {
  inp.value += "+";
});
zero.addEventListener("click", function () {
  inp.value += "0";
});
one.addEventListener("click", function () {
  inp.value += "1";
});
two.addEventListener("click", function () {
  inp.value += "2";
});
three.addEventListener("click", function () {
  inp.value += "3";
});
four.addEventListener("click", function () {
  inp.value += "4";
});
five.addEventListener("click", function () {
  inp.value += "5";
});
six.addEventListener("click", function () {
  inp.value += "6";
});
seven.addEventListener("click", function () {
  inp.value += "7";
});
eight.addEventListener("click", function () {
  inp.value += "8";
});
nine.addEventListener("click", function () {
  inp.value += "9";
});
dot.addEventListener("click", function () {
  inp.value += ".";
});
