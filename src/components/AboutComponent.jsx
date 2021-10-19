import React from 'react'

function About(props) {
  return (
    <div className="input-block">
      <label htmlFor="about">О себе</label>
      <textarea
        id="about"
        name="about"
        className="form-control"
        style={{
          border: `${
            props.about.errorMessage || props.about.errorEmpty
              ? '1px solid red'
              : 'none'
          }`,
        }}
        value={props.about.text}
        onChange={props.handler}
      />
      <span
        className="counter"
        style={{
          color: props.about.errorMessage ? 'red' : 'black',
        }}
      >
        600/{props.about.symbols}
      </span>
      <span
        className="error"
        style={{
          visibility:
            props.about.errorMessage || props.about.errorEmpty
              ? 'visible'
              : 'hidden',
        }}
      >
        {props.about.errorMessage
          ? 'Вы превысили число символов!'
          : 'Поле пустое. Заполните пожалуйста'}
      </span>
    </div>
  )
}

export default About
