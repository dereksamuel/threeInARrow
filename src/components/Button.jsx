import React from 'react'
import PropTypes from 'prop-types'

import '../assets/css/components/Button.css'

const Button = ({ variant, children, ...anotherProps }) => {
  return (
    <button className={`btn ${variant}`} {...anotherProps}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any.isRequired
}

export { Button }
