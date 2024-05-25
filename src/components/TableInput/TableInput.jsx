import styles from './tableInput.module.css'

const TableInput = (props) => {
    return (
        <td className={props.className}>
            {props.label ? props.label : ""}
        <input
            id={props.id}
            className={styles.input} 
            type={props.type} 
            name={props.name}
            value={props.value}
            onChange={props.handleInputChange}
            onBlur={props.onBlur}
            placeholder={props.placeholder}
        />
        {props.errors && <div className={styles.error}>{props.errors}</div>}
    </td>
    )
}

export default TableInput