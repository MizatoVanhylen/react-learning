import './App.css';
import Sailor from "./Components/Sailor";
import { useState } from 'react';
import Menulateral from "./Components/Menulateral";



function App() {
  const name = ["Denisse", "Andrea", "Romero", "Cárdenas"]
  const [index, setIndex] = useState(0)
  const avanzar = () => {
    if (index < name.length -1){
      setIndex (index + 1); 
    }
  }
  
  const retroceder = () => {
    if (index > 0){
      setIndex (index - 1); 
    }
  }

 const [number, setNumber] = useState(2);
  const restar = () => {
    if(number > 0){
      setNumber(number - 1);
    }
  }
    
  const sumar = () => {
    if(number < 10){
      setNumber(number + 1);
    }
  }

  return (
    <div className="App">
      <Menulateral/>
      {/*<div className="personajes">
        <Sailor
          personaje="Sailor Mars"
          nombre="Rei Hino"
          cumpleaños="17 de Abril"
          edad={14}
          altura={1.60}
          signozodiacal="Aries"
          planeta="Marte"
          imagen="https://i.pinimg.com/736x/db/6a/92/db6a92c907d276953bf9b3a7406b4120.jpg"
        />
        <Sailor
          personaje="Sailor Mars"
          nombre="Usagi Tsukino"
          cumpleaños="17 de Abril"
          edad={20}
          altura={1.60}
          signozodiacal="Leo"
          planeta="Marte"
          imagen="https://i.pinimg.com/736x/db/6a/92/db6a92c907d276953bf9b3a7406b4120.jpg"
        />
      </div>*/}
   {/*} {index < name.length -1  && <button onClick={avanzar}>+</button>}
    {index > 0 && <button onClick={retroceder}>-</button>}
    <p>{name[index]}</p>*/}
{/* todo el codigo html va dentro del return*/ }
     {/* <Textos nombre="Usagi" edad={16}/>
      <Textos nombre="Rei" edad={16}/>
      <Textos nombre="Luna" edad={120}/>*/}
      {/*
        info.map(pos => <Textos nombre={pos.nombre} edad={pos.edad}/>)  Esto es lo que envia el dato al jsx
      */}
    </div>
  );
}

export default App;

{/* HACER QUE EL MAXIMO DE PRODUCTOS SEA 10
  
  RENDERIZADO CONDICIONAL
  que el boton de sumar desaparezca cuando llegue a 10 y cuando sea 0 el menos desaparece

  menu lateral con posición absoluta que tenga un producto donde se coloque el  nombre precio cantidad
  */}