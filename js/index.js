const btnMenu = document.getElementById('burger-menu');
btnMenu.addEventListener('click', onClickMenu);
function onClickMenu() {
	const menu = document.querySelector(".menu");
	menu.classList.toggle('open');
	btnMenu.classList.toggle('close');
}


document.addEventListener('DOMContentLoaded', addDot);
window.addEventListener('resize', addDot);
function addDot() {
	const items = document.querySelectorAll('.name-price');
	items.forEach((item) => {
		const name = item.querySelector('.name-price__name');
		const price = item.querySelector('.name-price__value');
		const containerWidth = item.clientWidth;
		const nameLength = name.clientWidth;
		const priceLength = price.clientWidth;

		if (name.textContent && price.textContent) {
			const textLength = nameLength + priceLength;
			const maxLength = Math.floor((containerWidth - textLength) / 6);
			const dots = item.querySelector('.name-price__dots');
			dots.innerHTML = '';
			for (let i = 0; i < maxLength; i++) {
				dots.innerHTML += '.';
			}
		}
	})
}
