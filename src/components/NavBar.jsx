import Logo from "../components/Imagenes/Logo.png"

export function BarraDeMenu(){
return (
    <div>
		<nav class=" navbar navbar-expand-sm bg-dark navbar-dark ">
			<a class="navbar-brand" href="index.js">
			<img src={Logo} alt="logo" />
			</a>
			<ul class="navbar-nav" >
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                    Simuladores
                </a>
            <div class="dropdown-menu">
                <a class="dropdown-item" >Conversor de Tasas</a>
                <a class="dropdown-item" >Calculadora de intereses</a>
            </div>
            </li>
			</ul>
		</nav>
	</div>

)

}