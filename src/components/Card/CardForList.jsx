import React from 'react';
import './cardForList.css'



function CardForList({id, category, word, transcription, translation}) {

    return (
        <div className="card-list">
            <div className="id-list">{id}</div>
            <div className="category-list">{category}</div>
            <div className="word-list">{word}</div>
            <div className="transcription-list">{transcription}</div>
            <div className="translation-list"> {translation} </div>
            <div className="buttons-list">
                <button className="button-edit-list">✎</button>
                <button className="button-delete-list">✖</button>
            </div>
        </div >
    );
}

export default CardForList;