import { gql } from '@apollo/client'
import client from '../apollo-client'
import {
  Container,
  Box,
  Grid,
  GridItem,
  Stack,
  LinkItem
} from '@chakra-ui/react'
import Logo from '../components/logo'

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `
  })

  return {
    props: {
      countries: data.countries.slice(0, 4)
    }
  }
}

const Page = ({ countries }) => {
  return (
    <Container className="bg-sky-500">
      <Box borderRadius="lg" bg="red.600" p={4} textAlign="center" my={5}>
        Hello, welcome to my chatting app!
      </Box>
      <Stack direction={{ base: 'column', md: 'row' }}>
        {countries.map(country => (
          <Box key={country.code} bg="red.400" p={2} borderRadius={3}>
            {country.emoji} {country.name}
          </Box>
        ))}
      </Stack>
    </Container>
  )
}

export default Page
