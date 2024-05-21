import { observer } from "mobx-react";
import CardForList from './CardForList/CardForList.jsx';
import wordsStore from "../../store/WordsStore.jsx";
import Loader from '../UI/Loader/Loader.jsx';
import { useEffect } from "react";

const ListOfCards = observer(() => {
    const { words, loading, error, fetchWords} = wordsStore;

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    useEffect(() => {
        fetchWords()
    }, [words]);
    return (
        loading ? (
        <Loader />
    ) : error ? (
        <h2>
        We have problems on the server, please contact the support service
        </h2>
    ) : (
        <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                {!!words?.length &&
                    words.map((card) => (
                        <CardForList
                            key={card.id}
                            id={card.id}
                            tags={card.tags}
                            english={card.english}
                            transcription={card.transcription}
                            russian={card.russian}
                        />
                    ))}
            </tbody>
        </table>
        </form>
    )
    );
})


export default ListOfCards;