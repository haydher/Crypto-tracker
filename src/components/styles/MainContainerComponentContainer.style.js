import styled from "styled-components";

export const MainContainerComponentContainer = styled.div`
 background-color: ${({ theme }) => theme.containerBackground};
 padding: 22px;
 border-radius: 12px;

 @media (max-width: 600px) {
  padding: 16px;
 }
`;
