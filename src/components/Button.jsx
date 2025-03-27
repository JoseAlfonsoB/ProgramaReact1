const Button = (props)=>{
    const eventoBotonContador = (incremento)=>{
        if ((contador + 1) == 9 || (contador - 1) == -9) setContador(0);
        else setContador(contador + incremento);
    }
    return(
        <button onClick={()=> eventoBotonContador(props.cotador)}>
            {props.mensaje}
        </button>
    )
} 

export default Button