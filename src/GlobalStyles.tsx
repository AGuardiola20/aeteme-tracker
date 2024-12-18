import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: "Roboto", serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
  }  
  a{
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  a,
  p,
  div{
    margin: 0;
    padding:0;
  }
`;

export default GlobalStyles;
