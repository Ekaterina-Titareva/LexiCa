import "./addNewWord.css"

function AddNewWord() {
    return (
        <div className="addNewWordForm">
            <div className="formItem">
                <label htmlFor={`category${0}`} title="category">Category</label>
                <input type="text" id={`category${0}`} className="category" placeholder="Adjective"></input>
            </div>
            <div className="formItem">
                <label htmlFor={`word${0}`} title="word">Word</label>
                <input type="text" id={`word${0}`} className="word" placeholder="adult"></input>
            </div>
            <div className="formItem">
                <label htmlFor={`transcription${0}`} title="transcription">Transcription</label>
                <input type="text" id={`transcription${0}`} className="transcription" placeholder="[ˈædʌlt]"></input>
            </div>
            <div className="formItem">
                <label htmlFor={`translation${0}`} title="translation">Translation</label>
                <input type="text" id={`translation${0}`} className="translation" placeholder="взрослый"></input>
            </div>
            <button className="button-add">Add</button>
        </div>
    )
    }
    
    export default AddNewWord;