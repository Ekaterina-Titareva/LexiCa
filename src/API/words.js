import axios from "axios";

const URL = process.env.React_App_Api || "https://itgirlschool.justmakeit.ru/api";

const api = axios.create();

api.interceptors.response.use(
(response) => response,
(error) => {
    if (!error.response) {
    console.error("Network Error:", error.message);
    // Handle the network error here
    }
    return Promise.reject(error);
}
);

export async function getWordsApi() {
try {
    const response = await api.get(`${URL}/words`);
    return response;
} catch (error) {
    console.error("Ошибка при получении слов:", error);
    throw error;
}
}

export async function addedWordApi(item) {
    try {
    return await axios({
        method: "post",
        url: `${URL}/words/add`,
        data: JSON.stringify(item),
    })
}    catch (error) {
    // Обработка ошибки
    console.error("Ошибка при добавлении слова:", error);
    throw error;
}
}

export async function changedWordApi(item) {
    try {
        return await axios({
            method: "post",
            url: `${URL}/words/${item.id}/update`,
            data: JSON.stringify(item),
        });
    } catch (error) {
        // Обработка ошибки
        console.error("Ошибка при изменении слова:", error);
        throw error;
    }
}


export async function deleteWordApi(id) {
    try {
        return await axios({
            method: "post",
            url: `${URL}/words/${id}/delete`,
        });
    } catch (error) {
        console.error("Ошибка при удалении слова:", error);
        throw error;
    }
}
