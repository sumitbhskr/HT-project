import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply  } from './counter/counterSlice'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
      <div>
        <button onClick={() => dispatchEvent(decrement())}>-</button>
       Currently count is  {count}
         <button onClick={() => dispatchEvent(increment())}>+</button>
         <button onClick={() => dispatchEvent(multiply())}>*</button>
      </div>
       
    </>
  )
}

export default App
