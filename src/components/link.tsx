import React, {FC} from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

export const StyledLink = styled.a`
  color: #3871b8;

  &:hover {
    color: #8a8bad;
  }
`

export const Link: FC<{ href: string }> = ({href, children}) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  )
}
