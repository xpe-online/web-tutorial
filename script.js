console.log("Hello JavaScript! script.js has been loaded!");

function sub(){
	var li = document.createElement("li");
	li.textContent = content.value;
	list.appendChild(li)
}

submit = document.getElementById("submit");
content = document.getElementById("content");
list = document.getElementById("list");
submit.addEventListener("click", sub);

