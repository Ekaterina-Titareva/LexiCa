import React from 'react';
import CardForList from './CardForList/CardForList.jsx';
import { words } from '../../API/words.js';

function ListOfCards() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                {words?.length &&
                    words.map((card) => (
                        < CardForList
                            key={card.id}
                            id={card.id}
                            category={card.tags}
                            word={card.english}
                            transcription={card.transcription}
                            translation={card.russian}
                        />))}
            </tbody>
        </table>
        </form>
    );
}


export default ListOfCards;