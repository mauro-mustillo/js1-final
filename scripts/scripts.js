
let emailInput = document.form.addItem.addToDo;
let myPTag = document.querySelector('#data_binding');
emailInput.addEventListener('keyup', e => {
	myPTag.textContent = e.target.value;
});