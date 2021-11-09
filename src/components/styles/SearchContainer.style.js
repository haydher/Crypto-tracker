import styled from "styled-components";

export const SearchContainer = styled.div`
 display: flex;

 & input {
  /* background-color: ${({ theme }) => theme.secondaryColor}; */
  background-color: ${({ theme }) => theme.background};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 100%;
  width: 300px;
  padding: 16px;
  border: none;
  font-size: 16px;
  transition: background-color 0.2s ease;
  &:focus {
   outline: none;
  }

  &:hover {
   background-color: ${({ theme }) => theme.secondaryColor};
   transition: background-color 0.2s ease;
  }
 }

 & .btnContainer {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 50px;
  cursor: pointer;

  & img {
   height: 40%;
   width: 40%;
   margin: auto;
  }
 }
`;
