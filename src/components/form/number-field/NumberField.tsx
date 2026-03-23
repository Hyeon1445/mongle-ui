import React, { useCallback, useRef } from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'

import { classNames } from '@/lib/classNames'
import { FieldFeedback } from '@/components/form/_field/FieldFeedback'
import { FieldLabel } from '@/components/form/_field/FieldLabel'
import { getDescribedBy, useFieldIds } from '@/lib/fieldUtils'
import { getInputClasses, INPUT_BASE_SIZE, INPUT_PADDING } from '@/lib/fieldStyles'

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

const STEPPER_WIDTH: Record<Size, string> = {
  sm: 'w-7',
  md: 'w-8',
  lg: 'w-9',
}

const STEPPER_RIGHT_PADDING: Record<Size, string> = {
  sm: 'pr-7',
  md: 'pr-8',
  lg: 'pr-9',
}

const CHEVRON_SIZE: Record<Size, string> = {
  sm: 'h-3 w-3',
  md: 'h-3.5 w-3.5',
  lg: 'h-4 w-4',
}

const RADIUS: Record<Size, { input: string; top: string; bottom: string }> = {
  sm: { input: 'rounded-lg', top: 'rounded-tr-lg', bottom: 'rounded-br-lg' },
  md: { input: 'rounded-xl', top: 'rounded-tr-xl', bottom: 'rounded-br-xl' },
  lg: { input: 'rounded-xl', top: 'rounded-tr-xl', bottom: 'rounded-br-xl' },
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

    const handleStep = useCallback(
      (direction: 'up' | 'down') => {
        const input = inputRef.current
        if (!input || disabled) return
        if (direction === 'up') input.stepUp()
        else input.stepDown()
        triggerChange()
      },
      [disabled, triggerChange],
    )

    const mergedRef = useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      },
      [ref],
    )

    const stepperButton: string = classNames(
      'flex flex-1 items-center justify-center cursor-pointer transition-all duration-100 active:scale-95',
      'disabled:cursor-not-allowed',
      hasError
        ? 'text-error-400 hover:bg-error-50 hover:text-error-500 active:bg-error-100'
        : 'text-neutral-400 hover:bg-primary-50 hover:text-primary-500 active:bg-primary-100',
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
        <div className="group relative flex items-center">
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
              '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
              INPUT_BASE_SIZE[size],
              INPUT_PADDING[size],
              STEPPER_RIGHT_PADDING[size],
              RADIUS[size].input,
              className,
            )}
            {...rest}
          />

          <div
            className={classNames(
              'absolute right-0 flex h-full flex-col overflow-hidden',
              STEPPER_WIDTH[size],
              'border-l border-neutral-200 transition-all duration-150',
              disabled
                ? 'pointer-events-none opacity-50'
                : 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100',
              'group-focus-within:border-primary-400',
              hasError && 'border-error-400 group-focus-within:border-error-500',
            )}
          >
            <button
              type="button"
              tabIndex={-1}
              disabled={disabled}
              aria-label="Increase"
              onMouseDown={(e) => {
                e.preventDefault()
                handleStep('up')
              }}
              className={classNames(stepperButton, RADIUS[size].top)}
            >
              <ChevronUp aria-hidden className={CHEVRON_SIZE[size]} />
            </button>

            <div
              className={classNames(
                'h-px shrink-0 transition-colors duration-150',
                hasError
                  ? 'bg-error-200 group-focus-within:bg-error-300'
                  : 'bg-neutral-200 group-focus-within:bg-primary-200',
              )}
            />

            <button
              type="button"
              tabIndex={-1}
              disabled={disabled}
              aria-label="Decrease"
              onMouseDown={(e) => {
                e.preventDefault()
                handleStep('down')
              }}
              className={classNames(stepperButton, RADIUS[size].bottom)}
            >
              <ChevronDown aria-hidden className={CHEVRON_SIZE[size]} />
            </button>
          </div>
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
