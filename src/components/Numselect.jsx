import React, {  } from "react";
import styled from "styled-components";

const Numselect = ({setError,error, selectedNum, setSelectedNum}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  // console.log(selectedNum);
  
  const numSelectorHandler = (value) => {
    setSelectedNum(value);
    setError("");
  }
  return (
    <Container>
      <p className="error">{ error}</p>
      <div className="flex">
        {arrNum.map((value, i) => (
          <Box
            isSelected={value === selectedNum}
            key={i}
            onClick={() => numSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Container>
  );
};

export default Numselect;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error{
    color: red;
  }

`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  place-items: center;
  display: grid;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "black" : "white")};

  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

// // Numselect.jsx
// // Numselect.jsx

// import React from 'react';
// import styled from 'styled-components';

// const Numselect = ({ selectedNum, setSelectedNum }) => {
//   const arrNum = [1, 2, 3, 4, 5, 6];

//   return (
//     <Container>
//       {selectedNum === null && <WarningMessage>Please select a number before rolling the dice.</WarningMessage>}
//       <div className="flex">
//         {arrNum.map((value, i) => (
//           <Box
//             isselected={value === selectedNum}
//             key={i}
//             onClick={() => setSelectedNum(value)}
//           >
//             {value}
//           </Box>
//         ))}
//       </div>
//       <p>Select Number</p>
//     </Container>
//   );
// };

// export default Numselect;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: end;
//   .flex {
//     display: flex;
//     gap: 24px;
//   }
//   p {
//     font-size: 24px;
//     font-weight: 700;
//   }
// `;

// const Box = styled.div`
//   height: 72px;
//   width: 72px;
//   border: 1px solid black;
//   place-items: center;
//   display: grid;
//   font-size: 24px;
//   font-weight: 700;
//   background: ${(props) => (props.isselected ? "black" : "white")};
//   color: ${(props) => (props.isselected ? "white" : "black")};
// `;

// const WarningMessage = styled.p`
//   color: red;
//   font-size: 16px;
//   margin-bottom: 8px;
// `;

