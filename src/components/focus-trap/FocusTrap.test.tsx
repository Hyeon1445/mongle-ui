import { describe, expect, it, vi } from 'vitest'

import { renderWithProviders, screen, userEvent } from '@/test/utils'

import { FocusTrap } from './FocusTrap'

describe('FocusTrap', () => {
  it('renders children', () => {
    renderWithProviders(
      <FocusTrap>
        <div>
          <button>Click me</button>
        </div>
      </FocusTrap>,
    )
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('auto-focuses the first focusable element on mount', () => {
    renderWithProviders(
      <FocusTrap>
        <div>
          <button>First</button>
          <button>Second</button>
        </div>
      </FocusTrap>,
    )
    expect(screen.getByText('First')).toHaveFocus()
  })

  it('does not auto-focus when autoFocus is false', () => {
    renderWithProviders(
      <FocusTrap autoFocus={false}>
        <div>
          <button>First</button>
        </div>
      </FocusTrap>,
    )
    expect(screen.getByText('First')).not.toHaveFocus()
  })

  it('wraps focus from last to first element on Tab', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <FocusTrap>
        <div>
          <button>First</button>
          <button>Second</button>
        </div>
      </FocusTrap>,
    )

    const secondButton: HTMLElement = screen.getByText('Second')
    secondButton.focus()
    await user.tab()

    expect(screen.getByText('First')).toHaveFocus()
  })

  it('wraps focus from first to last element on Shift+Tab', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <FocusTrap>
        <div>
          <button>First</button>
          <button>Second</button>
        </div>
      </FocusTrap>,
    )

    const firstButton: HTMLElement = screen.getByText('First')
    firstButton.focus()
    await user.tab({ shift: true })

    expect(screen.getByText('Second')).toHaveFocus()
  })

  it('renders children directly when active is false', () => {
    renderWithProviders(
      <FocusTrap active={false}>
        <div data-testid="child">Content</div>
      </FocusTrap>,
    )
    const child: HTMLElement = screen.getByTestId('child')
    expect(child.parentElement).not.toHaveAttribute('ref')
    expect(child.closest('[ref]')).toBeNull()
  })

  it('restores focus to previously focused element on unmount', () => {
    const outerButton: HTMLButtonElement = document.createElement('button')
    outerButton.textContent = 'Outer'
    document.body.appendChild(outerButton)
    outerButton.focus()

    const { unmount } = renderWithProviders(
      <FocusTrap>
        <div>
          <button>Inner</button>
        </div>
      </FocusTrap>,
    )

    expect(screen.getByText('Inner')).toHaveFocus()
    unmount()
    expect(outerButton).toHaveFocus()

    document.body.removeChild(outerButton)
  })

  it('does not restore focus when restoreFocus is false', () => {
    const outerButton: HTMLButtonElement = document.createElement('button')
    outerButton.textContent = 'Outer'
    document.body.appendChild(outerButton)
    outerButton.focus()

    const { unmount } = renderWithProviders(
      <FocusTrap restoreFocus={false}>
        <div>
          <button>Inner</button>
        </div>
      </FocusTrap>,
    )

    unmount()
    expect(outerButton).not.toHaveFocus()

    document.body.removeChild(outerButton)
  })

  it('skips disabled elements when trapping focus', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <FocusTrap>
        <div>
          <button>First</button>
          <button disabled>Disabled</button>
          <button>Last</button>
        </div>
      </FocusTrap>,
    )

    const lastButton: HTMLElement = screen.getByText('Last')
    lastButton.focus()
    await user.tab()

    expect(screen.getByText('First')).toHaveFocus()
  })

  it('does not trap focus when active is false', async () => {
    const handleKeyDown = vi.fn()
    renderWithProviders(
      <div onKeyDown={handleKeyDown}>
        <FocusTrap active={false}>
          <div>
            <button>First</button>
            <button>Second</button>
          </div>
        </FocusTrap>
      </div>,
    )

    expect(screen.getByText('First')).not.toHaveFocus()
  })
})
