import { useEffect, useRef } from 'react'
import { tw } from 'twind'
import { useSnapshot } from 'valtio'
import levels from '../data/levels'
import state from '../state'

const LevelSelection = () => {
  const { selectedLevel } = useSnapshot(state)
  const levelsRef = useRef(null)

  const handleKeyPressed = (event) => {
    if (event.key === 'ArrowLeft') {
      state.selectedLevel = Math.max(state.selectedLevel - 1, 0)
    } else if (event.key === 'ArrowRight') {
      state.selectedLevel = Math.min(state.selectedLevel + 1, levels.length - 1)
    }
  }

  const handleClick = (levelIndex) => {
    state.selectedLevel = levelIndex
  }

  useEffect(() => {
    if (levelsRef.current) {
      levelsRef.current.focus()
    }
  }, [levelsRef])

  return (
    <div
      ref={levelsRef}
      onKeyDown={handleKeyPressed}
      className={tw`absolute inset-0 z-10 overflow-x-hidden focus:outline-none`}
      tabIndex={0}
    >
      <div className="flex flex-col h-full items-center justify-end mx-auto relative w-full xl:w-7/12 2xl:w-5/12">
        <ul className={tw`flex justify-center mb-10 ml-60 text-white w-full z-10`}>
          {levels.map((level, levelIndex) => (
            <li
              className={tw`flex items-center -rotate-45 -ml-40 py-2 px-8 transform whitespace-nowrap hover:bg-white hover:text-black cursor-pointer ${
                selectedLevel === levelIndex && 'bg-white text-black'
              }`}
              onClick={() => handleClick(levelIndex)}
              key={level.name}
            >
              <div
                className={tw`absolute h-3 w-3 items left-0 mx-2 rounded-xl ${selectedLevel === levelIndex ? 'bg-red-500' : 'bg-white'}`}
              />
              <p className="w-40">{level.name}</p>
            </li>
          ))}
        </ul>
        <div className={tw`bg-mario-yellow flex h-4 items-center mb-10 rounded-2xl w-full z-0`} />
      </div>
    </div>
  )
}

export default LevelSelection
