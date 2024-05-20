import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from "mobx-react";
import wordsStore from "./store/WordsMobX.jsx";
import Header from "./components/Header/Header.jsx"
import ListOfCards from "./components/ListOfCards/ListOfCards.jsx";
import AddNewWord from "./components/AddNewWord/AddNewWord.jsx";
import CardGame from "./components/CardGame/CardGame.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Error404 from './components/Error404/Error404.jsx';



function App() {
  return (
    <Provider store={wordsStore}>
      <Router>
      < Header />
      <Routes>
          <Route path='/' element={
            <main>
                    < AddNewWord />
                    < ListOfCards />
            </main>
          }/>
          <Route path='/game' element={
            <main>< CardGame /></main>
          }/>
          <Route path='*' element={
            <main>< Error404 /></main>}
          />
        </Routes>
      < Footer />
    </Router>
  </Provider>
  );
}

export default App;
