import React, { useState, forwardRef } from 'react';
import styles from './cardForGame.module.css'



const CardGame = forwardRef((props, ref) => {

const [showTranslation, setShowTranslation] = useState(false);

const handleClick = () => {
    setShowTranslation(true);
    props.setIsShownTranslations(prevIsShown => [...prevIsShown, props.currentIndex]);
    props.incrementLearnedCount();
}
    return (
        <div className={styles.card}>
        <div className={styles.category}>{props.category}</div>
        <div className={styles.word}>{props.word}</div>
        <div className={styles.transcription}>{props.transcription}</div>
        {showTranslation||props.isShownTranslations?.includes(props.currentIndex) ? 
            <div className={styles.translation}>{props.translation}</div>
            :
            <button className={styles.buttonTranslate} ref={ref} onClick={handleClick}>
                Показать перевод
            </button>            
        }
        </div>
    );
})
export default CardGame;

