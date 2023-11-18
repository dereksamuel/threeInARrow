import React from 'react'
import PropTypes from 'prop-types'

const InputBox = ({ label, value, onChange, type, className, ...anotherProps }) => {
  const onChangeHandler = (event) => {
    onChange(event.target)
  }

  return (
    <label className="input-box">
      <p className="input-box__label">{label}</p>
      <input
        onChange={onChangeHandler}
        className={`input-box__input ${className}`}
        type={type}
        value={value}
        {...anotherProps}
      />
    </label>
  )
}

InputBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
}

export { InputBox }
