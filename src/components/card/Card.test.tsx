import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Card } from './Card'

describe('Card', () => {
  it('renders children', () => {
    renderWithProviders(<Card>Content</Card>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('applies outlined variant by default', () => {
    renderWithProviders(<Card data-testid="card">Content</Card>)
    const el = screen.getByTestId('card')
    expect(el).toHaveClass('border', 'border-gray-200', 'rounded-2xl')
  })

  it('applies elevated variant', () => {
    renderWithProviders(
      <Card variant="elevated" data-testid="card">
        Content
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveClass('shadow-md')
  })

  it('applies filled variant', () => {
    renderWithProviders(
      <Card variant="filled" data-testid="card">
        Content
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveClass('bg-gray-50')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Card className="max-w-sm" data-testid="card">
        Content
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveClass('max-w-sm')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    renderWithProviders(<Card ref={ref}>Content</Card>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <Card data-testid="card" id="my-card">
        Content
      </Card>,
    )
    expect(screen.getByTestId('card')).toHaveAttribute('id', 'my-card')
  })
})

describe('Card.Header', () => {
  it('renders children', () => {
    renderWithProviders(<Card.Header>Header</Card.Header>)
    expect(screen.getByText('Header')).toBeInTheDocument()
  })

  it('applies padding classes', () => {
    renderWithProviders(
      <Card.Header data-testid="header">Header</Card.Header>,
    )
    expect(screen.getByTestId('header')).toHaveClass('px-6', 'pt-6', 'pb-0')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Card.Header className="border-b" data-testid="header">
        Header
      </Card.Header>,
    )
    expect(screen.getByTestId('header')).toHaveClass('border-b')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    renderWithProviders(<Card.Header ref={ref}>Header</Card.Header>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

describe('Card.Body', () => {
  it('renders children', () => {
    renderWithProviders(<Card.Body>Body</Card.Body>)
    expect(screen.getByText('Body')).toBeInTheDocument()
  })

  it('applies padding classes', () => {
    renderWithProviders(<Card.Body data-testid="body">Body</Card.Body>)
    expect(screen.getByTestId('body')).toHaveClass('px-6', 'py-5')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    renderWithProviders(<Card.Body ref={ref}>Body</Card.Body>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

describe('Card.Footer', () => {
  it('renders children', () => {
    renderWithProviders(<Card.Footer>Footer</Card.Footer>)
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('applies padding classes', () => {
    renderWithProviders(
      <Card.Footer data-testid="footer">Footer</Card.Footer>,
    )
    expect(screen.getByTestId('footer')).toHaveClass('px-6', 'pt-0', 'pb-6')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    renderWithProviders(<Card.Footer ref={ref}>Footer</Card.Footer>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

describe('Card composition', () => {
  it('renders full card with header, body, and footer', () => {
    renderWithProviders(
      <Card data-testid="card">
        <Card.Header data-testid="header">Title</Card.Header>
        <Card.Body data-testid="body">Content</Card.Body>
        <Card.Footer data-testid="footer">Actions</Card.Footer>
      </Card>,
    )
    expect(screen.getByTestId('card')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toHaveTextContent('Title')
    expect(screen.getByTestId('body')).toHaveTextContent('Content')
    expect(screen.getByTestId('footer')).toHaveTextContent('Actions')
  })
})
