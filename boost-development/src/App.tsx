/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import React from "react"
import { HotKeys } from "react-hotkeys"

const keyMap = {
  DUMMY: ["cmd", "üasdf"]
}

import './styles/globals.scss'
import './styles/index.scss'

import './styles/icons.scss'

import './styles/cmdk/vercel.scss'
import './styles/cmdk/linear.scss'
import './styles/cmdk/raycast.scss'
import './styles/cmdk/framer.scss'
import './styles/github.css'

import { RaycastCMDK } from './components';

function App() {
  const [visible, setVisible] = React.useState(false)

  const dummyHandler = React.useCallback(() => {
    // console.log("Keycombination detected!")
  }, [])

  const handlers = {
    DUMMY: dummyHandler
  };

  var observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // @ts-ignore
      if (mutation.target.style.visibility === 'visible') {
        document.getElementById(":r2:")?.focus()
      }
    });
  });

  var observerConfig = {
    attributes: true,
    childList: false,
    characterData: false,
    attributeOldValue: true
  };

  const root = document.getElementById('root')
  if (root) {
    observer.observe(root, observerConfig);
  }

  // React.useEffect(() => {
  //   function listener(e: KeyboardEvent) {
  //     if (e.key === 'k' && e.ctrlKey) {
  //       e.preventDefault()
  //       if (root) {
  //         root.style.visibility = 'hidden'
  //       }
  //     }
  //   }

  //   document.addEventListener('keydown', listener)

  //   return () => {
  //     document.removeEventListener('keydown', listener)
  //   }
  // }, [])

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <div className="arc-boost">
            <RaycastCMDK></RaycastCMDK>
      </div>
    </HotKeys>
  )
}

export default App


