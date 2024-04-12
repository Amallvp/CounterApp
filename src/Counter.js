import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice, { decrement, increment, reset } from './redux/counterSlice';




function Counter() {

    const count = useSelector(state=>state.counterReducer.value)

    const dispatch=useDispatch()

  return (
    <div>


<h1 className='text-center mt-5 text-white' >Counter App</h1>

<div id='f' className='container text-center shadow p-5 border mt-5'>
<h1 className='mb-5'>{count}</h1>


 <button onClick={()=>dispatch(increment())}  id='btn-one' className="btn btn-white mt-3"><b>Increment</b></button>    
 <button onClick={()=>dispatch(decrement())}  id='btn-two' className="btn btn-white mt-3 ms-2"><b>Decrement</b></button>   
  <button onClick={()=>dispatch(reset())}  id='btn-reset' className="btn btn-white mt-3 ms-2"><b>reset</b></button>
  
  </div>
</div>
        
   
  )
}

export default Counter