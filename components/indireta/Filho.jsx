export default function Filho(props){
 return (
    <div>
        <h1>Filho Indireta</h1>
        <button onClick={() => props.funcao('Passei no ENEM')}>Falar com o pai</button>
    </div>
 )
}