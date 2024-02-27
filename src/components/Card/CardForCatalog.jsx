import React from 'react';
import './cardForCatalog.css'



function CardForCatalog({category, word, transcription, translation}) {

    return (
        <div className="card">
            <div className="buttons">
                <button className="button-edit">✎</button>
                <button className="button-delete">✖</button>
            </div>
            <div className="category">{category}</div>
            <div className="word">{word}</div>
            <div className="transcription">{transcription}</div>
            <div className="translation"> {translation} </div>
            <button className="button-translate">Translate</button>
        </div >
    );
}

export default CardForCatalog;