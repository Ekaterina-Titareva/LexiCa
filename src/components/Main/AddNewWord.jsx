import styles from "./addNewWord.module.css"

function AddNewWord() {
    return (
        <div className={styles.addNewWordForm}>
            <div className={styles.formItem}>
                <label htmlFor={`category${0}`} title="category">Category</label>
                <input type="text" id={`category${0}`} className={styles.category} placeholder="Adjective"></input>
            </div>
            <div className={styles.formItem}>
                <label htmlFor={`word${0}`} title="word">Word</label>
                <input type="text" id={`word${0}`} className={styles.word} placeholder="adult"></input>
            </div>
            <div className={styles.formItem}>
                <label htmlFor={`transcription${0}`} title="transcription">Transcription</label>
                <input type="text" id={`transcription${0}`} className={styles.transcription} placeholder="[ˈædʌlt]"></input>
            </div>
            <div className={styles.formItem}>
                <label htmlFor={`translation${0}`} title="translation">Translation</label>
                <input type="text" id={`translation${0}`} className={styles.translation} placeholder="взрослый"></input>
            </div>
            <button className={styles.buttonAdd}>Add</button>
        </div>
    )
    }
    
    export default AddNewWord;