//Prevent KeyPress to Send Form
window.addEventListener('keydown', function (e) {
	if (e.keyIdentifier === 'U+000A' || e.keyIdentifier === 'Enter' || e.keyCode === 13) {
		if (e.target.nodeName === 'INPUT' && e.target.type === 'text') {
			e.preventDefault();
			return false;
		}
	}
}, true); // prevent ENTER key to submit form

//grab text from input and Create LI

let CreatedToDos = []; //create array from Submissions



document.querySelector(".add-to-list").addEventListener("click", function () {
	const grabListItem = document.forms.addItems.addToDo.value; // Grab string from INPUT 
	if (grabListItem === '') {
		alert('Please add something to list'); // Alert if nothing is TYPED
	} else {

		CreatedToDos.push(grabListItem); // Add items to array
		var lastItem = CreatedToDos.pop(); // Grab last item from array ==
		var listItem = document.createElement("li"); // Create LI item
		listItem.className = "unchecked";
		listItem.onclick = "closebtns";
		var text = document.createTextNode(lastItem); // Create LI content based on Array
		let edit = document.createElement('div'); // Create DIV for EDIT AREA
		edit.className = "edit-control"; // Set CLASS for EDIT AREA div
		edit.innerHTML = '<button class="edit"><span class="icon-edit"></span></button><button class="delete" onclick="removeMe()"><span class="icon-remove"></span></button>'; // Code for EDIT AREA
		listItem.appendChild(edit); //Add EDIT AREA to li 	
		listItem.appendChild(text); //Place TEXT inside LI
		document.querySelector(".list").appendChild(listItem); //Place LI inside UL




		document.forms.addItems.reset(); // reset form

	}
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

// Hate this but just for the extras :)
let advertisement = "Are You Enjoying this App?";
setTimeout(() => {
	alert(advertisement);
}, 30000);