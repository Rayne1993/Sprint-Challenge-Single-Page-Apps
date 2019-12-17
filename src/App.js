import React from "react";
import { Route } from"react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {

  return (
    <div>
      <Header />
      
      <Route exact path ="/" component={WelcomePage}/>
      <Route path="/Search" component={SearchForm}/>
      <Route path="/Characters" component={CharacterList}/> 

      <CharacterList />
    </div>
  );
}