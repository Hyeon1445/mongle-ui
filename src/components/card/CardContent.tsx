import React from 'react'

import { classNames } from '@/lib/classNames'

export type CardContentProps = React.ComponentPropsWithoutRef<'div'>

export const CardContent = React.memo(
  ({ className, children, ...rest }: CardContentProps) => (
    <div className={classNames('flex-1', className)} {...rest}>
      {children}
    </div>
  ),
)

CardContent.displayName = 'Card.Content'
