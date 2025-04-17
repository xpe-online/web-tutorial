console.log("Hello JavaScript! script.js has been loaded!");
if (!localStorage.getItem("times")) {
  localStorage.setItem("times", "0")
}

var times = parseInt(localStorage.getItem("times"));
console.log("localTimes:" + localStorage.getItem("times"));
console.log("times:" + times);

function init() {
  for (var i = 1; i <= times; i++) {
    let li = document.createElement("li");
    buttonList[i] = document.createElement("button");
    li.textContent = localStorage.getItem(i);
    if (!li.textContent) continue;
    li.id = i;
    list.appendChild(li);
    buttonList[i].textContent = "Remove";
    buttonList[i].className = i;
    li.appendChild(buttonList[i]);
    buttonList[i].addEventListener("click", removeElement)
  }
}

function sub() {
  times++;
  let li = document.createElement("li");
  buttonList[times] = document.createElement("button");
  li.textContent = content.value;
  li.id = times;
  list.appendChild(li);
  localStorage.setItem("times", times);
  localStorage.setItem(times, li.textContent);
  buttonList[times].textContent = "Remove";
  buttonList[times].className = times;
  li.appendChild(buttonList[times]);
  buttonList[times].addEventListener("click", removeElement);
  content.value = " "
  // console.log(localStorage.getItem("times"))
}

function clear() {
  for (var i = 1; i <= times; i++) {
    let removeElements = document.getElementById(i);
    if (removeElements) removeElements.remove()
  }
  localStorage.clear()
}

function removeElement() {
  let removeElements = document.getElementById(this.className);
  // console.log(this);
  localStorage.removeItem(this.className);
  removeElements.remove()
}

submit = document.getElementById("submit");
clearButton = document.getElementById("clear");
testButton = document.getElementById("testButton");
content = document.getElementById("content");
list = document.getElementById("list");
var buttonList = [];

init();

submit.addEventListener("click", sub);
clearButton.addEventListener("click", clear);
testButton.addEventListener("click", removeElement);
