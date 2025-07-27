const imageTemplate = document.querySelector('#gallery-image-template').content;

export function createImage(imageData, openModal) {
    const imageElement = imageTemplate.querySelector('.image__item').cloneNode(true);
    const image = imageElement.querySelector('image');

    image.alt = imageData.alt;
    image.src = imageData.src;

    image.addEventListener('click', () => openModal(imageData.alt, imageData.src));

    return imageElement;
}