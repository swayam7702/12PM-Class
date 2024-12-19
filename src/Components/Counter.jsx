import React, { useState } from 'react'

const Counter = () => {

    // let counter = 0;  // Normal Variable


    let [counter,setCounter] =  useState(0)

    function incValue(){
        // alert("Working!!")
        setCounter(++counter)
 
    }

    function decValue(){
       setCounter(--counter)
    }

  return (
    <div className='counter-parent'>
        <div className="counter">
            <h1 id='counter-value'>{counter}</h1>
        <div className="btns">
            <button onClick={incValue}>+</button>
            <button onClick={decValue}>-</button>
        </div>
        </div>
    </div>
  )
}

export default Counter
