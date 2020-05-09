// Контейнер с селектом
const selectElement = document.querySelector("[data-select]");
// Найден реальный селект
const selectReal = document.querySelector("#selectReal");

// Прослушиваем клик внутри контейнера с селектом
selectElement.addEventListener("click", function(event){
	// Проверка где произошел клик
	// event.target - показывает на каком именно элементе произошел клик
	// Если кликнули по пункту внутри дропдауна
	if (event.target.hasAttribute("data-select-item")) {

			// Получаем значение этого пункта data-select-item у этого элемента
			const itemTitle = event.target.getAttribute("data-select-item");

			// Находим заголовок и меняем его текст на значение из выбранного пункта
			event.target.closest("[data-select]").querySelector("[data-select-title]").textContent = itemTitle;

			// Cкрываем дропдаун
			event.target.closest("[data-select]").querySelector(".header-select__dropdown").classList.toggle("hidden");


			// Связка с реальным селектом
			// У реального слекта изменяем значение value 
			selectReal.value = itemTitle;

		} else {
			// Иначе: клик произошел Не по элементу в дропдауне. Значит это title или область вокруг него
			// Скрываем или открываем дропдаун
			this.querySelector(".header-select__dropdown").classList.toggle("hidden");
		}

})