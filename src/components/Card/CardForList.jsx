import React from 'react';
import styles from './cardForList.module.css'



function CardForList({id, category, word, transcription, translation}) {

    return (
        <div className={styles.card}>
            <div className={styles.id}>{id}</div>
            <div className={styles.category}>{category}</div>
            <div className={styles.word}>{word}</div>
            <div className={styles.transcription}>{transcription}</div>
            <div className={styles.translation}> {translation} </div>
            <div className={styles.buttons}>
                <button className={styles.buttonEdit}>✎</button>
                <button className={styles.buttonDelete}>✖</button>
            </div>
        </div >
    );
}

export default CardForList;