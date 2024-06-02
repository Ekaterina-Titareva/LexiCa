import { useState, useEffect, useCallback } from "react";
import { observer } from "mobx-react";
import Word from '../../components/Word/Word.jsx';
import AddNewWord from "../../components/AddNewWord/AddNewWord.jsx";
import wordsStore from "../../servises/WordsStore.jsx"
import Loader from '../../components/Loader/Loader.jsx';
import { fields } from '../../servises/fields.js';
import validateField from '../../servises/validation.js';

const ListOfWords = observer(() => {
    const { words, loading, error, fetchWords, addedWord} = wordsStore;
    useEffect(() => {
        fetchWords()
    }, [fetchWords]);

    const [inputValues, setInputValues] = useState(
        fields.reduce((values, field) => ({ ...values, [field.id]: '' }), {})
    );
    const [touchedFields, setTouchedFields] = useState({});
    const [errors, setErrors] = useState({});
    // Обработчик изменения ввода
    const handleInputChange = (e, id) => {
        const value = e.target.value;
        setInputValues({
            ...inputValues,
            [id]: value
        });
        setTouchedFields({
            ...touchedFields,
            [id]: true
        });
        const errorMessage = validateField(id, value);
        setErrors({
            ...errors,
            [id]: errorMessage
        });
    };
    // Проверка на наличие ошибок и пустых полей
    const isDisabled = Object.values(errors).some(error => error) || 
                        Object.values(inputValues).some(value => value === '');
    // Обработчик сохранения изменений
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (!isDisabled) {
            addedWord(inputValues);
            setInputValues(fields.reduce((values, field) => ({ ...values, [field.id]: '' }), {}));
            setTouchedFields({});
            setErrors({});
        }
    }, [isDisabled, inputValues, addedWord]);
    if (loading) return <Loader />;
    if (error) return <h2>Проблема с сервером, обратитесь в службу поддержки, пожалуйста</h2>;
    return (
        <form onSubmit={handleSubmit}>
        <table>
            <thead>
                <AddNewWord 
                    inputValues={inputValues}
                    handleInputChange={handleInputChange}
                    touchedFields={touchedFields}
                    setTouchedFields={setTouchedFields}
                    isDisabled={isDisabled}
                    errors={errors}/> 
            </thead>
            <tbody>
                {!!words?.length &&
                    words.map((card) => (
                        <Word
                            key={card.id}
                            id={card.id}
                            tags={card.tags}
                            english={card.english}
                            transcription={card.transcription}
                            russian={card.russian}
                        />
                    ))}
            </tbody>
        </table>
        </form>
    );
})

export default ListOfWords;