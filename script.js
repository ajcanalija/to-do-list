var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var complete = document.getElementById("complete")

//function for creating list items with button
function createListElement(){
	var div=document.createElement("div");
	//var checkBox=document.createElement("input[type=checkbox]");
	var check = document.createElement("INPUT");
	check.setAttribute("type","checkbox");
	var li= document.createElement("li");
	var delBtn=document.createElement("button");	
	div.classList.add("tasklist");
	ul.appendChild(div);
	div.append(check,li, delBtn);
	li.classList.add("task");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delBtn.classList.add("del-btn");
	delBtn.innerHTML='Del';
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

// Task is Done

//Strikesthrough tasks when clicked
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
