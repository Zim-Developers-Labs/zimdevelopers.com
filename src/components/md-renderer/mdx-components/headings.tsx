import { Text } from "@chakra-ui/react";
import { Linkify } from "@lib/renderer"
import styled from "styled-components";

const H1 = ({children}:{children: string}) : React.ReactNode => {

  const id = Linkify(children)

  return (
    <Text as='h1'
    fontWeight='600'
    fontSize={['1.6rem', '1.6rem', '2rem']}
    marginBottom='1.25rem'
    marginTop='-5.3rem'
    paddingTop='7.5rem'
    id={id}>
      {children}
    </Text>
  )
}

const H2 = ({children}:{children: string}) : React.ReactNode => {

  const id = Linkify(children)

  return (
    <Text as='h2'
    fontWeight='600'
    fontSize='1.875rem'
    marginBottom='1.25rem'
    marginTop='-5.3rem'
    paddingTop='7.5rem'
    id={id}>
      {children}
    </Text>
  )
}

const H3 = ({children}:{children: string}) : React.ReactNode => {

  const id = Linkify(children)

  return (
    <Text as='h3'
    fontWeight='500'
    fontSize='1.6rem'
    marginBottom='1.25rem'
    marginTop='-5.3rem'
    paddingTop='7.5rem'
    id={id}>
      {children}
    </Text>
  )
}

const H4 = styled.h4`
  font-size: 1.375rem;
  margin-bottom: 1.25rem;
  color: teal;
`;

const Headings = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4
}

export default Headings;
