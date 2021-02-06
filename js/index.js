let balance = 0;
let balanceTx = document.getElementById('balance');

document.body.onload = () => {
	if(localStorage.getItem('balance') == null)
		return;

	balance = parseInt(localStorage.getItem('balance'));
	balanceTx.innerText = `Balance: ${balance}$`;
}

document.getElementById('work').addEventListener('click', () => {
	balanceTx.innerText = `Balance: ${++balance}$`;
	localStorage.setItem('balance', balance);
});