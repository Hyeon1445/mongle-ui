import React, { useCallback, useRef } from 'react'

import { Minus, Plus } from 'lucide-react'

import { classNames } from '@/lib/classNames'
import { Icon } from '@/components/general/icon'
import { FieldFeedback } from '@/components/form/_field/FieldFeedback'
import { FieldLabel } from '@/components/form/_field/FieldLabel'
import { getDescribedBy, useFieldIds } from '@/lib/fieldUtils'
import { getInputClasses, INPUT_BASE_SIZE } from '@/lib/fieldStyles'

import type { Size } from '@/types'

export interface NumberFieldProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'type'> {
  /** 라벨 */
  label?: string
  /** 도움말 텍스트 (error가 없을 때 표시) */
  description?: string
  /** 에러 메시지 (있으면 에러 상태) */
  error?: string
  /** 크기 */
  size?: Size
  /** 전체 너비 */
  fullWidth?: boolean
}

const STEPPER_SIZE: Record<Size, string> = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
}

const ICON_SIZE: Record<Size, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

const BORDER_RADIUS: Record<Size, { left: string; right: string }> = {
  sm: { left: 'rounded-l-lg', right: 'rounded-r-lg' },
  md: { left: 'rounded-l-xl', right: 'rounded-r-xl' },
  lg: { left: 'rounded-l-xl', right: 'rounded-r-xl' },
}

export const NumberField = React.memo(
  ({
    label,
    description,
    error,
    size = 'md',
    fullWidth = false,
    disabled,
    required,
    min,
    max,
    step,
    className,
    id: idProp,
    ref,
    ...rest
  }: NumberFieldProps) => {
    const { inputId, descriptionId, errorId } = useFieldIds(idProp)
    const inputRef = useRef<HTMLInputElement>(null)

    const hasError: boolean = Boolean(error)
    const describedBy = getDescribedBy(hasError, errorId, description, descriptionId)

    const triggerChange = useCallback(() => {
      const input = inputRef.current
      if (!input) return
      const nativeValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value',
      )?.set
      nativeValueSetter?.call(input, input.value)
      input.dispatchEvent(new Event('input', { bubbles: true }))
    }, [])

    const handleDecrement: React.MouseEventHandler<HTMLButtonElement> =
      useCallback(
        (e) => {
          e.preventDefault()
          inputRef.current?.stepDown()
          triggerChange()
        },
        [triggerChange],
      )

    const handleIncrement: React.MouseEventHandler<HTMLButtonElement> =
      useCallback(
        (e) => {
          e.preventDefault()
          inputRef.current?.stepUp()
          triggerChange()
        },
        [triggerChange],
      )

    const mergedRef = useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      },
      [ref],
    )

    const stepperBase: string = classNames(
      'flex shrink-0 items-center justify-center border border-neutral-200 bg-white text-neutral-500',
      'transition-all duration-150',
      'hover:bg-neutral-50 hover:text-neutral-700',
      'active:bg-neutral-100',
      'focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
      'disabled:cursor-not-allowed disabled:opacity-50',
    )

    return (
      <div
        className={classNames(
          'flex flex-col gap-1',
          fullWidth ? 'w-full' : 'w-64',
        )}
      >
        {label && (
          <FieldLabel htmlFor={inputId} required={required}>
            {label}
          </FieldLabel>
        )}
        <div className="flex">
          <button
            type="button"
            tabIndex={-1}
            disabled={disabled}
            aria-label="Decrease"
            onClick={handleDecrement}
            className={classNames(
              stepperBase,
              STEPPER_SIZE[size],
              BORDER_RADIUS[size].left,
              'border-r-0',
            )}
          >
            <Icon icon={Minus} className={ICON_SIZE[size]} aria-hidden />
          </button>
          <input
            ref={mergedRef}
            id={inputId}
            type="number"
            disabled={disabled}
            required={required}
            min={min}
            max={max}
            step={step}
            aria-describedby={describedBy}
            aria-invalid={hasError || undefined}
            className={classNames(
              getInputClasses(hasError, disabled),
              'min-w-0 flex-1 px-3 text-center',
              '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
              INPUT_BASE_SIZE[size],
              className,
            )}
            {...rest}
          />
          <button
            type="button"
            tabIndex={-1}
            disabled={disabled}
            aria-label="Increase"
            onClick={handleIncrement}
            className={classNames(
              stepperBase,
              STEPPER_SIZE[size],
              BORDER_RADIUS[size].right,
              'border-l-0',
            )}
          >
            <Icon icon={Plus} className={ICON_SIZE[size]} aria-hidden />
          </button>
        </div>
        <FieldFeedback
          descriptionId={descriptionId}
          errorId={errorId}
          description={description}
          error={error}
        />
      </div>
    )
  },
)

NumberField.displayName = 'NumberField'
