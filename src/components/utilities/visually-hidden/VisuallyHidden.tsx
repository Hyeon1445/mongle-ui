import React from 'react'

import { classNames } from '@/lib/classNames'

export interface VisuallyHiddenProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /** 자식 요소 */
  children: React.ReactNode
}

const hiddenStyles: string =
  'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 [clip:rect(0,0,0,0)]'

export const VisuallyHidden = React.memo(
  ({ children, className, ...rest }: VisuallyHiddenProps) => (
    <span className={classNames(hiddenStyles, className)} {...rest}>
      {children}
    </span>
  ),
)

VisuallyHidden.displayName = 'VisuallyHidden'
