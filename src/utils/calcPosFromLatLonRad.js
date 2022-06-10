// from https://gist.github.com/akella/db4c19140271f887ff0ee68e8f173f15
const calcPosFromLatLonRad = (lat, lng) => {
  if (!lat || !lng) return undefined

  var phi = (90 - lat) * (Math.PI / 180)
  var theta = (lng + 180) * (Math.PI / 180)

  let x = -(Math.sin(phi) * Math.cos(theta))
  let z = Math.sin(phi) * Math.sin(theta)
  let y = Math.cos(phi)

  return [x, y, z]
}

export default calcPosFromLatLonRad
