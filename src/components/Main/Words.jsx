export const words = await fetch('https://itgirlschool.justmakeit.ru/api/words/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Сервер недоступен');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Ошибка:', error);
    })