//grab text from input and Create LI

document.querySelector(".add-to-list").addEventListener("click", function () {
	const grabListItem = document.querySelector(".nice-day").value;
	if (grabListItem === '') {
		alert('Please add something to list'); // Alert if nothing is TYPED
	} else {

		let listItem = document.createElement("LI"); // Create LI
		let checkbox = document.createElement('input'); // Create INPUT
		checkbox.type = "checkbox"; // set Checkbox property
		checkbox.name = "name"; // set Name property
		checkbox.value = "value"; // set Value property

	
		
		
		checkbox.id = "id" ; // set ID property

		let label = document.createElement('label'); // Create LABEL
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(grabListItem)); // Grab text from INPUT to LABEL

		listItem.appendChild(checkbox); // Add Checkbox to li
		listItem.appendChild(label); // Add LABEL to li	 	

		let edit = document.createElement('div'); // Create DIV for EDIT AREA
		edit.className = "edit-control"; // Set CLASS for EDIT AREA div
		edit.innerHTML = '<button class="edit"><span class="icon-edit"></span></button><button class="delete"><span class="icon-remove"></span></button>'; // Code for EDIT AREA
		listItem.appendChild(edit); //Add EDIT AREA to li 	
		document.querySelector(".list").appendChild(listItem); //Add li to UL

	}
});
