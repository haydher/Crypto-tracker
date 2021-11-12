import styled from "styled-components";

export const FooterContainer = styled.div`
 background: ${({ theme }) => theme.backgroundColor};
 background: linear-gradient(
  328deg,
  ${({ theme }) => theme.primaryColorHover} 0%,
  ${({ theme }) => theme.primaryColor} 56%
 );

 & .footerContent {
  margin: auto;
  max-width: 1440px;
  padding-top: 48px;
 }
 & .disclaimer {
  display: flex;
  color: ${({ theme }) => theme.disclaimerColor};

  & img {
   height: 14px;
   margin-right: 10px;
  }
  & h1 {
   font-size: 14px;
  }
 }
 & p {
  color: ${({ theme }) => theme.footerColor};
  opacity: 0.7;
  font-size: 12px;
  text-align: justify;
  text-align-last: center;
 }
 & .copyright {
  padding-top: 36px;
  padding-bottom: 22px;
  opacity: 1;
  font-size: 500;

  & span {
   text-decoration: underline;
  }
 }
`;
