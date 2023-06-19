import React, { type ReactElement } from 'react'

interface Props {
  name: string
  description: string[]
  hexCode: string
  contrastColor: string
  contrast: string
}

function ColorSwatch({
  name,
  description,
  hexCode,
  contrastColor,
  contrast
}: Props): ReactElement {
  return (
    <div className='flex flex-col gap-[12px] overflow-hidden rounded-[8px] bg-white drop-shadow-lg w-[100%]'>
      <div
        className='flex justify-center h-[80px] items-center text-base font-medium text-center'
        style={{
          backgroundColor: hexCode,
          color: contrastColor
        }}>
        {contrast}
      </div>
      <div className='box-border flex flex-col p-[12px] border-b border-b-N-100'>
        <span className='text-N-800 text-base font-medium !font-heading'>
          {name}
        </span>
        <span className='text-N-500 !text-xs !font-normal !font-heading'>
          {hexCode}
        </span>
      </div>
      <div className='flex flex-col pt-[12px] py-[8px] px-[12px]'>
        <span className='text-N-500 !text-xs !font-normal !font-heading'>
          DESCRIPTION
        </span>
        <ul className='text-N-700 !text-xs !font-normal !font-heading !mt-[4px] !mb-0 !pl-[20px]'>
          {description.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ColorSwatch
