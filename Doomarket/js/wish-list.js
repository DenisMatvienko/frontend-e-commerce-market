window.addEventListener("DOMContentLoaded", function() {
	let products = document.querySelectorAll(".card"),
	buttons = document.querySelectorAll(".card__icon-btn"),
	open = document.getElementsByClassName("header-link__text")[1],
	close = document.getElementsByClassName("close")[0];


	let block = document.querySelector(".wishlist__block-wrapper")
		field = document.querySelector(".wishlist__container"),
		cart = document.querySelector(".wishlist__block"),
		close = document.querySelector(".close");

	// Функция добавления товара в избранное
	for (let i = 0; i < buttons.length; i++) {
		// click для каждой из кнопок в списке товаров
		buttons[i].addEventListener("click", function() {
			// Копия для корзины + удаление кнопки (добавления в избранное) из главной страницы и из самого избранного
			let item  = products[i].cloneNode(true);
				btn = item.querySelector("button")
				
			btn.remove()		
			field.appendChild(item);
			buttons[i].remove();
		})
	}

	
	// Функция открытия избранного
	function openWishList() {
		cart.style.display = "block"
	};

	// Функция закрытия избранного
	function closeWishlist() {
		cart.style.display = "none"
	};

	// События открытия и закрытия избранного
	open.addEventListener("click", openWishList);
	close.addEventListener("click", closeWishlist);
});