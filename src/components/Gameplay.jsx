import React, { useState } from "react";
import styled from "styled-components";
import Totalscore from "./Totalscore";
import Numselect from "./Numselect";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState(null);
  const [currDice, setCurrDice] = useState(1);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rolldice = () => {
    if (!selectedNum) {
      setError("You have not selected any number");
      return;
    }
    // setError("");

    const generandomnum = randomNum(1, 7);
    setCurrDice((prev) => generandomnum);

    if (selectedNum === generandomnum) {
      setScore((prev) => prev + generandomnum);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNum(undefined);
  };
  const reseTScore = () => {
    setScore(0);0
  };

  return (
    <div>
      <Maincontain>
        <div className="topsec">
          <Totalscore score={score} />

          <Numselect
            error={error}
            setError={setError}
            selectedNum={selectedNum}
            setSelectedNum={setSelectedNum}
          />
        </div>
        <RollDice currDice={currDice} rolldice={rolldice} />

        <div className="btns">
          <OutlineButton onClick={reseTScore}>Reset Score</OutlineButton>
          <Button onClick ={() => setRules((prev) => !prev)}>
            {rules ? "Hide" : "Show"} Rules
          </Button>
        </div>
        

        {rules && <Rules />}
      </Maincontain>
    </div>
  );
};

export default Gameplay;

const Maincontain = styled.main`
  /* padding-top:72px; */
  .topsec {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`;

