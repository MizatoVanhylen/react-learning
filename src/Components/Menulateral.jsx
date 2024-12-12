import './Menulateral.css';

const MenuLateral = ({}) => {
  return(
    <div className='menu-lateral'>
      <div className='productos'>
        <img className='img-ps5' src= "https://www.latercera.com/resizer/v2/UNH3KSCHNJA6LHB2AXGBUQU3W4.jpg?quality=80&smart=true&auth=fd70961773c5b06e66eccfc883ce3a41131bcd1e27383ca5fb4af3249cf73ac0&width=690&height=502"></img>
        <p className='nombre-producto'><strong>Play Staton 5 </strong></p>
        <p className='cantidad-producto'>Cantidad: </p>
        <p className='valor-producto'>Valor: </p>
      </div>
      <div className='total'>
        <p className='suma'>Total: </p>
      </div>
    </div> 
  )
}

export default MenuLateral;