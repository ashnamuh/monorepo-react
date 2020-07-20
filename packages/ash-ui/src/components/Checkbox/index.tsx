import * as React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  checked?: boolean;
}

const StyledCheckbox = styled.input`
  display: none;
`

const CheckMark = styled.span<{checked?: boolean}>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${({ checked }) => checked ? colors.primary : colors.white};
  position: relative;
  border: 1px solid ${colors.primary600};
  border-radius: 3px;
  vertical-align: top;
  cursor: pointer;
  &:after {
    content: ' ';
    display: inline-block;
    width: 5px;
    height: 10px;
    border: solid ${colors.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    left: 4px;
  }
`

export const Checkbox: React.FC<Props> = (props) => {
  const {
    checked = false,
    className,
    label,
    ...restProps
  } = props

  return (
    <label className={className}>
      <CheckMark checked={checked} />
      <StyledCheckbox type="checkbox" {...restProps} />
    </label>
  )
}
