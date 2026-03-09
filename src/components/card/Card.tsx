import React from 'react'

import { classNames } from '@/lib/classNames'

import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'
import { CardHeader } from './CardHeader'

export type CardVariant = 'outlined' | 'elevated' | 'filled'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>
  /** 카드의 시각적 스타일 */
  variant?: CardVariant
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  outlined: 'border border-gray-200',
  elevated: 'shadow-md',
  filled: 'bg-gray-50',
}

// eslint-disable-next-line react-refresh/only-export-components
const CardRoot = React.memo(
  ({
    variant = 'outlined',
    className,
    children,
    ref,
    ...rest
  }: CardProps) => (
    <div
      ref={ref}
      className={classNames(
        'rounded-2xl',
        VARIANT_CLASSES[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
)

CardRoot.displayName = 'Card'

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})
