import styled from "styled-components";

export const MarketValueContainer = styled.div`
 max-width: 1440px;
 margin: 0 auto;
 color: ${({ theme }) => theme.textColor};

 & h1 {
  padding-top: 48px;
  color: ${({ theme }) => theme.textColor};
 }
 & p {
  margin-top: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};

  & img {
   margin: 0 5px;
  }
 }
 & span {
  color: ${({ theme, rate }) => (rate === "positive" ? theme.green : theme.red)};
 }

 @media (max-width: 600px) {
  margin: 0 12px;
  h1 {
   font-size: 28px;
  }
  p {
   margin-top: 24px;
   font-size: 16px;
   line-height: 1.8rem;
   & img {
    margin: 0 5px 0 12px;
    height: 12px;
   }
  }
 }
`;
