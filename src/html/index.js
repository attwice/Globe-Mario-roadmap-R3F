import { useSnapshot } from 'valtio'
import state from '../state'
import LevelImage from './LevelImage'
import LevelSelection from './LevelSelection'

const HtmlOverlay = () => {
  const { selectedLevel } = useSnapshot(state)
  return (
    <>
      <LevelImage key={selectedLevel} selectedLevel={selectedLevel} />
      <LevelSelection />
    </>
  )
}

export default HtmlOverlay
