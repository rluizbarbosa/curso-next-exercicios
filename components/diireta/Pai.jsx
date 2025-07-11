import Filho from "./Filho";

export default function Pai(props){
 return (
    <div>
        <h1>Familia: {props.familia}</h1>
        <Filho familia={props.familia} nome="Rodrigo" />
        <Filho familia={props.familia} nome="Felipe"/>
        <Filho {...props} nome="Carolina" />
    </div>
 )
}