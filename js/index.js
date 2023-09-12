const bar = document.querySelector("#bar");
const buttons = document.querySelector("#buttons");
let process;
let previousR = 0;

function calc() {
  buttons.addEventListener("click", (e) => {
    if (e.target.nodeName.toLowerCase() === "button") {
      if (e.target.classList.contains("numbers")) {
        bar.value += e.target.value;
      } else if (e.target.classList.contains("calcs")) {
        bar.value += e.target.value;
      } else if (e.target.id === "equal") {
        const arr = convertToEquation(bar.value);
        mathCalc(arr);
      } else if (e.target.id === "previousR") {
        bar.value = previousR;
      } else if (
        e.target.id === "backspace" ||
        e.target.parentElement.id === "backspace" ||
        e.target.parentElement.parentElement.id === "backspace"
      ) {
        bar.value = bar.value.slice(0, -1);
      }
    }
  });
}

function mathCalc(a) {
  if (a) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "/") {
        a.splice(i - 1, 3, Number(a[i - 1]) / Number(a[i + 1]));
      }
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "*") {
        a.splice(i - 1, 3, Number(a[i - 1]) * Number(a[i + 1]));
      }
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "-") {
        a.splice(i - 1, 3, Number(a[i - 1]) - Number(a[i + 1]));
      }
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "+") {
        a.splice(i - 1, 3, Number(a[i - 1]) + Number(a[i + 1]));
      }
    }
    bar.value = a[0];
    previousR = a[0];
  }
}
const convertToEquation = (c) => {
  let arr = [];
  let s= "";
  for (let i = 0; i < c.length; i++) {
    if (c[i] === "+") {
      arr.push(s, "+");
      s = "";
      continue;
    } else if (c[i] === "-") {
      arr.push(s, "-");
      s = "";
      continue;
    } else if (c[i] === "*") {
      arr.push(s, "*");
      s = "";
      continue;
    } else if (c[i] === "/") {
      arr.push(s, "/");
      s = "";
      continue;
    }
    s += c[i];
    if (i === c.length - 1) {
      arr.push(s);
    }
  }
  console.log(s);
  console.log(arr);
  return arr;
};
function click(){
  console.log("click")
}
calc();
