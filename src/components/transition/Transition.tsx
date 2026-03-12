import React, { useEffect, useState } from 'react'

export type TransitionType = 'fade' | 'collapse' | 'zoom' | 'slide' | 'grow'

export type TransitionDirection = 'up' | 'down' | 'left' | 'right'

export type TransitionStatus =
  | 'entered'
  | 'entering'
  | 'exited'
  | 'exiting'

export interface TransitionProps {
  /** 표시 여부 */
  in: boolean
  /** 트랜지션 효과 타입 */
  type?: TransitionType
  /** 전환 시간 (ms) */
  timeout?: number
  /** slide 트랜지션의 방향 */
  direction?: TransitionDirection
  /** grow 트랜지션의 변환 기준점 */
  transformOrigin?: string
  /** 퇴장 완료 시 자식 언마운트 */
  unmountOnExit?: boolean
  /** 첫 진입 시에만 마운트 */
  mountOnEnter?: boolean
  /** 진입 트랜지션 시작 시 호출 */
  onEnter?: () => void
  /** 진입 트랜지션 완료 시 호출 */
  onEntered?: () => void
  /** 퇴장 트랜지션 시작 시 호출 */
  onExit?: () => void
  /** 퇴장 트랜지션 완료 시 호출 */
  onExited?: () => void
  /** 트랜지션을 적용할 자식 요소 */
  children: React.ReactElement
}

const SLIDE_TRANSFORMS: Record<TransitionDirection, string> = {
  up: 'translateY(20px)',
  down: 'translateY(-20px)',
  left: 'translateX(20px)',
  right: 'translateX(-20px)',
}

interface TransitionStyles {
  entering: React.CSSProperties
  entered: React.CSSProperties
  exiting: React.CSSProperties
  exited: React.CSSProperties
}

const getTransitionStyles = (
  type: TransitionType,
  timeout: number,
  direction: TransitionDirection,
  transformOrigin: string,
): TransitionStyles => {
  const transition = `all ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1)`

  const styles: Record<TransitionType, TransitionStyles> = {
    fade: {
      entering: { opacity: 1, transition },
      entered: { opacity: 1 },
      exiting: { opacity: 0, transition },
      exited: { opacity: 0 },
    },
    collapse: {
      entering: { overflow: 'hidden', transition },
      entered: { overflow: 'visible' },
      exiting: { overflow: 'hidden', transition },
      exited: { overflow: 'hidden', height: 0, opacity: 0 },
    },
    zoom: {
      entering: { opacity: 1, transform: 'scale(1)', transition },
      entered: { opacity: 1, transform: 'scale(1)' },
      exiting: { opacity: 0, transform: 'scale(0.75)', transition },
      exited: { opacity: 0, transform: 'scale(0.75)' },
    },
    slide: {
      entering: { opacity: 1, transform: 'translate(0)', transition },
      entered: { opacity: 1, transform: 'translate(0)' },
      exiting: {
        opacity: 0,
        transform: SLIDE_TRANSFORMS[direction],
        transition,
      },
      exited: {
        opacity: 0,
        transform: SLIDE_TRANSFORMS[direction],
      },
    },
    grow: {
      entering: {
        opacity: 1,
        transform: 'scale(1)',
        transformOrigin,
        transition,
      },
      entered: { opacity: 1, transform: 'scale(1)', transformOrigin },
      exiting: {
        opacity: 0,
        transform: 'scale(0)',
        transformOrigin,
        transition,
      },
      exited: { opacity: 0, transform: 'scale(0)', transformOrigin },
    },
  }

  return styles[type]
}

export const Transition = ({
  in: show,
  type = 'fade',
  timeout = 200,
  direction = 'up',
  transformOrigin = 'center center',
  unmountOnExit = false,
  mountOnEnter = false,
  onEnter,
  onEntered,
  onExit,
  onExited,
  children,
}: TransitionProps) => {
  const [status, setStatus] = useState<TransitionStatus>(
    show ? 'entered' : 'exited',
  )
  const [hasEntered, setHasEntered] = useState<boolean>(show)
  const [collapseHeight, setCollapseHeight] = useState<number | 'auto'>('auto')

  if (show && !hasEntered) {
    setHasEntered(true)
  }

  const mounted: boolean = mountOnEnter ? hasEntered : true

  const handleRef = (node: HTMLElement | null) => {
    if (node && type === 'collapse') {
      setCollapseHeight(node.scrollHeight)
    }

    const childRef = (children as unknown as { ref?: React.Ref<HTMLElement> }).ref
    if (typeof childRef === 'function') {
      childRef(node)
    }
  }

  useEffect(() => {
    if (show) {
      const enterFrame = requestAnimationFrame(() => {
        setStatus('entering')
        onEnter?.()
      })

      const timer = setTimeout(() => {
        setStatus('entered')
        onEntered?.()
      }, timeout)

      return () => {
        cancelAnimationFrame(enterFrame)
        clearTimeout(timer)
      }
    } else {
      const exitFrame = requestAnimationFrame(() => {
        setStatus('exiting')
        onExit?.()
      })

      const timer = setTimeout(() => {
        setStatus('exited')
        onExited?.()
      }, timeout)

      return () => {
        cancelAnimationFrame(exitFrame)
        clearTimeout(timer)
      }
    }
  }, [show, timeout, onEnter, onEntered, onExit, onExited])

  if (!mounted || (unmountOnExit && status === 'exited' && !show)) {
    return null
  }

  const transitionStyles: TransitionStyles = getTransitionStyles(
    type,
    timeout,
    direction,
    transformOrigin,
  )

  let style: React.CSSProperties = transitionStyles[status]

  if (type === 'collapse') {
    if (status === 'entering' || status === 'entered') {
      style = {
        ...style,
        height: status === 'entered' ? 'auto' : collapseHeight,
        opacity: 1,
      }
    } else {
      style = {
        ...style,
        height: 0,
        opacity: 0,
      }
    }
  }

  const child = children as React.ReactElement<
    React.HTMLAttributes<HTMLElement>
  >

  return React.cloneElement(child, {
    ref: handleRef,
    style: {
      ...style,
      ...child.props.style,
    },
    'data-transition-status': status,
  } as React.HTMLAttributes<HTMLElement>)
}

Transition.displayName = 'Transition'
