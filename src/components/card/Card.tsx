import React from 'react'

import { classNames } from '@/lib/classNames'

export type CardVariant = 'outlined' | 'elevated' | 'filled'

export interface CardProps extends React.ComponentPropsWithRef<'div'> {
  /** 카드의 시각적 스타일 */
  variant?: CardVariant
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  outlined: 'border border-gray-200',
  elevated: 'shadow-md',
  filled: 'bg-gray-50',
}

export const Card = React.memo(
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
        'flex flex-col gap-4 rounded-2xl p-6',
        VARIANT_CLASSES[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
)

Card.displayName = 'Card'
