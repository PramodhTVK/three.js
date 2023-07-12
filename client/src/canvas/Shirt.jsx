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

    useFrame((state,delta) => {easing.dampC(materials.lambert1.color,snap.color,0.25,delta)})

    const stateString = JSON.stringify(snap)
  return (
    <group key={stateString}> {/* The <group> component is a wrapper component from React Three Fiber that allows you to group multiple objects together. */}
        <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} dispose={null}> {/* The <mesh> component is a wrapper component from React Three Fiber that allows you to add a mesh to a scene.In React Three Fiber, the <mesh> component is used to create a 3D mesh object in a Three.js scene. It represents a geometric shape or model with a specific geometry, material, and position. */}
        {/*In the provided code snippet, a <mesh> component is being used to render a 3D object from a glTF file. Let's break down the properties and their meanings:
            castShadow: This property enables or disables casting shadows from the mesh. When set to true, the mesh will cast shadows onto other objects in the scene.
            geometry={nodes.T_Shirt_male.geometry}: The geometry property specifies the geometry data for the mesh. In this case, it is referencing the geometry of a node named T_Shirt_male from the loaded glTF file.
            material={materials.lambert1}: The material property specifies the material to be applied to the mesh. It is referencing a material named lambert1 from the loaded glTF file.
            material-roughness={1}: This property sets the roughness of the material. In this case, it is set to 1, which means the material will have a high level of roughness, resulting in a less shiny appearance.
            dispose={null}: This property is used to control the disposal behavior of the mesh. Setting it to null prevents the mesh from being automatically disposed when it is removed from the scene. This can be useful in certain scenarios to manage the disposal manually.
            The disposal process in the context of computer graphics, such as Three.js, refers to the proper release and cleanup of resources associated with objects that consume memory or other system resources. It involves freeing up resources and memory that are no longer needed, preventing memory leaks and optimizing performance.
            In Three.js, various objects can consume resources, such as geometries, materials, textures, and buffers. When you no longer need these objects, it is important to dispose of them properly to ensure efficient memory usage.*/}
        {snap.isFullTexture && (
          <Decal 
            position={[0,0,0]}
            rotation={[0,0,0]}
            scale={1}
            map={fullTexture} />
        )}  {/*Decal is a component that is used to apply texture onto a 3D object on the screen
              position: Specifies the position of the decal in 3D space. The [0, 0, 0] value means the decal is positioned at the origin of the scene.
              rotation: Specifies the rotation of the decal around the X, Y, and Z axes. The [0, 0, 0] value means the decal has no rotation.
              scale: Specifies the scale of the decal. A scale value of 1 means the decal is at its original size.
              map: Specifies the texture to be used for the decal. The fullTexture variable is likely a reference to a texture object that is imported or defined elsewhere in the code. The map prop expects a texture object to be passed in.*/}

        {snap.isLogoTexture && (
          <Decal 
            position={[0,0.04,0.15]}
            rotation={[0,0,0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true} />
        )} {/*map-anisotropy: Specifies the level of anisotropic filtering applied to the decal's texture. Anisotropic filtering is a technique used to improve the visual quality of textures when they are viewed at oblique angles. The value 16 indicates a higher level of anisotropic filtering.
              depthTest: Determines whether the decal should be tested against other objects in the scene for depth visibility. When false, the decal is not tested against other objects and is always rendered on top. This can be useful for decals that should always be visible, regardless of their position relative to other objects.
              depthWrite: Specifies whether the decal should write to the depth buffer. When true, the decal will affect the depth buffer, allowing it to occlude other objects and be occluded by them based on their relative positions in the scene.*/}
        </mesh>
    </group>
  )
}

export default Shirt