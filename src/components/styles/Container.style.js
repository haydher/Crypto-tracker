import styled from "styled-components";

export const Container = styled.div`
 /* background-color: ${({ theme }) => theme.secondaryColor}; */
 background-color: ${({ theme }) => theme.background};
 display: flex;
 justify-content: center;
 align-items: center;
 padding: ${({ noPadding }) => (noPadding === true ? "0px !important" : "8px 16px")};
 margin-left: 14px;
 border-radius: 8px;
 transition: background-color 0.2s ease;
 cursor: pointer;

 &:hover {
  /* background-color: ${({ theme }) => theme.secondaryColorHover}; */
  background-color: ${({ theme }) => theme.secondaryColor};
  transition: background-color 0.3s ease;
 }

 @media (max-width: 600px) {
  margin-right: 12px;
  margin-left: 0;
  padding: 5px 12px;

  img {
   height: 14px;
  }
 }
`;
