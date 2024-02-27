import React from 'react';
import CardForList from '../Card/CardForList';
import { words } from '../Main/Words';
import './listOfCards.css';


function ListOfCards() {
    return (
            <div className="list">
                {words?.length &&
                    words.map((card) => (
                        < CardForList
                            key={card.id}
                            id={card.id}
                            category={card.tags}
                            word={card.english}
                            transcription={card.transcription}
                            translation={card.russian}
                        />
                    ))
                }
            </div>
    );
}


export default ListOfCards;