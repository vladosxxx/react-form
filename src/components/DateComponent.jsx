import React from 'react'

function Date(props) {
  return (
    <div className="input-block">
      <label htmlFor="date">Дата рождения</label>
      <input
        type="date"
        id="date"
        name="birthDay"
        className="form-control"
        style={{
          border: `${props.date.errorEmpty ? '1px solid red' : 'none'}`,
        }}
        value={props.date.text}
        onChange={props.handler}
      />
      <span
        className="error"
        style={{
          visibility: props.date.errorEmpty ? 'visible' : 'hidden',
        }}
      >
        Поле пустое. Заполните пожалуйста
      </span>
    </div>
  )
}

export default Date
