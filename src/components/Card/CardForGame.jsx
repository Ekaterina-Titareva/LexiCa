import React, { useState } from 'react';
import styles from './cardForGame.module.css'



function CardGame({ category, word, transcription, translation }) {
    const [showTranslation, setShowTranslation] = useState(false);

    return (

        <div className={styles.card}>
        <div className={styles.category}>{category}</div>
        <div className={styles.word}>{word}</div>
        <div className={styles.transcription}>{transcription}</div>
        <button className={styles.buttonTranslate} onClick={() => setShowTranslation(!showTranslation)}>
            {showTranslation ? translation : 'Translate'}
        </button>
        </div>
    );
}

export default CardGame;