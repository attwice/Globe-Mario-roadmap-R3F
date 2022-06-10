import React from 'react'
import { useProgress } from '@react-three/drei'
import { a, useTransition } from '@react-spring/web'
import state from '../state'

const Loader = () => {
  const { progress: progressThree } = useProgress()
  console.log(progressThree)
  const transition = useTransition(progressThree < 100, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress: progressThree },
  })
  if (progressThree >= 100) {
    state.isThreeLoaded = true
  }

  return transition(({ progress, opacity }, active) => {
    return (
      active && (
        <a.div className="loading" style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div
              className="loading-bar"
              style={{
                width: progress.to((p) => `${p * 5 - 4}px`),
              }}
            >
              <a.div className="loading-data">{progress.to((p) => `${p.toFixed(2)}%`)}</a.div>
            </a.div>
          </div>
        </a.div>
      )
    )
  })
}

export default Loader
