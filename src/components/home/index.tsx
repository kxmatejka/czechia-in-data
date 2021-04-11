import React from 'react'
import styled from 'styled-components'
import {Link} from '../link'
import Map from './map.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export const Home = () => {
  return (
    <Container>
      <Map width={500} height={290} viewBox='-25 -75 1412 1009'/>
      <nav>
        <ul>
          <li>
            <Link href='/population'>Population</Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
