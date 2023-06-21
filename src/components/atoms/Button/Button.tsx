import React, { type ReactNode, type ReactElement } from 'react'
import cx from 'classnames'

interface ButtonProps {
  isBlock?: boolean
  disabled?: boolean
  iconLeading?: boolean
  iconOnly?: boolean
  iconSwap?: string
  iconTrailing?: boolean
  isLoading?: boolean
  children: ReactNode
  onClick?: () => void
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?:
         | 'link'
  | 'link-gray'
  | 'primary-deep-blue'
  | 'primary-orange'
  | 'tertiary-gray'
  | 'tertiary-orange'
  | 'text-gray'
  | 'text-orange'
}

export const Button = ({
  isBlock =false,
  children,
  disabled = false,
  iconLeading = false,
  iconOnly = false,
  iconSwap,
  iconTrailing = false,
  isLoading = false,
  onClick,
  size = 'sm',
  type = 'primary-deep-blue'
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

    'px-3 py-2': size === 'xs' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'px-4 py-[10px]': size === 'sm' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'px-5 py-[10px]': size === 'md' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'px-6 py-3': size === 'lg' && !iconOnly && type !== 'link' && type !== 'link-gray',

    'px-2 py-2': (size === 'xs' && iconOnly && type !== 'link' && type !== 'link-gray') ||
      (size === 'md' && iconOnly && (type === 'link' || type === 'link-gray')),
    'px-[10px] py-[10px]': ((size === 'sm' || size==='md') && iconOnly && type !== 'link' && type !== 'link-gray') ||
      (size === 'lg' && iconOnly && (type === 'link' || type === 'link-gray')),
    'px-3 py-3': size === 'lg' && iconOnly && type !== 'link' && type !== 'link-gray',

    'px-1 py-1': size === 'xs' && iconOnly && (type === 'link' || type === 'link-gray'),
    'px-[6px] py-[6px]': size === 'sm' && iconOnly && (type === 'link' || type === 'link-gray'),

    'px-[2px]': !iconOnly && (type === 'link' || type === 'link-gray'),
    'w-full': isBlock
  })

  const borderVariant = cx(
    {
      'focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#4E91D5]': !disabled,
      'border border-solid border-N-100': (type === 'tertiary-gray' || type === 'tertiary-orange') && !disabled
    }
  )

  const iconSize = cx({
    'h-5 w-5': (size=== 'xs' || size=== 'sm') && type!=='link' && type!=='link-gray',
    'h-4 w-4': (size=== 'xs' || size=== 'sm') && (type==='link' || type==='link-gray'),
    'h-6 w-6': size=== 'md' || size=== 'lg'
  })

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
      {iconOnly && <i className={`${iconSwap ?? ''} ${iconSize}`} />}
      {!iconOnly && iconLeading && <i className={`${iconSwap ?? ''}  ${iconSize} pr-1`} />}{!iconOnly && !isLoading && children} {!iconOnly && iconTrailing && <i className={`${iconSwap ?? ''} ${iconSize} pl-1`} />}
    </button>
  )
}

export default Button
