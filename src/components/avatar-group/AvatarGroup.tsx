import React from 'react'

import { classNames } from '@/lib/classNames'

import type { Size } from '@/types'

import type { AvatarProps } from '@/components/avatar'
import { Avatar } from '@/components/avatar'

export interface AvatarGroupProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /** 아바타 크기 (자식 Avatar에 전달) */
  size?: Size
  /** 최대 표시 개수 */
  max?: number
}

const OVERLAP_CLASSES: Record<Size, string> = {
  sm: '-space-x-2',
  md: '-space-x-3',
  lg: '-space-x-4',
}

const RING_CLASSES: Record<Size, string> = {
  sm: 'ring-2',
  md: 'ring-2',
  lg: 'ring-[3px]',
}

export const AvatarGroup = React.memo(
  ({
    size = 'md',
    max,
    className,
    children,
    ...rest
  }: AvatarGroupProps) => {
    const childArray: React.ReactNode[] = React.Children.toArray(children)
    const visibleChildren: React.ReactNode[] = max ? childArray.slice(0, max) : childArray
    const excess: number = max ? childArray.length - max : 0

    return (
      <div
        role="group"
        className={classNames(
          'inline-flex items-center',
          OVERLAP_CLASSES[size],
          className,
        )}
        {...rest}
      >
        {visibleChildren.map((child, index) => {
          if (!React.isValidElement<AvatarProps>(child)) return child
          return React.cloneElement(child, {
            key: index,
            size,
            className: classNames(
              'ring-white cursor-pointer transition-transform duration-200 hover:-translate-y-1',
              RING_CLASSES[size],
              child.props.className,
            ),
          })
        })}
        {excess > 0 && (
          <Avatar
            size={size}
            color="neutral"
            className={classNames('ring-white', RING_CLASSES[size])}
          >
            +{excess}
          </Avatar>
        )}
      </div>
    )
  },
)

AvatarGroup.displayName = 'AvatarGroup'
