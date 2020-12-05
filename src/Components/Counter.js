import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div style={{textAlign: "center"}}>
            <h1>{count}</h1>
            <button onClick = {()=>setCount(prevState => ++prevState)}>+1</button>
            <button onClick = {()=>setCount(prevState => --prevState)}>-1</button>
        </div>
    )
}

export default Counter
