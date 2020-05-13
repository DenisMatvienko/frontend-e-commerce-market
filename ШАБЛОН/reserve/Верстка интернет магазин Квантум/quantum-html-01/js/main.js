// Нашли контейнер с селектом
const selectElement = document.querySelector("[data-select]");
// Нашли реальный селект
const selectReal = document.querySelector("#selectReal");

// Прослушиваем клик внутри контейнера с селектом
selectElement.addEventListener("click", function(event) {

    // Проверка где произошел клик
    // event.target - показывает на каком именно HTML  элементе произошел клик
    // Если кликнули по пункту внутри дропдауна
    if (event.target.hasAttribute("data-select-item")) {

        // Получаем значение из атрибута data-select-item у этого элемента
        const itemTitle = event.target.getAttribute("data-select-item"); // Mobile

        // Находим заголовок и меняем его тектс на значение из выбранного пункта
        event.target
            .closest("[data-select]")
            .querySelector("[data-select-title]").textContent = itemTitle;

        // Скрываем дропдаун
        event.target
            .closest("[data-select]")
            .querySelector(".header-select__dropdown")
            .classList.toggle("hidden");

        // Связка с реальным селектом
        // Изменяем значение value у релаьного селекта
        selectReal.value = itemTitle;

    } else {
        // ИНАЧЕ: клик произошел НЕ по элементу в дропдауне.
        // Значит это title или область вокруг него
        console.log("Click on TITLE and AROUND");

        // Скрываем или открывае дропдаун
        this.querySelector(".header-select__dropdown").classList.toggle(
            "hidden"
        );
    }
});
