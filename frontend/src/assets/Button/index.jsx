import { useState } from 'react'

const [count, setCount] = useState(0)

export default function ChaptersCounterButton(){
    return(
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        )
}


