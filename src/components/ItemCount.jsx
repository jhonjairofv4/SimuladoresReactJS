import { useState } from "react";

export const ItemCount = () =>{

    const [contador, setContador] = useState (0) ;

    return (
        <section>
            <button onClick={() => {setContador (contador-1)}}>-</button>
            {contador}
            <button onClick={() => {setContador (contador+1)}}>+</button>



        </section>
    )
    
    }

