import React from 'react';
import CardForList from './CardForList/CardForList.jsx';
import { words } from '../../API/words.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ListOfCards() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>category</TableCell>
                        <TableCell>word</TableCell>
                        <TableCell>transcription</TableCell>
                        <TableCell>translation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {words?.length &&
                                words.map((card) => (
                                    < CardForList
                                        key={card.id}
                                        id={card.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        category={card.tags}
                                        word={card.english}
                                        transcription={card.transcription}
                                        translation={card.russian}
                                    />))}
                    </TableBody>
                </Table>
            </TableContainer>

</>
    );
}


export default ListOfCards;