import { Text } from "@chakra-ui/react"

export const P = ({children}:{
  children: React.ReactNode
}) => {
  return (
    <Text
      lineHeight='1.7rem'
      fontSize='1rem'
      color='fontColor'
      marginBottom='1.125rem'
    >{children}</Text>
  )
}
