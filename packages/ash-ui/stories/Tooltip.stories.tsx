import React from 'react'
import styled from 'styled-components'
import { Tooltip } from '../src'
import { withKnobs, text } from '@storybook/addon-knobs'

const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
`

const Button = styled.button`
  position: relative;
  padding: 0.5em 1em;
  border: 1px solid #333;
  border-radius: 8px;
  &:hover > span {/* It is styled-components' bug with storybook maybe  */
    display: inline-block;
  }
`

export default {
  title: 'Tooltip',
  decorators: [withKnobs]
}

export const Default = () => {
  return (
    <Container>
      <Button>Top<Tooltip placement="top">Top tooltip</Tooltip></Button>
      <Button>Right<Tooltip placement="right">Right tooltip</Tooltip></Button>
      <Button>Bottom<Tooltip placement="bottom">Bottom tooltip</Tooltip></Button>
      <Button>Left<Tooltip placement="left">Left tooltip</Tooltip></Button>
      <Button>Always visibled<Tooltip visible>visible tooltip</Tooltip></Button>
    </Container>
  )
}
