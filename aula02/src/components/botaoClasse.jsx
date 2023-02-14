import React, { Component } from 'react';

class BotaoClasse extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <button className='bg-green-500 p-1 border-solid m-1 w-10 rounded-md'>
                {this.props.texto}
            </button>
        </>
        );
    }
}

export default BotaoClasse;