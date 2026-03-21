import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Paper } from './Paper'

describe('Paper', () => {
  it('renders children', () => {
    renderWithProviders(<Paper data-testid="paper">Hello</Paper>)
    expect(screen.getByTestId('paper')).toHaveTextContent('Hello')
  })

  it('applies default elevation (shadow-sm)', () => {
    renderWithProviders(<Paper data-testid="paper">content</Paper>)
    expect(screen.getByTestId('paper')).toHaveClass('shadow-sm')
  })

  it('applies elevation 0 (no shadow)', () => {
    renderWithProviders(
      <Paper elevation={0} data-testid="paper">
        content
      </Paper>,
    )
    const el = screen.getByTestId('paper')
    expect(el).not.toHaveClass('shadow-sm')
    expect(el).not.toHaveClass('shadow-md')
    expect(el).not.toHaveClass('shadow-lg')
  })

  it('applies elevation 2', () => {
    renderWithProviders(
      <Paper elevation={2} data-testid="paper">
        content
      </Paper>,
    )
    expect(screen.getByTestId('paper')).toHaveClass('shadow-md')
  })

  it('applies elevation 3', () => {
    renderWithProviders(
      <Paper elevation={3} data-testid="paper">
        content
      </Paper>,
    )
    expect(screen.getByTestId('paper')).toHaveClass('shadow-lg')
  })

  it('applies default radius (rounded-xl)', () => {
    renderWithProviders(<Paper data-testid="paper">content</Paper>)
    expect(screen.getByTestId('paper')).toHaveClass('rounded-xl')
  })

  it('applies custom radius', () => {
    renderWithProviders(
      <Paper radius="lg" data-testid="paper">
        content
      </Paper>,
    )
    expect(screen.getByTestId('paper')).toHaveClass('rounded-lg')
  })

  it('applies border when bordered', () => {
    renderWithProviders(
      <Paper bordered data-testid="paper">
        content
      </Paper>,
    )
    expect(screen.getByTestId('paper')).toHaveClass(
      'border',
      'border-gray-200',
    )
  })

  it('does not apply border by default', () => {
    renderWithProviders(<Paper data-testid="paper">content</Paper>)
    expect(screen.getByTestId('paper')).not.toHaveClass('border')
  })

  it('has white background', () => {
    renderWithProviders(<Paper data-testid="paper">content</Paper>)
    expect(screen.getByTestId('paper')).toHaveClass('bg-white')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Paper className="p-6" data-testid="paper">
        content
      </Paper>,
    )
    expect(screen.getByTestId('paper')).toHaveClass('p-6')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    renderWithProviders(<Paper ref={ref}>content</Paper>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <Paper data-testid="paper" id="my-paper">
        content
      </Paper>,
    )
    expect(screen.getByTestId('paper')).toHaveAttribute('id', 'my-paper')
  })
})
