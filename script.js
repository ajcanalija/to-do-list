//Design Options Menu
var bgColor = document.querySelector(".bg-color");
var fontColor = document.querySelector(".font-color");
var body = document.getElementById("container");

function setBgColor(){
	body.style.background = bgColor.value;
}
function setFontColor(){
	body.style.color = "fontColor.value";
}

function getRandomColor(){
    var letters="0123456789ABCDEF";
    var color="#";
    for(var i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function generateBgColor(){
	body.style.background = getRandomColor();
}

function generateFontColor(){
	body.style.color = getRandomColor();
}



/*function generateFontColor(){
	body.style.color = getRandomColor();
}*/

window.onload= setBgColor;
bgColor.addEventListener("input", generateBgColor);
fontColor.addEventListener("input", generateFontColor);


// To Do List Functions
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var donebtn= document.getElementsByClassName("done-btn");


//function for creating list items with button
function createListElement(){
	var div=document.createElement("div");
	var li= document.createElement("li");
	var delBtn=document.createElement("button");
	//var doneBtn=document.createElement("button");
	div.classList.add("tasklist");
	ul.appendChild(div);
	div.append(li,delBtn);
	li.classList.add("task");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delBtn.classList.add("del-btn");
	delBtn.innerHTML='Del';
	//doneBtn.classList.add("done-btn");
	//doneBtn.innerHTML='Done';
}

function inputLength() {
	return input.value.length;
}

//Function to Add Lists on Click 
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//Function Add Lists on Keypress
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function done(task){
	if(task.target.tagName==="LI"){
		task.target.classList.toggle("done");
	}
}

//Deletes a task when "del" button is clicked
function deleteTask(element){
	if(element.target.className==="del-btn"){
		element.target.parentElement.remove();
	}
}


function deleteTaskClick(element){
	done(element);
	deleteTask(element);
}

ul.addEventListener("click", deleteTaskClick);
button.addEventListener("click", addListAfterClick);  //Add Lists on Click | EVENT
input.addEventListener("keypress", addListAfterKeypress); //Add Lists on Keypress |EVENT