import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Botao from './components/botao';
import BotaoClasse from './components/botaoClasse';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Botao />
    <BotaoClasse texto='oi'/>
  </React.StrictMode>
);

reportWebVitals();

