import axios from "axios";

const URL = process.env.React_App_Api || "https://itgirlschool.justmakeit.ru/api";

export async function getWordsApi() {
    try {
        const response = await axios.get(`${URL}/words`);
        return response;
    } catch (error) {
        console.error("Ошибка при получении слов:", error);
        throw error;
    }
}

export async function addedWordApi(item) {
    try {
        const response = await axios({
            method: "post",
            url: `${URL}/words/add`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(item),
        });
        return response;
    } catch (error) {
        console.error("Ошибка при добавлении слова:", error);
        throw error;
    }
}

export async function changedWordApi(item) {
    try {
        const response = await axios({
            method: "post",
            url: `${URL}/words/${item.id}/update`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(item),
        });
        return response;
    } catch (error) {
        // Обработка ошибки
        console.error("Ошибка при изменении слова:", error);
        throw error;
    }
}


export async function deleteWordApi(id) {
    try {
        const response = await axios({
            method: "post",
            url: `${URL}/words/${id}/delete`,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        console.error("Ошибка при удалении слова:", error);
        throw error;
    }
}
