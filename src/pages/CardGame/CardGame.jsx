import React, { useEffect, useRef, useState } from 'react';
import SwiperForCardForGame from '../../components/SwiperForCardForGame/SwiperForCardForGame';

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
            <h2>Здесь Вы можете попрактиковаться в запоминании новых слов</h2>
            <SwiperForCardForGame
                currentIndex = {currentIndex}
                setCurrentIndex = {setCurrentIndex}
                incrementLearnedCount={incrementLearnedCount}
                handleSetGame={handleSetGame}
                ref={ref}
            />
            <div>Количество выученных слов: {learnedCount}</div>
        </>
    )
    :
    (
        <>
            <h2>
                Тренировка окончена. <br /> Количество изученных слов: {learnedCount}.
            </h2>
            <a href="/">
                Вернуться к списку слов
            </a>
        </>
    );
}

export default CardGame;