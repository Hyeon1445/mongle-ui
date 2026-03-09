import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Grid } from './Grid'

describe('Grid', () => {
  it('renders children', () => {
    renderWithProviders(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('applies grid and 1 column by default', () => {
    renderWithProviders(<Grid data-testid="grid">content</Grid>)
    const el = screen.getByTestId('grid')
    expect(el).toHaveClass('grid', 'grid-cols-1')
  })

  it('applies custom columns', () => {
    renderWithProviders(
      <Grid columns={3} data-testid="grid">
        content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('grid-cols-3')
  })

  it('applies default gap (gap-4)', () => {
    renderWithProviders(<Grid data-testid="grid">content</Grid>)
    expect(screen.getByTestId('grid')).toHaveClass('gap-4')
  })

  it('applies custom gap', () => {
    renderWithProviders(
      <Grid gap={8} data-testid="grid">
        content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('gap-8')
  })

  it('applies align classes', () => {
    renderWithProviders(
      <Grid align="center" data-testid="grid">
        content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('items-center')
  })

  it('applies justify classes', () => {
    renderWithProviders(
      <Grid justify="center" data-testid="grid">
        content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('justify-items-center')
  })

  it('renders as different HTML element with as prop', () => {
    renderWithProviders(
      <Grid as="section" data-testid="grid">
        content
      </Grid>
    )
    expect(screen.getByTestId('grid').tagName).toBe('SECTION')
  })

  it('renders as div by default', () => {
    renderWithProviders(<Grid data-testid="grid">content</Grid>)
    expect(screen.getByTestId('grid').tagName).toBe('DIV')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Grid className="p-4" data-testid="grid">
        content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('p-4')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    renderWithProviders(<Grid ref={ref}>content</Grid>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <Grid data-testid="grid" id="my-grid">
        content
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveAttribute('id', 'my-grid')
  })
})
