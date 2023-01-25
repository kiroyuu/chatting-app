import { gql } from '@apollo/client'
import client from '../apollo-client'
import { Container, Box, Stack } from '@chakra-ui/react'

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
    <Container className="bg-sky-500" mt={4}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        {countries.map(country => (
          <Box
            key={country.code}
            bg="red.400"
            p={2}
            borderRadius={3}
            width={200}
          >
            {country.emoji} {country.name}
          </Box>
        ))}
      </Stack>
    </Container>
  )
}

export default Page
