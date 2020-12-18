import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
    secundary: 'red',
    white:'#fff',
    background:'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)'
  },
  img:{
    Image1:'https://cdn.pixabay.com/photo/2020/03/12/15/40/sky-4925444_960_720.jpg'
  },
  fonts:{
    font1:'Montserrat'
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    font-family: Montserrat;
    color: white;
    padding:2.0rem;
  }
`
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
