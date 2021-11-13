import styled from "styled-components";

export const About = styled.div`
 margin-top: 48px;
 color: ${({ theme }) => theme.textColor};

 & h1 {
  font-size: 22px;
  margin-bottom: 8px;
 }
 & p {
  margin-top: 12px;
  line-height: 1.8rem;
  font-weight: 500;
  word-spacing: 0.3rem;
 }

 @media (max-width: 600px) {
  .aboutText {
   position: relative;
   height: 150px;
   overflow: hidden;
   margin-bottom: -28px;
   .overFlow {
    background: rgb(137, 151, 219);
    background: linear-gradient(180deg, rgba(137, 151, 219, 0) 0%, ${({ theme }) => theme.containerBackground} 82%);
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
   }
  }
 }
`;
