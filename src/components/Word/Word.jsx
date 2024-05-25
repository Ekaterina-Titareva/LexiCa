import { useState } from 'react';
import { observer } from "mobx-react";
import styles from './word.module.css';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import wordsStore from "../../servises/WordsStore.jsx";
import TableInput from '../TableInput/TableInput.jsx';

const Word = observer(({ id, tags, english, transcription, russian }) =>  {
    const { changedWord, deleteWord } = wordsStore;
    const [editValues, setEditValues] = useState({ id, tags, english, transcription, russian });
    const [errors, setErrors] = useState({});
    const [isVisible, setIsVisible] = useState(true);

    // Функция валидации поля
    const validateField = (name, value) => {
        let regex;
        switch(name) {
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
            changedWord(editValues)
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
                    <td>{tags}</td>
                    <td>{english}</td>
                    <td>{transcription}</td>
                    <td>{russian}</td>
                    <td className={styles.buttons}>
                        <Fab className={styles.buttonEdit} 
                            title="edit" 
                            color="error" 
                            size="small" 
                            aria-label="edit" 
                            onClick={handleToggle}
                            >
                            <EditIcon />
                        </Fab>
                        <Fab className={styles.buttonDelete} 
                            title="delete" 
                            color="error" 
                            size="small" 
                            aria-label="delete"
                            onClick={()=> deleteWord(id)}
                            >
                            <DeleteIcon />
                        </Fab>
                    </td>
                </tr>
            ) : (
                <tr>
                    <td>{id}</td>
                    <TableInput
                        type={"text"}
                        name={"tags"}
                        value={editValues.tags}
                        handleInputChange={handleInputChange}
                        placeholder={"Category"}
                        errors={errors.tags}
                    />
                    <TableInput
                        type={"text"} 
                        name={"english"}
                        value={editValues.english}
                        handleInputChange={handleInputChange}
                        placeholder={"Word"}
                        errors={errors.english}
                    />
                    <TableInput
                        type="text" 
                        name="transcription"
                        value={editValues.transcription}
                        handleInputChange={handleInputChange}
                        placeholder="Transcription"
                        errors={errors.transcription}
                    />
                    <TableInput
                        className={styles.input} 
                        type={"text"}
                        name={"russian"}
                        value={editValues.russian}
                        handleInputChange={handleInputChange}
                        placeholder={"Translation"}
                        errors={errors.russian}
                    />
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
                            title="cancel" 
                            color="error" 
                            size="small" 
                            aria-label="cancel"
                            onClick={handleToggle} 
                        >
                            <CloseIcon />
                        </Fab>
                    </td>
                </tr>
            )}
        </>
    );
})

export default Word;


