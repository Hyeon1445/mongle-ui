import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Divider } from './Divider'

describe('Divider', () => {
  it('renders as hr by default', () => {
    renderWithProviders(<Divider data-testid="divider" />)
    const el = screen.getByTestId('divider')
    expect(el.tagName).toBe('HR')
    expect(el).toHaveAttribute('role', 'separator')
  })

  it('applies horizontal styles by default', () => {
    renderWithProviders(<Divider data-testid="divider" />)
    const el = screen.getByTestId('divider')
    expect(el).toHaveClass('w-full', 'border-t')
  })

  it('applies default color (border-gray-200)', () => {
    renderWithProviders(<Divider data-testid="divider" />)
    expect(screen.getByTestId('divider')).toHaveClass('border-gray-200')
  })

  it('applies light color', () => {
    renderWithProviders(<Divider color="light" data-testid="divider" />)
    expect(screen.getByTestId('divider')).toHaveClass('border-gray-100')
  })

  it('applies strong color', () => {
    renderWithProviders(<Divider color="strong" data-testid="divider" />)
    expect(screen.getByTestId('divider')).toHaveClass('border-gray-300')
  })

  it('renders vertical orientation', () => {
    renderWithProviders(
      <Divider orientation="vertical" data-testid="divider" />,
    )
    const el = screen.getByTestId('divider')
    expect(el).toHaveClass('border-l', 'border-t-0')
    expect(el).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('renders label text', () => {
    renderWithProviders(<Divider label="OR" />)
    expect(screen.getByText('OR')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    renderWithProviders(<Divider className="my-8" data-testid="divider" />)
    expect(screen.getByTestId('divider')).toHaveClass('my-8')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLHRElement>()
    renderWithProviders(<Divider ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLHRElement)
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(<Divider data-testid="divider" id="my-divider" />)
    expect(screen.getByTestId('divider')).toHaveAttribute('id', 'my-divider')
  })
})
