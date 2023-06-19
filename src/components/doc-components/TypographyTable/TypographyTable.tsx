import React, { type ReactElement } from 'react'

export interface TypographyTableProps {
  fontStyles: any
  header?: boolean
}

const TypographyTable = ({
  fontStyles,
  header = true
}: TypographyTableProps): ReactElement => {
  const fontSizeArray = Object.keys(fontStyles.fontSize).map(key => ({
    key,
    value: fontStyles.fontSize[key]
  }))

  return (
    <div
      data-component-id='typographytable'
      className='flex flex-col gap-[16px] bg-white pb-[16px] overflow-hidden'>
      {header && (<div className='grid grid-cols-[4fr,2fr,1fr,1fr,1fr,1fr] items-center text-sm font-500 border-b border-N-100 bg-white px-[16px] py-[16px]'>
        <div className='flex items-center'>Type Style</div>

        <div className='flex items-center'>
          Font Family
        </div>

        <div className='flex items-center justify-center'>
          FontSize
        </div>

        <div className='flex items-center justify-center'>
          Spacing
        </div>

        <div className='flex items-center justify-center'>
          Weight
        </div>
        <div className='flex items-center justify-center'>
          Line-height
        </div>
      </div>)}

      {fontSizeArray.map(({ key, value }) => {
        const { label, letterSpacing, fontWeight, lineHeight } = value[1]

        const style = {
          fontFamily: fontStyles.fontFamily,
          fontSize: value[0],
          letterSpacing,
          fontWeight,
          lineHeight
        }

        return (
          <div
            key={key}
            className='grid grid-cols-[4fr,2fr,1fr,1fr,1fr,1fr] items-center border-b border-N-100 text-sm px-[16px] py-[12px]'>
            <div className='flex items-center'>
              <p style={style}>{label}</p>
            </div>

            <div className='flex items-center'>
              <p>{style.fontFamily[0] ?? '—'}</p>
            </div>

            <div className='flex items-center justify-center'>
              <p>{style.fontSize ?? '—'}</p>
            </div>

            <div className='flex items-center justify-center'>
              <p>{style.letterSpacing ?? '—'}</p>
            </div>

            <div className='flex items-center justify-center'>
              <p>{style.fontWeight ?? '—'}</p>
            </div>

            <div className='flex items-center justify-center'>
              <p>{style.lineHeight ?? '—'}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TypographyTable
