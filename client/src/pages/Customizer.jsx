import React,{ useState,useEffect } from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import { downloadCanvasToImage,reader } from '../config/helpers'
import { EditorTabs,FilterTabs,DecalTypes } from '../config/constants'
import { fadeAnimation,slideAnimation } from '../config/motion'
import { CustomButton,ColorPicker,AIPicker,FilePicker,Tab } from '../components'

const Customizer = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div key="custom" className='absolute top-0 left-0 z-10' {...slideAnimation('left')}>
        {/* absolute: This class positions an element using absolute positioning. An element with the absolute class is taken out of the normal flow of the document and positioned relative to its closest positioned ancestor. It allows you to precisely position an element within its containing element.
            top-0: This class sets the top position of an absolutely positioned element to 0. It means the element will be positioned at the top of its containing element. By setting top to 0, the element will be aligned with the top edge of its containing element.
            left-0: This class sets the left position of an absolutely positioned element to 0. It means the element will be positioned at the left side of its containing element. By setting left to 0, the element will be aligned with the left edge of its containing element.
            z-10: This class sets the z-index of an element to 10. The z-index property determines the stacking order of elements that overlap on the z-axis. An element with a higher z-index will appear above elements with lower z-index values. In this case, the element with the z-10 class will be stacked above elements with default or lower z-index values.*/ }
          <div className='flex items-center min-h-screen'>
            <div className='editortabs-container tabs'>
              {EditorTabs.map((tab) => (
                <Tab key={tab.name} tab={tab} handleClick={()=>{}}/>
              ))}
            </div>
          </div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer