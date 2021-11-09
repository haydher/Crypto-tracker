import styled from "styled-components";

export const About = styled.div`
 margin-top: 48px;
 color: ${({ theme }) => theme.textColor};

 & h1 {
  font-size: 22px;
  margin-bottom: 8px;
 }
 & p {
  margin-top: 12px;
  line-height: 1.8rem;
  font-weight: 500;
  word-spacing: 0.3rem;
 }
`;
