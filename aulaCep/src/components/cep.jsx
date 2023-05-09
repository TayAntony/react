function Cep({cepValor, erroValor, enderecoValor, bairroValor, cidadeValor, ufValor, setCepValor}) {
    return ( 

    <>
    <h2 className='m-6 text-3xl text-blue-700 font-extrabold'>Digite seu CEP! </h2>
      <input type="text" placeholder='CEP' maxLength={9} onChange={(e) => setCepValor(e.target.value)} value={cepValor} className='border-2 border-solid rounded-xl border-green-700 outline-yellow-500 p-2'/>
    {cepValor.length === 9 && (
        <>
          {erroValor ? (
            <p className='font-bold text-red-600 m-2'>{erroValor}</p>
          ) : (
            <>
            <h1 className='text-2xl m-6 text-green-600 font-semibold'>Seu endereço é:</h1>
              <p>Rua: <span className='font-bold'>{enderecoValor}</span></p>
              <p>Bairro: <span className='font-bold'>{bairroValor}</span></p>
              <p>Cidade: <span className='font-bold'>{cidadeValor}</span></p>
              <p>UF: <span className='font-bold'>{ufValor}</span></p>
            </>
          )}
        </>
      )}
    </> );
}

export default Cep;