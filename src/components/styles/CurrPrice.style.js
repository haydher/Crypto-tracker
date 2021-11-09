import styled from "styled-components";

export const CoinDataContainer = styled.div`
 display: flex;
 margin-top: 64px;
 color: ${({ theme }) => theme.textColor};
`;

export const CurrPrice = styled.div`
 width: 30%;

 & .name {
  font-size: 22px;
  margin-bottom: 8px;
 }

 & div {
  display: flex;

  & span {
   background-color: ${({ theme, rate }) => (rate === "positive" ? theme.green : theme.red)};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 10px;
   padding: 8px 10px;
   border-radius: 10px;
   font-weight: 500;
   color: ${({ theme }) => theme.background};
  }
 }
`;

export const PriceChangeContainer = styled.div`
 width: 70%;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: repeat(2, 1fr);
 grid-column-gap: 0px;
 grid-row-gap: 55px;
`;

export const PriceChange = styled.div`
 & p {
  font-weight: 500;
  font-size: 15px;
 }
 & h1 {
  margin: 6px 0;
  font-size: 20px;
  font-weight: 600;
 }
 & span {
  font-weight: 500;
  color: ${({ theme, rate }) => (rate === "positive" ? theme.green : theme.red)};
 }
`;
