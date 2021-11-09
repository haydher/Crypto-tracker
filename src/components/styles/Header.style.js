import styled from "styled-components";

export const HeaderStyle = styled.div`
 display: flex;
 justify-content: space-between;
 color: ${({ theme }) => theme.textColor};

 & .name {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 600;

  & img {
   height: 28px;
   margin-right: 10px;
  }

  & .rank {
   background-color: ${({ theme }) => theme.secondaryColor};
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 8px 16px;
   font-weight: 500;
   font-size: 14px;
   margin-left: 12px;
   border-radius: 10px;
  }
 }

 & .chartDates {
  display: flex;
 }
`;

export const Date = styled.p`
 background-color: ${({ theme, active }) => (active === "active" ? theme.primaryColor : theme.secondaryColor)};
 display: flex;
 align-items: center;
 padding: 5px 10px;
 font-weight: 500;
 border-radius: 10px;
 margin-left: 12px;
 font-size: 0.8rem;
 color: ${({ active }) => active === "active" && "white"};
 cursor: pointer;
 transition: color 0.3s ease, background-color 0.2s ease;

 &:hover {
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  transition: color 0.3s ease, background-color 0.3s ease;
 }
`;
