import React, { type ReactElement, type ReactNode } from 'react'
import cx from 'classnames'
import { Tooltip } from 'react-tooltip'

interface ToolTipProps {
  body?: string
  children: ReactNode
  delay?: number
  heading: string
  id: string
  place?: 'top' | 'right' | 'bottom' | 'left'
}

export const ToolTip = ({
  id,
  heading,
  body,
  place = 'right',
  children,
  delay = 1000
}: ToolTipProps): ReactElement => {
  const tooltipContent = (): string => {
    return (
      `<div className="inline-flex flex-col gap-1 bg-N-900 text-[12px] leading-xxs text-white">
        <div className='font-medium'>${heading}</div>
        <div className='font-normal'>${body ?? ''}</div>
      </div>`
    )
  }
  return (
    <div className='w-fit'>
      <div
        data-tooltip-id={id}
        className='inline-flex w-fit justify-center'
        data-tooltip-html={tooltipContent()}
        data-tooltip-delay-hide={delay}>
        {children}
      </div>

      <Tooltip
        id={id}
        place={place}
        className={cx(
          'max-w-[320px] bg-N-900 rounded px-3',
          { 'py-2': body === undefined, 'py-3': body }
        )}
      />
    </div>
  )
}

export default ToolTip
