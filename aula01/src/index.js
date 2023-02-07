import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Titulo from './components/titulo';
import Titulo_func from './components/titulo_funcao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Titulo_func />
  </React.StrictMode>
);

reportWebVitals();

//for básico usando const
for(let i=0; i <= 5; i++){
  console.log(i);
}




//função dentro de um objeto
const aluno = {
  nome: 'Raissa',
  idade: 17,
  estudar(){
    console.log(this)
  }
}
aluno.estudar()



//usando método map
var cidades = [
  'Campinas', 
  'Sumaré',
  'Valinhos'
]
cidades.map(cidade => {
  return console.log(`<li>${cidade}</li>`)
});



//detructuring
const endereco = {
  logradouro: 'av amoreiras',
  numero:123,
  cidade:'Campinas'
}
const {logradouro, numero, cidade} = endereco
console.log(logradouro)



//como clonar um objeto com SPREAD OPERATOR
const a = [2,4,6]
const b = [1,3,5]

const unificar_concat = a.concat(b)
const unificar = [...a,15, ...b, 10]
console.log(unificar)
console.log(unificar_concat)




const pessoa = {...aluno};
aluno.nome = 'Tay'
aluno.idade = 18

console.log(pessoa, aluno)

