import './App.css';



const leitorNumerosLista = () => {
  const botoes = [1, 2, 3, 4]

  return (
  <>
    {botoes.map(botao => <button>{botao}</button>)}
  </>
  );
}

export default leitorNumerosLista;
