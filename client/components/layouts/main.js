import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} h="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Chatting app</title>
      </Head>
      <Navbar path={router} />
      <Container maxW="container.md" pt={14} h="100%">
        {children}
      </Container>
    </Box>
  )
}

export default Main
