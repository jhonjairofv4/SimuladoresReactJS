import Logo from "../components/Imagenes/Logo.png"

export function BarraDeMenu(){
return (
    <div>
		<nav className=" navbar navbar-expand-sm bg-dark navbar-dark ">
			<a className="navbar-brand" href="index.js">
			<img src={Logo} alt="logo" />
			</a>
			<ul className="navbar-nav" >
                           <li class="nav-item">
                     <a class="nav-link" href="#">TRM Actual</a>
                 </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#">Conversor de Tasas</a>
                 </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#">Calculadora de intereses</a>
                 </li>
			</ul>
		</nav>
	</div>

)

}