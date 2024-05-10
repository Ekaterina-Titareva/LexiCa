import React, { useState } from 'react';
import styles from './cardForGame.module.css'



function CardGame({ category, word, transcription, translation, incrementLearnedCount}) {
    const [showTranslation, setShowTranslation] = useState(false);
    const [counted, setCounted] = useState(false);
    const handleClick = () => {
        setShowTranslation(!showTranslation)
        if (!counted) {
        setCounted(true);
        incrementLearnedCount();
        }
    };
    return (
        <div className={styles.card}>
        <div className={styles.category}>{category}</div>
        <div className={styles.word}>{word}</div>
        <div className={styles.transcription}>{transcription}</div>
        <button className={styles.buttonTranslate} onClick={() => {handleClick()}}>
            {showTranslation ? translation : 'Translate'}
        </button>
        </div>
    );
}

export default CardGame;