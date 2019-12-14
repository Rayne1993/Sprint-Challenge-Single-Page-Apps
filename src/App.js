import React from "react";
import {Route,  BrowserRouter as Router } from "react-router-dom"

import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import WelcomePage from './components/WelcomePage'


export default function App() {
  return (
    <Router>
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
    </Router>
  );
}
