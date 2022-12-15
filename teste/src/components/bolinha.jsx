import React, { Component } from 'react';

const Bolinha = (props) =>(
    <>
    {(props.estilo !== '' ) ? <div className="circulo" style={{backgroundColor: props.estilo}}></div>

    :<div className="circulo" style={{backgroundColor: 'black'}}></div>
    }</>
)

Bolinha.defaultProps = {
    estilo: "black"
}

export default Bolinha;