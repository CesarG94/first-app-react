// import logo from './logo.svg';
import './App.css';
import Testimonio from './Components/Tesimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
        nombre='Cesar Gallegos'
        pais='Mexico'
        imagen='foto2'
        cargo='Developer'
        empresa='DM'
        testimonio='testimonio testimoniotestimonio testimonio testimoniotestimonio testimonio testimoniotestimonio testimonio testimonio testimonio testimonio testimonio testimonio testimonio testimonio testimonio' />
        <Testimonio
          nombre='Papa y Mama'
          pais='Mexico'
          imagen='foto1'
          cargo='Developer'
          empresa='Vit'
          testimonio='testimonio testimoniotestimonio testimonio testimoniotestimonio testimonio testimoniotestimonio testimonio testimonio testimonio testimonio testimonio testimonio testimonio testimonio testimonio' />
        <Testimonio
          nombre='Monse Gallegos'
          pais='Mexico'
          imagen='foto2'
          cargo='Developer'
          empresa='Tall'
          testimonio='testimonio testimoniotestimonio testimonio testimoniotestimonio testimonio testimoniotestimonio testimonio testimonio testimonio testimonio testimonio testimonio testimonio testimonio testimonio' />
      </div>
    </div>
  );
}

export default App;
