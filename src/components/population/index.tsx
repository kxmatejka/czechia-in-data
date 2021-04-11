import React from 'react'
import styled from 'styled-components'
import {TotalPopulation} from './total-population'
import {BirthDeath} from './birth-death'
import {PopulationGrowth} from './population-growth'

const Container = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 25px;
  font-family: "Open Sans", sans-serif;
`

export const Population = () => {
  return (
    <Container>
      <TotalPopulation/>
      <PopulationGrowth/>
      <BirthDeath/>
    </Container>
  )
}
