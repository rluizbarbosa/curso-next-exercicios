import { useEffect, useState } from "react"
import { mega} from "../../functions/mega"
import NumeroDisplay from "../../components/NumeroDisplay"


export default function Mega(){

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderNumeros(){
        return numeros.map((n, i) => <NumeroDisplay key={n} numero={n}/>)
    }


    return (
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%'
            }}>
            <h1>Mega sena</h1>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={ev => setQtde(ev.target.value)} />
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar aposta
                </button>
            </div>
            
        </div>
    )
}