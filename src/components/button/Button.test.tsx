import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { renderWithProviders, screen, userEvent } from '@/test/utils'

import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    renderWithProviders(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('has type="button" by default', () => {
    renderWithProviders(<Button>Click</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('allows type override', () => {
    renderWithProviders(<Button type="submit">Submit</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('handles click events', async () => {
    const onClick = vi.fn()
    renderWithProviders(<Button onClick={onClick}>Click</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('is disabled when disabled prop is true', () => {
    renderWithProviders(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is disabled when isLoading is true', () => {
    renderWithProviders(<Button isLoading>Loading</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn()
    renderWithProviders(
      <Button disabled onClick={onClick}>
        Click
      </Button>
    )
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('shows spinner when isLoading', () => {
    renderWithProviders(<Button isLoading>Loading</Button>)
    const svg = screen.getByRole('button').querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('animate-spin')
  })

  it('renders left icon', () => {
    renderWithProviders(
      <Button leftIcon={<span data-testid="left-icon">L</span>}>
        Text
      </Button>
    )
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
  })

  it('renders right icon', () => {
    renderWithProviders(
      <Button rightIcon={<span data-testid="right-icon">R</span>}>
        Text
      </Button>
    )
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
  })

  it('hides icons when isLoading', () => {
    renderWithProviders(
      <Button
        isLoading
        leftIcon={<span data-testid="left-icon">L</span>}
        rightIcon={<span data-testid="right-icon">R</span>}
      >
        Loading
      </Button>
    )
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument()
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument()
  })

  it('applies fullWidth class', () => {
    renderWithProviders(<Button fullWidth>Full</Button>)
    expect(screen.getByRole('button')).toHaveClass('w-full')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLButtonElement>()
    renderWithProviders(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(
      <Button data-testid="custom" aria-label="custom button">
        Custom
      </Button>
    )
    expect(screen.getByTestId('custom')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'custom button'
    )
  })
})
