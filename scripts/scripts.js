//Prevent KeyPress to Send Form
window.addEventListener('keydown', function (e) { //Well done here, Mauro! -RJH
	if (e.keyIdentifier === 'U+000A' || e.keyIdentifier === 'Enter' || e.keyCode === 13) {
		if (e.target.nodeName === 'INPUT' && e.target.type === 'text') {
			e.preventDefault();
			return false;
		}
	}
}, true); // prevent ENTER key to submit form

//grab text from input and Create LI

let CreatedToDos = []; //create array from Submissions //remember camelCasing -RJH



document.querySelector(".add-to-list").addEventListener("click", function () {
	const grabListItem = document.forms.addItems.addToDo.value; // Grab string from INPUT 
	if (grabListItem === '') {
		alert('Please add something to list'); // Alert if nothing is TYPED //Good edge casing here! -RJH
	} else {

		CreatedToDos.push(grabListItem); // Add items to array
		let lastItem = CreatedToDos.pop(); // Grab last item from array ==
		let listItem = document.createElement("li"); // Create LI item
		listItem.className = "unchecked";
				let listP = document.createElement("P"); // Create LI item

		let text = document.createTextNode(lastItem); // Create LI content based on Array
		let edit = document.createElement('div'); // Create DIV for EDIT AREA
		edit.className = "edit-control"; // Set CLASS for EDIT AREA div
		edit.innerHTML = '<button class="archive"><span class="icon-archive"></span></button><button class="edit"><span class="icon-edit"></span></button><button class="delete"> <span class="icon-remove"></span></button>'; // Code for EDIT AREA
		listItem.appendChild(edit); //Add EDIT AREA to li 
		listItem.appendChild(listP);
		listP.appendChild(text); //Place TEXT inside P
		
		document.querySelector(".list").appendChild(listItem); //Place LI inside UL //Nice job here! -RJH




		document.forms.addItems.reset(); // reset form

	}
});

// ================================== Check / Uncheck Effect

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

// ================================== Delete Button


 document.querySelector(".list").addEventListener("click", function (e) {  //select parent item if not yet created LI

 	if (e.target && e.target.matches(".icon-remove")) {  // triggers the event when the click is on icon area

 		let deleteConfirmation = confirm("Are you sure you want to DELETE this great task?"); //Good edge casing -RJH
 		if (deleteConfirmation === true) {
 			var deleteYes = event.target;
 			deleteYes.parentNode.parentNode.parentNode.remove(); // button.div.li
 		} else { // Do Nothing! //You can just leave the }else{} off in this case, or return
 		}

 	}
 });
// ================================== Edit Button


 document.querySelector(".list").addEventListener("click", function (e) {

	if (e.target && e.target.matches(".icon-edit")) {

			let editInput = prompt("Edit Your Task Content Here");
		if (editInput === '') {
			alert("You should add some text here! let's try Again");
		
			
		} else {
		
			let archiveYes = event.target;
 			archiveYes.parentNode.parentNode.parentNode.innerHTML = '<p>' + editInput + '</p><div class="edit-control"><button class="archive"><span class="icon-archive"></span></button><button class="edit"><span class="icon-edit"></span></button><button class="delete"> <span class="icon-remove"></span></button></div>';

	
		}
	}
});

 // ================================== Data Storage

document.querySelector(".list").addEventListener("click", function (e) { //select parent item if not yet created LI

	if (e.target && e.target.matches(".icon-archive")) { // triggers the event when the click is on icon area

		let archiveConfirmation = confirm("Are you sure you want to ARCHIVE this great task?");
		if (archiveConfirmation === true) {
			let grabTextFromList = event.target.parentNode.parentNode.parentNode; //Select LI
			let htmlContent = grabTextFromList.innerHTML; //strips all content from LI
			let textContent = grabTextFromList.textContent; //remove all html and leaves all text
			archiveDb.push(textContent);
			

		} else { // Do Nothing! //Again. you can leave this off :) -RJH
		}

	}
});

let archiveDb = []; // array out of scoope to allow items to be added outside function

localStorage.setItem("archiveDb", JSON.stringify(archiveDb));
localStorageTheArray = JSON.parse(localStorage.getItem("archiveDb")); //Good use of localStorage -RJH

//Are you using this archived info to save after refresh? It doesn't seem to be working if so -RJH
console.log(archiveDb); 




// ================================== Timers
let advertisement = "I hate this too...but it's to implement all things learned!"; //HAHAHA!! Good stuff! -RJH
setTimeout(() => {
	alert(advertisement);
}, 30000);


// ================================== Move Copyright


