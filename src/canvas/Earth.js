import { Sphere, useTexture } from '@react-three/drei'

const Earth = () => {
  const texture = useTexture('/texture/earth.jpg')

  return (
    <>
      <Sphere args={[1, 32, 32]}>
        <meshBasicMaterial map={texture} attach="material" />
      </Sphere>
    </>
  )
}

export default Earth
