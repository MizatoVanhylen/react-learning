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
  const mayorOcho = nombre.length > 8 ? nombre.slice(0,9) + "..." : `${nombre}`; 
  return(
    <div className="inicial" contenido>
      <h1>Personaje {personaje.toUpperCase()}</h1>
      <div className="descrition" >
        <p> Descripción de personaje: </p>
          <div className="info">
            <p className="parrafo"> <strong>Nombre:</strong> {mayorOcho.toUpperCase()}</p>
            { signozodiacal != "Leo" && <p className="parrafo"> <strong>Cumpleaños:</strong> {cumpleaños.toUpperCase()}</p> }
            { <p className="parrafo"> <strong>Edad:</strong> {mayorDeEdad.toUpperCase()} </p> }
            <p className="parrafo"> <strong>Signo Zodiacal:</strong> {signozodiacal.toUpperCase()}</p>
            <p className="parrafo"> <strong>Altura:</strong> {altura} cm</p>
            { signozodiacal != "Leo" && <p className="parrafo"> <strong>Planeta:</strong> {planeta.toUpperCase()}</p> }
            {leo}
          </div>
      </div>
      <img className="imgref" src={imagen}/>
    </div>
  )
}

export default Sailor;