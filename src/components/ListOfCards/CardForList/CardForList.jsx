import React, { useState } from 'react';
import styles from './cardForList.module.css'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function CardForList({id, sx, category, word, transcription, translation}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleToggle = () => {
        setIsVisible((prev) => !prev);
    };
    return (
        <>
            { isVisible ? (
                <>
                    <tr>
                        <td>{id}</td>
                        <td>{category}</td>
                        <td>{word}</td>
                        <td>{transcription}</td>
                        <td>{translation}</td>
                        <td className={styles.buttons}>
                            <Fab className={styles.buttonEdit} title="edit" color="error" size="small" aria-label="edit" onClick={handleToggle}>
                                <EditIcon />
                            </Fab>
                            <Fab className={styles.buttonDelete} title="delete" color="error" size="small" aria-label="delete">
                                <DeleteIcon />
                            </Fab>
                        </td>
                    </tr>
                </>
            ) : (
                <>
                    <tr>
                            <td>{id}</td>
                            <td><input className={styles.input} type="text" placeholder={category}></input></td>
                            <td><input className={styles.input} type="text" placeholder={word}></input></td>
                            <td><input className={styles.input} type="text" placeholder={transcription}></input></td>
                            <td><input className={styles.input} type="text" placeholder={translation}></input></td>
                        <td className={styles.buttons}>
                            <Fab className={styles.buttonSave} title="save" color="error" size="small" aria-label="save">
                                <CheckIcon />
                            </Fab>
                            <Fab  className={styles.buttonCancel} onClick={handleToggle} title="cancel" color="error" size="small" aria-label="cancel">
                                < CloseIcon />
                            </Fab>
                        </td>
                    </tr>
                </>
            )}
        </>
    );
}

export default CardForList;


