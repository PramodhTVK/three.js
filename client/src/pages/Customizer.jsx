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
          {/*flex: The flex class is used to create a flex container. It sets the element's display property to flex, enabling it to use flexbox layout. Flexbox is a powerful CSS layout model that allows you to create flexible and responsive designs. When you apply the flex class to an element, it becomes a flex container, and its child elements can be arranged using flexbox properties.
            items-center: The items-center class is used to vertically align the items within a flex container at the center. When applied to a flex container, it sets the value of the align-items property to center, which aligns the flex items along the vertical axis (main axis) at the center of the container.
            min-h-screen: The min-h-screen class is used to set the minimum height of an element to the height of the viewport (screen height). It ensures that the element takes up at least the full height of the viewport, preventing it from being shorter than the screen height. This class is commonly used to create full-height sections or layouts that span the entire viewport. */}
            <div className='editortabs-container tabs'>
              {EditorTabs.map((tab) => (
                <Tab key={tab.name} tab={tab} handleClick={()=>{}}/>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className='absolute top-5 z-10 right-5' {...fadeAnimation}>
                <CustomButton type='filled' title='Go Back' handleClick={()=>state.intro = true} customStyles='w-fit px-4 py-2.5 text-sm'/>
        </motion.div>

        <motion.div className='filtertabs-container' {...slideAnimation('up')}>
            <div className='filtertabs-container tabs'>
              {FilterTabs.map((tab) => (
                <Tab key={tab.name} tab={tab} isFilterTab isActiveTab="" handleClick={()=>{}}/>
              ))}
            </div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer