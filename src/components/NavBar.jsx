import Logo from "../components/Imagenes/Logo.png";
import {Cart} from 'C:/Users/jhonj/ProyectReactJS/simuladores/src/containers/Index';

export const BarraDeMenu = ({Cart}) =>{
return (
    <div>
		<nav className=" navbar navbar-expand-sm bg-dark navbar-dark ">
			<a className="navbar-brand" href="index.js">
			<img src={Logo} alt="logo" />
			</a>
			<ul className="navbar-nav" >
                 <li className="nav-item">
                    <a className="nav-link" href="#">Conversor de Tasas</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">Calculadora de intereses</a>
                 </li>
                 <li className="nav-item">
                    {Cart()}
                 </li>


			</ul>
       

		</nav>
	</div>

)

}