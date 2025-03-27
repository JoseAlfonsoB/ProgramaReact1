import { useState } from 'react';
import Button from './components/Button';

//* Todo lo que se encuentra dentro de la función de "App" es lo que se va a renderizar en el navegador. En otras palabras es el contenido que se va a mostrar en la página web.
const App = ()=>{
  //* Todo lo que se encuentra dntro de la función de "App" se exscribe en JavaScript XML (JSX). Y lo que este afuera de esta sera escrito en JavaScript puro.
  const [contador , setContador] = useState(0);
  return(
    <div>
      <h1 >Contador: {contador}</h1>
      <Button cotador={1} mensaje={"Aumentar"} />
      <Button cotador={-1} mensaje={"Disminuir"} />
      <br />
      {/*
      <!-- Son los mismos botones que los de arriba pero escritos de una forma más sencilla. -->
      <button onClick={()=> eventoBotonContador(1)}>Disminuir</button>
      <button onClick={()=> eventoBotonContador(-1)}>Disminuir</button>
      <br />
      */}
      {
        contador % 2 == 0?
        (<p>El contador es par</p>) :
        (<p>El contador es impar</p>)
      }
    </div>
  )
}

export default App