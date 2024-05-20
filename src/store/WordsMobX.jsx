import { makeAutoObservable } from "mobx";
import { getWordsApi, changedWordApi, deleteWordApi, addedWordApi } from "../API/words";


class WordsStore {
    words = [];
    loading = true;
    error = null;
    

    constructor() {
        makeAutoObservable(this);
        console.log(this)
    }

    

    async fetchWords() {
        try {
        const response = await getWordsApi();
        this.words = response.data;
        this.loading = false;
        } catch (err) {
        this.error = err;
        this.loading = false;
        }
    }

    updateWordsState(updatedWords) {
        this.words = updatedWords;
    }

    async deleteWord(idOfWord) {
        try {
        await deleteWordApi(idOfWord);
        const filteredWords = this.words.filter((word) => word.id !== idOfWord);
        this.updateWordsState(filteredWords);
        console.log(`deleted ${idOfWord}`);
        } catch (err) {
        console.error(err);
        }
    }

    async changedWord(updatedWord) {
        try {
        await changedWordApi(updatedWord);
        const updatedWords = this.words.map((word) =>
            word.id === updatedWord.id ? updatedWord : word
        );
        this.updateWordsState(updatedWords);
        console.log(`changed ${updatedWord.id}`)
    } catch (err) {
        console.error(err);
    }
    }

    async addedWord(newWord) {
    try {
        const response = await addedWordApi(newWord);
        const updatedWords = [...this.words, response.data];
        this.updateWordsState(updatedWords);
        console.log(`added ${response.data.id}`);
    } catch (err) {
        console.error(err);
    }
    }
}

const wordsStore = new WordsStore();

export default wordsStore;