import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const search = charArr => {
    setFiltered(charArr)
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
          axios.get("https://rickandmortyapi.com/api/character/")
          .then((res) => {
            setChar(res.data.results);
            setFiltered(res.data.results);
            console.log(res.data.results);
          })
          .catch(err => {
            console.log("error", err);
          });
      }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <Link className="main-buttons" to={"/"}>
        Home
      </Link>
      <SearchForm search={search} characters={char} />
      {filtered.map(data => {
        return <CharacterCard key={data.id} character={data} />;
      })}
    </section>
  );
}
