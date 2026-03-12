import React from 'react'

import { classNames } from '@/lib/classNames'

export type CardHeaderProps = React.ComponentPropsWithoutRef<'div'>

export const CardHeader = React.memo(
  ({ className, children, ...rest }: CardHeaderProps) => (
    <div className={classNames(className)} {...rest}>
      {children}
    </div>
  ),
)

CardHeader.displayName = 'Card.Header'
