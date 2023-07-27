import { Box, Button, Card, CardBody, CardFooter, CardHeader, Link, StackDivider, Text, VStack } from '@chakra-ui/react'

type Survey = {
  id: string,
  name: string,
  phone: string,
  company: string,
  designation: string,
  token: string
}

interface Props{
  data: any
}

const TokenCard = ({data} : Props) => {
  const {name, phone, company, designation, token} = data;
  const tokenRest :string= token; 
  return (
    <Card width={{base: '90%', lg: '500px'}} mt={20} border='1px' borderColor={'gray.200'}>
      <CardHeader>
        <Text textAlign="center" fontSize={20} fontWeight={300}>Token</Text>
      </CardHeader>
      <CardBody >
          <VStack
           divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch' 
          >
            <Text fontSize={20}>Name: {name}</Text>
            <Text fontSize={20}>Phone: {phone}</Text>
            <Text fontSize={20}>Company : {company}</Text>
            <Text fontSize={20}>Designation: {designation}</Text>
            <Text fontSize={20}>Token: {token} <Button onClick={()=> {navigator.clipboard.writeText(tokenRest)}}>Click to Copy</Button></Text>
          </VStack>
      </CardBody>
        <Link margin={3} href='/'><Text  
          cursor={'pointer'}
          textDecoration={'none'}
          fontFamily='Inter' 
          fontSize="20px" 
          fontWeight="semibold" 
          bgGradient='linear(to-l, #355A92, #5A69C9)'
          bgClip='text'
        >Back To Survey Form</Text></Link>
    </Card>
  )
}

export default TokenCard;