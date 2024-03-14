import React from 'react';
import CardForList from '../Card/CardForList';
import { words } from '../Main/Words';
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









// import React from 'react';
// // import CardForList from '../Card/CardForList';
// import { words } from '../Main/Words';
// import styles from './listOfCards.module.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function ListOfCards() {
//     return (
//             // <div className={styles.list}>
//             //     {words?.length &&
//             //         words.map((card) => (
//             //             < CardForList
//             //                 key={card.id}
//             //                 id={card.id}
//             //                 category={card.tags}
//             //                 word={card.english}
//             //                 transcription={card.transcription}
//             //                 translation={card.russian}
//             //             />))}
// <div className={styles.list}>
// <TableContainer component={Paper}>
// <Table sx={{ minWidth: 650 }} aria-label="simple table">
//   <TableHead>
//     <TableRow>
//       <TableCell>id</TableCell>
//       <TableCell align="right">category</TableCell>
//       <TableCell align="right">word</TableCell>
//       <TableCell align="right">transcription</TableCell>
//       <TableCell align="right">translation</TableCell>
//     </TableRow>
//   </TableHead>
//   <TableBody>
//     {words?.length && words.map((card) => (
//       <TableRow
//         key={card.id}
//         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//       >
//         <TableCell component="th" scope="row">
//           {card.id}
//         </TableCell>
//         <TableCell align="right">{card.tags}</TableCell>
//         <TableCell align="right">{card.english}</TableCell>
//         <TableCell align="right">{card.transcription}</TableCell>
//         <TableCell align="right">{card.russian}</TableCell>
//       </TableRow>
//     ))}
//   </TableBody>
// </Table>
// </TableContainer>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                     
//             </div>
//     );
// }


// export default ListOfCards;

