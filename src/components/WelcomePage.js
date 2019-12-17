import React from "react";
import {Link} from "react-router-dom";
import  styles from "styled-components";

const Buttons = styles.button`
  width: 30%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 15px;
  padding: 5px;
  background-color: black;
  color: aqua;
  border-radius: 10px;
`

const Page = styles.section`
  background-color: aqua;
  padding-top: 2px;
  padding-bottom: 25px;
`

const Img = styles.img`
  margin-left: 30%;
`

export default function WelcomePage() {
  return (
    <Page className="welcome-page">

      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to="/Search"><Buttons>Search Characters!
          </Buttons></Link>

        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />

      </header>
      </Page>
  );
}