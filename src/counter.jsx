import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(50);


    const handleAdd =() => {
        const newCount = count + 1;
        setCount(newCount)
    }

    return (
        <div style={{border: '2px solid green'}}>
            <h1>Counter : {count}</h1>
            <button  onClick={handleAdd}> Add </button>
        </div>
    )
}