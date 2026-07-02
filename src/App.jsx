import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-5xl font-bold tracking-tight">
        ARO G1
      </h1>
    </main>
  )
}

export default App
