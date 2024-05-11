import React, { useState } from 'react';
import styles from './cardForList.module.css';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function CardForList({ id, category, word, transcription, translation }) {
    const [editValues, setEditValues] = useState({ category, word, transcription, translation });
    const [errors, setErrors] = useState({});
    const [isVisible, setIsVisible] = useState(true);

    // Функция валидации поля
    const validateField = (name, value) => {
        let regex;
        switch(name) {
            case 'category':
            case 'word':
                regex = /^[A-Z]+$/i;
                if (!regex.test(value)) {
                    return "Enter an english word";
                }
                break;
            case 'translation':
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

    // Обработчик изменения ввода
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: validateField(name, value)
        }));
    };

    // Обработчик сохранения изменений
    const handleSave = (e) => {
        e.preventDefault();
        // Проверка на наличие ошибок перед сохранением
        const formErrors = Object.keys(editValues).reduce((acc, key) => {
            const error = validateField(key, editValues[key]);
            if (error) {
                acc[key] = error;
            }
            return acc;
        }, {});

        if (Object.keys(formErrors).length === 0) {
            console.log('Сохраненные данные:', editValues);
            setIsVisible(true);
        } else {
            setErrors(formErrors);
        }
    };

    const handleToggle = () => {
        setIsVisible((prev) => (!prev));
    };

    // Проверка на наличие ошибок и пустых полей
    const isDisabled = Object.values(errors).some(error => error) || 
                        Object.values(editValues).some(value => value === '');

    return (
        <>
            { isVisible ? (
                <tr>
                    <td>{id}</td>
                    <td>{category}</td>
                    <td>{word}</td>
                    <td>{transcription}</td>
                    <td>{translation}</td>
                    <td className={styles.buttons}>
                        <Fab className={styles.buttonEdit} title="edit" color="error" size="small" aria-label="edit" onClick={handleToggle}>
                            <EditIcon />
                        </Fab>
                        <Fab className={styles.buttonDelete} title="delete" color="error" size="small" aria-label="delete">
                            <DeleteIcon />
                        </Fab>
                    </td>
                </tr>
            ) : (
                <tr>
                    <td>{id}</td>
                    <td>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="category"
                            value={editValues.category}
                            onChange={handleInputChange}
                            placeholder="Category"
                        />
                        {errors.category && <div className={styles.error}>{errors.category}</div>}
                    </td>
                    <td>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="word"
                            value={editValues.word}
                            onChange={handleInputChange}
                            placeholder="Word"
                        />
                        {errors.word && <div className={styles.error}>{errors.word}</div>}
                    </td>
                    <td>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="transcription"
                            value={editValues.transcription}
                            onChange={handleInputChange}
                            placeholder="Transcription"
                        />
                        {errors.transcription && <div className={styles.error}>{errors.transcription}</div>}
                    </td>
                    <td>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="translation"
                            value={editValues.translation}
                            onChange={handleInputChange}
                            placeholder="Translation"
                        />
                        {errors.translation && <div className={styles.error}>{errors.translation}</div>}
                    </td>
                    <td className={styles.buttons}>
                        <Fab 
                            className={styles.buttonSave} 
                            type='submit' 
                            title="save" 
                            color="error" 
                            size="small" 
                            aria-label="save" 
                            onClick={handleSave}
                            disabled={isDisabled}
                        >
                            <CheckIcon />
                        </Fab>
                        <Fab  
                            className={styles.buttonCancel} 
                            onClick={handleToggle} 
                            title="cancel" 
                            color="error" 
                            size="small" 
                            aria-label="cancel"
                        >
                            <CloseIcon />
                        </Fab>
                    </td>
                </tr>
            )}
        </>
    );
}

export default CardForList;


