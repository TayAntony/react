import React, { Component } from 'react';
// duas maneiras de criar um componente no react

// 2 class = class component
class TituloC extends Component {
    state = {  } //memória da nossa aplicação no navegador

    render() { 
        let minhaClasse = "padrão"
        if(this.props.mensagem == "oi"){
            minhaClasse = "bemvindo"
        }
        return (
            <>
            <h1 className={minhaClasse}>{this.props.mensagem}</h1>
            </>
            
        );
    }
}



export default TituloC;