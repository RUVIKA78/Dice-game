import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";
const Start = ({ toggle }) => {
  return (
    <div>
      <Container>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/black-dice-with-contrasting-dots-isolate-white-background_273893-241.jpg?size=626&ext=jpg&ga=GA1.1.36606891.1683446006&semt=ais"
            alt=""
          />
        </div>

        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>PLAY NOW</Button>
        </div>
      </Container>
    </div>
  );
};

export default Start;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;


