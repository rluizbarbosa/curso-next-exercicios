import { Component } from "react";

export default class Contador extends Component{

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo 
        })
    }

    dec = () => this.setState({
            numero: this.state.numero - this.state.passo 
        })

    renderForm() {
        return(
            <div>
                <input type="number" min={1} max={999} value={this.state.passo} onChange={ev => this.setState({passo: +ev.target.value})}/>
                <button onClick={() => this.inc()}>Incremetar</button>
                <button onClick={this.dec}>Decrementar</button>
            </div>
        )
    }
    render(){
        return (
            <div>
                <h1>Teste Classe</h1>
                <h2>{this.state.numero}</h2>
                {this.renderForm()}
            </div>
        )
    }
}