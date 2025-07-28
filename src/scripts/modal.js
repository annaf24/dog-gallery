import { downloadImage } from "./download.js"
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('.modal__image');
const downloadButton = modal.querySelector('.modal__download');
const closeButton = modal.querySelector('.modal__close');

let isModalOpen = false;
let imageUrl = '';

// Закрытие модального окна по нажатию Esc
const handleEscKeyUp = (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
}

// Закрытие по кнопке
closeButton.addEventListener('click', () => {
    closeModal();
})

// Закрытие по клику вне изображения
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
})

// Открытие модального окна
export const openModal = (url) => {
    modal.classList.add('modal_is-opened');
    modalImage.src = url;
    imageUrl = url;
    isModalOpen = true;
    document.addEventListener("keyup", handleEscKeyUp);
}

// Закрытие модального окна
export const closeModal= () => {
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