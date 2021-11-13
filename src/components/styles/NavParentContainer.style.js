import styled from "styled-components";

export const NavParentContainer = styled.div`
 background: ${({ theme }) => theme.backgroundColor};
 background: linear-gradient(
  328deg,
  ${({ theme }) => theme.primaryColorHover} 0%,
  ${({ theme }) => theme.primaryColor} 56%
 );

 .navChildren {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1440px;
  padding: 25px 0;
 }
`;
