import { useState, useEffect, createContext } from "react";
import { getWordsApi, changedWordApi, deleteWordApi, addedWordApi } from "../API/words";

const WordsContext = createContext();

const WordsContextProvider = ({ children }) => {
const [state, setState] = useState({
    words: [],
    error: null,
    loading: true,
});

useEffect(() => {
    const fetchWords = async () => {
    try {
        const response = await getWordsApi();
        setState(prevState => ({ ...prevState, words: response.data, loading: false }));
    } catch (err) {
        setState(prevState => ({ ...prevState, error: err, loading: false }));
    }
    };

    fetchWords();
}, []);


const updateWordsState = (updatedWords) => {
    setState(prevState => ({ ...prevState, words: updatedWords}));
};

const deleteWord = async (idOfWord) => {
    try {
    await deleteWordApi(idOfWord);
    updateWordsState(state.words.filter(word => word.id !== idOfWord));
    console.log(`deleted ${idOfWord}`);
    } catch (err) {
    console.error(err);
    }
};

const changedWord = async (updatedWord) => {
        try {
        await changedWordApi(updatedWord);
        updateWordsState(state.words.map(word => word.id === updatedWord.id ? updatedWord : word));
        console.log(`changed ${updatedWord.id}`)
    } catch (err) {
        console.error(err);
        }
};

const addedWord = async (newWord) => {
    try {
        const response = await addedWordApi(newWord);
        updateWordsState([...state.words, response.data]);
        console.log(`added ${response.data.id}`);
    } catch (err) {
        console.error(err);
    }
};

return (
    <WordsContext.Provider value={{ ...state, deleteWord, changedWord, addedWord }}>
        {children}
    </WordsContext.Provider>
);
};

export { WordsContextProvider, WordsContext };
