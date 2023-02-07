import React from 'react'
import './App.css'
import { useState } from 'react'
function App(){
const[count,setCount]=useState(0);
function inc (){
  setCount(count+1)
}
const dec=()=>{
  setCount(count-1)
}
if(count<0){
  return <h1>Your Going Backward</h1>
}
  return(
    <>
 <h1>You clicked {count} times</h1>
<button onClick={inc}>
  Increment
 </button>
 <button onClick={dec}>Decrement</button>
    </>
  );
}
export default App;
