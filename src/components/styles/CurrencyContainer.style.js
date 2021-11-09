import styled from "styled-components";

export const CurrencyContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
 font-weight: 500;
 position: relative;
 /* width: 80px; */

 & p:first-child {
  user-select: none;
  margin-left: 5px;
 }

 & img {
  margin-left: 15px;
  height: 10px;
  user-select: none;
 }

 & input {
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.secondaryColor};
  width: 100%;
  padding: 15px 30px;
  border: none;
  font-size: 14px;
  border-left: 5px solid ${({ theme }) => theme.primaryColor};
  &:focus {
   outline: none;
  }
 }
 & .subMenu {
  position: absolute;
  top: 50px;
  right: -20px;
  background-color: ${({ theme }) => theme.background};
  max-height: 450px;
  width: 400px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow-y: scroll;
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
`;
