import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import './loader.css'
import App from './App'
import { setup } from 'twind'

setup({
  theme: {
    extend: {
      colors: {
        mario: {
          yellow: '#B2991D',
          red: '#F60E2',
        },
      },
    },
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
