import React from 'react'

function Stack(props) {
  return (
    <div className="input-block">
      <label htmlFor="stack">Стек технологий</label>
      <textarea
        id="stack"
        name="stack"
        className="form-control"
        style={{
          border: `${
            props.stack.errorMessage || props.stack.errorEmpty
              ? '1px solid red'
              : 'none'
          }`,
        }}
        value={props.stack.text}
        onChange={props.handler}
      />
      <span
        className="counter"
        style={{
          color: props.stack.errorMessage ? 'red' : 'black',
        }}
      >
        600/{props.stack.symbols}
      </span>
      <span
        className="error"
        style={{
          visibility:
            props.stack.errorMessage || props.stack.errorEmpty
              ? 'visible'
              : 'hidden',
        }}
      >
        {props.stack.errorMessage
          ? 'Вы превысили число символов!'
          : 'Поле пустое. Заполните пожалуйста'}
      </span>
    </div>
  )
}

export default Stack
