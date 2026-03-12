import React from 'react'

import { classNames } from '@/lib/classNames'

export type CardFooterProps = React.ComponentPropsWithoutRef<'div'>

export const CardFooter = React.memo(
  ({ className, children, ...rest }: CardFooterProps) => (
    <div className={classNames(className)} {...rest}>
      {children}
    </div>
  ),
)

CardFooter.displayName = 'Card.Footer'
