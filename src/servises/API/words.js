import axios from "axios";

const api = axios.create({
    baseURL: '/api/words'
});

// Обработчик ошибок
const handleError = (error, message) => {
    console.error(message, error);
    throw error;
}

export async function getWordsApi() {
    try {
        return await api.get('/');
    } catch (error) {
        handleError(error, "Ошибка при получении слов:");
    }
}

export async function addedWordApi(item) {
    try {
        return await api.post('/add', item);
    } catch (error) {
        handleError(error, "Ошибка при добавлении слова:");
    }
}

export async function changedWordApi(item) {
    try {
        return await api.post(`/${item.id}/update`, item);
    } catch (error) {
        handleError(error, "Ошибка при изменении слова:");
    }
}

export async function deleteWordApi(id) {
    try {
        return await api.post(`/${id}/delete`);
    } catch (error) {
        handleError(error, "Ошибка при удалении слова:");
    }
}