import { Sphere } from '@react-three/drei'
import AtmosphereMaterial from '../shaders/AtmosphereMaterial'
import * as THREE from 'three'

const Atmosphere = () => {
  return (
    <>
      <Sphere args={[1, 32, 32]} scale={[1.1, 1.1, 1.1]}>
        <AtmosphereMaterial blending={THREE.AdditiveBlending} side={THREE.BackSide} />
      </Sphere>
    </>
  )
}

export default Atmosphere
