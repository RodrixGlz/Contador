import React, { useState } from 'react'
import './App.css'


function App() {
  const [Count, setCount] = useState(0);

  return <div className='Container'>
    <div className='Card-text-center'>
      <div className='Card-Body'>
        <h1>Counter App</h1>
        <div className='Botones'>
          <h2>{Count}</h2>
          <button className='btn-Decrement' onClick={() => setCount(Count - 1)}>-</button>
          <button className='btn-Reset' onClick={() => setCount(0)}>Reset</button>
          <button className='btn-Increment' onClick={() => setCount(Count + 1)}>+</button>
        </div>
      </div>
    </div>
  </div>
}

export default App