import { describe, expect, it } from 'vitest'

import { Avatar } from '@/components/avatar'
import { renderWithProviders, screen } from '@/test/utils'

import { AvatarGroup } from './AvatarGroup'

describe('AvatarGroup', () => {
  it('renders all children', () => {
    renderWithProviders(
      <AvatarGroup>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="C" />
      </AvatarGroup>,
    )
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  it('limits visible avatars with max prop', () => {
    renderWithProviders(
      <AvatarGroup max={2}>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="C" />
        <Avatar name="D" />
      </AvatarGroup>,
    )
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.queryByText('C')).not.toBeInTheDocument()
    expect(screen.queryByText('D')).not.toBeInTheDocument()
    expect(screen.getByText('+2')).toBeInTheDocument()
  })

  it('does not show excess indicator when max >= children count', () => {
    renderWithProviders(
      <AvatarGroup max={5}>
        <Avatar name="A" />
        <Avatar name="B" />
      </AvatarGroup>,
    )
    expect(screen.queryByText('+')).not.toBeInTheDocument()
  })

  it('passes size to children', () => {
    renderWithProviders(
      <AvatarGroup data-testid="group" size="lg">
        <Avatar data-testid="child" name="A" />
      </AvatarGroup>,
    )
    expect(screen.getByTestId('child')).toHaveClass('h-12', 'w-12')
  })

  it('has group role', () => {
    renderWithProviders(
      <AvatarGroup>
        <Avatar name="A" />
      </AvatarGroup>,
    )
    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  it('applies overlap spacing', () => {
    renderWithProviders(
      <AvatarGroup data-testid="group" size="md">
        <Avatar name="A" />
        <Avatar name="B" />
      </AvatarGroup>,
    )
    expect(screen.getByTestId('group')).toHaveClass('-space-x-3')
  })

  it('merges custom className', () => {
    renderWithProviders(
      <AvatarGroup data-testid="group" className="mt-4">
        <Avatar name="A" />
      </AvatarGroup>,
    )
    expect(screen.getByTestId('group')).toHaveClass('mt-4')
  })
})
