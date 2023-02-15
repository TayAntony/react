const Exemplo = (objeto) => {
    console.log(objeto.propriedades)
    return ( 
        <>
        bem vindo(a)
            {(objeto.propriedades.Alunos).map((batata)=>(
                <div>{batata}</div>
            ))}
        </>
     );
}
 
export default Exemplo;