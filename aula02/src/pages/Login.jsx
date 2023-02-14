import React, { Component, useState } from 'react';
import Botao from '../components/botao';

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [exibir, setExibir] = useState(true)
    const texto = "Miau tay, seja bem vinda"

    
    const logar = () =>{
        if(usuario == "tay" || senha == "123"){
            setExibir(false)
        }
            
        else{
            alert("Usuário ou senha incorretos!")
        }
    }
        
    const cadastrar = () => (
        alert('Cadastrando...')
    )

    return ( 
        <>
        {exibir ? 
        <>
        <div className='flex flex-col'>
                    <input type="text" placeholder='Digite seu usuário' onChange={e => setUsuario(e.target.value)} className='outline m-4' />

                    <input type="password" placeholder='Digite sua senha' onChange={e => setSenha(e.target.value)} className='outline m-4' />
        </div>
        <div className='flex justify-center'>
            <Botao texto='Logar' cor='red' onClick={logar} />
            <Botao texto='Cadastrar' cor='blue' onClick={cadastrar} />
        </div>
        </>
    :<h1> Olá {usuario}, seja bem-vindo</h1>}
        
</>
     );
}
    
export default Login;