import React from "react";
import styled from "styled-components";

const RollDice = ({rolldice, currDice}) => {
  return (
    <Dicecont>
      <div onClick={rolldice} className="dice">
        <img src={`./public/Diceimg/${currDice}.png`} alt="dice 1" />
  </div>
      <p>Click on the dice to roll</p>
    </Dicecont>
  );
};

export default RollDice;

const Dicecont = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-content: center;
  img {
    height: 200px;
    width: 200px;
  }
  .dice {
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  p {
    font-size: 24px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;


// // '''JD CODE '''
// // RollDice.jsx
// // RollDice.jsx

// import React from "react";
// import styled from "styled-components";

// const RollDice = ({ currDice, setCurrDice, updateScore, selectedNum }) => {
//   const diceImages = {
//     1: "src/Diceimg/1.png",
//     2: "src/Diceimg/2.png",
//     3: "src/Diceimg/3.png",
//     4: "src/Diceimg/4.png",
//     5: "src/Diceimg/5.png",
//     6: "src/Diceimg/6.png",
//   };

//   const randomNum = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
//   };

//   const rolldice = () => {
//     if (selectedNum === null) {
//       // Display a warning message or take appropriate action
//       console.warn('Please select a number before rolling the dice.');
//       return;
//     }

//     const generandomnum = randomNum(1, 7);
//     setCurrDice((prev) => generandomnum);
//     updateScore(); // Call the updateScore function after rolling the dice
//   };

//   return (
//     <Dicecont>
//       <div onClick={rolldice} className="dice">
//         <img src={diceImages[currDice]} alt={`dice ${currDice}`} />
//       </div>
//       <p>Click on the dice to roll</p>
//     </Dicecont>
//   );
// };

// export default RollDice;

// const Dicecont = styled.div`
//   margin-top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   justify-content: center;
//   img {
//     height: 200px;
//     width: 200px;
//   }
//   .dice {
//     cursor: pointer;
//   }
//   p {
//     font-size: 24px;
//   }
// `;


