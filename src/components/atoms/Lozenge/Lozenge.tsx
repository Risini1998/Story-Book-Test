/* eslint-disable */
import React, { type ReactElement } from 'react'
import classnames from 'classnames'

interface Props {
  type?: 'default' | 'subtle' | 'outline'
  color?:
    | 'default'
    | 'danger'
    | 'primary'
    | 'success'
    | 'warning-1'
    | 'warning-2'
    | 'info'
    | 'disabled'
  flag?: boolean
  content: string
  icon?: boolean
}

export function Lozenge({
  color = 'default',
  content,
  flag = false,
  icon = false,
  type = 'default'
}: Props): ReactElement {
  return (
    <div
      className={classnames(
        'box-border flex justify-center items-center gap-1 w-fit py-[4px] text-xs font-heading uppercase',
        {
          // Type: default
          'text-white fill-white bg-N-700':
            type === 'default' && color === 'default',
          'text-white fill-white bg-R-500':
            type === 'default' && color === 'danger',
          'text-white fill-white bg-B-400':
            type === 'default' && color === 'primary',
          'text-white fill-white bg-G-500':
            type === 'default' && color === 'success',
          'text-N-700 fill-N-700 bg-Y-400':
            type === 'default' && color === 'warning-1',
          'text-white fill-white bg-O-500':
            type === 'default' && color === 'warning-2',
          'text-white fill-white bg-aqua':
            type === 'default' && color === 'info',
          'text-N-200 fill-N-200 bg-N-25':
            type === 'default' && color === 'disabled',

          // Type: subtle
          'text-N-700 fill-N-700 bg-N-50':
            type === 'subtle' && color === 'default',
          'text-R-500 fill-R-500 bg-R-25':
            type === 'subtle' && color === 'danger',
          'text-B-400 fill-B-400 bg-B-25':
            type === 'subtle' && color === 'primary',
          'text-G-500 fill-G-500 bg-G-25':
            type === 'subtle' && color === 'success',
          'text-N-700 fill-N-700 bg-Y-25':
            type === 'subtle' && color === 'warning-1',
          'text-O-500 fill-O-500 bg-O-25':
            type === 'subtle' && color === 'warning-2',
          'text-aqua fill-aqua bg-[#E2FAF9]':
            type === 'subtle' && color === 'info',
          'text-N-200 ill-N-200 bg-N-25':
            type === 'subtle' && color === 'disabled',

          // Type: outline
          'text-N-700 fill-N-700 bg-white border border-solid border-N-700':
            type === 'outline' && color === 'default',
          'text-R-500 fill-R-500 bg-white border border-solid border-R-500':
            type === 'outline' && color === 'danger',
          'text-B-400 fill-B-400 bg-white border border-solid border-B-400':
            type === 'outline' && color === 'primary',
          'text-G-500 fill-G-500 bg-white border border-solid border-G-500':
            type === 'outline' && color === 'success',
          'text-Y-500 fill-Y-500 bg-white border border-solid border-Y-500':
            type === 'outline' && color === 'warning-1',
          'text-O-500 fill-O-500 bg-white border border-solid border-O-500':
            type === 'outline' && color === 'warning-2',
          'text-aqua fill-aqua bg-white border border-solid border-aqua':
            type === 'outline' && color === 'info',
          'text-N-200 fill-N-200 bg-N-25 border border-solid border-N-200':
            type === 'outline' && color === 'disabled'
        },
        {
          'rounded px-[8px] font-medium': !flag,
          'rounded-r px-[12px] font-bold': flag
        }
      )}>
      {icon && <i className="ri-checkbox-blank-circle-line h-[16px] w-[16px]"></i>}
      {content}
    </div>
  )
}

export default Lozenge
