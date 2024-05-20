import React, { useState } from 'react';
import styles from "./addNewWord.module.css"
import { fields } from '../../store/fields.js';
import wordsStore from "../../store/WordsMobX.jsx";

function AddNewWord() {
    const { addedWord } = wordsStore;
    const [inputValues, setInputValues] = useState(
        fields.reduce((values, field) => ({ ...values, [field.id]: '' }), {})
    );
    const [touchedFields, setTouchedFields] = useState({});
    const [errors, setErrors] = useState({});

    const validateField = (id, value) => {
        let regex;
        switch(id) {
            case 'tags':
            case 'english':
                regex = /^[A-Z]+$/i;
                if (!regex.test(value)) {
                    return "Enter an english word";
                }
                break;
            case 'russian':
                regex = /^[А-ЯЁ]+$/i;
                if (!regex.test(value)) {
                    return "Enter a russian word";
                }
                break;
            default:
                return '';
        }
        return '';
    };

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

    // Функция для определения класса стиля поля ввода
    const inputClassName = (id) => {
        return `${styles.input} ${(touchedFields[id] && inputValues[id].trim() === '') || errors[id] ? styles.error : ''}`;
    };

    const handleAddButtonClick = (e) => {
        e.preventDefault();
        if (!hasEmptyValue && !hasErrors) {
            addedWord(inputValues);
            // Очистка полей формы
            setInputValues(fields.reduce((values, field) => ({ ...values, [field.id]: '' }), {}));
            setTouchedFields({});
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleAddButtonClick}>
            <table>
                <thead>
                    <tr>
                        <td>
                            <p className={styles.label}>Id</p>
                        </td>
                        {fields.map((field) => (
                            <td key={field.id} className={field.className}>
                                <p className={styles.label} htmlFor={field.id} title={field.title}>{field.name}</p>
                                <input 
                                    className={inputClassName(field.id)} 
                                    type="text" 
                                    id={field.id} 
                                    placeholder={field.placeholder} 
                                    value={inputValues[field.id]} 
                                    onChange={(e) => handleInputChange(e, field.id)}
                                    onBlur={() => setTouchedFields({ ...touchedFields, [field.id]: true })}
                                />
                                {errors[field.id] && <div className={styles.errorMsg}>{errors[field.id]}</div>}
                            </td>
                        ))}
                        <td>
                            <button
                                disabled={hasEmptyValue || hasErrors}
                                type='submit'
                                className={styles.buttonAdd}
                            >Add</button>
                        </td>
                    </tr>
                </thead>
            </table>
        </form>
    );
}

export default AddNewWord;