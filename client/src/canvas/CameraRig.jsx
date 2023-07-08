import React,{ useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'

const CameraRig = ({ children }) => {
    const group = useRef()  //The useRef hook in React is used to create a mutable reference that persists across re-renders of a functional component. It provides a way to store and access values that are associated with a component, similar to how instance variables work in class components.
    const snap = useSnapshot(state)

    useFrame((state,delta) => {
    const isBreakPoint = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 600

    //set initial position
    let targetPosition = [-0.4,0,2]  //[0,0,0] is the coordinate for the center of the screen
    if(snap.intro){
      if(isBreakPoint) targetPosition = [0,0,2];
      if(isMobile) targetPosition = [0,0.2,2.5];
    }else{
      if(isMobile) targetPosition = [0,0,2.5];
      else targetPosition = [0,0,2];
    }

    //set model camera position
    easing.damp3(state.camera.position,targetPosition,0.25,delta)
    //set the model rotation smoothly
    easing.dampE(group.current.rotation,[state.pointer.y /10,-state.pointer.x /5,0],0.25,delta)
  
  })

  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig