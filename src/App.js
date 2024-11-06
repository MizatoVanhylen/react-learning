
import './App.css';
import Textos from "./Components/Textos";

function App() {
  const info = [
    {
      nombre: "Usagi",
      edad: 16
    },
    {
      nombre: "Rei",
      edad: 16
    },
    {
      nombre: "Luna",
      edad: 120
    }
  ]
  return (
    <div className="App">
     {/* <Textos nombre="Usagi" edad={16}/>
      <Textos nombre="Rei" edad={16}/>
      <Textos nombre="Luna" edad={120}/>*/}
      {
        info.map(pos => <Textos nombre={pos.nombre} edad={pos.edad}/>)
      }
    </div>
  );
}

export default App;

{/* crear un componente nuevo que funcione igual que la sailor moon de antes
  nombre, descripcion, imagen */}