import Login from "./pages/login"
import Home from "./pages/home"
import {useNavigate} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import axios from "axios";

function App() {
  const navigate = useNavigate()

    const logar = (email, senha) =>{
      axios.post('http://127.0.0.1:8000/auth/jwt/create', {
        username: email, //username é o nome da sua variável no backend, não o que foi criado na const acima
        password: senha
      }).then((res) =>{
        console.log(res)
        localStorage.setItem("Token", JSON.stringify(res.data))
      })

      const defaultOptions = { 
        headers: {
          Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxODQ1MzYyLCJqdGkiOiIxZWRiMWRlMTg4NDc0OTQ3OTIwYzk4MTZmNDRmNDUzMyIsInVzZXJfaWQiOjJ9.DLcyeQXKOzmhVv5pgb6W9Nar79XHhIEGt3cpD8mHP-Y'
        } //sempre será o JWT + token de acesso (que será puxado do local storage)
      
      };
      axios.get('http://127.0.0.1:8000/auth/jwt/clientes', 
      { ...defaultOptions}).then((res) => {
        console.log(res);
      })
      
      axios.post('/auth/jwt/refresh', {
        refreshToken: localStorage.getItem("Token")
      }).then((res) => {

      }
      )
    }

    const getAcessToken = () => {
      const info = JSON.parse(localStorage.getItem('token')) //converte string para JSON
      alert(info.acess)
    }
  return (
    
    <>
    <NavBar/>
    <Routes>
      {/* <Route path='/' element={<NavBar/>}/> */}
      <Route path='/login' element={<Login  onClick={logar} />} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
