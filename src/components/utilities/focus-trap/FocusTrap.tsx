import { useEffect, useRef, useCallback } from 'react'

export interface FocusTrapProps {
  /** 자식 요소 */
  children: React.ReactElement
  /** 포커스 트랩 활성화 여부 */
  active?: boolean
  /** 마운트 시 첫 번째 포커스 가능 요소에 자동 포커스 */
  autoFocus?: boolean
  /** 비활성화 시 이전 포커스 요소로 복원 */
  restoreFocus?: boolean
}

const FOCUSABLE_SELECTOR: string =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export const FocusTrap = ({
  children,
  active = true,
  autoFocus = true,
  restoreFocus = true,
}: FocusTrapProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<Element | null>(null)

  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!containerRef.current) return []
    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    )
  }, [])

  useEffect(() => {
    if (!active) return

    if (restoreFocus) {
      previousFocusRef.current = document.activeElement
    }

    if (autoFocus) {
      const focusableElements: HTMLElement[] = getFocusableElements()
      if (focusableElements.length > 0) {
        focusableElements[0].focus()
      }
    }

    return () => {
      if (restoreFocus && previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus()
      }
    }
  }, [active, autoFocus, restoreFocus, getFocusableElements])

  useEffect(() => {
    if (!active) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      const focusableElements: HTMLElement[] = getFocusableElements()
      if (focusableElements.length === 0) return

      const firstElement: HTMLElement = focusableElements[0]
      const lastElement: HTMLElement =
        focusableElements[focusableElements.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [active, getFocusableElements])

  if (!active) {
    return children
  }

  return <div ref={containerRef}>{children}</div>
}

FocusTrap.displayName = 'FocusTrap'
