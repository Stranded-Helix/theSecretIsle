import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Story from './pages/Story';
import Loading from './pages/Loading'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Quiz from './pages/Quiz'
import Main from './components/Main/Main'
import EndGame from './components/EndGame/EndGame';
import Minigame from './pages/Minigame'

function App() {
  return (
    <Router>
      <Main>
          <Route exact path="/" component={Home} />
          <Route exact path="/Story" component={Story} />
          <Route exact path="/Loading" component={Loading} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/Minigame" component={Minigame} />
          <Route exact path="/EndGame" component={EndGame} />
      </Main>
    </Router>
  );
}

export default App;
