import { Canvas } from '@react-three/fiber'
import { Environment,Center } from '@react-three/drei'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'

const CanvasModel = () => {
  return (
    <Canvas shadows camera={{position:[0,0,0],fov:25}} gl={{preserveDrawingBuffer: true}} className='w-full max-w-full h-full transition-all ease-in'>   {/* Canvas is a component from @react-three/fiber.It is a wrapper provided by react-three-fiber that sets up a WebGL Canvas ans creates a 3D Rendering Context */}
      {/*Web GL context is an object that represents the interface between JS code and WebGL APIs.It provides a way to interact with the WebGL API  */}
      <ambientLight intensity={0.5} />{/* ambientLight is a component from @react-three/fiber that adds ambient light to a scene.In React Three Fiber, the ambientLight component is a light source that provides ambient lighting to a 3D scene. Ambient lighting is a type of indirect lighting that evenly illuminates all objects in the scene, simulating the light that is scattered and reflected from various surfaces. */}
      <Environment preset="city" />{/* Environment is a component from @react-three/drei that provides a 360 degree background.
      In React Three Fiber, the <Environment> component is used to add a pre-built environment to a 3D scene. It provides a quick and convenient way to set up a realistic background and lighting for your scene.
      The preset prop in the <Environment> component allows you to choose from a variety of pre-defined environment presets that are included with the library. These presets are pre-configured 3D environments that provide a realistic backdrop, lighting, and reflections for your scene. */}
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel