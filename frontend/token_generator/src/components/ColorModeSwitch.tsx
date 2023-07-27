import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineLightMode, MdLightMode, MdNightlight} from 'react-icons/md';

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
    const current_mode =  localStorage.getItem("chakra-ui-color-mode");

    return (
        <HStack>
            <Switch colorScheme='green' isChecked={colorMode == 'dark'} onChange={toggleColorMode}/>
            <Text whiteSpace="nowrap" fontFamily={"Inter"}>{current_mode == 'dark'? <MdLightMode/>:<MdNightlight/>}</Text>
        </HStack>
    )
}

export default ColorModeSwitch;