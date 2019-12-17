import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const Search = styled.input`
  width: 50%;
  margin-left: 24.6%;
  margin-bottom: 10px;
`

const B = styled.button`
  border-radius: 10px;
  background-color: black;
  color: aqua;
  padding: 5px;
  margin-left: 43%;
  margin-bottom: 10px;
  width: 100px;
`

const End = styled.p`
  text-align: center;
`

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character/")
  .then (response =>{
    const characters = response.data.results.filter(char =>
    char.name.toLowerCase().includes(query.toLowerCase())
    );

    setData (characters);
  });
},[query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};
return (
  <div >
    <Link to="/"><B>Home</B></Link>
    <form >
      <Search id="name" type="text" name="textfield" placeholder="Search"
      value={query} onChange={handleInputChange}/> <br/>
    </form>

    {data.map((char => {
    return(
      <CharacterCard 
        key={char.id} 
        name={char.name} 
        species={char.species} 
        status={char.status}/>)
      }
    ))}
    <End>End of List</End>
  </div>
)} 