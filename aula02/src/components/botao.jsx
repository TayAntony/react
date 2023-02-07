import React, { Component } from 'react';

const Botao = ({cor, texto}) => {
    return ( 
    <>
        <button style={{background: cor}} className='border p-1 border-solid m-1 w-20 rounded-md border-black'>
            {texto}
        </button>
    </>
        );
}

Botao.defaultProps = {
    texto : 'Clique',
    cor: 'white'
}
export default Botao;
