import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header.jsx"
import ListOfCards from "./components/ListOfCards/ListOfCards.jsx";
import AddNewWord from "./components/AddNewWord/AddNewWord.jsx";
import CardGame from "./components/CardGame/CardGame.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Error404 from './components/Error404/Error404.jsx';
import TestForm from './components/TestForm/TestForm.jsx';

function App() {
  return (
    <Router>
		< Header />
		<Routes>
				<Route path='/LexiCa' element={
          <main>
                  < AddNewWord />
                  < ListOfCards />
          </main>
        }/>
        <Route path='/LexiCa/game' element={
          <main>< CardGame /></main>
        }/>
        <Route path='*' element={
          <main>< Error404 /></main>}
        />
        <Route path='/LexiCa/testForm' element={
          <main><TestForm /></main>}
        />
      </Routes>
		< Footer />
	</Router>
  );
}

export default App;
