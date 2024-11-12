import './Sailor.css'

const Sailor = ({
  personaje,
  nombre,
  cumpleaños,
  edad,
  signozodiacal,
  altura,
  planeta,
  imagen
  }) => {
  const leo = signozodiacal == "Leo" ? <p className="parrafo"> <strong>Estado:</strong> Deprimida </p> : <p>no eres leo</p>
  const mayorDeEdad = edad > 18 ? "?" : `${edad} años`;
  return(
    <div className="inicial">
      <h1>Personaje {personaje}</h1>
      <div className="descrition" >
        <p> Descripción de personaje: </p>
          <div className="info">
            <p className="parrafo"> <strong>Nombre:</strong> {nombre}</p>
            { signozodiacal != "Leo" && <p className="parrafo"> <strong>Cumpleaños:</strong> {cumpleaños}</p> }
            { <p className="parrafo"> <strong>Edad:</strong> {mayorDeEdad} </p> }
            <p className="parrafo"> <strong>Signo Zodiacal:</strong> {signozodiacal}</p>
            <p className="parrafo"> <strong>Altura:</strong> {altura} cm</p>
            { signozodiacal != "Leo" && <p className="parrafo"> <strong>Planeta:</strong> {planeta}</p> }
            {leo}
          </div>
      </div>
      <img className="imgref" src={imagen}/>
    </div>
  )
}

export default Sailor;