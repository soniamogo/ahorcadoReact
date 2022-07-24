import React from 'react'
import './style.css'
import Tecla from '../Tecla'

var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

const Teclado = ({jugada, letrasUsadas}) => {
  return (
    <div id="teclado">
      {letras.map(letra => {
        var usada = letrasUsadas.includes(letra);
        return <Tecla letra={letra} jugada={jugada} key={letra} usada={usada}/>
      })}
    </div>
  )
}

export default Teclado