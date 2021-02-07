let config = {
	balance : 0,
	coinsPerClick : 1,
	upgrade1Cost : 50
}

document.body.onload = () => {
	if(localStorage.getItem('save') == null)
		return;

	load();
}

function save(){
	localStorage.setItem('save', JSON.stringify(config));
}

function load(){
	config = JSON.parse(localStorage.getItem('save'));
}

setInterval(() => save(), 1000);