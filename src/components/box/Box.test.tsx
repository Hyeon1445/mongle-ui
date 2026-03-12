import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Box } from './Box'

describe('Box', () => {
  it('renders children', () => {
    renderWithProviders(<Box data-testid="box">Hello</Box>)
    expect(screen.getByTestId('box')).toHaveTextContent('Hello')
  })

  it('renders as a div', () => {
    renderWithProviders(<Box data-testid="box">content</Box>)
    expect(screen.getByTestId('box').tagName).toBe('DIV')
  })

  it('applies padding', () => {
    renderWithProviders(
      <Box padding={4} data-testid="box">
        content
      </Box>,
    )
    expect(screen.getByTestId('box')).toHaveClass('p-4')
  })

  it('applies paddingX', () => {
    renderWithProviders(
      <Box paddingX={6} data-testid="box">
        content
      </Box>,
    )
    expect(screen.getByTestId('box')).toHaveClass('px-6')
  })

  it('applies paddingY', () => {
    renderWithProviders(
      <Box paddingY={3} data-testid="box">
        content
      </Box>,
    )
    expect(screen.getByTestId('box')).toHaveClass('py-3')
  })

  it('applies radius', () => {
    renderWithProviders(
      <Box radius="lg" data-testid="box">
        content
      </Box>,
    )
    expect(screen.getByTestId('box')).toHaveClass('rounded-lg')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Box className="bg-red-500" data-testid="box">
        content
      </Box>,
    )
    expect(screen.getByTestId('box')).toHaveClass('bg-red-500')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    renderWithProviders(<Box ref={ref}>content</Box>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <Box data-testid="box" id="my-box">
        content
      </Box>,
    )
    expect(screen.getByTestId('box')).toHaveAttribute('id', 'my-box')
  })

  it('renders without any props', () => {
    renderWithProviders(<Box data-testid="box">content</Box>)
    const el = screen.getByTestId('box')
    expect(el).toBeInTheDocument()
  })
})
