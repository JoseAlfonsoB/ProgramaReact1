import { useState } from 'react';

const App = ()=>{

  const [contador , setContador] = useState(0);

  const eventoBotonContador = (incremento)=>{
    setContador(contador + incremento)
  }
  return(
    <div>
      <h1 >Contador: {contador}</h1>
      <button onClick={()=> eventoBotonContador(1)}>Disminuir</button>
      <button onClick={()=> eventoBotonContador(-1)}>Disminuir</button>
    </div>
  )
}

export default App