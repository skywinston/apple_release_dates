import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../styles/global'

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Heading = styled.h1`
  font-size: 4rem;
  line-height: 5.4rem;
`

const IndexPage = () => (
  <PageContainer>
    <Heading>Good things come to those who wait.</Heading>
    <GlobalStyles />
  </PageContainer>
)

export default IndexPage
