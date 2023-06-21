import React, { type ReactElement, type ReactNode } from 'react'
import cx from 'classnames'

interface TagProps {
  children: ReactNode
  closable?: boolean
  disabled?: boolean
  onClose?: () => void
  type?: 'default' | 'rounded'
}

export const Tag = ({
  children,
  disabled = false,
  type = 'default',
  closable = true,
  onClose
}: TagProps): ReactElement => {
  const TagVariant = cx(
    `flex justify-center items-center py-[2px] bg-N-50 text-[12px] leading-xxs text-N-700 
    font-medium disabled:cursor-not-allowed disabled:bg-N-100 disabled:text-N-300`,
    {
      'px-1 rounded': type === 'default' && !closable,
      'pl-1 pr-[6px] rounded': type === 'default' && closable,
      'px-2 rounded-3xl': type === 'rounded' && !closable,
      'pl-2 pr-[6px] rounded-3xl': type === 'rounded' && closable,
      'focus:bg-N-25 focus:shadow-[0px_0px_0px_4px_rgba(160,196,233,0.5)]':
        !disabled,
      'hover:bg-N-100': !closable && !disabled,
      'hover:bg-R-25 hover:text-R-600': closable && !disabled
    }
  )

  return (
    <button className={TagVariant} disabled={disabled}>
      {children}
      {closable && (
        <i
          role='button'
          className={cx(
            'ri-close-fill h-[6px] w-[6px] ml-2 mr-[6px] flex items-center', {
              'cursor-not-allowed': disabled
            }
          )}
          onClick={() => { if (!disabled && onClose !== undefined) onClose() }}
        />)
      }
    </button>
  )
}

export default Tag
