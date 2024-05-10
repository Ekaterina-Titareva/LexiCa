import React from 'react';
import CardForList from './CardForList/CardForList.jsx';
import { words } from '../../API/words.js';

function ListOfCards() {
    return (
        <tbody>
            {words?.length &&
                words.map((card) => (
                    < CardForList
                        key={card.id}
                        id={card.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        category={card.tags}
                        word={card.english}
                        transcription={card.transcription}
                        translation={card.russian}
                    />))}
        </tbody>
    );
}


export default ListOfCards;