import React, { useEffect, type ReactElement, type ReactNode } from 'react'
import cx from 'classnames'

interface TagProps {
  children: ReactNode
  disabled?: boolean
  type?: 'default' | 'rounded'
  closable?: boolean
  onClose?: () => void
}

export const Tag = ({
  children,
  disabled = false,
  type = 'default',
  closable = true,
  onClose
}: TagProps): ReactElement => {
  useEffect(() => {
    console.log(closable)
  }, [closable])
  const TagVariant = cx(
    `flex justify-center items-center min-w-[29px] h-[20px] py-[2px] bg-N-50 text-[12px] leading-xxs text-N-700 
    font-medium disabled:cursor-not-allowed disabled:bg-N-100 disabled:text-N-300`,
    {
      'px-[4px] rounded': type === 'default',
      'px-[8px] rounded-3xl': type === 'rounded',
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
            'ri-close-fill text-[14px] ml-[8px]', {
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
