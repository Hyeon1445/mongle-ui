import React from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  /** Children to render through the portal */
  children: React.ReactNode
  /** Target DOM element (default: document.body) */
  container?: Element | null
  /** When true, renders children in place without portal */
  disabled?: boolean
}

export const Portal = ({
  children,
  container,
  disabled = false,
}: PortalProps) => {
  if (disabled) {
    return <>{children}</>
  }

  const target: Element = container ?? document.body

  return createPortal(children, target)
}

Portal.displayName = 'Portal'
