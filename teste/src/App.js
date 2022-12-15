import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo-classe';
import TituloF from './components/titulo-funcao';
import Bolinha from './components/bolinha';
import Contador from './components/contador';


function App() {
  return (
    <>
      <div className="a">
        <Titulo mensagem="Essa é a mensagem com classe"/>
        <Titulo mensagem="oi"/>
        <TituloF mensagem="Essa é a mensagem com função"/>
        <Bolinha estilo=''/>
        <Contador/>
      </div>
    </>
  );
}

export default App;
