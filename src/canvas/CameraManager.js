import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import state from '../state'
import levels from '../data/levels'
import calcPosFromLatLonRad from '../utils/calcPosFromLatLonRad'

function CameraManager() {
  const { selectedLevel } = useSnapshot(state)
  const currentLevel = levels[selectedLevel]
  const currentPosition = calcPosFromLatLonRad(currentLevel.lat, currentLevel.lng)
  const [x, y, z] = currentPosition

  const vec = new THREE.Vector3(x, y, z)

  return useFrame((state) => {
    state.camera.position.lerp(vec, 0.04).normalize().multiplyScalar(2)
    state.camera.lookAt(0, 0, 0)
    state.camera.updateProjectionMatrix()
  })
}

export default CameraManager
