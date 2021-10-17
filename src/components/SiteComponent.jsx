import React from 'react'

class Site extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
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
              this.props.site.errorMessage || this.props.site.errorEmpty
                ? '1px solid red'
                : 'none'
            }`,
          }}
          value={this.props.site.text}
          onChange={this.props.handler}
        />
        <span
          className="error"
          style={{
            visibility:
              this.props.site.errorMessage || this.props.site.errorEmpty
                ? 'visible'
                : 'hidden',
          }}
        >
          {this.props.site.errorMessage
            ? 'Название сайта должно начинаться с https://'
            : 'Поле пустое. Заполните пожалуйста'}
        </span>
      </div>
    )
  }
}

export default Site
