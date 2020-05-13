// Контейнер с селектом
const selectAllElements = document.querySelectorAll("[data-select]");

selectAllElements.forEach(function(item){
	item.addEventListener("click", function(){
		const realSelect = this.nextElementSibling;
		
		// Если кликнули по пунктам в дропдауне			
		if (event.target.hasAttribute("data-select-item")){
			//Нашли заголовок у дропдауна и записали в его текстовое наполнение значение из data атрибута data-select-item
			let itemTitle = event.target.getAttribute("data-select-item")
			this.querySelector("[data-select-title]").textContent = event.target.getAttribute("data-select-item");

			// Cкрываем дропдаун
			this.querySelector(".header-select__dropdown").classList.toggle("hidden");

			// event.target.closest("[data-select]").querySelector(".header-select__dropdown").classList.toggle("hidden");


			// Связка с реальным селектом
			// У реального слекта изменяем значение value
			if (realSelect) {
				realSelect.value = itemTitle;
			}
		} else {
		// Если кликнули по заголовку в дропдауне -скрываем или открываем дропдаун
		this.querySelector(".header-select__dropdown").classList.toggle("hidden");
		}
	})
})









// // Прослушиваем клик внутри контейнера с селектом
// selectElement.addEventListener("click", function(event){

// 	// Проверка где произошел клик
// 	// event.target - показывает на каком именно элементе произошел клик
// 	// Если кликнули по пункту внутри дропдауна
// 	if (event.target.hasAttribute("data-select-item")) {

// 			// Получаем значение этого пункта data-select-item у этого элемента
// 			const itemTitle = event.target.getAttribute("data-select-item");

// 			// Находим заголовок и меняем его текст на значение из выбранного пункта
// 			event.target.closest("[data-select]").querySelector("[data-select-title]").textContent = itemTitle;

// 			// Cкрываем дропдаун
// 			event.target.closest("[data-select]").querySelector(".header-select__dropdown").classList.toggle("hidden");


// 			// Связка с реальным селектом
// 			// У реального слекта изменяем значение value 
// 			selectReal.value = itemTitle;

// 		} else {
// 			// Иначе: клик произошел Не по элементу в дропдауне. Значит это title или область вокруг него
// 			// Скрываем или открываем дропдаун
// 			this.querySelector(".header-select__dropdown").classList.toggle("hidden");
// 		}

// })