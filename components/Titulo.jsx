export default function Titulo (props){
    return props.pequeno ? 
    (
        <>
            <p>{props.primario}</p>
            <p>{props.secundario}</p>
        </>
    )
    : (
        <>
            <h1>{props.primario}</h1>
            <h2>{props.secundario}</h2>
        </>
    )
}