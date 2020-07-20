import React from 'react'
import styled from 'styled-components'
import { createToast } from '../src'
import { ToastType } from '../src/components/Toast/types'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'

const StyledButton = styled.button`
  padding: 0.5em 1em;
  border: 1px solid #333;
  margin-right: 1em;
`

export default {
  title: 'Toast',
  decorators: [withKnobs]
}

export const Default = () => {

  const types = [
    'default',
    'error',
    'success',
    'warning',
    'info'
  ]

  return (
    <>
      <StyledButton onClick={() => createToast({ message: 'I am a default Toast!' })}>open default toast</StyledButton>
      <StyledButton onClick={() => createToast({ type: 'error', message: 'I am a error Toast!' })}>open error toast</StyledButton>
      <StyledButton onClick={() => createToast({ type: 'warning', message: 'I am a warning Toast!' })}>open warning toast</StyledButton>
      <StyledButton onClick={() => createToast({ type: 'success', message: 'I am a success Toast!' })}>open success toast</StyledButton>
      <StyledButton onClick={() => createToast({ type: 'info', message: 'I am a info Toast!' })}>open info toast</StyledButton>

      <StyledButton onClick={() => createToast({ type: select('type', types, 'default') as ToastType, message: text('message', 'default message'), duration: number('duration', 3500) })}>open customized toast with knobs</StyledButton>
    </>
  )
}
