import React, { type ReactElement } from 'react'
import ColorSwatch from './ColorSwatch'

interface Props {
  palette: object
}

function ColorBoard({ palette }: Props): ReactElement {
  const colorsArr = Object.entries(palette)

  return (
    <div className='inline-grid grid-cols-5 gap-[16px] py-[32px] px-[40px] bg-[#F9F9F9]'>
      {colorsArr.map(color => (
        <ColorSwatch
          key={color[0]}
          name={color[0]}
          description={color[1].description}
          hexCode={color[1].hexCode}
          contrastColor={color[1].contrastColor}
          contrast={color[1].contrast}
        />
      ))}
    </div>
  )
}

export default ColorBoard
