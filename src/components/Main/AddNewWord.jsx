import Input from "../Input/Input";
import { fields } from "../Input/Input";
import styles from "./addNewWord.module.css"

function AddNewWord() {
    return (
        <div className={styles.addNewWordForm}>
            {fields.map((field) => (
            <Input
                className={styles.formItem}
                id={field.id}
                placeholder={field.placeholder}
                name={field.name}
            />
        ))}
        <button className={styles.buttonAdd}>Add</button>
        </div>
    );
}
    
    export default AddNewWord;