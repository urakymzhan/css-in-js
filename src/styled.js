import styled, { createGlobalStyle } from "styled-components";

export const AppDiv = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 40px;
`;

// GLOBAL STYLES
export const GlobalStyle = createGlobalStyle`
    svg {
        width: 60px;
        height: auto;
    }
    body {
        background: lightgray;
    }
`;
