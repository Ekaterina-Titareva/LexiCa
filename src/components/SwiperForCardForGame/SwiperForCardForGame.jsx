import React, { forwardRef, useState } from 'react';
import styles from "./swiperForCardForGame.module.css"
import wordsStore from "../../servises/WordsStore.jsx"
import CardForGame from "../CardForGame/CardForGame.jsx";
import arrowLeft from "../../assets/icons/arrow-left.svg"
import arrowRight from "../../assets/icons/arrow-right.svg"
import SwiperButton from '../SwiperButton/SwiperButton.jsx';

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
        } else if (props.currentIndex === (words.length - 1)) {
            props.handleSetGame()
        }
    }
    return (
        <div className={styles.swiper}>
            <SwiperButton 
                handleClick={handlePrevClick}
                currentIndex={props.currentIndex === 0}
                arrow={arrowLeft}
            />
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
            <SwiperButton 
                handleClick={handleNextClick}
                currentIndex={props.currentIndex === (words.length - 1)}
                arrow={arrowRight}
            />
        </div>
    )
})

export default SwiperForCardForGame;