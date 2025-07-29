import { getDogImage } from "./api.js";
import { createImage } from "./image.js";
import { isModalCurrentlyOpen } from "./modal.js";

const gallery = document.querySelector('.gallery__list');

const IMAGE_LIMIT = 24;

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

setInterval(addImage, 3000);



