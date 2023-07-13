import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div className='absolute left-full ml-3'>
    {/*The left-full class is a utility class that positions the left edge of the element at the right edge of its containing element. In this case, the left-full class is used in combination with the absolute class to position the element all the way to the right within its positioned ancestor.
      The ml-3 class is a margin utility class that adds a margin to the left side of the element. The 3 represents the margin value, which in this case is equivalent to 0.75rem based on Tailwind CSS's default spacing scale. */}
      <SketchPicker color={snap.color} disableAlpha onChange={color => state.color = color.hex} />
    </div>
  )
}

export default ColorPicker