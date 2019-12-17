import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {

  const Card = styled.div`
    background-color: gray;
    text-align: center;
    width: 50%;
    margin: 5px auto;
    padding: 10px 0 10px 0;
    border-radius: 10px;
    border: 1px solid black;
  `
  const Header = styled.h2`
    color: aqua;
  `

return(
  <Card>
    <Header>{props.name}</Header>
      {/* <img src={props.image} alt=" " /> */}
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
  </Card>
  )
};