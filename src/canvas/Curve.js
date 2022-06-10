import * as THREE from 'three'

const Curve = ({ position1, position2 }) => {
  const [x1, y1, z1] = position1
  const [x2, y2, z2] = position2

  const vector1 = new THREE.Vector3(x1, y1, z1)
  const vector2 = new THREE.Vector3(x2, y2, z2)
  const curvePoints = []

  for (let i = 0; i <= 20; i++) {
    const point = new THREE.Vector3().lerpVectors(vector1, vector2, i / 20)
    point.normalize()
    point.multiplyScalar(1 + 0.1 * Math.sin((Math.PI * i) / 20))
    curvePoints.push(point)
  }
  const path = new THREE.CatmullRomCurve3(curvePoints)

  return (
    <mesh>
      <tubeGeometry args={[path, 20, 0.005, 8, false]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  )
}

export default Curve
