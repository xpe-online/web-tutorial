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
    let removeButton = document.createElement("button");
    li.textContent = localStorage.getItem(i);
    li.className = i;
    list.appendChild(li);
    removeButton.textContent = "Remove";
    removeButton.className = times;
    list.appendChild(removeButton);
  }
}

function sub() {
  let li = document.createElement("li");
  let removeButton = document.createElement("button");
  times++;
  li.textContent = content.value;
  li.className = times;
  list.appendChild(li);
  removeButton.textContent = "Remove";
  removeButton.className = times;
  list.appendChild(removeButton);
  content.value = " ";
  localStorage.setItem("times", times);
  localStorage.setItem(times, li.textContent)
  // console.log(localStorage.getItem("times"))
}

function remove() {
  console.log("test")
}

submit = document.getElementById("submit");
clearButton = document.getElementById("clear");
testButton = document.getElementById("testButton");
content = document.getElementById("content");
list = document.getElementById("list");

init();

submit.addEventListener("click", sub);
// clearButton.addEventListener("click", localStorage.clear());
testButton.addEventListener("click", remove);
