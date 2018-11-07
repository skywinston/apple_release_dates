import React from 'react'
import GlobalStyles from '../../styles/global'

const IndexLayout = ({ children }) => (
  <main>
    {children}
    <GlobalStyles />
  </main>
)

export default IndexLayout
