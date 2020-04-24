import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,html,body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    border:0;
    text-decoration:none;
    list-style:none;
    outline:none;
    /* height:100%; */
  }
  html,body,#root{
    height:100%
  }
  body{
    background:#121212;
    font-family:sans-serif;
  }
  button{
    cursor: pointer;
  }
`;
