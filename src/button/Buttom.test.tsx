import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

test('renders button with label and handles click event', () => {
  const handleClick = jest.fn()
  const { getByText } = render(
    <Button label="Click me" onClick={handleClick} />
  )
  const buttonElement = getByText(/click me/i)
  fireEvent.click(buttonElement)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
