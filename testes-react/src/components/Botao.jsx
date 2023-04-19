import React from 'react';

const Botao = ({children, onClick, type}) => {
    return ( 
        <>
        <button type={type} onClick={onClick} className='p-3 rounded-xl bg-pink-700 text-black font-bold'>{children}
        </button>
        </>
     );
}
 
export default Botao;