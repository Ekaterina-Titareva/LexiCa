import { useEffect } from "react";
import { observer } from "mobx-react";
import Word from '../../components/Word/Word.jsx';
import wordsStore from "../../servises/WordsStore.jsx"
import Loader from '../../components/Loader/Loader.jsx';

const ListOfWords = observer(() => {
    const { words, loading, error, fetchWords} = wordsStore;
    useEffect(() => {
        fetchWords()
    }, [fetchWords]);
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    if (loading) return <Loader />;
    if (error) return <h2>Проблема с сервером, обратитесь в службу поддержки, пожалуйста</h2>;
    return (
        <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                {!!words?.length &&
                    words.map((card) => (
                        <Word
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
    );
})

export default ListOfWords;