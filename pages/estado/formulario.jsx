import { useState } from "react"

export default function formulario(){

    const [valor, setvalor] = useState("inicial")
    function alterarInput(){
        setvalor(valor + "!")
    }
    return (
        <div>
            <input type="text" name="nome" value={valor} onChange={ e => setvalor(e.target.value)}/>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}