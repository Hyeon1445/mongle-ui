import { act } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { Transition } from './Transition'

describe('Transition', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders children when in is true', () => {
    renderWithProviders(
      <Transition in>
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  it('renders children when in is false (default no unmount)', () => {
    renderWithProviders(
      <Transition in={false}>
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  it('unmounts children when exited and unmountOnExit is true', () => {
    renderWithProviders(
      <Transition in={false} unmountOnExit>
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
  })

  it('does not mount children initially when mountOnEnter is true and in is false', () => {
    renderWithProviders(
      <Transition in={false} mountOnEnter>
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
  })

  it('sets data-transition-status to entered when in is true', () => {
    renderWithProviders(
      <Transition in>
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(screen.getByTestId('content')).toHaveAttribute(
      'data-transition-status',
      'entered',
    )
  })

  it('sets data-transition-status to exited when in is false', () => {
    renderWithProviders(
      <Transition in={false}>
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(screen.getByTestId('content')).toHaveAttribute(
      'data-transition-status',
      'exited',
    )
  })

  it('applies fade styles by default', () => {
    renderWithProviders(
      <Transition in={false}>
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(200)
    })

    const el = screen.getByTestId('content')
    expect(el.style.opacity).toBe('0')
  })

  it('applies zoom styles when type is zoom', () => {
    renderWithProviders(
      <Transition in={false} type="zoom">
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(200)
    })

    const el = screen.getByTestId('content')
    expect(el.style.transform).toBe('scale(0.75)')
    expect(el.style.opacity).toBe('0')
  })

  it('applies slide styles with direction', () => {
    renderWithProviders(
      <Transition in={false} type="slide" direction="left">
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(200)
    })

    const el = screen.getByTestId('content')
    expect(el.style.transform).toBe('translateX(20px)')
  })

  it('applies grow styles with transformOrigin', () => {
    renderWithProviders(
      <Transition in type="grow" transformOrigin="top left">
        <div data-testid="content">Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(200)
    })

    const el = screen.getByTestId('content')
    expect(el.style.transformOrigin).toBe('top left')
  })

  it('calls onEnter and onEntered callbacks', () => {
    const onEnter = vi.fn()
    const onEntered = vi.fn()

    renderWithProviders(
      <Transition in onEnter={onEnter} onEntered={onEntered}>
        <div>Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(0)
      // Trigger rAF
      vi.runAllTimers()
    })

    expect(onEnter).toHaveBeenCalled()
    expect(onEntered).toHaveBeenCalled()
  })

  it('calls onExit and onExited callbacks', () => {
    const onExit = vi.fn()
    const onExited = vi.fn()

    renderWithProviders(
      <Transition in={false} onExit={onExit} onExited={onExited}>
        <div>Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(onExit).toHaveBeenCalled()
    expect(onExited).toHaveBeenCalled()
  })

  it('uses custom timeout', () => {
    const onExited = vi.fn()

    renderWithProviders(
      <Transition in={false} timeout={500} onExited={onExited}>
        <div>Hello</div>
      </Transition>,
    )

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(onExited).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(300)
    })

    expect(onExited).toHaveBeenCalled()
  })

  it('preserves children style', () => {
    renderWithProviders(
      <Transition in>
        <div data-testid="content" style={{ color: 'red' }}>
          Hello
        </div>
      </Transition>,
    )

    const el = screen.getByTestId('content')
    expect(el.style.color).toBe('red')
  })
})
