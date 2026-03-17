import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { renderWithProviders, screen, userEvent } from '@/test/utils'

import { TextField } from './TextField'

describe('TextField', () => {
  it('renders input', () => {
    renderWithProviders(<TextField />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders label and associates it with input', () => {
    renderWithProviders(<TextField label="Email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders description when no error', () => {
    renderWithProviders(
      <TextField description="Enter your email" />,
    )
    expect(screen.getByText('Enter your email')).toBeInTheDocument()
  })

  it('renders error message instead of description', () => {
    renderWithProviders(
      <TextField
        description="Enter your email"
        error="Invalid email"
      />,
    )
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
    expect(screen.queryByText('Enter your email')).not.toBeInTheDocument()
  })

  it('sets aria-invalid when error is provided', () => {
    renderWithProviders(<TextField error="Required" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not set aria-invalid without error', () => {
    renderWithProviders(<TextField />)
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid')
  })

  it('associates input with error via aria-describedby', () => {
    renderWithProviders(<TextField error="Required" />)
    const input = screen.getByRole('textbox')
    const errorEl = screen.getByText('Required')
    expect(input.getAttribute('aria-describedby')).toBe(errorEl.id)
  })

  it('associates input with description via aria-describedby', () => {
    renderWithProviders(<TextField description="Help text" />)
    const input = screen.getByRole('textbox')
    const descEl = screen.getByText('Help text')
    expect(input.getAttribute('aria-describedby')).toBe(descEl.id)
  })

  it('is disabled when disabled prop is true', () => {
    renderWithProviders(<TextField disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('handles change events', async () => {
    const onChange = vi.fn()
    renderWithProviders(<TextField onChange={onChange} />)
    await userEvent.type(screen.getByRole('textbox'), 'hello')
    expect(onChange).toHaveBeenCalled()
  })

  it('renders leftElement', () => {
    renderWithProviders(
      <TextField leftElement={<span data-testid="left">@</span>} />,
    )
    expect(screen.getByTestId('left')).toBeInTheDocument()
  })

  it('renders rightElement', () => {
    renderWithProviders(
      <TextField rightElement={<span data-testid="right">$</span>} />,
    )
    expect(screen.getByTestId('right')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>()
    renderWithProviders(<TextField ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <TextField data-testid="custom-input" placeholder="Type here" />,
    )
    expect(screen.getByTestId('custom-input')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
  })
})
