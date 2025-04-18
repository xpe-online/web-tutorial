console.log("Hello JavaScript! script.js is loading!");
if (!localStorage.getItem("times")) { // 初始化localStorage 如果返回NULL Undefined NaN就初始化为0
  localStorage.setItem("times", "0")
}

var times = parseInt(localStorage.getItem("times")); // list item条目数存入localStorage
console.log("localTimes:" + localStorage.getItem("times")); // debug 信息
console.log("times:" + times);

function init() { // 这是初始化模块 用for循环在每次刷新网页后插入localStorage里的数据
  for (var i = 1; i <= times; i++) {
    let li = document.createElement("li");
    buttonList[i] = document.createElement("button"); // 将删除按钮存储于数组中
    li.textContent = localStorage.getItem(i);
    if (!li.textContent) continue; // 考虑到可能有删除了中间的元素，从而导致localStorage返回NULL的情况，故跳过
    list.appendChild(li);
    buttonList[i].textContent = "Remove";
    buttonList[i].id = i;
    li.appendChild(buttonList[i]);
    buttonList[i].addEventListener("click", removeElement) // 为数组里的按钮添加删除事件
  }
}

function sub() {
  times++; // Counter
  let li = document.createElement("li");
  buttonList[times] = document.createElement("button");
  li.textContent = content.value;
  list.appendChild(li);
  localStorage.setItem("times", times); // 将当前的list item条目数存入localStorage
  localStorage.setItem(times, li.textContent); // 将当前的list item内容存入localStorage
  buttonList[times].textContent = "Remove";
  buttonList[times].id = times;
  li.appendChild(buttonList[times]);
  buttonList[times].addEventListener("click", removeElement);
  content.value = " "
  // console.log(localStorage.getItem("times"))
}

function clear() {
  for (var i = 1; i <= times; i++) {
    if (localStorage.getItem(i)) buttonList[i].parentElement.remove()
    // 如果localStorage不返回NULL就说明元素存在，并进行删除
  }
  localStorage.clear()
  document.getElementById("clearDiv").remove();
}

function removeElement() {
  buttonList[this.id].parentElement.remove();
  // console.log(this);
  localStorage.removeItem(this.id);
}

submit = document.getElementById("submit");
clearButton = document.getElementById("clear");
content = document.getElementById("content");
list = document.getElementById("list");
var buttonList = [];

init();

submit.addEventListener("click", sub);
clearButton.addEventListener("click", clear);

console.log("Hello JavaScript! script.js has been loaded!");
