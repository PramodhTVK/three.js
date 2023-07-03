import React from 'react'
import { easing } from 'maath' //This line imports the easing module from the maath library. The easing module provides various easing functions that can be used for smooth animations and transitions.
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'  //This line imports the useFrame hook from the @react-three/fiber library. The useFrame hook is used in React Three Fiber to perform actions or updates on every frame of the 3D scene. It allows you to create animations or apply transformations to objects based on the current frame.
import { Decal,useGLTF,useTexture } from '@react-three/drei' //This line imports the Decal, useGLTF, and useTexture components from the @react-three/drei library. Decal is a component used to apply decals to 3D objects, useGLTF is a hook used for loading and accessing GLTF models, and useTexture is a hook used for loading and managing textures in a Three.js scene.
import state from '../store'

//GLTF (GL Transmission Format) is a file format commonly used for representing 3D models and scenes.
const Shirt = () => {
    const snap = useSnapshot(state)
    const { nodes,materials } = useGLTF('/shirt_baked.glb')

    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)
  return (
    <group> {/* The <group> component is a wrapper component from React Three Fiber that allows you to group multiple objects together. */}
        <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} dispose={null}> {/* The <mesh> component is a wrapper component from React Three Fiber that allows you to add a mesh to a scene.In React Three Fiber, the <mesh> component is used to create a 3D mesh object in a Three.js scene. It represents a geometric shape or model with a specific geometry, material, and position. */}
        {/*In the provided code snippet, a <mesh> component is being used to render a 3D object from a glTF file. Let's break down the properties and their meanings:
            castShadow: This property enables or disables casting shadows from the mesh. When set to true, the mesh will cast shadows onto other objects in the scene.
            geometry={nodes.T_Shirt_male.geometry}: The geometry property specifies the geometry data for the mesh. In this case, it is referencing the geometry of a node named T_Shirt_male from the loaded glTF file.
            material={materials.lambert1}: The material property specifies the material to be applied to the mesh. It is referencing a material named lambert1 from the loaded glTF file.
            material-roughness={1}: This property sets the roughness of the material. In this case, it is set to 1, which means the material will have a high level of roughness, resulting in a less shiny appearance.
            dispose={null}: This property is used to control the disposal behavior of the mesh. Setting it to null prevents the mesh from being automatically disposed when it is removed from the scene. This can be useful in certain scenarios to manage the disposal manually.*/}
        </mesh>
    </group>
  )
}

export default Shirt