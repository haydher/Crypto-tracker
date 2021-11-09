import styled from "styled-components";

export const PStyle = styled.p`
 margin-right: 5px;
 font-weight: 500;
 grid-area: ${({ gridArea }) => gridArea};
 color: ${({ color }) => color};
 display: flex;
 align-items: center;
 cursor: pointer;
 letter-spacing: 1px;
 font-size: 15px;

 & img {
  height: 22px;
  border-radius: 100%;
  margin-right: 10px;
 }
`;
