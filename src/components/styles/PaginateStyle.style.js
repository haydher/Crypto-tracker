import styled from "styled-components";

export const PaginateStyle = styled.div`
 display: flex;
 justify-content: center;
 box-sizing: border-box;
 margin-top: 22px;
 & ul {
  list-style: none;
 }
 & li {
  padding: 12px 0;
  color: ${({ theme }) => theme.textColor};
 }
 & .pagination {
  display: flex;
  padding: 4px;
 }
 & .page-item {
  margin: 0 8px;
 }
 & .page-link {
  height: 100px;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
   background-color: ${({ theme }) => theme.primaryColor};
   color: white;
   transition: background-color 0.2s ease, color 0.2s ease;
  }
 }
 & .active {
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  color: white;
 }

 @media (max-width: 600px) {
  font-size: 12px;
  .page-item {
   margin: 0;
  }
 }
`;
