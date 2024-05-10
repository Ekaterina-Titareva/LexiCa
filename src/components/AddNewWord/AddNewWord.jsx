import React, { useState } from 'react';
import styles from "./addNewWord.module.css"
import { fields } from '../../store/fields.js';

function AddNewWord() {
    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (e, id) => {
        setInputValues({
            ...inputValues,
            [id]: e.target.value
        });
    };
    const handleAddButtonClick = () => {
    console.log('Input values:', inputValues);
    
    };
    
    return (
        <thead>
        <tr>
            <td>
                <p 
                    className={styles.label}>
                    Id
                </p>
            </td>
            {fields.map((field) => (
                <td key={field.id} className={field.className}>
                    <p className={styles.label} htmlFor={field.id} title={field.title}>{field.name}</p>
                    <input 
                        className={styles.input} 
                        type="text" 
                        id={field.id} 
                        placeholder={field.placeholder} 
                        onChange={(e) => handleInputChange(e, field.id)}>
                    </input>
                </td>
            ))}
        <td>
            <input
            type='submit'
            value='Add'
                className={styles.buttonAdd}
                onClick={handleAddButtonClick}>
            </input>
        </td>
        </tr>
        </thead>
    );
}
    
    export default AddNewWord;