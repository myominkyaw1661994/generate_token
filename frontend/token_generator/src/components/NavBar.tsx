import { Box, HStack, Image, Link, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'
import { redirect } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box mt={3} mx={10}>
        <HStack justify={'space-between'}>
            <Link href='/' >
                <Text 
                cursor={'pointer'}
                textDecoration={'none'}
                fontFamily='Inter' 
                fontSize="30px" 
                fontWeight="semibold" 
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                >EDKAMM</Text>
            </Link>
            {/* <Link href='/'>Home</Link>
            <Link href='/token'>Token</Link> */}
            <ColorModeSwitch/> 
        </HStack>
    </Box>
  )
}

export default NavBar;