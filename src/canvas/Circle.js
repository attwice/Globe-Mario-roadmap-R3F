import { useTexture } from '@react-three/drei'
import { useSpring, animated as a, config } from '@react-spring/three'

const Circle = ({ position = [], endSize, endOpacity, delay = 0 }) => {
  const [{ opacity, size }] = useSpring(() => ({
    from: { opacity: 1, size: 0.1 },
    to: { opacity: endOpacity, size: endSize },
    loop: true,
    config: config.molasses,
    delay,
  }))
  const texture = useTexture('/texture/particle/circle2.png')
  return (
    <>
      <points renderOrder={1}>
        <a.pointsMaterial
          size={size}
          opacity={opacity}
          color="#D0D2D3"
          alphaMap={texture}
          transparent
          depthWrite={false}
          depthTest={false}
        />
        <bufferGeometry attach="geometry">
          <bufferAttribute attachObject={['attributes', 'position']} count={1} array={new Float32Array(position)} itemSize={3} />
        </bufferGeometry>
      </points>
    </>
  )
}

export default Circle
