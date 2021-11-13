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

 & a {
  display: flex;
  align-items: center;
  height: 100%;
 }

 & .star {
  height: 16px;
 }
 & img {
  height: 22px;
  border-radius: 100%;
  margin: 0 10px;
 }

 @media (max-width: 600px) {
  margin-right: 0;
  letter-spacing: 0;
  font-size: 14px;

  .star {
   height: 14px;
  }
  img {
   height: 15px;
   margin: 0;
   margin-right: 8px;
  }
 }
`;
