import React from 'react'

import { classNames } from '@/lib/classNames'

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>
}

export const CardFooter = React.memo(
  ({ className, children, ref, ...rest }: CardFooterProps) => (
    <div
      ref={ref}
      className={classNames('px-6 pt-0 pb-6', className)}
      {...rest}
    >
      {children}
    </div>
  ),
)

CardFooter.displayName = 'Card.Footer'
