import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BarraDeMenu} from '../src/components/NavBar';
import ItemListContainer from './ItemListContainer';
import {ItemCount} from '../src/components/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        
        <BarraDeMenu />
        <ItemListContainer greeting={

          
          <div className="container">
            <br></br>
            <table className="table table-dark">
              <thead>
                  <tr>
                      <th>Fecha de Consulta TRM</th>
                      <th>Valor 1 EURO en Pesos Colombianos</th>
                      <th>Valor 1 USD en Pesos Colombianos</th>                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>api</td>
                    <td>api</td>
                    <td>api</td>
                  </tr>

              </tbody>
            </table>
            
          </div>
          }/>

      </header>

      <div>
            <ItemCount/> 
          </div>
    </div>

    
  );
         

}

export default App;
