import styled from "styled-components";

export const NavParentContainer = styled.div`
 background: ${({ theme }) => theme.backgroundColor};
 background: linear-gradient(328deg, rgba(137, 151, 219, 1) 0%, rgba(86, 115, 255, 1) 56%);

 & .navChildren {
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1440px;
  padding: 25px 0;
 }
`;
