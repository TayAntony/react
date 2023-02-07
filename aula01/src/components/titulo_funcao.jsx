import React, { Component, useState} from 'react';

const Titulo_func = () => {
    const [contador, setContador] = useState(10)
    let resultado = ''
    
    if(contador < 0){
        resultado = 'Abaixo da meta'
    }else if(contador > 10){
        resultado = 'Bateu a meta'
    } else{
        resultado =  'Situação estável'
    }

    return ( 
    <div className='text-center'>
        <p className='mt-4'>O resultado é : {contador} = <span className={contador > 10 ? 'verde' :  contador < 0 ? 'vermelho' : 'amarelo' }> {resultado} </span></p>
        <button onClick={() => setContador(contador + 1)} className="border-slate-900 border bg-green-500 m-6 p-2 rounded-lg hover:bg-green-400">Clique aqui para <span className='font-bold'>aumentar</span></button>

        <button onClick={() => setContador(contador - 1)} className="border-slate-900 border bg-red-600 m-6 p-2 rounded-lg hover:bg-red-500 text-white">Clique aqui para <span className='font-bold'>diminuir</span></button>
    </div>);
}
 
export default Titulo_func;
