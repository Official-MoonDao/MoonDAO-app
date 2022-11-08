import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { BoxGeometry } from 'three'
import { Moon } from './Moon'

export function Scene() {
  return (
    <Suspense fallback={null}>
      <Canvas
        className={'animate-fadeIn'}
        style={{
          position: 'absolute',
          top: '0%',
          left: '0%',
          zIndex: '-1',
        }}
      >
        <hemisphereLight color={'slateblue'} intensity={0.5} />
        <pointLight position={[-2, 1, 4]} color={'white'} intensity={0.35} />
        <Moon />
      </Canvas>
    </Suspense>
  )
}