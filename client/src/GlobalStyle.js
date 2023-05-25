import "normalize.css";
import { createGlobalStyle } from "styled-components";
import { COLOR, WIDTH } from "./utils/constants";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p{
    margin: 0;
  }
  
  dl, dt, dd, ol, ul, li{
    padding:0;
    margin: 0;
  }

  ul, ol, li{
    list-style: none;
  }

  button {
    border: 0;
    cursor:pointer;
    font-family: inherit;
    background: none;

    &:disabled {
      cursor: default;
    }
  }

  label {
    user-select: none;
  }

  input, textarea{
    &::placeholder {
      font-size: 1.4rem;
      color: ${COLOR.textLightGray};
    }
  }
  
  .sr-only {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }

  .max-width {
    width: ${WIDTH.maxWidth};
    margin: 0 auto;
    max-width: calc(100% - (${WIDTH.marginWidth} * 2));
  }

  #root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .contents{
    flex-grow: 1;
    position: relative;
  }

  .sl-ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .multi-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }

  a.underline{
    color:${COLOR.main};
    text-decoration: underline;
  }
`;

export default GlobalStyle;
