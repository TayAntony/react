import React, { Component } from 'react';

class Contador extends Component {
    state = { contador: 0}
    incrementar = () => {
    this.setState({contador: this.state.contador += 1})}
    render() {
        return (
            <>
            {this.state.contador}
            <button onClick={this.incrementar}>+</button>
            </>
        );
    }
}

export default Contador;