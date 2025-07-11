import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilhos(){
    
    const itens = [];
    
    return (
        <>
            <Lista>
                <Item conteudo="Teste"/>
                <Item conteudo="Teste 01"/>
                <Item conteudo="Teste 02"/>
            </Lista>
        </>
    )
}