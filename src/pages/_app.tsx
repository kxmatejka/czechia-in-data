import React from 'react'
import Head from 'next/head'
import styled, {createGlobalStyle} from 'styled-components'
import {Link} from '@/src/components/link'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-weight: normal;
    src: url('/fonts/Open_Sans/OpenSans-Regular.ttf');
  }

  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: "Open Sans", sans-serif;
  }
`

const Container = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 25px;
`

const Heading = styled.h1`
  text-align: center;
`

const SpringApp = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Czechia in data</title>
      </Head>
      <GlobalStyle/>
      <Container>
        <Heading>
          <Link href='/'>Czechia in data</Link>
        </Heading>
        <Component {...pageProps}/>
      </Container>
    </>
  )
}

export default SpringApp
