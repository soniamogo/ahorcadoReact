import React from 'react'
import './style.css'

const Modal = ({vidas, palabraCompleta, palabraParcial, resetear}) => {
    if(palabraCompleta===palabraParcial || vidas===0){
        return (
            <div id="modal">
                {vidas===0 && 'Has perdido'}
                {palabraCompleta===palabraParcial && 'Has ganado'}
                <div id="reinicio" onClick={resetear}>Reiniciar</div>
            </div>
          )
    }else{
        return null
    }
  
}

export default Modal