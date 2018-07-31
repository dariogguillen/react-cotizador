import React, { Component } from 'react'
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helpers'

import Header from './Header'
import Formulario from './Formulario'
import Resumen from './Resumen'
import Resultado from './Resultado'
import '../css/index.css'

class App extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      resultado: ''
    }
    this.cotizarSeguro = this.cotizarSeguro.bind(this)
  }

  cotizarSeguro(datos) {
    const { marca, year, plan } = datos
    let resultado = 2000
    const diferencia = obtenerDiferenciaAnio(year)
    resultado -= (diferencia * 3 * resultado) / 100
    resultado = calcularMarca(marca) * resultado
    const incrementoPlan = obtenerPlan(plan)
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2)
    this.setState({
      resultado,
      datosAuto: datos
    })
  }

  render() {
    return (
      <div className="App contenedor">
        <Header titulo="Cotizador de Seguro de Auto" />
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          {!this.state.datosAuto ? null : <Resumen datos={this.state.datosAuto} />}
          <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    )
  }
}

export default App
