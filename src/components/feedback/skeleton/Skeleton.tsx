import React from 'react'

import { classNames } from '@/lib/classNames'

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded'

export interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {
  /** 스켈레톤 형태 */
  variant?: SkeletonVariant
  /** shimmer 애니메이션 활성화 여부 */
  animate?: boolean
}

const VARIANT_CLASSES: Record<SkeletonVariant, string> = {
  text: 'h-4 w-full rounded',
  circular: 'rounded-full',
  rectangular: 'rounded-lg',
  rounded: 'rounded-xl',
}

export const Skeleton = React.memo(
  ({ variant = 'rectangular', animate = true, className, ...rest }: SkeletonProps) => (
    <div
      className={classNames(
        'relative overflow-hidden bg-neutral-100',
        VARIANT_CLASSES[variant],
        className,
      )}
      aria-hidden="true"
      {...rest}
    >
      {animate && (
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-primary-50 to-transparent" />
      )}
    </div>
  ),
)

Skeleton.displayName = 'Skeleton'
