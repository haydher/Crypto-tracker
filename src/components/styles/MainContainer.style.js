import styled from "styled-components";

export const MainContainer = styled.div`
 display: flex;
 max-width: 1440px;
 margin: auto;
 padding: 48px 0;
 color: ${({ theme }) => theme.textColor};

 & .watchList {
  margin-bottom: 30px;
  box-shadow: -5px 0px 35px 2px rgba(82, 82, 82, 0.05);
  border-radius: 10px;
 }

 & .currencies {
  box-shadow: -5px 0px 35px 2px rgba(82, 82, 82, 0.05);
 }
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
   box-shadow: -5px 0px 35px 2px rgba(82, 82, 82, 0.05);
  }
 }

 @media (max-width: 600px) {
  display: block;
  padding: 0;
  padding-bottom: 48px;
  .watchList,
  .currencies {
   margin: 48px 12px;
  }
  & .dontFlexBox {
   margin-left: 0;
   & .trending,
   & .news {
    margin: 48px 12px;
    width: auto;
   }
   .news {
    margin-bottom: 0;
   }
  }
  .cryptoContainer {
   width: 100%;
  }
 }
`;
