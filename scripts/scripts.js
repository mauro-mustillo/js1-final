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
		var text = document.createTextNode(lastItem); // Create LI content based on Array
		let edit = document.createElement('div'); // Create DIV for EDIT AREA
		edit.className = "edit-control"; // Set CLASS for EDIT AREA div
		edit.innerHTML = '<button class="archive"><span class="icon-archive"></span></button><button class="edit"><span class="icon-edit"></span></button><button class="delete"> <span class="icon-remove"></span></button>'; // Code for EDIT AREA
		listItem.appendChild(edit); //Add EDIT AREA to li 
		listItem.appendChild(text); //Place TEXT inside P
		
		document.querySelector(".list").appendChild(listItem); //Place LI inside UL




		document.forms.addItems.reset(); // reset form

	}
});

// ================================== Check / Uncheck Effect

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

// ================================== Delete Button


 document.querySelector(".list").addEventListener("click", function (e) {  //select parent item if not yet created LI

 	if (e.target && e.target.matches(".icon-remove")) {  // triggers the event when the click is on icon area

 		var deleteConfirmation = confirm("Are you sure you want to DELETE this great task?");
 		if (deleteConfirmation === true) {
 			var deleteYes = event.target;
 			deleteYes.parentNode.parentNode.parentNode.remove(); // button.div.li
 		} else { // Do Nothing!
 		}

 	}
 });
// ================================== Edit Button


 document.querySelector(".list").addEventListener("click", function (e) {

	if (e.target && e.target.matches(".icon-edit")) {
	
	var archiveConfirmation= confirm("Are you sure you want to EDIT this task?");
		if (archiveConfirmation === true) {
			var editInput = prompt("what's your New Text for this Task");
			var archiveYes = event.target;
 			archiveYes.parentNode.parentNode.parentNode.innerHTML = editInput + '<div class="edit-control"><button class="archive"><span class="icon-archive"></span></button><button class="edit"><span class="icon-edit"></span></button><button class="delete"> <span class="icon-remove"></span></button></div>';

		} else {
			
		}
		
	}
});

/* / ================================== Data Storage

let archive = [];

function ArchivedEvent(toDoItem) {
	this.toDoItem = toDoItem;
}

let archiveBtn = document.querySelector('.archive');

archiveBtn.addEventListener('click', e => {
	e.preventDefault();
	let archiveItem = new Archive('some');
	archive.push(archiveItem);
	localStorage.setItem('archiveItem', JSON.stringify(archiveItem));
});

*/

// ================================== Timers
let advertisement = "I hate this too...but it's to implement all things learned!";
setTimeout(() => {
	alert(advertisement);
}, 30000);