import { useState } from "react"
export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>El contador está en: {count}</p>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}