import { Heart } from 'lucide-react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Icon } from './Icon'

describe('Icon', () => {
  it('renders the lucide icon', () => {
    renderWithProviders(<Icon icon={Heart} data-testid="icon" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('is decorative by default (aria-hidden)', () => {
    renderWithProviders(<Icon icon={Heart} data-testid="icon" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).not.toHaveAttribute('role')
  })

  it('has img role and aria-label when label is provided', () => {
    renderWithProviders(<Icon icon={Heart} label="좋아요" />)
    const icon = screen.getByRole('img')
    expect(icon).toHaveAttribute('aria-label', '좋아요')
    expect(icon).toHaveAttribute('aria-hidden', 'false')
  })

  it('applies default size (md)', () => {
    renderWithProviders(<Icon icon={Heart} data-testid="icon" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveClass('h-5')
    expect(icon).toHaveClass('w-5')
  })

  it('applies sm size classes', () => {
    renderWithProviders(<Icon icon={Heart} data-testid="icon" size="sm" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveClass('h-4')
    expect(icon).toHaveClass('w-4')
  })

  it('applies lg size classes', () => {
    renderWithProviders(<Icon icon={Heart} data-testid="icon" size="lg" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveClass('h-6')
    expect(icon).toHaveClass('w-6')
  })

  it('does not apply color class by default', () => {
    renderWithProviders(<Icon icon={Heart} data-testid="icon" />)
    const icon = screen.getByTestId('icon')
    expect(icon).not.toHaveClass('text-primary-500')
  })

  it('applies color class when specified', () => {
    renderWithProviders(
      <Icon icon={Heart} data-testid="icon" color="primary" />,
    )
    expect(screen.getByTestId('icon')).toHaveClass('text-primary-500')
  })

  it('applies error color', () => {
    renderWithProviders(
      <Icon icon={Heart} data-testid="icon" color="error" />,
    )
    expect(screen.getByTestId('icon')).toHaveClass('text-error-500')
  })

  it('applies muted color', () => {
    renderWithProviders(
      <Icon icon={Heart} data-testid="icon" color="muted" />,
    )
    expect(screen.getByTestId('icon')).toHaveClass('text-neutral-400')
  })

  it('applies numeric size as inline style', () => {
    renderWithProviders(
      <Icon icon={Heart} data-testid="icon" size={28} />,
    )
    const icon = screen.getByTestId('icon')
    expect(icon.style.width).toBe('28px')
    expect(icon.style.height).toBe('28px')
    expect(icon).not.toHaveClass('h-5')
  })

  it('merges style with numeric size', () => {
    renderWithProviders(
      <Icon icon={Heart} data-testid="icon" size={32} style={{ opacity: 0.5 }} />,
    )
    const icon = screen.getByTestId('icon')
    expect(icon.style.width).toBe('32px')
    expect(icon.style.opacity).toBe('0.5')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <Icon icon={Heart} data-testid="icon" className="ml-2" />,
    )
    expect(screen.getByTestId('icon')).toHaveClass('ml-2')
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <Icon icon={Heart} data-testid="icon" data-custom="test" />,
    )
    expect(screen.getByTestId('icon')).toHaveAttribute('data-custom', 'test')
  })
})
