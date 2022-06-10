import { OrbitControls, Stars } from '@react-three/drei'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HtmlOverlay from './html'
import Earth from './canvas/Earth'
import Coordinates from './canvas/Coordinates'
import CameraManager from './canvas/CameraManager'
import Atmosphere from './canvas/Atmosphere'

export default function App() {
  return (
    <>
      <HtmlOverlay />
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000 }}>
        <ambientLight intensity={3} />
        <color attach="background" args={['#070707']} />
        <Suspense fallback="loading...">
          <Earth />
          <Atmosphere />
          <Coordinates />
        </Suspense>
        <CameraManager />
        <OrbitControls />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      </Canvas>
    </>
  )
}
