const API = 'https://dog.ceo/api/breed/corgi/images/random';

export async function getDogImage() {
    try {
        const response = await fetch(API);
        const data = await response.json();

        if  (data.status !== 'success') {
            throw new Error('Ошибка');
        }
        return data.message;

    } catch (error) {
        console.error('Ошибка загрузки изображения', error);
        return null;
    }
}
