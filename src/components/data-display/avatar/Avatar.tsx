import React from 'react'
import { UserRound } from 'lucide-react'

import { classNames } from '@/lib/classNames'

import type { Size } from '@/types'

export type AvatarColor = 'primary' | 'secondary' | 'accent' | 'warm' | 'neutral'

export interface AvatarProps extends React.ComponentPropsWithoutRef<'span'> {
  /** 아바타의 크기 */
  size?: Size
  /** 아바타의 색상 (이니셜 배경) */
  color?: AvatarColor
  /** 이미지 URL */
  src?: string
  /** 이미지 alt 텍스트 */
  alt?: string
  /** 이름 (이니셜 폴백용) */
  name?: string
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
}

const COLOR_CLASSES: Record<AvatarColor, string> = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700',
  accent: 'bg-success-100 text-success-700',
  warm: 'bg-warning-100 text-warning-700',
  neutral: 'bg-neutral-100 text-neutral-700',
}

const getInitials = (name: string): string => {
  const parts: string[] = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

export const Avatar = React.memo(
  ({
    size = 'md',
    color = 'primary',
    src,
    alt = '',
    name,
    className,
    children,
    ...rest
  }: AvatarProps) => {
    const [imgError, setImgError] = React.useState(false)

    const showImage: boolean = !!src && !imgError
    const initials: string | null = name ? getInitials(name) : null

    return (
      <span
        role="img"
        aria-label={alt || name || undefined}
        className={classNames(
          'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium leading-none pt-px select-none',
          SIZE_CLASSES[size],
          !showImage && COLOR_CLASSES[color],
          className,
        )}
        {...rest}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt || name || ''}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        ) : children ? (
          children
        ) : initials ? (
          initials
        ) : (
          <UserRound className="h-[60%] w-[60%]" aria-hidden="true" />
        )}
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
