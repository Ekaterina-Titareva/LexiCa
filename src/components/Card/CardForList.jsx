import React, { useState } from 'react';
import styles from './cardForList.module.css'



function CardForList({id, category, word, transcription, translation}) {
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const handleToggle = () => {
        setIsButtonVisible((prev) => !prev);
    };
    return (
        <div className={styles.card}>
            <div className={styles.id}>{id}</div>
            <div className={styles.category}>{category}</div>
            <div className={styles.word}>{word}</div>
            <div className={styles.transcription}>{transcription}</div>
            <div className={styles.translation}> {translation} </div>
            <div className={styles.buttons}>
            { isButtonVisible ? (
                <button className={styles.buttonEdit} onClick={handleToggle}>✎</button>
            ) : (
                <button className={styles.buttonSave} onClick={handleToggle}>✔</button>
                
            )}
                <button className={styles.buttonDelete}>✖</button>
            </div>
        </div >
    );
}

export default CardForList;