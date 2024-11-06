import './Sailor.css'

const Sailor = ({personaje, nombre, cumpleaños, edad, signozodiacal, altura, planeta, imagen}) => {
  return(
    <div>
      <h1>Personaje {personaje}</h1>
      <div className="descrition" >
        <p> Descripción de personaje: </p>
          <div className="info">
            <p className="parrafo"> <strong>Nombre:</strong> {nombre}</p>
            <p className="parrafo"> <strong>Cumpleaños:</strong> {cumpleaños}</p>
            <p className="parrafo"> <strong>Edad:</strong> {edad} años </p>
            <p className="parrafo"> <strong>Signo Zodiacal:</strong> {signozodiacal}</p>
            <p className="parrafo"> <strong>Altura:</strong> {altura} cm</p>
            <p className="parrafo"> <strong>Planeta:</strong>{planeta}</p>
          </div>
      </div>
    <img  className="imgref" src={imagen}></img>
    </div>
  )
}

export default Sailor;