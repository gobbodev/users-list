/* update package.json // powershell -ExecutionPolicy Bypass -Command "ncu" */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

#__next{
    scroll-behavior: smooth;
}

:root {
    --max-width: 1200px;
    --border-radius: 12px;
    --p-color: #dfdfdf; 
    --s-color: #fff; 
    --t-color: #fff;
    --f-color: #fff; 
    --fc-color: #fff; 

    --card-color: rgb(23, 23, 23);
    
    --font-p: 'Iceland', cursive;
    --font-s: 'Iceland', cursive;
    --font-t: 'Iceland', cursive;
    
   
}

*:focus {
    outline: transparent !important;
}

a {
    text-decoration: none !important;
    color: inherit;
}

body {
    font-family: var(--font-p);
    max-width: 100vw;
    line-height: 1.5;
    background-color: rgb(6, 6, 6);
    margin: 0; 
    font-size: 1rem;
    font-weight: normal;
    color: #dfdfdf;
    text-align: left; 
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-top: 0;  
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
  font-size: 32px;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
*,
*::before,
*::after {
  box-sizing: border-box; 
}
html {
  font-family: sans-serif; 
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
  -ms-text-size-adjust: 100%; 
  -ms-overflow-style: scrollbar; 
  -webkit-tap-highlight-color: transparent; 
}

`;
