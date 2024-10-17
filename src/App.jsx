 
 
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { changeRange, decrement, increment, reset } from './Redux/counterSlice'
import { useState } from 'react';

function App() {
   const count = useSelector((state)=>state.counter.value)
   console.log(count);
   
  const dispatch = useDispatch()
  
  const [range,setRange] = useState('')

  return (
    <>
       <main>
        <section>
          <h1>Counter Application</h1>
          <div className='result'>{count}</div>
          <div>
            <button onClick={()=>dispatch(decrement())}  className='decrement'>Decrement</button>
            <button onClick={()=>dispatch(reset())}   className='reset'>Reset</button>
            <button onClick={()=>dispatch(increment())}   className='increment'>Increment</button>
          </div>
          <input type="text" placeholder='Enter The Range' onChange={(e)=>setRange(e.target.value)} />
          <button onClick={()=>dispatch(changeRange(Number(range)))}>Click</button>
        </section>
      </main>
    </>
  )
}

export default App
