/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';

import logo from './logo.svg'
import './App.css'

// function getLogo() {
//   if (window.chrome) {
//     return window.chrome.runtime.getURL(logo.toString())
//   }

//   return logo
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={`${getLogo()}`} className="App-logo" alt="logo" /> */}
        <p>Hello, hey!</p>
        <p>I'm a Chrome Extension Popup!</p>
        <FaceIcon />
      </header>
    </div>
  )
}

export default App


