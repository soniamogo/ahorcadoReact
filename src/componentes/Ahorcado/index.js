import React, { Component } from 'react'
import './style.css'
import Background from '../../img/Background.jpg'
import Palabra from '../Palabra'
import Teclado from '../Teclado'
import Cartel from '../Cartel'

export default class Ahorcado extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div id="tablero" style={{ backgroundImage: `url(${Background})`}}>
                <div id="zonaIzquierda">
                    <Palabra />
                    <Teclado />
                </div>
                <Cartel />
            </div>
        )
    }
}
