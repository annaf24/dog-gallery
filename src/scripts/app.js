// DOM-ЭЛЕМЕНТЫ

import { getDogImage } from "./api.js";
import { createImage } from "./image.js";

//Общий контейнер
const gallery = document.querySelector('.gallery__list');

const IMAGE_LIMIT = 9;

async function addImage() {
    const url = await getDogImage();
    console.log('Полученный URL:', url);

    if (!url) return;
    const imageElement = createImage(url);

    gallery.appendChild(imageElement);

    if (gallery.children.length >= IMAGE_LIMIT) {
        gallery.removeChild(gallery.firstChild);
    }
}


// setInterval(addImage, 3000);
// addImage();
// addImage();
// addImage();
// addImage();
// addImage();
// addImage();