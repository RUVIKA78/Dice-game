import React from "react";
import styled from "styled-components";
const Rules = () => {
  return (
    <Rulcont>
      <h1>Rules</h1>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking on dice if selected number is equal to dice number you
          will get point equal to dice
          {""}{" "}
        </p>
        <p>-2 points will be deducted on wrong selection </p>
      </div>
    </Rulcont>
  );
};

export default Rules;

const Rulcont = styled.div`
  background: #f7c4cc;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  h1 {
    font-size: 24px;
    font-weight: 300;
  }
  .text {
    margin-top: 24px;
  }
`;
