import { useState } from 'react';
import './App.css';
import Login from './pages/Login';

const App = () => {

  const [ocultar, setOcultar] = useState(false)
  const [usuarioLogado, setUsuarioLogado] = useState('')
  const enter = useRef(13)

  const logar = (usuario, senha) => {
    alert("Logar criado no app.js")
    if (usuario == 'admin' && senha == 'admin'){
      setUsuarioLogado(true)
      setOcultar(true)
    }
    else{
      setOcultar(false)
    }
  }

  const cadastrar = (usuario, senha) =>{
    alert(`${usuario} cadastrado com sucesso`)
  }

  return (
  <>
  {!ocultar ? <Login logar={logar}/> 
  :<h1> Olá {usuarioLogado}, seja bem-vindo</h1>}
  </>
  );
}

export default App;
