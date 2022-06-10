import Coordinate from './Coordinate'
import levels from '../data/levels'
import calcPosFromLatLonRad from '../utils/calcPosFromLatLonRad'
import Curve from './Curve'
import Circle from './Circle'
import { useSnapshot } from 'valtio'
import state from '../state'

const Coordinates = () => {
  const { selectedLevel } = useSnapshot(state)
  return (
    <>
      {levels.map((level, index) => {
        const currentPosition = calcPosFromLatLonRad(level.lat, level.lng)
        const nextPosition = calcPosFromLatLonRad(levels[index + 1]?.lat, levels[index + 1]?.lng)

        return (
          <group key={level.name}>
            <Coordinate position={currentPosition} levelIndex={index} />
            {selectedLevel === index && (
              <>
                <Circle position={currentPosition} endSize={0.45} endOpacity={0.8} delay={10} />
                <Circle position={currentPosition} endSize={1} endOpacity={0.1} />
              </>
            )}
            {nextPosition && <Curve position1={currentPosition} position2={nextPosition} />}
          </group>
        )
      })}
    </>
  )
}

export default Coordinates
