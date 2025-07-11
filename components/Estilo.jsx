export default function estilo(props){

    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
                color: props.color,
                textAlign: props.direita ? "right" : "left"
            }}>
                Texto de teste
            </h1>
            <h2 className={props.numero >= 0 ? "azul" : "vermelha"}>Texto #02</h2>
        </div>
    )
}