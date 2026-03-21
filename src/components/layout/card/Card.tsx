import React from 'react'

import { classNames } from '@/lib/classNames'

import type { PaperElevation } from '@/components/layout/paper'
import { Paper } from '@/components/layout/paper'

export type CardVariant = 'outlined' | 'elevated' | 'filled'

export interface CardProps extends React.ComponentPropsWithRef<'div'> {
  /** 카드의 시각적 스타일 */
  variant?: CardVariant
}

const VARIANT_ELEVATION: Record<CardVariant, PaperElevation> = {
  outlined: 0,
  elevated: 2,
  filled: 0,
}

const VARIANT_BORDERED: Record<CardVariant, boolean> = {
  outlined: true,
  elevated: false,
  filled: false,
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  outlined: '',
  elevated: '',
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
    <Paper
      ref={ref}
      elevation={VARIANT_ELEVATION[variant]}
      radius="2xl"
      bordered={VARIANT_BORDERED[variant]}
      className={classNames(
        'flex flex-col gap-4 p-6',
        VARIANT_CLASSES[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Paper>
  ),
)

Card.displayName = 'Card'
