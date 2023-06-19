import React, { type ReactNode, type ReactElement } from 'react'
import classnames from 'classnames'

interface Props {
  type?: 'default' | 'subtle'
  color?: 'gray' | 'blue' | 'red' | 'warning'
  children: ReactNode
}

export function Badge({
  type = 'default',
  color = 'gray',
  children
}: Props): ReactElement {
  return (
    <span
      className={classnames(
        'flex justify-center items-center w-fit py-[2px] px-[8px] rounded-3xl font-regular text-xs font-heading',
        {
          // Type: default
          'text-white bg-N-600': type === 'default' && color === 'gray',
          'text-white bg-B-500': type === 'default' && color === 'blue',
          'text-white bg-R-600': type === 'default' && color === 'red',
          'text-white bg-O-500': type === 'default' && color === 'warning',

          // Type: subtle
          'text-N-500 bg-N-25': type === 'subtle' && color === 'gray',
          'text-B-500 bg-B-25': type === 'subtle' && color === 'blue',
          'text-R-500 bg-R-25': type === 'subtle' && color === 'red',
          'text-O-500 bg-O-25': type === 'subtle' && color === 'warning'
        }
      )}>
      {children}
    </span>
  )
}

export default Badge
