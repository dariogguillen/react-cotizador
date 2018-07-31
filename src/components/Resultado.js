import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Resultado extends Component {
  render() {
    const { resultado } = this.props
    return (
      <div className="gran-total">
        {!resultado ? (
          <span>Elije Marca, Año y Tipo de Seguro</span>
        ) : (
          <span>El Total es: {resultado}</span>
        )}
      </div>
    )
  }
}

Resultado.propTypes = {
  resultado: PropTypes.string
}

export default Resultado
