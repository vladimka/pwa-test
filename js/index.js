let balanceTx = document.getElementById('balance');
let upgrade1CostTx = document.querySelector('#upgrade1>p>span#cost');

document.getElementById('work').addEventListener('click', () => config.balance += config.coinsPerClick);
document.querySelector('#upgrade1>.upgrade-button').addEventListener('click', e => {
	if(config.balance < config.upgrade1Cost)
		return;

	config.balance -= config.upgrade1Cost;
	config.coinsPerClick *= 1.7;
	config.upgrade1Cost *= 1.17;
});

function render(){
	balanceTx.innerText = `Balance: ${config.balance.toFixed(2)}$`;
	upgrade1CostTx.innerText = config.upgrade1Cost.toFixed(2);
}

setInterval(() => render(), 100);