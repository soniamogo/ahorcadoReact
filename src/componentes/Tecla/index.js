import React from 'react'
import './style.css'

const Tecla = ({letra, jugada, usada}) => {
    const pulsaTecla = () =>{
        if(!usada){
        jugada(letra)
        }
    }
  return (
    <div className={!usada ? "tecla" : "tecla usada"} onClick={pulsaTecla}>{letra}</div>
  )
}

export default Tecla