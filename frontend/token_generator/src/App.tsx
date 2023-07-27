import { useState } from 'react'
import SurveyForm from './components/SurveyForm'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid templateAreas={{base:`"nav" "main"`, lg: `"nav nav" "main"`}}>
      <GridItem area='nav'><NavBar/></GridItem>
        <GridItem mx={4} area='main' ><SurveyForm></SurveyForm></GridItem>
    </Grid>
  )
}

export default App
