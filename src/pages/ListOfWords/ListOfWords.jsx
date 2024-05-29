import { useState, useEffect } from "react";
import { observer } from "mobx-react";
import Word from '../../components/Word/Word.jsx';
import wordsStore from "../../servises/WordsStore.jsx"
import Loader from '../../components/Loader/Loader.jsx';
import { fields } from '../../servises/fields.js';
import TableInput from '../../components/TableInput/TableInput.jsx';
import validateField from '../../servises/validation.js';
import styles from "./listOfWords.module.css"

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

    const hasEmptyValue = Object.values(inputValues).some(value => value.trim() === "");
    const hasErrors = Object.values(errors).some(error => error !== '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!hasEmptyValue && !hasErrors) {
            addedWord(inputValues);
            // Очистка полей формы
            setInputValues(fields.reduce((values, field) => ({ ...values, [field.id]: '' }), {}));
            setTouchedFields({});
            setErrors({});
        }
    };
    if (loading) return <Loader />;
    if (error) return <h2>Проблема с сервером, обратитесь в службу поддержки, пожалуйста</h2>;
    return (
        <form onSubmit={handleSubmit}>
        <table>
            <thead>
                    <tr>
                        <td>
                            <p className={styles.label}>Id</p>
                        </td>
                        {fields.map((field) => (
                            <TableInput 
                            key={field.id}
                            id={field.id}
                            type={"text"} 
                            placeholder={field.placeholder} 
                            value={inputValues[field.id]} 
                            handleInputChange={(e) => handleInputChange(e, field.id)}
                            onBlur={() => setTouchedFields({ ...touchedFields, [field.id]: true })}
                            errors={errors[field.id]}
                            label={<p className={styles.label} htmlFor={field.id} title={field.title}>{field.name}</p>}
                            />
                        ))}
                        <td colSpan={2}>
                            <button
                                disabled={hasEmptyValue || hasErrors}
                                type='submit'
                                className={styles.buttonAdd}
                            >Добавить слово</button>
                        </td>
                    </tr>
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