//Prevent KeyPress to Send Form
window.addEventListener('keydown',function(e){if(e.keyIdentifier==='U+000A'||e.keyIdentifier==='Enter'||e.keyCode===13){if(e.target.nodeName==='INPUT'&&e.target.type==='text'){e.preventDefault();return false;}}},true); // prevent ENTER key to submit form

//grab text from input and Create LI
document.querySelector(".add-to-list").addEventListener("click", function () {
	const grabListItem = document.querySelector(".nice-day").value;
	if (grabListItem === '') {
		alert('Please add something to list'); // Alert if nothing is TYPED
	} else {

		let listItem = document.createElement("LI"); // Create LI
		listItem.appendChild(document.createTextNode(grabListItem)); // Grab text from INPUT to LABEL
		listItem.className = "unchecked";
		listItem.onclick = "closebtns" ;
	/*	let checkbox = document.createElement('input'); // Create INPUT
		checkbox.type = "checkbox"; // set Checkbox property
		checkbox.name = "name"; // set Name property
		checkbox.value = "value"; // set Value property
		checkbox.id = "id" ; // set ID property

		let label = document.createElement('label'); // Create LABEL
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(grabListItem)); // Grab text from INPUT to LABEL

		listItem.appendChild(checkbox); // Add Checkbox to li
		listItem.appendChild(label); // Add LABEL to li	 	
*/dc
		let edit = document.createElement('div'); // Create DIV for EDIT AREA
		edit.className = "edit-control"; // Set CLASS for EDIT AREA div
		edit.innerHTML = '<button class="edit"><span class="icon-edit"></span></button><button class="delete" onclick="removeMe()"><span class="icon-remove"></span></button>'; // Code for EDIT AREA
		listItem.appendChild(edit); //Add EDIT AREA to li 	
		document.querySelector(".list").appendChild(listItem); //Add li to UL

	}
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Ask About the App
let advertisement = "Are You Enjoying this App?";
setTimeout(() => {
  alert(advertisement);
}, 5000 );