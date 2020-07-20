import * as React from 'react'
import styled, { css } from 'styled-components'
import colors from '../../styles/colors'

type Placement = 'top' | 'right' | 'bottom' | 'left'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placement?: Placement;
  visible?: boolean;
}

const Container = styled.span<{visible: boolean; placement: Placement}>`
  display: ${({ visible }) => visible ? 'inline-block' : 'none'};
  width: 120px;
  background-color: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  border: 1px solid ${colors.primary};
  z-index: 10000;
  ${({ placement }) => {
    if (placement === 'top') {
      return css`
        top: -100%;
        left: 50%;
        transform: translate(-50%, -5px);
        &:after {
          top: 100%;
          left: 50%;
          border-color: ${colors.primary} transparent transparent transparent;
        }
      `
    }
    if (placement === 'bottom') {
      return css`
        bottom: -100%;
        left: 50%;
        transform: translate(-50%, 5px);
        &:after {
          bottom: 100%;
          left: 50%;
          border-color: transparent transparent ${colors.primary} transparent;
        }
      `
    }
    if (placement === 'right') {
      return css`
        top: 50%;
        left: 100%;
        transform: translate(10px, -50%);
        &:after {
          bottom: 50%;
          right: 100%;
          border-color: transparent ${colors.primary} transparent transparent;
          transform: translate(0, 50%);
        }
      `
    }
    if (placement === 'left') {
      return css`
        top: 50%;
        right: 100%;
        transform: translate(-10px, -50%);
        &:after {
          bottom: 50%;
          left: 100%;
          border-color: transparent transparent transparent ${colors.primary};
          transform: translate(50%, 50%);
        }
      `
    }
  }}
  &:after {
    content: '';
    position: absolute;
    border-width: 7px;
    margin-left: -7px;
    border-style: solid;
  }
`

export const Tooltip: React.FC<Props> = (props) => {
  const {
    visible = false,
    placement = 'top',
    children,
    ...restProps
  } = props

  return (
    <Container {...restProps} visible={visible} placement={placement}>
      {children}
    </Container>
  )
}
