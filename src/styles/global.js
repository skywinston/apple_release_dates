import { createGlobalStyle } from 'styled-components'
import SFProDisplayBold from '../assets/fonts/SF-Pro-Display-Bold.otf'
import SFProTextBold from '../assets/fonts/SF-Pro-Text-Bold.otf'
import SFProTextMedium from '../assets/fonts/SF-Pro-Text-Medium.otf'
import SFProTextRegular from '../assets/fonts/SF-Pro-Text-Regular.otf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "San Francisco";
    font-style: normal;
    font-weight: 400;
    src: url("${SFProTextRegular}") format("opentype");
  }
  @font-face {
    font-family: "San Francisco";
    font-style: bold;
    font-weight: 700;
    src: url("${SFProDisplayBold}") format("opentype");
  }
  html {
    font-size: 10px;
  }
  body {
    font-family: "San Francisco", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

export default GlobalStyles
