import { renderWithProviders, screen } from '@/test/utils'

import { Portal } from './Portal'

describe('Portal', () => {
  it('renders children into document.body by default', () => {
    const { container } = renderWithProviders(
      <Portal>
        <div data-testid="portal-content">Hello</div>
      </Portal>
    )

    expect(container.querySelector('[data-testid="portal-content"]')).toBeNull()
    expect(screen.getByTestId('portal-content')).toBeInTheDocument()
    expect(screen.getByTestId('portal-content').parentElement).toBe(
      document.body
    )
  })

  it('renders children into a custom container', () => {
    const customContainer: HTMLDivElement = document.createElement('div')
    document.body.appendChild(customContainer)

    renderWithProviders(
      <Portal container={customContainer}>
        <div data-testid="portal-content">Hello</div>
      </Portal>
    )

    expect(screen.getByTestId('portal-content').parentElement).toBe(
      customContainer
    )

    document.body.removeChild(customContainer)
  })

  it('renders children in place when disabled', () => {
    const { container } = renderWithProviders(
      <Portal disabled>
        <div data-testid="portal-content">Hello</div>
      </Portal>
    )

    expect(
      container.querySelector('[data-testid="portal-content"]')
    ).not.toBeNull()
  })

  it('renders children into document.body when container is null', () => {
    renderWithProviders(
      <Portal container={null}>
        <div data-testid="portal-content">Hello</div>
      </Portal>
    )

    expect(screen.getByTestId('portal-content').parentElement).toBe(
      document.body
    )
  })

  it('cleans up portal content on unmount', () => {
    const { unmount } = renderWithProviders(
      <Portal>
        <div data-testid="portal-content">Hello</div>
      </Portal>
    )

    expect(screen.getByTestId('portal-content')).toBeInTheDocument()

    unmount()

    expect(screen.queryByTestId('portal-content')).not.toBeInTheDocument()
  })
})
