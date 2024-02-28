import React from 'react';
import CardForCatalog from '../Card/CardForCatalog';
import { words } from '../Main/Words';
import styles from './catalogOfCards.module.css';


function CatalogOfCards() {
    return (
            <div className={styles.catalog}>
                {words?.length &&
                    words.map((card) => (
                        < CardForCatalog
                            key={card.id}
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


export default CatalogOfCards;