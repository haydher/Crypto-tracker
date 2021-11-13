import styled from "styled-components";

export const SearchContainer = styled.div`
 display: flex;
 position: relative;

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
  color: ${({ theme }) => theme.textColor};

  &::placeholder {
   color: ${({ theme }) => theme.textColor};
  }
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
  height: 50px;
  width: 50px;
  cursor: pointer;

  & img {
   height: 40%;
   width: 40%;
   margin: auto;
  }
 }

 & .subMenu {
  position: absolute;
  z-index: 10;
  top: 60px;
  right: 0;
  background-color: ${({ theme }) => theme.background};
  max-height: 450px;
  width: 400px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow-y: scroll;

  & .closeMenu {
   background-color: ${({ theme }) => theme.secondaryColorHover};
   position: sticky;
   top: 8px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 90%;
   width: 35px;
   height: 35px;
   border-radius: 10px;
   font-size: 16px;
   font-weight: 500;
   color: ${({ theme }) => theme.textColor};
  }
 }

 & .subMenu p {
  margin: 4px 0;
  padding: 15px 30px;
  color: ${({ theme }) => theme.textColor};
  border-left: 5px solid transparent;
  transition: border-left 0.1s ease, background-color 0.1s ease;
  user-select: none;
 }
 & .subMenu p:hover {
  background-color: #8a9eff;
  border-left: 5px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.background};
  transition: border-left 0.3s ease, background-color 0.3s ease;
 }

 & .subMenu::-webkit-scrollbar {
  width: 10px;
 }

 & .subMenu::-webkit-scrollbar-thumb {
  background: #8a9eff;
  border-radius: 100px;
 }
 /* Handle */
 & .subMenu:hover::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.primaryColor};
  border-radius: 100px;
 }

 @media (max-width: 600px) {
  display: flex;
  align-items: center;

  & input {
   width: 150px;
   padding: 12px 16px;
   font-size: 14px;
  }

  & .btnContainer {
   padding: 0;
   height: auto;
   width: 35px;
   & img {
    height: 16px;
   }
  }

  & .subMenu {
   max-height: 350px;
   width: 300px;

   & .closeMenu {
    width: 30px;
    height: 30px;
    font-size: 12px;
   }
  }

  & .subMenu p {
   margin: 4px 0;
   padding: 8px 20px;
   font-size: 14px;
  }
 }
`;
