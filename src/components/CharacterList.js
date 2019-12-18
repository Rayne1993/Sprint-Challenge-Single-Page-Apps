import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const B = styled.button`
  display: block;
  margin: 10px auto;
  width: 35%;
  padding: 10px;
  border-radius: 10px;
  background-color: black;
  color: aqua;
`

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((response) => {
      setCharacter(response.data.results);
      console.log(response);
    })
    .catch(error => {
      console.error('Server Error', error);
    });
}, []);

  return (
    <section className="character-list">
       <Link to= "/"><B>Home</B></Link>
       <Link to="/Search"><B>Search
        </B>
          </Link>
            {character.map(props => (
            <CharacterCard  key={props.id} name={props.name}
            species={props.species} status={props.status}/>
        ))}
    </section>
  );
} 