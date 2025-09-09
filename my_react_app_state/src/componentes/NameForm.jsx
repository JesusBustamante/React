import { useState } from "react"

export const NameForm = () => {
    const [name, setName] = useState('');
    const changeName = (e) => setName(e.target.value);
    

    return (
        <div>
            <input type="text" 
            placeholder="Ingresa tu nombre" 
            value={name} 
            onChange={changeName} 
            />
            <p>Hola, {name || "visitante"}</p>
        </div>
    )
}