import { css } from '@emotion/core'
export default css`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    min-height: 100%;
    color: white;
    background-color: #1b1d1e;
    font: 400 15px/1.5 'Lato', 'Helvetica Neue', Helvetica, sans-serif;
  }
`
