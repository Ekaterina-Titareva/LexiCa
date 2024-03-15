import React, {useState } from 'react';
import CardForGame from '../Card/CardForGame';
import { words } from '../Main/Words';
import styles from './cardGame.module.css';
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
        <Fab 
            className={styles.prevButton}
            onClick={handlePreviousCard}
            disabled={currentCardIndex === 0}
            title="previous"
            color="error"
            size="small"
            aria-label="previous">
                <ArrowBackIosIcon />
        </Fab>
            {words.length > 0 && (
                    <CardForGame
                    key={words[currentCardIndex].id}
                    category={words[currentCardIndex].tags}
                    word={words[currentCardIndex].english}
                    transcription={words[currentCardIndex].transcription}
                    translation={words[currentCardIndex].russian}
                    />
            )}
        <Fab 
            className={styles.nextButton}
            onClick={handleNextCard}
            disabled={currentCardIndex === words.length - 1}
            title="next"
            color="error"
            size="small"
            aria-label="next">
                <ArrowForwardIosIcon />
        </Fab>
    </div>
    <h2>You have memorized {words.length} words</h2>
    </>
    );
}

export default CardGame;