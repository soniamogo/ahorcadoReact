import React, { Component } from 'react'
import './style.css'
import Background from '../../img/Background.jpg'
import Palabra from '../Palabra'
import Teclado from '../Teclado'
import Cartel from '../Cartel'
import Modal from '../Modal'

var palabras = ['Aprendizaje', 'Secreto', 'Besar', 'Maldito', 'Llave', 'Situacion', 'Prescindible', 'Cuidar', 'Horroroso', 'Profetico', 'Evitar', 'Inflamable', 'Jarra', 'Humano', 'Botella', 'Marco', 'Dosis', 'Balistica', 'Celebridad', 'Furioso', 'Paciente', 'Prefabricado', 'Subasta', 'Placido', 'Instrumento', 'Entero', 'Desgarrador', 'Buscar', 'Polvo', 'Amputacion', 'Venir', 'Pareja', 'Rosa', 'Pinzon', 'Disfuncional', 'Robin', 'Acero', 'Puro', 'Rancio', 'Tembloroso', 'Inteligente', 'Empujar', 'Bear', 'Experimento', 'Plegable', 'Infantil'];
function seleccionPalabra(){
    var aleatorio = Math.floor(Math.random()*palabras.length);
    var eleccion = palabras[aleatorio].toLowerCase();
    var estadoEleccion=[]
    for (var i=0; i<eleccion.length; i++){
      estadoEleccion.push('_');
    }
    return {palabraCompleta:eleccion, palabraParcial:estadoEleccion.join('')}
  }

export default class Ahorcado extends Component {
    constructor(props) {
        super(props)
        var eleccion = seleccionPalabra();
        this.state = {
            vidas: 10,
            palabraCompleta: eleccion.palabraCompleta,
            palabraParcial: eleccion.palabraParcial,
            letrasUsadas: []
        }
    }

    jugada = (letra) => {
        var { vidas, palabraCompleta, palabraParcial, letrasUsadas } = this.state;
        if (palabraCompleta.includes(letra)) {
            palabraCompleta = palabraCompleta.split('');
            palabraParcial = palabraParcial.split('');
            palabraCompleta.forEach((i, index) => {
                if (i === letra) {
                    palabraParcial[index] = letra;
                }
            })
            palabraCompleta = palabraCompleta.join('');
            palabraParcial = palabraParcial.join('');
        } else {
            vidas--
        }
        letrasUsadas.push(letra);
        this.setState({ vidas, palabraParcial, letrasUsadas })
    }

    resetear = () => {
        var eleccion = seleccionPalabra();
        this.setState({ vidas: 10, palabraCompleta:eleccion.palabraCompleta, palabraParcial:eleccion.palabraParcial, letrasUsadas: [] })
    }
    render() {
        var { vidas, palabraCompleta, palabraParcial, letrasUsadas } = this.state;
        return (

            <div id="tablero">
                <div id="zonaIzquierda">
                    <Palabra palabra={palabraParcial} />
                    <Teclado jugada={this.jugada} letrasUsadas={letrasUsadas} />
                </div>
                <Cartel vidas={vidas} />
                <Modal vidas={vidas} palabraCompleta={palabraCompleta} palabraParcial={palabraParcial} resetear={this.resetear} />
            </div>
        )
    }
}
