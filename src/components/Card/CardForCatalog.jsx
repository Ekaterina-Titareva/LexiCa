import React from 'react';
import styles from './cardForCatalog.module.css'



function CardForCatalog({category, word, transcription, translation}) {

    return (
        <div className={styles.card}>
            <div className={styles.buttons}>
                <button className={styles.buttonEdit}>✎</button>
                <button className={styles.buttonDelete}>✖</button>
            </div>
            <div className={styles.category}>{category}</div>
            <div className={styles.word}>{word}</div>
            <div className={styles.transcription}>{transcription}</div>
            <div className={styles.translation}> {translation} </div>
            <button className={styles.buttonTranslate}>Translate</button>
        </div >
    );
}

export default CardForCatalog;