import axios from "axios";
import post from "../post"

export async function getWordsApi() {
try {
    const response = await axios.get('/api/words');
    return response;
} catch (error) {
    console.error("Ошибка при получении слов:", error);
    throw error;
}
}

export async function addedWordApi(item) {
    await post(item, "add", "добавлении");
}

export async function changedWordApi(item) {
    await post(item, `${item.id}/update`, "изменении");
}

export async function deleteWordApi(item) {
    await post(item, `${item}/delete`, "удалении");
}