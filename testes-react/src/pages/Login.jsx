import React, { useState } from 'react';
import Botao from '../components/Botao';


const Login = ({onClick}) =>{
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <>
        <div className='flex justify-center items-center p-2'>
            <div className='w-1/2 bg-gray-300 '>
                <input type="text" placeholder='Login' className='p-2 m-3 bg-pink-600' onChange={(e) => setLogin(e.target.value)}/>
                <input type="password" placeholder='Senha' className='p-2 m-3 bg-pink-600' onChange={(e) => setSenha(e.target.value)}/>
                <Botao onClick={() => onClick(login, senha)}>Acessar</Botao>
            </div>
        </div>
        </>
    )
}
export default Login;