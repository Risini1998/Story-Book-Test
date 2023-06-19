import React, { type ReactElement, type ReactNode } from 'react'
import cx from 'classnames'
import { Tooltip } from 'react-tooltip'

interface ToolTipProps {
  id: string
  heading: string
  body?: string
  place?: 'top' | 'right' | 'bottom' | 'left'
  delay?: number
  children: ReactNode
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
      `<div className="inline-flex flex-col gap-[4px] bg-N-900 text-[12px] leading-xxs text-white">
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
          'max-w-[320px] min-w-[120px] bg-N-900 rounded px-[12px]',
          { 'py-[8px]': body === undefined, 'py-[12px]': body }
        )}
      />
    </div>
  )
}

export default ToolTip
