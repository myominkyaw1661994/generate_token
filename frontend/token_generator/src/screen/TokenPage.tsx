import React, { useEffect, useState } from 'react'
import { Center, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import TokenCard from '../components/TokenCard'
import { useLocation } from 'react-router-dom'

const TokenPage = () => {
    const { state } = useLocation();
    const [survey, setSurvey] = useState({});
    useEffect(() => {
        setSurvey(state)
    }, [])

    return (
        <>
            <Grid templateAreas={{base:`"nav" "main"`, lg: `"nav nav" "main"`}}>
            <GridItem area='nav'><NavBar/></GridItem>
                <GridItem area='main' >
                    <Center>
                        <TokenCard data={survey}/>
                    </Center>
                </GridItem>
            </Grid>
        </>
  )
}

export default TokenPage