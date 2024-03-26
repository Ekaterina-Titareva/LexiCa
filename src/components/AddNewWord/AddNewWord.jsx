import React, { useState } from 'react';
import styles from "./addNewWord.module.css"
const fields = [
    {
    id: "Category",
    placeholder: "Adjective",
    name: "Category",
    },
    {
    id: "Word",
    placeholder: "Adult",
    name: "Word",
    },
    {
    id: "Transcription",
    placeholder: "[ˈædʌlt]",
    name: "Transcription",
    },
    {
    id: "Translation",
    placeholder: "взрослый",
    name: "Translation",
    },
]

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
        <div className={styles.addNewWordForm}>
            {fields.map((field) => (
                <div key={field.id} className={field.className}>
                    <label className={styles.label} htmlFor={field.id} title={field.title}>{field.name}</label>
                    <input className={styles.input} type="text" id={field.id} placeholder={field.placeholder} onChange={(e) => handleInputChange(e, field.id)}></input>
                </div>
            ))}
        <button className={styles.buttonAdd} onClick={handleAddButtonClick}>Add</button>
        </div>
    );
}
    
    export default AddNewWord;