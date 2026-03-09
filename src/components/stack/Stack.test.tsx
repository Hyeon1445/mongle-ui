import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Stack } from './Stack'

describe('Stack', () => {
  it('renders children', () => {
    renderWithProviders(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('applies flex and vertical direction by default', () => {
    renderWithProviders(<Stack data-testid="stack">content</Stack>)
    const el = screen.getByTestId('stack')
    expect(el).toHaveClass('flex', 'flex-col')
  })

  it('applies horizontal direction', () => {
    renderWithProviders(
      <Stack direction="horizontal" data-testid="stack">
        content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('flex-row')
  })

  it('applies default gap (gap-4)', () => {
    renderWithProviders(<Stack data-testid="stack">content</Stack>)
    expect(screen.getByTestId('stack')).toHaveClass('gap-4')
  })

  it('applies custom gap', () => {
    renderWithProviders(
      <Stack gap={8} data-testid="stack">
        content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('gap-8')
  })

  it('applies align classes', () => {
    renderWithProviders(
      <Stack align="center" data-testid="stack">
        content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('items-center')
  })

  it('applies justify classes', () => {
    renderWithProviders(
      <Stack justify="between" data-testid="stack">
        content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('justify-between')
  })

  it('applies flex-wrap when wrap is true', () => {
    renderWithProviders(
      <Stack wrap data-testid="stack">
        content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('flex-wrap')
  })

  it('does not apply flex-wrap by default', () => {
    renderWithProviders(<Stack data-testid="stack">content</Stack>)
    expect(screen.getByTestId('stack')).not.toHaveClass('flex-wrap')
  })

  it('renders as different HTML element with as prop', () => {
    renderWithProviders(
      <Stack as="section" data-testid="stack">
        content
      </Stack>
    )
    expect(screen.getByTestId('stack').tagName).toBe('SECTION')
  })

  it('renders as div by default', () => {
    renderWithProviders(<Stack data-testid="stack">content</Stack>)
    expect(screen.getByTestId('stack').tagName).toBe('DIV')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Stack className="p-4" data-testid="stack">
        content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveClass('p-4')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    renderWithProviders(<Stack ref={ref}>content</Stack>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <Stack data-testid="stack" id="my-stack">
        content
      </Stack>
    )
    expect(screen.getByTestId('stack')).toHaveAttribute('id', 'my-stack')
  })
})
