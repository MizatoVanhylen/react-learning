
import './App.css';
import Sailor from "./Components/Sailor";


function App() {
  
  const info = [
    {
      personaje: "Usagi",
      descripcion: "Usagi Tsukino (月野 うさぎ, Tsukino Usagi) o Sailor Moon (セーラームーン Sērā Mūn), anteriormente conocida en Latinoamérica como Serena Tsukino, es un personaje de franquicia Sailor Moon y la protagonista principal. Debido a que la popularidad de la serie se ha extendido en muchos países, se ha convertido en distintivo y frecuentemente copiado su peinado tipo odango, siendo uno de los personajes de anime más inmediatamente reconocidos e icónicos mundialmente. Es el único personaje que aparece absolutamente en todos los 20episodios del anime, así como también en los 52 actos del manga y los 51 de la serie live-action",
      imagen:"https://steamcommunity.com/sharedfiles/filedetails/?l=latam&id=2939971703"
    },
    {
      nombre: "Rei",
      descripcion: "Rei Hino (火野 レイ Hino Rei), alias Sailor Mars (セーラーマーズ, Sērā Māzu) (o Guerrero Marte en España) es un personaje de la serie de manga y anime, Sailor Moon. Es la tercera de los personajes de Sailor Moon en su orden, y miembro del grupo de Sailor Guardians del Sistema Solar Interno que protegen a Sailor Moon desde los tiempos del Reino de la Luna hasta el presente.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHuSF9f99iYtyHzM924wTGxbbEtKVykAyqA&s"
    },
    {
      nombre: "Luna",
      descripcion:"Luna (ルナ Runa) es un personaje de la serie de anime y manga Sailor Moon. Es una gata, consejera de las Sailor Scouts y quien reúne y les dio sus objetos de transformación.",
      imagen:"https://www.pinterest.com/pin/sailor-moon--573012752580185160/"
    }
  ]
  return (
    <div className="App">
       <Sailor personaje="Sailor Mars" nombre="Rei Hino (火野 レイ Hino Rei)" cumpleaños="17 de Abril" edad={14} altura={1.60} signozodiacal="Aries" planeta="Marte" imagen="https://i.pinimg.com/736x/db/6a/92/db6a92c907d276953bf9b3a7406b4120.jpg"/>
       

{/* todo el codigo html ca dentro del return*/ }
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

{/* crear un componente nuevo que funcione igual que la sailor moon de antes
  nombre, descripcion, imagen */}