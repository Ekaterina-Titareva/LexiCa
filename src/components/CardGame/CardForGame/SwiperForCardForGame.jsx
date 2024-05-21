import React, { forwardRef, useState } from 'react';
import styles from "./swiperForCardForGame.module.css"
import wordsStore from "../../../store/WordsStore.jsx"
import CardForGame from "./CardForGame";
import arrowLeft from "../../../assets/icons/arrow-left.svg"
import arrowRight from "../../../assets/icons/arrow-right.svg"

const SwiperForCardForGame = forwardRef((props, ref) => {
    const { words } = wordsStore;
    const [isShownTranslations, setIsShownTranslations]= useState([])
    const handlePrevClick = () => {
        if (props.currentIndex > 0) {
            props.setCurrentIndex(props.currentIndex - 1);
            
        } else return
        }
    const handleNextClick = () => {
    if (props.currentIndex < (words.length - 1)) {
        props.setCurrentIndex(props.currentIndex + 1);

        
    } else if (props.currentIndex === (words.length - 1)) 
        {props.handleSetGame()}
    }
        
    return (
        <div className={styles.swiper}>
            <button 
            onClick={handlePrevClick}
            disabled={props.currentIndex === 0}
            className={styles.button}>
            <img src={arrowLeft} alt="arrow" />
            </button>
                        <CardForGame
                        key={words[props.currentIndex].id}
                        id={words[props.currentIndex].id}
                        category={words[props.currentIndex].tags}
                        word={words[props.currentIndex].english}
                        transcription={words[props.currentIndex].transcription}
                        translation={words[props.currentIndex].russian}
                        incrementLearnedCount={props.incrementLearnedCount}
                        currentIndex={props.currentIndex}
                        isShownTranslations={isShownTranslations}
                        setIsShownTranslations={setIsShownTranslations}
                        ref={ref}
                        />
            <button 
            onClick={handleNextClick}
            disabled={props.currentIndex === (words.length - 1)}
            className={styles.button}>
            <img src={arrowRight} alt="arrow" />
            </button>
        </div>
    )
})

export default SwiperForCardForGame;