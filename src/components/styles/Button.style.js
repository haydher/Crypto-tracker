import styled from "styled-components";

export const ButtonStyle = styled.button`
 border: none;
 padding: 12px;
 border-radius: 10px;
 margin: 10px 0;
 background-color: ${({ theme }) => theme.primaryColor};
 color: ${({ theme }) => theme.background};
 transition: background-color 0.2s ease;
 font-weight: 500;
 font-size: 15px;

 &:hover {
  background-color: ${({ theme }) => theme.primaryColorHover};
  transition: background-color 0.3s ease;
 }
`;
