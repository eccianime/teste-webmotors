import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";
import colors from './config/colors'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.lightGray};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, button, input{
    font-family: 'Poppins', sans-serif;
  }
`

const Container = styled.div`
  padding: 10px;
  max-width: 933px;
  max-height: 312px;
  margin: 0px auto;
`

export { Container, GlobalStyle }