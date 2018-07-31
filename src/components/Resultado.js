import React from 'react'
import PropTypes from 'prop-types'

const Resultado = props => {
  const { resultado } = props
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

Resultado.propTypes = {
  resultado: PropTypes.string
}

export default Resultado
