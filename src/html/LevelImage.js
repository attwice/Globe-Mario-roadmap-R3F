import { tw, css } from 'twind/css'
import { a, useSpring, config } from '@react-spring/web'

const LevelImage = ({ selectedLevel }) => {
  const [{ opacity }] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
    delay: 200,
  }))

  return (
    <a.div style={{ opacity }} key={selectedLevel} className={tw`absolute left-28 top-28 z-10`}>
      <img
        className={tw(
          css`
            width: 400px;
            @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
              -webkit-transform: rotate3d(0, 1, 0, 188deg);
            }
          `
        )}
        alt=""
        src={`/levels/${selectedLevel}.jpeg`}
      />
    </a.div>
  )
}

export default LevelImage
