import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BarraDeMenu} from '../src/components/NavBar.jsx';
import ItemListContainer from './ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        
        <BarraDeMenu />
        <ItemListContainer />

      </header>
    </div>
  );
}

export default App;
