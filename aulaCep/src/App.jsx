import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Cep from './components/cep'

function App() {
  const [endereco, setEndereco] = useState('')
  const [cep, setCep] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [erro, setErro] = useState('');

  useEffect(() => {
    if (cep.length === 5){
      setCep(cep + '-')
    }

    if (cep.length == 9) {
      consumirApiViacep()
    }
    else{
      setEndereco('')
      setBairro('')
      setCidade('')
      setUf('')
      setErro('')
    }


  }, [cep])

  const consumirApiViacep = () => {
    console.log("buscar cep viacep")
    axios.get(`https://viacep.com.br/ws/${cep}/json/`, {timeout: 500})
      .then((res)=>{
        if (res.data.erro) {
          setEndereco('');
          setBairro('');
          setCidade('');
          setUf('');
          setErro('CEP não encontrado')
        } else {
          setEndereco(res.data['logradouro']);
          setBairro(res.data['bairro']);
          setCidade(res.data['localidade']);
          setUf(res.data['uf']);
          setErro('');
        }
      })
    .catch(() => {
      consumirApiCep()
    });
  }

  const consumirApiCep = () => {
    console.log("buscar cep apicep")
    axios.get(`https://cdn.apicep.com/file/apicep/${cep.substring(0, 5)}-${cep.substring(6)}.json`, {timeout: 2000})
    .then((res)=>{
      console.log(res)
      if (res.status != 200) {
        setEndereco('');
        setBairro('');
        setCidade('');
        setUf('');
        setErro('CEP não encontrado')
      } else {
        setEndereco(res.data['address']);
        setBairro(res.data['district']);
        setCidade(res.data['city']);
        setUf(res.data['state']);
        setErro('');
      }
    })
  .catch(() => {
    setEndereco('');
    setBairro('');
    setCidade('');
    setUf('');
    setErro('Ocorreu um erro ao buscar o endereço');
  });
  }

  return (
    <>
      
      <Cep cepValor={cep} enderecoValor={endereco} bairroValor={bairro} cidadeValor={cidade} ufValor={uf} erroValor={erro} setCepValor={setCep}/>
      
    </>
  )
}
export default App
