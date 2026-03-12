import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Card } from '.'

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

  it('applies default padding and flex layout', () => {
    renderWithProviders(<Card data-testid="card">Content</Card>)
    const el = screen.getByTestId('card')
    expect(el).toHaveClass('p-6', 'flex', 'flex-col', 'gap-4')
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

  it('merges custom className', () => {
    renderWithProviders(
      <Card.Header className="custom" data-testid="header">
        Header
      </Card.Header>,
    )
    expect(screen.getByTestId('header')).toHaveClass('custom')
  })
})

describe('Card.Content', () => {
  it('renders children', () => {
    renderWithProviders(<Card.Content>Body</Card.Content>)
    expect(screen.getByText('Body')).toBeInTheDocument()
  })

  it('applies flex-1', () => {
    renderWithProviders(
      <Card.Content data-testid="content">Body</Card.Content>,
    )
    expect(screen.getByTestId('content')).toHaveClass('flex-1')
  })
})

describe('Card.Footer', () => {
  it('renders children', () => {
    renderWithProviders(<Card.Footer>Footer</Card.Footer>)
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Card.Footer className="custom" data-testid="footer">
        Footer
      </Card.Footer>,
    )
    expect(screen.getByTestId('footer')).toHaveClass('custom')
  })
})

describe('Card compound', () => {
  it('renders Header, Content, and Footer together', () => {
    renderWithProviders(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Content>Body</Card.Content>
        <Card.Footer>Footer</Card.Footer>
      </Card>,
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})
