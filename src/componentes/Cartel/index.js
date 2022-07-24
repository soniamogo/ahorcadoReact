import React from 'react'
import './style.css'
import Imagen from '../../img/Poster.png'
import Imagen0 from '../../img/0.png'
import Imagen1 from '../../img/1.png'
import Imagen2 from '../../img/2.png'
import Imagen3 from '../../img/3.png'
import Imagen4 from '../../img/4.png'
import Imagen5 from '../../img/5.png'
import Imagen6 from '../../img/6.png'
import Imagen7 from '../../img/7.png'
import Imagen8 from '../../img/8.png'
import Imagen9 from '../../img/9.png'



const Cartel = ({vidas}) => {
  return (
    <div id="cartel">
      {vidas===10 && <img src={Imagen}/>}
      {vidas===9 && <img src={Imagen0}/>}
      {vidas===8 && <img src={Imagen1}/>}
      {vidas===7 && <img src={Imagen2}/>}
      {vidas===6 && <img src={Imagen3}/>}
      {vidas===5 && <img src={Imagen4}/>}
      {vidas===4 && <img src={Imagen5}/>}
      {vidas===3 && <img src={Imagen6}/>}
      {vidas===2 && <img src={Imagen7}/>}
      {vidas===1 && <img src={Imagen8}/>}
      {vidas===0 && <img src={Imagen9}/>}
      </div>
  )
}

export default Cartel