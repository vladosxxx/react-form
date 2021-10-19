import React from 'react'

function LastName(props) {
  return (
    <div className="input-block">
      <label htmlFor="lastName">Фамилия</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        className="form-control"
        style={{
          border: `${
            props.name.errorMessage || props.name.errorEmpty
              ? '1px solid red'
              : 'none'
          }`,
        }}
        value={props.name.text}
        onChange={props.handler}
      />
      <span
        className="error"
        style={{
          visibility:
            props.name.errorMessage || props.name.errorEmpty
              ? 'visible'
              : 'hidden',
        }}
      >
        {props.name.errorMessage
          ? 'Фамилия должна начинаться с заглавной буквы'
          : 'Поле пустое. Заполните пожалуйста'}
      </span>
    </div>
  )
}

export default LastName
