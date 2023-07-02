import { useState } from 'react'

function App() {
  const [numeros, setNumeros] = useState([])
  const [numero, setNumero] = useState("")
  const [pares, setPares] = useState([])
  const [impares, setImpares] = useState([])

  function adicionaNumero(e){
    e.preventDefault()

    // operador ... (operador spread) faz o "espalhamento dos elementos ja existentes no vetor"
    setNumeros([...numeros, numero])
    //muda o valor da variavel numero e, por consequencia, limpa o campo de formulario.
    setNumero("")
    //limpa os vetores e, com isso, deixa de exibir a mensagem dos <h3> no final
    setPares([])
    setImpares([])
  }

  function listarPares(){
    const filtro = []
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 == 0){
        filtro.push(numeros[i])
      }     
    }
    if(filtro.length == 0){
      alert("Não há números pares na lista")
      return
    }
    setPares(filtro)
  }

  function listarImpares(){
    const filtro = []
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 == 1){
        filtro.push(numeros[i])
      }     
    }
    if(filtro.length == 0){
      alert("Não há números ímpares na lista")
      return
    }
    setImpares(filtro)
  }

  return (
    <>
      <h1>Controle de Números</h1>
      <form onSubmit={adicionaNumero}>
        <p>Número:
          <input type="text" onChange={(e) => setNumero(e.target.value)}
            value={numero} />&nbsp;
          <input type="submit" value="Adicionar" />
        </p>
        <p>
          <input type="button" value="Listar Pares" onClick={listarPares} />&nbsp;
          <input type="button" value="Listar Impares" onClick={listarImpares} />
        </p>
      </form>
      <h3>Números: {numeros.join(", ")}</h3>
      {pares.length > 0 && <h3>Lista dos Pares: {pares.join(", ")}</h3>}
      {impares.length > 0 && <h3>Lista dos Impares: {impares.join(", ")}</h3>}
    </>
  )
}

export default App
