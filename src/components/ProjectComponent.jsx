import React from 'react'

function Project(props) {
  return (
    <div className="input-block">
      <label htmlFor="lastProject">Описание последнего проекта</label>
      <textarea
        id="lastProject"
        name="lastProject"
        className="form-control"
        style={{
          border: `${
            props.project.errorMessage || props.project.errorEmpty
              ? '1px solid red'
              : 'none'
          }`,
        }}
        value={props.project.text}
        onChange={props.handler}
      />
      <span
        className="counter"
        style={{
          color: props.project.errorMessage ? 'red' : 'black',
        }}
      >
        600/{props.project.symbols}
      </span>
      <span
        className="error"
        style={{
          visibility:
            props.project.errorMessage || props.project.errorEmpty
              ? 'visible'
              : 'hidden',
        }}
      >
        {props.project.errorMessage
          ? 'Вы превысили число символов!'
          : 'Поле пустое. Заполните пожалуйста'}
      </span>
    </div>
  )
}

export default Project
