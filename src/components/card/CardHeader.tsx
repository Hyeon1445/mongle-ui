import React from 'react'

import { classNames } from '@/lib/classNames'

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>
}

export const CardHeader = React.memo(
  ({ className, children, ref, ...rest }: CardHeaderProps) => (
    <div
      ref={ref}
      className={classNames('px-6 pt-6 pb-0', className)}
      {...rest}
    >
      {children}
    </div>
  ),
)

CardHeader.displayName = 'Card.Header'
