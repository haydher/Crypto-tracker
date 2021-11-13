import styled from "styled-components";

export const Title = styled.h1`
 font-size: 22px;
 color: ${({ theme }) => theme.textColor};
 margin-bottom: 24px;

 @media (max-width: 600px) {
  font-size: 18px;
 }
`;
