import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with status role', () => {
    renderWithProviders(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has default aria-label', () => {
    renderWithProviders(<Spinner />)
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', '로딩 중')
  })

  it('applies custom aria-label', () => {
    renderWithProviders(<Spinner aria-label="데이터 불러오는 중" />)
    expect(screen.getByRole('status')).toHaveAttribute(
      'aria-label',
      '데이터 불러오는 중',
    )
  })

  it('applies default size (md)', () => {
    renderWithProviders(<Spinner data-testid="spinner" />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveClass('h-6')
    expect(spinner).toHaveClass('w-6')
  })

  it('applies sm size classes', () => {
    renderWithProviders(<Spinner data-testid="spinner" size="sm" />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveClass('h-4')
    expect(spinner).toHaveClass('w-4')
  })

  it('applies lg size classes', () => {
    renderWithProviders(<Spinner data-testid="spinner" size="lg" />)
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveClass('h-8')
    expect(spinner).toHaveClass('w-8')
  })

  it('applies default color (primary)', () => {
    renderWithProviders(<Spinner data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass('text-primary-500')
  })

  it('applies custom color', () => {
    renderWithProviders(<Spinner data-testid="spinner" color="error" />)
    expect(screen.getByTestId('spinner')).toHaveClass('text-error-500')
  })

  it('has spin animation', () => {
    renderWithProviders(<Spinner data-testid="spinner" />)
    expect(screen.getByTestId('spinner')).toHaveClass('animate-spin')
  })

  it('merges custom className', () => {
    renderWithProviders(<Spinner data-testid="spinner" className="ml-2" />)
    expect(screen.getByTestId('spinner')).toHaveClass('ml-2')
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(<Spinner data-testid="spinner" aria-hidden="true" />)
    expect(screen.getByTestId('spinner')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })
})
