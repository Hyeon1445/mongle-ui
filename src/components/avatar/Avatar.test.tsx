import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders as a span element', () => {
    renderWithProviders(<Avatar data-testid="avatar" />)
    expect(screen.getByTestId('avatar').tagName).toBe('SPAN')
  })

  it('renders fallback icon when no src or name provided', () => {
    renderWithProviders(<Avatar data-testid="avatar" />)
    const svg = screen.getByTestId('avatar').querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders initials from name', () => {
    renderWithProviders(<Avatar name="몽글이" />)
    expect(screen.getByText('몽글')).toBeInTheDocument()
  })

  it('renders two-letter initials from full name', () => {
    renderWithProviders(<Avatar name="John Doe" />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('renders image when src is provided', () => {
    renderWithProviders(<Avatar data-testid="avatar" src="/avatar.png" alt="user" />)
    const img = screen.getByTestId('avatar').querySelector('img')
    expect(img).toHaveAttribute('src', '/avatar.png')
    expect(img).toHaveAttribute('alt', 'user')
  })

  it('renders children over initials', () => {
    renderWithProviders(<Avatar name="John">🐻</Avatar>)
    expect(screen.getByText('🐻')).toBeInTheDocument()
    expect(screen.queryByText('JO')).not.toBeInTheDocument()
  })

  it('applies size classes', () => {
    renderWithProviders(<Avatar data-testid="avatar" size="lg" />)
    expect(screen.getByTestId('avatar')).toHaveClass('h-12', 'w-12')
  })

  it('applies color classes when showing initials', () => {
    renderWithProviders(<Avatar data-testid="avatar" name="A" color="secondary" />)
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('bg-secondary-100')
    expect(avatar).toHaveClass('text-secondary-700')
  })

  it('sets aria-label from alt', () => {
    renderWithProviders(<Avatar alt="user avatar" />)
    expect(screen.getByLabelText('user avatar')).toBeInTheDocument()
  })

  it('sets aria-label from name when alt is empty', () => {
    renderWithProviders(<Avatar name="몽글" />)
    expect(screen.getByLabelText('몽글')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    renderWithProviders(<Avatar data-testid="avatar" className="ml-2" />)
    expect(screen.getByTestId('avatar')).toHaveClass('ml-2')
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(<Avatar data-testid="avatar" id="my-avatar" />)
    expect(screen.getByTestId('avatar')).toHaveAttribute('id', 'my-avatar')
  })
})
