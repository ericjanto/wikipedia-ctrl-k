/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import './styles/globals.scss'
import './styles/index.scss'

import './styles/icons.scss'

import './styles/cmdk/vercel.scss'
import './styles/cmdk/linear.scss'
import './styles/cmdk/raycast.scss'
import './styles/cmdk/framer.scss'

import { RaycastCMDK } from './components';

function App() {
  return (
    <div className="App root">
      <header className="App-header">
        <div>
          <RaycastCMDK></RaycastCMDK>
        </div>
      </header>
    </div>
  )
}

export default App


