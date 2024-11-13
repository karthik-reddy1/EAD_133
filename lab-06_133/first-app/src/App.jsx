import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Components/HelloWorld'
import Greeting from './Components/Greeting'
import Counter from './Components/Counter'
import PasswordStrengthChecker from './Components/PasswordStrengthChecker'
import Timer from './Components/Timer'

function App() {

  return (
    <>
      <HelloWorld />
      <Greeting name="Karthik"/>
      <Counter />
      <PasswordStrengthChecker />
      <Timer />
    </>
  )
}

export default App
