import React, { useState } from 'react';
import { observer } from "mobx-react";
import styles from "./addNewWord.module.css"
import { fields } from '../../servises/fields.js';
import wordsStore from "../../servises/WordsStore.jsx";
import TableInput from '../TableInput/TableInput.jsx';
import validateField from '../../servises/validation.js';

const AddNewWord = observer(() => {
    const { addedWord } = wordsStore;
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
                        <td>
                            <button
                                disabled={hasEmptyValue || hasErrors}
                                type='submit'
                                className={styles.buttonAdd}
                            >Добавить слово</button>
                        </td>
                    </tr>
                </thead>
            </table>
        </form>
    );
})

export default AddNewWord;