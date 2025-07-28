// Загрузка изображения
export function downloadImage(url) {
    fetch(url)
    .then(response => response.blob())
    .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = 'dog.jpg';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objectUrl);
    })
    .catch(error => {
        console.error('Ошибка при скачивании изображения', error);
    });
}