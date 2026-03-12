/* eslint-disable react-refresh/only-export-components */
import React from 'react'

import { classNames } from '@/lib/classNames'

export type CardVariant = 'outlined' | 'elevated' | 'filled'

export interface CardProps extends React.ComponentPropsWithRef<'div'> {
  /** 카드의 시각적 스타일 */
  variant?: CardVariant
}

export type CardHeaderProps = React.ComponentPropsWithoutRef<'div'>
export type CardContentProps = React.ComponentPropsWithoutRef<'div'>
export type CardFooterProps = React.ComponentPropsWithoutRef<'div'>

const VARIANT_CLASSES: Record<CardVariant, string> = {
  outlined: 'border border-gray-200',
  elevated: 'shadow-md',
  filled: 'bg-gray-50',
}

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
CardRoot.displayName = 'Card'

const CardHeader = React.memo(
  ({ className, children, ...rest }: CardHeaderProps) => (
    <div className={classNames(className)} {...rest}>
      {children}
    </div>
  ),
)
CardHeader.displayName = 'Card.Header'

const CardContent = React.memo(
  ({ className, children, ...rest }: CardContentProps) => (
    <div className={classNames('flex-1', className)} {...rest}>
      {children}
    </div>
  ),
)
CardContent.displayName = 'Card.Content'

const CardFooter = React.memo(
  ({ className, children, ...rest }: CardFooterProps) => (
    <div className={classNames(className)} {...rest}>
      {children}
    </div>
  ),
)
CardFooter.displayName = 'Card.Footer'

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
})
