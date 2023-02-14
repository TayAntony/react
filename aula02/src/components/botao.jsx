import React, { Component } from 'react';

const Botao = ({cor, texto, cor_fonte, onClick}) => {
    return ( 
    <>
        <button className='border p-1 border-solid m-1 w-20 rounded-md border-black' onClick={onClick}>
            {texto}
        </button>
    </>
        );
}

Botao.defaultProps = {
    texto : 'Clique',
    cor: 'white',
    cor_fonte : 'red'
}
export default Botao;
