import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'

const ErrorBoundry = () => {
  return (
    <Box mx="auto" textAlign="center" my="40px">
        <Text fontSize="5xl">404</Text>
        <Text mb={10}>The page you looking for is not found.</Text>
        <Link href='/' bg="blue.400" textDecoration={'none'} borderRadius={10} padding={3}>Go to Home Page</Link>
    </Box>
  )
}

export default ErrorBoundry