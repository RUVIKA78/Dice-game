import React, { useState } from "react";
import styled from "styled-components";
import Start from "./components/Start";
import Gameplay from "./components/Gameplay";

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;

const App = () => {
  const [isgamestarted, setgamestarted] = useState(false);
  const togglegame = () => {
    setgamestarted((prev) => !prev);
  };

  return (
    <div>{isgamestarted ? <Gameplay /> : <Start toggle={togglegame} />}</div>
  );
};

export default App;
