import React from 'react'

import { classNames } from '@/lib/classNames'

import type { Size } from '@/types'

export type AvatarColor = 'primary' | 'secondary' | 'accent' | 'neutral'

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
  neutral: 'bg-gray-100 text-gray-700',
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/)
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

    const showImage = src && !imgError
    const initials = name ? getInitials(name) : null

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
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[60%] w-[60%]"
            aria-hidden="true"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        )}
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
