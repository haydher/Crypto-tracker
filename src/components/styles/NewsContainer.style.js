import styled from "styled-components";

export const NewsContainer = styled.div`
 display: flex;
 justify-content: space-between;
 margin-top: 28px;
 color: ${({ theme }) => theme.textColor};
 transition: background-color 0.3s ease;
 position: relative;
 cursor: pointer;

 &::before {
  content: "";
  position: absolute;
  width: 108%;
  height: 100%;
  top: -12px;
  left: -12px;
  border-radius: 6px;
  padding: 12px 0;
  transition: opacity 0.2s ease, background-color 0.2s ease;
 }
 &:hover::before {
  background-color: ${({ theme }) => theme.secondaryColorHover};
  opacity: 0.2;
  transition: opacity 0.3s ease, background-color 0.3s ease;
 }
 & .newInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
 }
 & h1 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 5px;
 }
 & span {
  font-size: 13px;
  margin-right: 10px;
 }

 & .thumbnailContainer {
  border-radius: 10px;
  height: 80px;
  width: 80px;
  margin-left: 10px;
  overflow: hidden;

  & img {
   width: 100%; /* or any custom size */
   height: 100%;
   object-fit: cover;
  }
 }

 & .viewMore {
  background: green;
  padding: 200px;
 }
`;

export const ViewMore = styled.div`
 padding: 12px 0;
 margin-top: 18px;
 text-align: center;
 color: ${({ theme }) => theme.linkColor};
 font-weight: 500;
 font-size: 14px;
 cursor: pointer;
 border-radius: 10px;
 & span {
  margin-right: 5px;
 }
`;
