import { openModal } from "./modal.js";
const imageTemplate = document.querySelector('#gallery-image-template').content;

export function createImage(url) {
    const imageElement = imageTemplate.querySelector('.gallery__item').cloneNode(true);
    const image = imageElement.querySelector('.gallery__image');

    // image.alt = 'Собака';
    image.src = url;

    image.addEventListener('click', () => openModal(url));

    return imageElement;
}