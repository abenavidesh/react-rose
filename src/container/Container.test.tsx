import React from 'react'
import { render } from '@testing-library/react'
import Container from './Container'

describe('Container', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <div>Item</div>
      </Container>
    )

    expect(getByText('Item')).toBeInTheDocument()
  })

  it('applies default classes correctly when fluid is false', () => {
    const { container } = render(
      <Container>
        <div>Item</div>
      </Container>
    )

    const div = container.firstChild
    expect(div).toHaveClass('container')
    expect(div).toHaveClass('mx-auto')
    expect(div).toHaveClass('px-4')
  })

  it('applies fluid classes correctly when fluid is true', () => {
    const { container } = render(
      <Container fluid>
        <div>Item</div>
      </Container>
    )

    const div = container.firstChild
    expect(div).toHaveClass('w-full')
    expect(div).toHaveClass('px-4')
  })

  it('applies custom classes correctly', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Item</div>
      </Container>
    )

    const div = container.firstChild
    expect(div).toHaveClass('custom-class')
  })
})
