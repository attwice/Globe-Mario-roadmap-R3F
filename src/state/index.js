import { proxy } from 'valtio'

const state = proxy({
  selectedLevel: 0,
  isThreeLoaded: false,
})

export default state
