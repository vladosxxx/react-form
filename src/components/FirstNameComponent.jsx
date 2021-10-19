import React from 'react'

function FirstName(props) {
  const redBorder = {
    border: `${
      props.name.errorMessage || props.name.errorEmpty
        ? '1px solid red'
        : 'none'
    }`,
  }
  const showMessage = {
    visibility:
      props.name.errorMessage || props.name.errorEmpty ? 'visible' : 'hidden',
  }
  return (
    <div className="input-block">
      <label htmlFor="firstName">Имя</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        className="form-control"
        style={redBorder}
        value={props.name.text}
        onChange={props.handler}
      />
      <span className="error" style={showMessage}>
        {props.name.errorMessage
          ? 'Имя должно начинаться с заглавной буквы'
          : 'Поле пустое. Заполните пожалуйста'}
      </span>
    </div>
  )
}

export default FirstName
