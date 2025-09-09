import { useEffect, useState } from "react"

export const CounterWithEffect = () => {
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) { 
            console.log(`El contador cambió a: ${count}`); 
        }
    }, [count, clicked]);

    const handleClick = () => { setCount(count + 1); setClicked(true)}; // Cambia el estado a true en el primer clic };

    return (
        <div>
            <p>El contador está en: {count}</p>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    )
}