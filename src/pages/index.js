import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'

const SplashContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Heading = styled.h1`
  margin: 0 auto;
  font-size: 4rem;
  line-height: 5.4rem;
`

const IndexPage = () => (
  <Layout>
    <SplashContainer>
      <Heading>Good things come to those who wait.</Heading>
    </SplashContainer>
  </Layout>
)

export default IndexPage
