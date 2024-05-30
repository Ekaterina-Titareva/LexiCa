import axios from "axios";

export default async function post(item, action, errorName) {
    try {
        
        const response = await axios.post(`/api/words/${action}`, JSON.stringify(item));
            return response;
    } catch (error) {
        console.error(`Ошибка при ${errorName} слова:`, error);
        throw error;
    }
}