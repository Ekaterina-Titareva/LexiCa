import React, { useEffect, useRef, useState } from 'react';
import SwiperForCardForGame from './CardForGame/SwiperForCardForGame';

function CardGame() {
    const [game, setGame] = useState(true);
    const handleSetGame = () => {
        setGame(false)
    }

    const [learnedCount, setLearnedCount] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const incrementLearnedCount = () => {
        setLearnedCount((prevCount) => prevCount + 1);
    };
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, [currentIndex]);
    return game ? 
    (
        <>
            <h2>Here you can practice memorizing new words</h2>
            <SwiperForCardForGame
                currentIndex = {currentIndex}
                setCurrentIndex = {setCurrentIndex}
                incrementLearnedCount={incrementLearnedCount}
                handleSetGame={handleSetGame}
                ref={ref}
            />
            <div>The number of words learned: {learnedCount}</div>
        </>
    )
    :
    (
        <>
            <h2>
                The game is over. <br /> Your result is {learnedCount} learned words.
            </h2>
            <a href="/LexiCa/">
                <button>Back to home</button>
            </a>
        </>
    );
}

export default CardGame;