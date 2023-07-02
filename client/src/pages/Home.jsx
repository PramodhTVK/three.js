import React from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { headContainerAnimation, headContentAnimation, headTextAnimation,slideAnimation } from '../config/motion'
import state from '../store'
import { CustomButton } from '../components'


const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain' />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
              LET'S <br className='xl:block hidden'/>DO IT.</h1>
              {/*On screens with an xl breakpoint or larger, the element will be displayed as a block-level element (display: block).
                 On screens smaller than the xl breakpoint, the element will be hidden (display: none).
                 xl breakpoint typically means extra large screens i.e width equal to or greater than 1280 px */}
            </motion.div>
            <motion.div className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'> 
              {/*The element's maximum width is restricted to a medium size on screens larger than the medium breakpoint.
                The font weight is set to normal, removing any bold or lighter weight styles.
                The text color is set to a medium-gray shade.
                The font size is set to the base size as defined in the configuration file.*/}
                Create your own unique and exclusive shirt with our brand-new 3D customisation tool. <strong> Unleash your creativity</strong>{" "}
                and define your own style.
              </p>

              <CustomButton type="filled" title="Customize it" handleClick={()=> state.intro = false} customStyles="w-fit px-4 py-2.5 font-bold text-sm"/>
              {/* The width of the element will adjust to fit its content.
                The element will have horizontal padding of size 4.
                The element will have vertical padding of size 2.5.
                The text within the element will have a bold font weight.
                The text within the element will have a small font size.*/ }
            </motion.div>
          </motion.div>
        </motion.section>)}
    </AnimatePresence>
  )
}

export default Home