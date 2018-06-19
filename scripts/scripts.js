let user = {
	name: "Henry"};

function logMyName() {
	this.name = "Donna";
	console.log(user.name, this.user.name);
}

logMyName();