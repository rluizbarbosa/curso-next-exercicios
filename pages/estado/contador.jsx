import NumeroDisplay from "../../components/NumeroDisplay"
import { useState } from "react"

export default function contador(){
    
    const [numero, setNumero] = useState(0)

    const dec = () => setNumero(numero-1)

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />
            <div>
                <button onClick={dec}>-</button>
                <button onClick={() =>  setNumero(numero+1)}>+</button>
            </div>
        </div>
    )
}