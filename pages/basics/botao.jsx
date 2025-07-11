function acao1(){
    console.log("Acao1")
}




export default function botao(){

    function acao2(){
        console.log("Acao2")
    }

    function acao5(e){
        console.log(e)
    }

    return (
        <> 
            <div>
                <input type="text" onChange={e => console.log(e.target.value)}></input>
            </div>
            <button onClick={acao1} >click 01</button>
            <button onClick={acao2} >click 02</button>
            <button onClick={
                function(){
                    console.log("Acao3")
                }
            } >click 03</button>
            <button onClick={() => console.log("acao4")} >click 04</button>
            <button onClick={acao5} >click 05</button>
            <button onClick={e => acao5(e.altKey)} >click 05 v2</button>

        </>
    )
}