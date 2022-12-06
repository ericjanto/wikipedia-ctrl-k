/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import React from "react"
import { HotKeys } from "react-hotkeys"

const keyMap = {
  DUMMY: ["cmd", "ü"]
}

import './styles/globals.scss'
import './styles/index.scss'

import './styles/icons.scss'

import './styles/cmdk/vercel.scss'
import './styles/cmdk/linear.scss'
import './styles/cmdk/raycast.scss'
import './styles/cmdk/framer.scss'

import { RaycastCMDK } from './components';

function App() {
  const [visible, setVisible] = React.useState(false)

  const dummyHandler = React.useCallback(() => {
    console.log("Keycombination detected!")
  }, [])

  const handlers = {
    DUMMY: dummyHandler
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <div className="arc-boost">
            <RaycastCMDK></RaycastCMDK>
      </div>
    </HotKeys>
  )
}

export default App


