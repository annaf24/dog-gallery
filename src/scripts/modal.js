const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('.modal__image');
const downloadLink = modal.querySelector('.modal__download');
const closeButton = modal.querySelector('.modal__close');

// Закрытие модального окна по нажатию Esc
const handleEscKeyUp = (e) => {
    if (e.key === "Escape") {
        const openedModal = document.querySelector('.modal_is-opened');
        closeModal(openedModal);
    }
}

// Открытие модального окна
export const openModal = (modal) => {
    modal.classList.add('modal_is-opened');
    // modalImage.src = 
    document.addEventListener("keyup", handleEscKeyUp);
}

// Закрытие модального окна
export const closeModal= (modal) => {
    modal.classList.remove('modal_is-opened');
    document.removeEventListener("keyup", handleEscKeyUp);
}