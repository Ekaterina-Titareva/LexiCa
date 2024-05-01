import React, { useState } from 'react';
import SwiperForCardForGame from './CardForGame/SwiperForCardForGame';

function CardGame() {
    const [learnedCount, setLearnedCount] = useState(0);
    const incrementLearnedCount = () => {
        setLearnedCount((prevCount) => prevCount + 1);
    };
    return (
    <>
        <h2>Here you can practice memorizing new words</h2>
        <SwiperForCardForGame
        incrementLearnedCount={incrementLearnedCount} />
        <div>The number of words learned: {learnedCount}</div>
    </>
    );
}

export default CardGame;