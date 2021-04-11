import React from 'react'
import styled from 'styled-components'
import {TotalPopulation} from './total-population'
import {BirthDeath} from './birth-death'
import {PopulationGrowth} from './population-growth'

export const Population = () => {
  return (
    <>
      <TotalPopulation/>
      <PopulationGrowth/>
      <BirthDeath/>
    </>
  )
}
