import styled from "styled-components";

export const InputStyle = styled.input`
 padding: 16px;
 border-radius: 10px;
 margin: 10px 0;
 border: none;
 background-color: ${({ theme }) => theme.secondaryColor};

 &:focus {
  outline: none;
 }
`;
