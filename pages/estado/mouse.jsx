import { useState } from "react"

export default function props(){

    const [x, alterarX] = useState(0)
    const [y, alterarY] = useState(0)

    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        flexDirection: "column"
    }

    function moverMouse(ev){
        alterarX(ev.clientX)
        alterarY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={moverMouse}>
            <div>Eixo X: {x}</div>
            <div>Eixo Y: {y}</div>
        </div>
    )
}