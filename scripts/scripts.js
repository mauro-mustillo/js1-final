let emailInput = document.addToDo;
let myPTag = document.querySelector('#data_binding');
emailInput.addEventListener('keyup', e => {
	myPTag.textContent = e.target.value;
});