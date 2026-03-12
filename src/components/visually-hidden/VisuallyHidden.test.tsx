import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { VisuallyHidden } from './VisuallyHidden'

describe('VisuallyHidden', () => {
  it('renders children', () => {
    renderWithProviders(
      <VisuallyHidden data-testid="hidden">Hidden text</VisuallyHidden>,
    )

    expect(screen.getByTestId('hidden')).toHaveTextContent('Hidden text')
  })

  it('applies visually hidden styles', () => {
    renderWithProviders(
      <VisuallyHidden data-testid="hidden">Hidden text</VisuallyHidden>,
    )

    const el: HTMLElement = screen.getByTestId('hidden')
    expect(el).toHaveClass('absolute', 'w-px', 'h-px', 'overflow-hidden')
  })

  it('renders as a span element', () => {
    renderWithProviders(
      <VisuallyHidden data-testid="hidden">Hidden text</VisuallyHidden>,
    )

    const el: HTMLElement = screen.getByTestId('hidden')
    expect(el.tagName).toBe('SPAN')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <VisuallyHidden data-testid="hidden" className="custom-class">
        Hidden text
      </VisuallyHidden>,
    )

    const el: HTMLElement = screen.getByTestId('hidden')
    expect(el).toHaveClass('custom-class')
  })

  it('passes through additional HTML attributes', () => {
    renderWithProviders(
      <VisuallyHidden data-testid="hidden" id="sr-only" role="status">
        Loading
      </VisuallyHidden>,
    )

    const el: HTMLElement = screen.getByTestId('hidden')
    expect(el).toHaveAttribute('id', 'sr-only')
    expect(el).toHaveAttribute('role', 'status')
  })

  it('is accessible to screen readers', () => {
    renderWithProviders(
      <VisuallyHidden>Accessible label</VisuallyHidden>,
    )

    expect(screen.getByText('Accessible label')).toBeInTheDocument()
  })
})
