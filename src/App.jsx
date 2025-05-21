import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>My Reactstore</h1>
      <hr/>
    </header>
      <main>
     <h2>Product List</h2>
      </main>
      <footer>
        <hr/>
        &copy; 2005.All rights Reserved.
      </footer>
    </>
  )
}

export default App
