import { getDogImage } from "./api.js";
import { createImage } from "./image.js";
import { isModalCurrentlyOpen } from "./modal.js";

// DOM-ЭЛЕМЕНТЫ
//Общий контейнер
const gallery = document.querySelector('.gallery__list');

// Макимальное количество изображений на странице
const IMAGE_LIMIT = 24;

// Добавление изображений на страницу
async function addImage() {
    if (isModalCurrentlyOpen()) return;

    const url = await getDogImage();

    if (!url) return;
    const imageElement = createImage(url);

    gallery.appendChild(imageElement);

    if (gallery.children.length >= IMAGE_LIMIT) {
        gallery.removeChild(gallery.firstChild);
    }
}
// Установка интервала в 3с для загрузки изображений на страницу
setInterval(addImage, 3000);



