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

  it('applies default padding', () => {
    renderWithProviders(<Card data-testid="card">Content</Card>)
    expect(screen.getByTestId('card')).toHaveClass('p-6')
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
