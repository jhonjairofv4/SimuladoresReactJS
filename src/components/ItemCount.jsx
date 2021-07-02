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

function AgregarAlCarrito() {
    
    return (
        1 + ItemCount.contador

    )
}

AgregarAlCarrito()


// 00:54:17 https://coderhouse.zoom.us/rec/play/T71qK04JFaRvXe8Jji69JBQm55X70MwHKDRoijKQoM0qmie-ClKhta6LcKd1eCLyI28zwDkp1NHzoSxQ.O5aMG7mVSn7t7Abx?continueMode=true&_x_zm_rtaid=YmDtwSMJSNqQ2UAlQUl1hQ.1625105732503.aacd84b5ec95f312bc785d4a5c590060&_x_zm_rhtaid=496