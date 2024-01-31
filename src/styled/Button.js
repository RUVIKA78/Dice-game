import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover{
background-color: #fff;
color: #000;
transition:0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
background: #fff;
color: #000;
border:1px solid #000;

  &:hover{
background-color: #000;
color: #fff;
  border: 1px solid transparent;
  }
`;