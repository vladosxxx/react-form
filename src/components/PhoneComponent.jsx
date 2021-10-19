import React from 'react'

function Phone(props) {
  return (
    <div className="input-block">
      <label htmlFor="phone">Телефон</label>
      <input
        type="text"
        id="phone"
        name="phone"
        className="form-control"
        style={{
          border: `${
            props.phone.errorMessage || props.phone.errorEmpty
              ? '1px solid red'
              : 'none'
          }`,
        }}
        value={props.phone.text}
        onChange={props.handler}
      />
      <span
        className="error"
        style={{
          visibility:
            props.phone.errorMessage || props.phone.errorEmpty
              ? 'visible'
              : 'hidden',
        }}
      >
        {props.phone.errorMessage
          ? 'Телефон должен иметь не более 9 символов'
          : 'Поле пустое. Заполните пожалуйста'}
      </span>
    </div>
  )
}

export default Phone
