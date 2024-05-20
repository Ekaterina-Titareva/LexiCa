import { observer } from "mobx-react";
import CardForList from './CardForList/CardForList.jsx';
import wordsStore from "../../store/WordsMobX.jsx";
import Loader from '../UI/Loader/Loader.jsx';

const ListOfCards = observer(() => {
    const { words, loading, error} = wordsStore;

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        loading ? (
        <Loader />
    ) : error ? (
        <h1>
        If you have problems on the server, please contact the support service
        </h1>
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