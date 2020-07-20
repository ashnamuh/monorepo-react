import * as React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'

const StyledButton = styled.button`
  background-color: ${colors['primary']};
`

interface Props {
  children: React.ReactNode;
}

export function Button(props: Props) {
  return (<StyledButton>{props.children}</StyledButton>)
}
