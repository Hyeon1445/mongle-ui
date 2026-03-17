import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { renderWithProviders, screen, userEvent } from '@/test/utils'

import { PasswordField } from './PasswordField'

describe('PasswordField', () => {
  it('renders password input by default', () => {
    renderWithProviders(<PasswordField />)
    expect(document.querySelector('input')).toHaveAttribute('type', 'password')
  })

  it('toggles to text type when show button is clicked', async () => {
    renderWithProviders(<PasswordField />)
    const toggle = screen.getByRole('button', { name: /show password/i })
    await userEvent.click(toggle)
    const input = document.querySelector('input')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('toggles back to password type on second click', async () => {
    renderWithProviders(<PasswordField />)
    const toggle = screen.getByRole('button', { name: /show password/i })
    await userEvent.click(toggle)
    await userEvent.click(screen.getByRole('button', { name: /hide password/i }))
    const input = document.querySelector('input')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders label', () => {
    renderWithProviders(<PasswordField label="Password" />)
    expect(screen.getByText('Password')).toBeInTheDocument()
  })

  it('renders description when no error', () => {
    renderWithProviders(<PasswordField description="At least 8 characters" />)
    expect(screen.getByText('At least 8 characters')).toBeInTheDocument()
  })

  it('renders error instead of description', () => {
    renderWithProviders(
      <PasswordField
        description="At least 8 characters"
        error="Password is too short"
      />,
    )
    expect(screen.getByText('Password is too short')).toBeInTheDocument()
    expect(
      screen.queryByText('At least 8 characters'),
    ).not.toBeInTheDocument()
  })

  it('sets aria-invalid when error is provided', () => {
    renderWithProviders(<PasswordField error="Required" />)
    const input = document.querySelector('input')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('is disabled when disabled prop is true', () => {
    renderWithProviders(<PasswordField disabled />)
    const input = document.querySelector('input')
    expect(input).toBeDisabled()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>()
    renderWithProviders(<PasswordField ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('handles change events', async () => {
    const onChange = vi.fn()
    renderWithProviders(<PasswordField onChange={onChange} />)
    const input = document.querySelector('input')!
    await userEvent.type(input, 'secret')
    expect(onChange).toHaveBeenCalled()
  })
})
