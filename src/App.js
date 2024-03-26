import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header.jsx"
import ListOfCards from "./components/ListOfCards/ListOfCards.jsx";
import AddNewWord from "./components/AddNewWord/AddNewWord.jsx";
import CardGame from "./components/CardGame/CardGame.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Error404 from './components/Error404/Error404.jsx';

function App() {
  return (
    <Router>
		< Header />
		<Routes>
				<Route path='/LexiCa' element={
          <>
          < AddNewWord />
          < ListOfCards />
          </>
        }/>
        <Route path='/LexiCa/game' element={< CardGame />}/>
        <Route path='*' element={< Error404 />}/>
      </Routes>
		< Footer />
	</Router>
  );
}

export default App;
