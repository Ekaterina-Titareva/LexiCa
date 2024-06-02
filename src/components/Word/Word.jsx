import { useState, useCallback } from 'react';
import { observer } from "mobx-react";
import styles from './word.module.css';
import wordsStore from "../../servises/WordsStore.jsx";
import TableInput from '../TableInput/TableInput.jsx';
import validateField from '../../servises/validation.js';

const Word = observer(({ id, tags, english, transcription, russian }) =>  {
    const { changedWord, deleteWord } = wordsStore;
    const [editValues, setEditValues] = useState({ id, tags, english, transcription, russian });
    const [errors, setErrors] = useState({});
    const [isVisible, setIsVisible] = useState(true);

    // Обработчик изменения ввода
    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setEditValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
        const error = validateField(name, value);
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));
    }, []);

    // Обработчик сохранения изменений
    const handleSave = useCallback((e) => {
        e.preventDefault();
        if (!Object.values(errors).some(error => error)) {
            changedWord(editValues);
            setIsVisible(true);
        }
    }, [errors, editValues, changedWord]);

    const handleToggle = useCallback(() => {
        setIsVisible(prev => !prev);
    }, []);
    
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
                    <td>
                        <button className={styles.buttonEdit} 
                            onClick={handleToggle}
                            >Редактировать
                        </button>
                    </td>
                    <td>
                        <button className={styles.buttonDelete} 
                            onClick={()=> deleteWord(id)}
                            >Удалить
                        </button>
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
                    <td>
                        <button 
                            className={styles.buttonSave} 
                            type='submit' 
                            onClick={handleSave}
                            disabled={isDisabled}
                        >Сохранить
                        </button>
                    </td>
                    <td>
                        <button  
                            className={styles.buttonCancel} 
                            onClick={handleToggle} 
                        >Отменить
                        </button>
                    </td>
                </tr>
            )}
        </>
    );
})

export default Word;


