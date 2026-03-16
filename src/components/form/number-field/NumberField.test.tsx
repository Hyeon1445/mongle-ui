import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { renderWithProviders, screen, userEvent } from '@/test/utils'

import { NumberField } from './NumberField'

describe('NumberField', () => {
  it('renders number input', () => {
    renderWithProviders(<NumberField />)
    const input = document.querySelector('input[type="number"]')
    expect(input).toBeInTheDocument()
  })

  it('renders decrement and increment buttons', () => {
    renderWithProviders(<NumberField />)
    expect(screen.getByRole('button', { name: /decrease/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /increase/i })).toBeInTheDocument()
  })

  it('renders label', () => {
    renderWithProviders(<NumberField label="Quantity" />)
    expect(screen.getByText('Quantity')).toBeInTheDocument()
  })

  it('renders description when no error', () => {
    renderWithProviders(<NumberField description="Enter a number" />)
    expect(screen.getByText('Enter a number')).toBeInTheDocument()
  })

  it('renders error instead of description', () => {
    renderWithProviders(
      <NumberField
        description="Enter a number"
        error="Value is required"
      />,
    )
    expect(screen.getByText('Value is required')).toBeInTheDocument()
    expect(screen.queryByText('Enter a number')).not.toBeInTheDocument()
  })

  it('sets aria-invalid when error is provided', () => {
    renderWithProviders(<NumberField error="Invalid" />)
    const input = document.querySelector('input[type="number"]')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('is disabled when disabled prop is true', () => {
    renderWithProviders(<NumberField disabled />)
    const input = document.querySelector('input[type="number"]')
    expect(input).toBeDisabled()
    expect(screen.getByRole('button', { name: /decrease/i })).toBeDisabled()
    expect(screen.getByRole('button', { name: /increase/i })).toBeDisabled()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>()
    renderWithProviders(<NumberField ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('passes min, max, step to input', () => {
    renderWithProviders(<NumberField min={0} max={100} step={5} />)
    const input = document.querySelector('input[type="number"]')
    expect(input).toHaveAttribute('min', '0')
    expect(input).toHaveAttribute('max', '100')
    expect(input).toHaveAttribute('step', '5')
  })

  it('handles change events when typing', async () => {
    const onChange = vi.fn()
    renderWithProviders(<NumberField onChange={onChange} />)
    const input = document.querySelector('input[type="number"]')!
    await userEvent.type(input, '5')
    expect(onChange).toHaveBeenCalled()
  })
})
