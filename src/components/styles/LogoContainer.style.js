import styled from "styled-components";

export const LogoContainer = styled.div`
 color: ${({ theme }) => theme.footerColor};
 cursor: pointer;
 margin-left: 12px;

 @media (max-width: 600px) {
  h1 {
   font-size: 18px;
  }
 }
`;
