import React, { useState } from 'react';
import styles from './cardForList.module.css'

function CardForList({id, category, word, transcription, translation}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleToggle = () => {
        setIsVisible((prev) => !prev);
    };
    return (
        <div className={styles.card}>
            { isVisible ? (
                <>
                    <div className={styles.id}>{id}</div>
                    <div className={styles.category}>{category}</div>
                    <div className={styles.word}>{word}</div>
                    <div className={styles.transcription}>{transcription}</div>
                    <div className={styles.translation}> {translation} </div>
                    <div className={styles.buttons}>
                        <button className={styles.buttonEdit} onClick={handleToggle}>✎</button>
                        <button className={styles.buttonDelete}>⌫</button>
                    </div>
                </>
            ) : (
                <>
                    <p>{id}</p>
                    <input type="text" placeholder={category}></input>
                    <input type="text" placeholder={word}></input>
                    <input type="text" placeholder={transcription}></input>
                    <input type="text" placeholder={translation}></input>
                    <div className={styles.buttons}>
                        <button className={styles.buttonSave} onClick={handleToggle}>✔</button>
                        <button className={styles.buttonCancel}>✖</button>
                    </div>
                </>
            )}
                
        </div >
    );
}

export default CardForList;