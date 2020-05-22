window.addEventListener('DOMContentLoaded', function() {
	let products = document.querySelectorAll('.card'),
	buttons = document.getElementsByClassName("card__icon-btn"),
	open = document.getElementsByClassName("header-link__text")[1];
	close = document.getElementsByClassName("close")[0];


	let block = document.querySelector(".wishlist__block-wrapper")
		field = document.querySelector(".wishlist__container"),
		cart = document.querySelector(".wishlist__block"),
		close = document.querySelector(".close");

	for (let i = 0; i < buttons.length; i++) {
		// click для каждой из кнопок в списке товаров
		buttons[i].addEventListener('click', function() {
			// копия для корзины
			let item  = products[i].cloneNode(true);

			// item.remove();
			field.appendChild(item);
		})
	}

	function openWishList() {
		cart.style.display = "block"
	};

	function closeWishlist() {
		cart.style.display = "none"
	};

	open.addEventListener('click', openWishList);
	close.addEventListener('click', closeWishlist);








	
});