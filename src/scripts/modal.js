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
    document.addEventListener("keyup", handleEscKeyUp);
}

// Закрытие модального окна
export const closeModal= (modal) => {
    modal.classList.remove('modal_is-opened');
    document.removeEventListener("keyup", handleEscKeyUp);
}