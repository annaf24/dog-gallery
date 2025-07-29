import { downloadImage } from "./download.js"
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('.modal__image');
const downloadButton = modal.querySelector('.modal__download');
const closeButton = modal.querySelector('.modal__close');

let isModalOpen = false;
let imageUrl = '';

const handleEscKeyUp = (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
}

closeButton.addEventListener('click', () => {
    closeModal();
})

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
})

export const openModal = (url) => {
    modal.classList.add('modal_is-opened');
    modalImage.src = url;
    imageUrl = url;
    isModalOpen = true;
    document.addEventListener("keyup", handleEscKeyUp);
}

export const closeModal = () => {
    modal.classList.remove('modal_is-opened');
    modalImage.src = '';
    imageUrl = '';
    isModalOpen = false;
    document.removeEventListener("keyup", handleEscKeyUp);
}

export const isModalCurrentlyOpen = () => isModalOpen;

downloadButton.addEventListener('click', () => {
    if (imageUrl) {
        downloadImage(imageUrl, 'dog.jpg');
    }
});