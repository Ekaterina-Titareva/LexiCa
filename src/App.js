import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header.jsx"
import ListOfWords from "./pages/ListOfWords/ListOfWords.jsx";
import CardGame from "./pages/CardGame/CardGame.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Error404 from './pages/Error404/Error404.jsx';
import SignUp from './servises/auth/SignUp.jsx';
import SignIn from './servises/auth/SignIn.jsx';



function App() {
  return (
      <Router>
      < Header />
      <Routes>
          <Route path='/' element={
            <main>< ListOfWords /></main>
          }/>
          <Route path='/game' element={
            <main>< CardGame /></main>
          }/>
          <Route path='*' element={
            <main>< Error404 /></main>}
          />
          <Route path='/signup' element={
            <main>< SignUp /></main>}
          />
          <Route path='/signin' element={
            <main>
              < SignIn />
            </main>}
          />
        </Routes>
      < Footer />
    </Router>
  );
}

export default App;
