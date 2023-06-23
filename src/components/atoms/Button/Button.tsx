import React, { type ReactNode, type ReactElement } from 'react'
import cx from 'classnames'

interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  iconLeading?: boolean
  iconOnly?: boolean
  iconSwap?: string
  iconTrailing?: boolean
  isBlock?: boolean
  isLoading?: boolean
  onClick?: () => void
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: | 'link'
    | 'link-gray'
    | 'primary-deep-blue'
    | 'primary-orange'
    | 'tertiary-gray'
    | 'tertiary-orange'
    | 'text-gray'
    | 'text-orange'
}

export const Button = ({
  children,
  disabled = false,
  iconLeading = false,
  iconOnly = false,
  iconSwap,
  iconTrailing = false,
  isBlock = false,
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
  const bgVariant = cx({
    'bg-O-500 hover:bg-O-400': type === 'primary-orange' && !disabled,
    'bg-B-500 hover:bg-B-400': type === 'primary-deep-blue' && !disabled,
    'bg-white':
      (type === 'tertiary-gray' ||
        type === 'tertiary-orange' ||
        type === 'text-gray' ||
        type === 'text-orange' ||
        type === 'link' ||
        type === 'link-gray') &&
      !disabled,
    'hover:bg-N-25':
      (type === 'tertiary-gray' || type === 'text-gray') && !disabled,
    'hover:bg-O-25':
      (type === 'tertiary-orange' || type === 'text-orange') && !disabled
  })

  const textVariant = cx({
    'text-white':
      (type === 'primary-orange' || type === 'primary-deep-blue') && !disabled,
    'text-N-700':
      (type === 'tertiary-gray' ||
        type === 'text-gray' ||
        type === 'link-gray') &&
      !disabled,
    'hover:text-N-800': type === 'link-gray' && !disabled,
    'text-O-500':
      (type === 'tertiary-orange' ||
        type === 'text-orange' ||
        type === 'link') &&
      !disabled,
    'hover:text-O-600': type === 'link' && !disabled,
    'uppercase': type !== 'link' && type !== 'link-gray',
    'underline': type === 'link' || type === 'link-gray',
    'text-opacity-0': isLoading
  })

  const sizeVariant = cx({
    'text-[14px] leading-xs': size === 'xs' || size === 'sm',
    'text-[16px] leading-md': size === 'md' || size === 'lg',

    'px-3 py-2':
      size === 'xs' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'px-4 py-[10px]':
      size === 'sm' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'px-5 py-[10px]':
      size === 'md' && !iconOnly && type !== 'link' && type !== 'link-gray',
    'px-6 py-3':
      size === 'lg' && !iconOnly && type !== 'link' && type !== 'link-gray',

    'px-2 py-2':
      (size === 'xs' && iconOnly && type !== 'link' && type !== 'link-gray') ||
      (size === 'md' && iconOnly && (type === 'link' || type === 'link-gray')),
    'px-[10px] py-[10px]':
      ((size === 'sm' || size === 'md') &&
        iconOnly &&
        type !== 'link' &&
        type !== 'link-gray') ||
      (size === 'lg' && iconOnly && (type === 'link' || type === 'link-gray')),
    'px-3 py-3':
      size === 'lg' && iconOnly && type !== 'link' && type !== 'link-gray',

    'px-1 py-1':
      size === 'xs' && iconOnly && (type === 'link' || type === 'link-gray'),
    'px-[6px] py-[6px]':
      size === 'sm' && iconOnly && (type === 'link' || type === 'link-gray'),

    'px-[2px]': !iconOnly && (type === 'link' || type === 'link-gray'),
    'w-full': isBlock
  })

  const borderVariant = cx({
    'focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#4E91D5]': !disabled,
    'border border-solid border-N-100':
      (type === 'tertiary-gray' || type === 'tertiary-orange') && !disabled
  })

  const iconSize = cx({
    'h-5 w-5':
      (size === 'xs' || size === 'sm') &&
      type !== 'link' &&
      type !== 'link-gray',
    'h-4 w-4':
      (size === 'xs' || size === 'sm') &&
      (type === 'link' || type === 'link-gray'),
    'h-6 w-6': size === 'md' || size === 'lg'
  })

  const buttonClass = cx(
    commonVariant,
    disabledClass,
    bgVariant,
    textVariant,
    sizeVariant,
    borderVariant
  )

  const loadingVariant = cx({
    'fill-white':
      (type === 'primary-orange' || type === 'primary-deep-blue'),
    'fill-N-700':
      (type === 'tertiary-gray' ||
        type === 'text-gray' ||
        type === 'link-gray'),
    'text-O-500':
      (type === 'tertiary-orange' ||
        type === 'text-orange' ||
        type === 'link')
  })

  return (
    <button
      className={buttonClass}
      onClick={() => {
        if (!disabled && onClick !== undefined) onClick()
      }}
      disabled={disabled}>
      {iconOnly && !isLoading && (
        <i className={`${iconSwap ?? ''} ${iconSize}`} />
      )}
      {!iconOnly && !isLoading && iconLeading && (
        <i className={`${iconSwap ?? ''}  ${iconSize} pr-1`} />
      )}
      {!iconOnly && children}
      {isLoading && (
        <svg
          aria-hidden='true'
          className={`inline absolute ${iconSize} ${loadingVariant} animate-spin `}
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
      )}
      {!iconOnly && !isLoading && iconTrailing && (
        <i className={`${iconSwap ?? ''} ${iconSize} pl-1`} />
      )}
    </button>
  )
}

export default Button
