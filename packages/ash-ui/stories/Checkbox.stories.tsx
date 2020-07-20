import React from 'react'
import { Checkbox } from '../src'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Checkbox',
  decorators: [withKnobs]
}

export const Default = () => {
  const [value, setValue] = React.useState<string[]>([])

  const handleChange = (e) => {
    let newValue
    if (value.includes(e.target.value)) {
      const index = value.indexOf(e.target.value)
      if (index !== -1) value.splice(index, 1)
      newValue = [...value]
    } else {
      newValue = [...value, e.target.value]
    }
    setValue(newValue)
  }

  const checkboxValue = text('value', 'default value')

  return (
    <div>
      <p>selected : {value}</p>
      <Checkbox onChange={handleChange} value={checkboxValue} checked={value.includes(checkboxValue)} />
    </div>
  )
}
