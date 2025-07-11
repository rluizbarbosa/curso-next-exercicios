import Pessoa from "../../components/Pessoa";

export default function exemploTs(){
    return (
        <div>
            <Pessoa nome="Rodrigo" idade={29} />
            <Pessoa nome="Carolina" />
        </div>
    )
}