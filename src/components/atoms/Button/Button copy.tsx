import React, { type ReactElement } from 'react'
import cx from 'classnames'

interface ButtonProps {
  type?:
  | 'primary-orange'
  | 'primary-deep-blue'
  | 'tertiary-gray'
  | 'tertiary-orange'
  | 'text-orange'
  | 'text-gray'
  | 'link'
  | 'link-gray'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  state?:
  | 'default'
  | 'hover'
  | 'focused'
  | 'disabled'
  iconOnly: boolean
  iconSwap?: string
  iconLeading?: boolean
  iconTrailing?: boolean
  label: string
  onClick?: () => void
}

export const Button = ({
  type = 'primary-deep-blue',
  size = 'sm',
  state = 'default',
  iconOnly = false,
  iconSwap,
  iconLeading = false,
  iconTrailing = false,
  label = 'Button',
  onClick
}: ButtonProps): ReactElement => {
  const commonVariant = cx(
    'btn flex justify-center items-center rounded font-roboto font-medium', {
      'cursor-not-allowed': state === 'disabled'
    }
  )

  const bgVariant = cx({
    'bg-O-500': type === 'primary-orange' && state !== 'hover' && state !== 'disabled',
    'bg-O-400': type === 'primary-orange' && state === 'hover',
    'bg-B-500': type === 'primary-deep-blue' && state !== 'hover' && state !== 'disabled',
    'bg-B-400': type === 'primary-deep-blue' && state === 'hover',
    'bg-white': (type === 'tertiary-gray' && state !== 'hover' && state !== 'disabled') ||
      (type === 'tertiary-orange' && state !== 'hover' && state !== 'disabled') ||
      (type === 'text-gray' && state !== 'hover' && state !== 'disabled') ||
      (type === 'text-orange' && state !== 'hover' && state !== 'disabled') ||
      (type === 'link' && state !== 'disabled') ||
      (type === 'link-gray' && state !== 'disabled'),
    'bg-N-25': (type === 'tertiary-gray' || type === 'text-gray') && state === 'hover',
    'bg-O-25': (type === 'tertiary-orange' || type === 'text-orange') && state === 'hover',
    'bg-N-100': state === 'disabled'
  })

  const textVariant = cx({
    'text-white': (type === 'primary-orange' || type === 'primary-deep-blue') &&
      state !== 'disabled',
    'text-N-700': ((type === 'tertiary-gray' || type === 'text-gray') || (type === 'link-gray' && state !== 'hover')) && state !== 'disabled',
    'text-N-800': type === 'link-gray' && state === 'hover',
    'text-O-500': ((type === 'tertiary-orange' || type === 'text-orange') || (type === 'link' && state !== 'hover')) && state !== 'disabled',
    'text-O-600': type === 'link' && state === 'hover',
    'text-N-300': (type === 'primary-orange' && state === 'disabled'),
    'text-N-400': (type !== 'primary-orange' && state === 'disabled'),
    uppercase: type !== 'link' && type !== 'link-gray',
    underline: type === 'link' || type === 'link-gray'
  })

  const sizeVariant = cx({
    'text-[14px] leading-xs': size === 'xs' || size === 'sm',
    'text-[16px] leading-md': size === 'md' || size === 'lg',
    'w-[127px] h-9': size === 'xs' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'w-[135px] h-10': size === 'sm' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'w-[158px] h-11': size === 'md' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'w-[166px] h-12': size === 'lg' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'w-9 h-9': size === 'xs' && iconOnly && type !== 'link' && type !== 'link-gray',
    'w-10 h-10': size === 'sm' && iconOnly && type !== 'link' && type !== 'link-gray',
    'w-11 h-11': size === 'md' && iconOnly && type !== 'link' && type !== 'link-gray',
    'w-12 h-12': size === 'lg' && iconOnly && type !== 'link' && type !== 'link-gray',
    'w-[75px] h-4': size === 'xs' && !iconOnly && (type === 'link' || type === 'link-gray') && state === 'focused',
    'w-[82px] h-5': size === 'sm' && !iconOnly && (type === 'link' || type === 'link-gray') && state === 'focused',
    'w-[104px] h-6': size === 'md' && !iconOnly && (type === 'link' || type === 'link-gray') && state === 'focused',
    'w-[127x] h-7': size === 'lg' && !iconOnly && (type === 'link' || type === 'link-gray') && state === 'focused',
    'w-4 h-4': size === 'xs' && iconOnly && (type === 'link' || type === 'link-gray') && state === 'focused',
    'w-5 h-5': size === 'sm' && iconOnly && (type === 'link' || type === 'link-gray') && state === 'focused',
    'w-6 h-6': size === 'md' && iconOnly && (type === 'link' || type === 'link-gray') && state === 'focused',
    'w-7 h-7': size === 'lg' && iconOnly && (type === 'link' || type === 'link-gray') && state === 'focused'
  })

  const borderVariant = cx({
    'shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#4E91D5]': state === 'focused',
    'border border-solid border-N-100': (type === 'tertiary-gray' || type === 'tertiary-orange') && state !== 'disabled'
  })

  const buttonClass = cx(commonVariant, bgVariant, textVariant, sizeVariant, borderVariant)
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={state === 'disabled'}
    >
      {iconOnly && <i className={`${iconSwap ?? ''}`} />}
      {!iconOnly && iconLeading && iconSwap}{!iconOnly && label} {!iconOnly && iconTrailing && iconSwap}
    </button>
  )
}
