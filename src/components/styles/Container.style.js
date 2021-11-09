import styled from "styled-components";

export const Container = styled.div`
 /* background-color: ${({ theme }) => theme.secondaryColor}; */
 background-color: ${({ theme }) => theme.background};
 display: flex;
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
`;
