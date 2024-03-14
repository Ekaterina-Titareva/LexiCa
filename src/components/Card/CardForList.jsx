import React, { useState } from 'react';
import styles from './cardForList.module.css'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
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
                    <TableRow key={id} sx={sx}>
                        <TableCell>{id}</TableCell>
                        <TableCell>{category}</TableCell>
                        <TableCell>{word}</TableCell>
                        <TableCell>{transcription}</TableCell>
                        <TableCell>{translation}</TableCell>
                        <div className={styles.buttons}>
                            <Fab className={styles.buttonEdit} title="edit" color="error" size="small" aria-label="edit" onClick={handleToggle}>
                                <EditIcon />
                            </Fab>
                            <Fab className={styles.buttonDelete} title="delete" color="error" size="small" aria-label="delete">
                                <DeleteIcon />
                            </Fab>
                        </div>
                    </TableRow>
                </>
            ) : (
                <>
                    <TableCell>
                        <p>{id}</p>
                    </TableCell>
                    <TableCell>
                        <input className={styles.input} type="text" placeholder={category}></input>
                    </TableCell>
                    <TableCell>
                        <input className={styles.input} type="text" placeholder={word}></input>
                    </TableCell>
                    <TableCell>
                        <input className={styles.input} type="text" placeholder={transcription}></input>
                    </TableCell>
                    <TableCell>
                        <input className={styles.input} type="text" placeholder={translation}></input>
                    </TableCell>
                    <div className={styles.buttons}>
                        <Fab className={styles.buttonSave} title="save" color="error" size="small" aria-label="save">
                            <CheckIcon />
                        </Fab>
                        <Fab  className={styles.buttonCancel} onClick={handleToggle} title="cancel" color="error" size="small" aria-label="cancel">
                            < CloseIcon />
                        </Fab>
                    </div>
                </>
            )}
        </>
    );
}

export default CardForList;


