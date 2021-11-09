import styled from "styled-components";

export const MainContainer = styled.div`
 display: flex;
 max-width: 1440px;
 margin: 28px auto;

 & .cryptoContainer {
  box-shadow: -5px 0px 35px 2px rgba(82, 82, 82, 0.05);
  width: 80%;
 }
 & .dontFlexBox {
  margin-left: 30px;
  & .marketValue,
  & .trending,
  & .news {
   margin-bottom: 30px;
   width: 350px;
   /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
   box-shadow: -5px 0px 35px 2px rgba(82, 82, 82, 0.05);
  }
 }
`;
