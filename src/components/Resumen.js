import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { primeraMayuscula } from '../helpers'

class Resumen extends Component {
  render() {
    const {marca, plan, year} = this.props.datos
    return (
      <div className="resumen">
        <h2>Resumen de Cotización</h2>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año del Auto: {year}</li>
      </div>
    );
  }
}

Resumen.propTypes = {
 datos: PropTypes.object.isRequired,
}

export default Resumen;
