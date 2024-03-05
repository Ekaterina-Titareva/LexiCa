import React, { useState } from 'react';
import CardForGame from '../Card/CardForGame';
import { words } from '../Main/Words';
import styles from './cardGame.module.css';



function CardGame() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNextCard = () => {
    if (currentCardIndex < words.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
    }
    };

    const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
    }
    };

    return (
    <>
    <h2>Here you can practice memorizing new words</h2>
    <div className={styles.catalog}>
        <button onClick={handlePreviousCard} className={styles.prevButton} disabled={currentCardIndex === 0}>◀</button>
        {words.length > 0 && (
        <CardForGame
            key={words[currentCardIndex].id}
            category={words[currentCardIndex].tags}
            word={words[currentCardIndex].english}
            transcription={words[currentCardIndex].transcription}
            translation={words[currentCardIndex].russian}
        />
        )}
        <button onClick={handleNextCard} className={styles.nextButton} disabled={currentCardIndex === words.length - 1}>▶</button>
    </div>
    <h2>You have memorized {words.length} words</h2>
    </>
    );
}

export default CardGame;