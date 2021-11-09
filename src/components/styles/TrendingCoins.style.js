import styled from "styled-components";

export const TrendingCoinsStyle = styled.div`
 & .mainContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  position: relative;
  font-weight: 500;
  cursor: pointer;
  & div {
   display: flex;
   padding: 6px 0;
  }

  & img:first-child {
   height: 18px;
   border-radius: 100%;
   margin-right: 6px;
  }
 }

 & .mainContainer::before {
  content: "";
  position: absolute;
  width: 108%;
  height: 40px;
  left: -12px;
  border-radius: 12px;
  padding: 6px 0;
  transition: opacity 0.2s ease, background-color 0.2s ease;
 }
 & .mainContainer:hover::before {
  background-color: ${({ theme }) => theme.secondaryColorHover};
  opacity: 0.2;
  transition: opacity 0.3s ease, background-color 0.3s ease;
 }
`;
export const CoinPercentage = styled.div`
 display: flex;
 color: ${({ theme, rate }) => (rate === "positive" ? theme.green : theme.red)};

 & img {
  margin-left: 6px;
 }
`;
