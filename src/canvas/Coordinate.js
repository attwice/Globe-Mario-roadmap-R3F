import { Sphere } from '@react-three/drei'
import { A11y } from '@react-three/a11y'
import state from '../state'

const Coordinate = ({ position, levelIndex }) => {
  const handleClick = (levelIndex) => {
    state.selectedLevel = levelIndex
  }

  return (
    <A11y role="button" actionCall={() => handleClick(levelIndex)}>
      <Sphere args={[0.03, 20, 20]} position={position}>
        <meshBasicMaterial color="#FEFE87" attach="material" />
      </Sphere>
    </A11y>
  )
}

export default Coordinate
