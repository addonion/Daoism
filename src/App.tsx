import { useEffect } from 'react'
import { ChakraProvider, Container, Heading } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import Profile from './components/Profile'
import Transfer from './components/Transfer'
import Mint from './components/Mint'

function App() {
  const { account } = useEthers()

  useEffect(() => {
    document.title = 'Daoism Systems Front-end Engineer Technical Challenge'
  })

  return (
    <ChakraProvider>
      <Container maxW="container.md">
        <Heading as="h1" my={10}>
          Daoism Systems Front-end Engineer Technical Challenge
        </Heading>

        <Profile />

        {account && (
          <>
            <Transfer />
            <Mint />
          </>
        )}
      </Container>
    </ChakraProvider>
  )
}

export default App
