import React from 'react'

function Site(props) {
  return (
    <div className="input-block">
      <label htmlFor="site">Сайт</label>
      <input
        type="text"
        id="site"
        name="webSite"
        className="form-control"
        style={{
          border: `${
            props.site.errorMessage || props.site.errorEmpty
              ? '1px solid red'
              : 'none'
          }`,
        }}
        value={props.site.text}
        onChange={props.handler}
      />
      <span
        className="error"
        style={{
          visibility:
            props.site.errorMessage || props.site.errorEmpty
              ? 'visible'
              : 'hidden',
        }}
      >
        {props.site.errorMessage
          ? 'Название сайта должно начинаться с https://'
          : 'Поле пустое. Заполните пожалуйста'}
      </span>
    </div>
  )
}

export default Site
