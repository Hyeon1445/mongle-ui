import React from 'react'

import { classNames } from '@/lib/classNames'

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>
}

export const CardBody = React.memo(
  ({ className, children, ref, ...rest }: CardBodyProps) => (
    <div ref={ref} className={classNames('px-6 py-5', className)} {...rest}>
      {children}
    </div>
  ),
)

CardBody.displayName = 'Card.Body'
