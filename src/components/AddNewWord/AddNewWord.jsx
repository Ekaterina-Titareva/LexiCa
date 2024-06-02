import TableInput from '../../components/TableInput/TableInput.jsx';
import { fields } from '../../servises/fields.js';
import styles from "./addNewWord.module.css";

const AddNewWord = ({ inputValues, handleInputChange, touchedFields, setTouchedFields, isDisabled, errors }) => {
return (
    <>
    <tr>
        <td>
        <p className={styles.label}>Id</p>
        </td>
        {fields.map((field) => (
        <TableInput 
            key={field.id}
            id={field.id}
            type={"text"} 
            placeholder={field.placeholder} 
            value={inputValues[field.id]} 
            handleInputChange={(e) => handleInputChange(e, field.id)}
            onBlur={() => setTouchedFields({ ...touchedFields, [field.id]: true })}
            errors={errors[field.id]}
            label={<p className={styles.label} htmlFor={field.id} title={field.title}>{field.name}</p>}
        />
        ))}
        <td colSpan={2}>
        <button
            disabled={isDisabled}
            type='submit'
            className={styles.buttonAdd}
        >Добавить слово</button>
        </td>
    </tr>
    </>
);
};

export default AddNewWord;