import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children', () => {
    renderWithProviders(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('renders as a span element', () => {
    renderWithProviders(<Badge data-testid="badge">New</Badge>)
    expect(screen.getByTestId('badge').tagName).toBe('SPAN')
  })

  it('applies default variant (soft) and color (primary)', () => {
    renderWithProviders(<Badge data-testid="badge">New</Badge>)
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveClass('bg-primary-50')
    expect(badge).toHaveClass('text-primary-700')
  })

  it('applies solid variant classes', () => {
    renderWithProviders(
      <Badge data-testid="badge" variant="solid" color="error">
        Error
      </Badge>,
    )
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveClass('bg-error-500')
    expect(badge).toHaveClass('text-white')
  })

  it('applies outline variant classes', () => {
    renderWithProviders(
      <Badge data-testid="badge" variant="outline" color="success">
        Done
      </Badge>,
    )
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveClass('border-success-500')
    expect(badge).toHaveClass('text-success-600')
  })

  it('applies size classes', () => {
    renderWithProviders(
      <Badge data-testid="badge" size="sm">
        SM
      </Badge>,
    )
    expect(screen.getByTestId('badge')).toHaveClass('h-5')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Badge data-testid="badge" className="ml-2">
        New
      </Badge>,
    )
    expect(screen.getByTestId('badge')).toHaveClass('ml-2')
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <Badge data-testid="badge" aria-label="new badge">
        New
      </Badge>,
    )
    expect(screen.getByTestId('badge')).toHaveAttribute(
      'aria-label',
      'new badge',
    )
  })
})
