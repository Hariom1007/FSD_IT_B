import React, { useRef } from 'react'
import (useRef) from 'react'

const refex = () => {
    console.log("Object Rendered")
    const refcount=useRef(0);
    function handleIncrement(){
        refcount.current++
        if(refcount.current==5)
            alert("current refcount="+refcount.current)
        console.log("refcount=",refcount.current)
    }

  return (
    <div>
        <h1>UseRefExample</h1>
        <h2>RefCount:</h2>
        <button onClick={handleIncrement}>Increment</button>
        </div>
  )
}

export default refex