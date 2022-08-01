//selecting the elements we needed
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

//define the input length
function inputLength(){
	return input.value.length;
}


//create list element
function createListElement(){
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("deleteClass");
	delButton.innerHTML='Delete';
}


//add list element once enter button is clicked
function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	} else {
		alert("Text must me entered!");
	}
}


//enable pressing enter key to add list item
function addListAfterKeypress(element){
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

//task done
function doneTask(task){
	if(task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

//task delete
function deleteListElement(element){
	if(element.target.className === "deleteClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick(element){
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick);

//this enables the button to be clickable
button.addEventListener("click", addListAfterClick);

//this enables the ability to press the enter on the keyboard to add to the list.
input.addEventListener("keypress", addListAfterKeypress);
