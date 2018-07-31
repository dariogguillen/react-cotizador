import React from 'react'
import PropTypes from 'prop-types'
import { primeraMayuscula } from '../helpers'

const Resumen = props => {
  const { marca, plan, year } = props.datos
  return (
    <div className="resumen">
      <h2>Resumen de Cotización</h2>
      <li>Marca: {primeraMayuscula(marca)}</li>
      <li>Plan: {primeraMayuscula(plan)}</li>
      <li>Año del Auto: {year}</li>
    </div>
  )
}

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen
