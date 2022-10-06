import React, { useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
export default function App() {
  const [isDark, changeMode] = useState(true)
  function toggleDark() {
    changeMode(prevState => !isDark)
  }
  return (
    <div className='h-full m-auto max-w-screen-2xl'>
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Main isDark={isDark} />
    </div>
  )
}
