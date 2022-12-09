import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-style: oblique;
 }

 body {
  max-width: 1920px;
  min-width: 960px;
  margin: 0 auto;
  width: 100%;
  font-style: oblique;
  background:#d30603;
 }
`