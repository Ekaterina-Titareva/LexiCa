import CardForList from './CardForList/CardForList.jsx';
import { WordsContext } from "../WordsContext.jsx";
import { useContext } from "react";

function ListOfCards() {
    const { words } = useContext(WordsContext);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                {!!words?.length &&
                    words.map((card) => (
                        <CardForList
                            key={card.id}
                            id={card.id}
                            category={card.tags}
                            word={card.english}
                            transcription={card.transcription}
                            translation={card.russian}
                        />
                    ))}
            </tbody>
        </table>
        </form>
    );
}


export default ListOfCards;