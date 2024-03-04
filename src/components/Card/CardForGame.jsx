import React from 'react';
import styles from './cardForGame.module.css'



function CardGame({category, word, transcription, translation}) {

    return (
        <div className={styles.card}>
            <div className={styles.category}>{category}</div>
            <div className={styles.word}>{word}</div>
            <div className={styles.transcription}>{transcription}</div>
            <div className={styles.translation}> {translation} </div>
            <button className={styles.buttonTranslate}>Translate</button>
        </div >
    );
}

export default CardGame;