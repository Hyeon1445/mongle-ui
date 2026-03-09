import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Typography } from './Typography'

describe('Typography', () => {
  it('renders children', () => {
    renderWithProviders(<Typography>Hello</Typography>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders as p element by default (body1)', () => {
    renderWithProviders(<Typography>Text</Typography>)
    expect(screen.getByText('Text').tagName).toBe('P')
  })

  it('renders correct default element for each variant', () => {
    const variantTagMap: Record<string, string> = {
      heading1: 'H1',
      heading2: 'H2',
      heading3: 'H3',
      heading4: 'H4',
      subtitle1: 'H5',
      subtitle2: 'H6',
      body1: 'P',
      body2: 'P',
      caption: 'SPAN',
      overline: 'SPAN',
    }

    Object.entries(variantTagMap).forEach(([variant, tag]) => {
      const { unmount } = renderWithProviders(
        <Typography variant={variant as never}>{variant}</Typography>
      )
      expect(screen.getByText(variant).tagName).toBe(tag)
      unmount()
    })
  })

  it('overrides element with as prop', () => {
    renderWithProviders(
      <Typography variant="heading1" as="p">
        Heading as paragraph
      </Typography>
    )
    expect(screen.getByText('Heading as paragraph').tagName).toBe('P')
  })

  it('applies variant classes', () => {
    renderWithProviders(
      <Typography variant="heading1">Heading</Typography>
    )
    const el = screen.getByText('Heading')
    expect(el).toHaveClass('text-5xl', 'font-bold')
  })

  it('applies default color class', () => {
    renderWithProviders(<Typography>Text</Typography>)
    expect(screen.getByText('Text')).toHaveClass('text-gray-900')
  })

  it('applies custom color class', () => {
    renderWithProviders(
      <Typography color="primary">Primary</Typography>
    )
    expect(screen.getByText('Primary')).toHaveClass('text-primary-600')
  })

  it('applies ellipsis class', () => {
    renderWithProviders(<Typography ellipsis>Ellipsis</Typography>)
    expect(screen.getByText('Ellipsis')).toHaveClass('truncate')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Typography className="mt-4">Styled</Typography>
    )
    expect(screen.getByText('Styled')).toHaveClass('mt-4')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLParagraphElement>()
    renderWithProviders(<Typography ref={ref}>Ref</Typography>)
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <Typography data-testid="custom" id="my-text">
        Custom
      </Typography>
    )
    expect(screen.getByTestId('custom')).toBeInTheDocument()
    expect(screen.getByText('Custom')).toHaveAttribute('id', 'my-text')
  })

  it('applies overline specific classes', () => {
    renderWithProviders(
      <Typography variant="overline">Overline</Typography>
    )
    const el = screen.getByText('Overline')
    expect(el).toHaveClass('uppercase', 'tracking-wider')
  })
})
