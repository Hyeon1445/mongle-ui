import { Heart, X } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'

import { renderWithProviders, screen, userEvent } from '@/test/utils'

import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('renders the icon', () => {
    renderWithProviders(<IconButton icon={Heart} aria-label="Like" />)
    expect(screen.getByRole('button', { name: 'Like' })).toBeInTheDocument()
  })

  it('applies aria-label for accessibility', () => {
    renderWithProviders(<IconButton icon={X} aria-label="Close" />)
    const button: HTMLElement = screen.getByRole('button')
    expect(button).toHaveAccessibleName('Close')
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    renderWithProviders(
      <IconButton icon={Heart} aria-label="Like" onClick={handleClick} />,
    )
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    renderWithProviders(
      <IconButton icon={Heart} aria-label="Like" disabled />,
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is disabled when isLoading is true', () => {
    renderWithProviders(
      <IconButton icon={Heart} aria-label="Like" isLoading />,
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('shows spinner when loading', () => {
    renderWithProviders(
      <IconButton icon={Heart} aria-label="Like" isLoading />,
    )
    const button: HTMLElement = screen.getByRole('button')
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    renderWithProviders(
      <IconButton icon={Heart} aria-label="Like" variant="solid" />,
    )
    const button: HTMLElement = screen.getByRole('button')
    expect(button.className).toContain('bg-primary-500')
  })

  it('applies size classes', () => {
    renderWithProviders(
      <IconButton icon={Heart} aria-label="Like" size="sm" />,
    )
    const button: HTMLElement = screen.getByRole('button')
    expect(button.className).toContain('h-8')
    expect(button.className).toContain('w-8')
  })

  it('applies color classes', () => {
    renderWithProviders(
      <IconButton
        icon={Heart}
        aria-label="Like"
        variant="solid"
        color="error"
      />,
    )
    const button: HTMLElement = screen.getByRole('button')
    expect(button.className).toContain('bg-error-500')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <IconButton icon={Heart} aria-label="Like" className="custom-class" />,
    )
    const button: HTMLElement = screen.getByRole('button')
    expect(button.className).toContain('custom-class')
  })

  it('defaults to ghost variant', () => {
    renderWithProviders(<IconButton icon={Heart} aria-label="Like" />)
    const button: HTMLElement = screen.getByRole('button')
    expect(button.className).toContain('text-primary-600')
    expect(button.className).not.toContain('bg-primary-500')
  })
})
