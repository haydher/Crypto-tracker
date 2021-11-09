import styled from "styled-components";

export const MarketValueContainer = styled.div`
 max-width: 1440px;
 margin: 48px auto;
 color: ${({ theme }) => theme.textColor};

 & p {
  margin-top: 12px;
  font-weight: 500;

  & img {
   margin: 0 5px;
  }
 }
 & span {
  color: ${({ theme, rate }) => (rate === "positive" ? theme.green : theme.red)};
 }
`;
