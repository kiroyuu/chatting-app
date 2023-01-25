import { gql } from '@apollo/client'
import client from '../apollo-client'
import {
  Container,
  FormControl,
  Button,
  Box,
  Stack,
  Heading,
  Wrap,
  WrapItem,
  Input,
  Textarea,
  Flex
} from '@chakra-ui/react'

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

const ChatArea = () => {
  const messages = [
    "Hi, I'm from the US",
    "Hi, I'm from the UK",
    "Hi, I'm from the Canada",
    "Hi, I'm from the Australia",
    "Hi, I'm from the Japan"
  ]
  return (
    <Flex flex={1} m={5} p={4} borderRadius={4} border="1px" direction="column">
      {messages.map(message => (
        <Box
          key={message}
          borderRadius={4}
          bg="blue.400"
          w="fit-content"
          min-w="100px"
          p={3}
          my={2}
        >
          {message}
        </Box>
      ))}
    </Flex>
  )
}

const MessageForm = () => {
  return (
    <FormControl>
      <Input placeholder="write your message here!" size="lg" />
      <Button type="submit" hidden />
    </FormControl>
  )
}

const Page = ({ countries }) => {
  return (
    <Flex direction="column" h="100%">
      <Container className="bg-sky-500" mt={4} direction="column">
        <Box>
          <Heading as="h2" variant="page-title">
            List of chatting groups
          </Heading>
        </Box>
        <Stack direction="column" mt={4}>
          <Wrap spacing={4}>
            {countries.map(country => (
              <WrapItem key={country.code}>
                <Button p={5} borderRadius={3} size="lg" variant="outline">
                  {country.name}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Container>

      <ChatArea />
      <MessageForm />
    </Flex>
  )
}

export default Page
