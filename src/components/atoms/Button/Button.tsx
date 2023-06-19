import React, { type ReactElement } from 'react'
import cx from 'classnames'

interface ButtonProps {
  // eslint-disable-next-line @typescript-eslint/key-spacing
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
  isLoading?: boolean
  disabled?: boolean
  iconOnly?: boolean
  iconSwap?: string
  iconLeading?: boolean
  iconTrailing?: boolean
  label: string
  onClick?: () => void
}

export const Button = ({
  type = 'primary-deep-blue',
  size = 'sm',
  isLoading = false,
  disabled = false,
  iconOnly = false,
  iconSwap,
  iconLeading = false,
  iconTrailing = false,
  label,
  onClick
}: ButtonProps): ReactElement => {
  const commonVariant = cx(
    'btn flex justify-center items-center rounded font-roboto font-medium'
  )
  const disabledClass = cx({
    'cursor-not-allowed bg-N-100 text-N-300 uppercase': disabled
  })
  const bgVariant = cx(
    {
      'bg-O-500 hover:bg-O-400': type === 'primary-orange',
      'bg-B-500 hover:bg-B-400': type === 'primary-deep-blue' && !disabled,
      'bg-white': (type === 'tertiary-gray' ||
        type === 'tertiary-orange' ||
        type === 'text-gray' ||
        type === 'text-orange' ||
        type === 'link' ||
        type === 'link-gray') && !disabled,
      'hover:bg-N-25': (type === 'tertiary-gray' || type === 'text-gray') && !disabled,
      'hover:bg-O-25': (type === 'tertiary-orange' || type === 'text-orange') && !disabled
    })

  const textVariant = cx({
    'text-white': (type === 'primary-orange' || type === 'primary-deep-blue') && !disabled,
    'text-N-700': (type === 'tertiary-gray' || type === 'text-gray' || type === 'link-gray') && !disabled,
    'hover:text-N-800': type === 'link-gray' && !disabled,
    'text-O-500': (type === 'tertiary-orange' || type === 'text-orange' || type === 'link') && !disabled,
    'hover:text-O-600': type === 'link' && !disabled,
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
    'w-[75px] h-4': size === 'xs' && !iconOnly && (type === 'link' || type === 'link-gray'),
    'w-[82px] h-5': size === 'sm' && !iconOnly && (type === 'link' || type === 'link-gray'),
    'w-[104px] h-6': size === 'md' && !iconOnly && (type === 'link' || type === 'link-gray'),
    'w-[127x] h-7': size === 'lg' && !iconOnly && (type === 'link' || type === 'link-gray'),
    'w-4 h-4': size === 'xs' && iconOnly && (type === 'link' || type === 'link-gray'),
    'w-5 h-5': size === 'sm' && iconOnly && (type === 'link' || type === 'link-gray'),
    'w-6 h-6': size === 'md' && iconOnly && (type === 'link' || type === 'link-gray'),
    'w-7 h-7': size === 'lg' && iconOnly && (type === 'link' || type === 'link-gray')
  })

  const borderVariant = cx(
    {
      'focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#4E91D5]': !disabled,
      'border border-solid border-N-100': (type === 'tertiary-gray' || type === 'tertiary-orange') && !disabled
    }
  )

  const buttonClass = cx(
    commonVariant,
    disabledClass,
    bgVariant,
    textVariant,
    sizeVariant,
    borderVariant)

  return (
    <button
      className={buttonClass}
      onClick={() => {
        if (!disabled && onClick !== undefined) onClick()
      }}
      disabled={disabled}
    >
      {iconOnly && <i className={`${iconSwap ?? ''}`} />}
      {!iconOnly && iconLeading && iconSwap}{!iconOnly && !isLoading && label} {!iconOnly && iconTrailing && iconSwap}
    </button>
  )
}

export default Button
