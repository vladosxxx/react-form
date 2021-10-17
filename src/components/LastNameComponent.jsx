import React from 'react'

class LastName extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
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
              this.props.name.errorMessage || this.props.name.errorEmpty
                ? '1px solid red'
                : 'none'
            }`,
          }}
          value={this.props.name.text}
          onChange={this.props.handler}
        />
        <span
          className="error"
          style={{
            visibility:
              this.props.name.errorMessage || this.props.name.errorEmpty
                ? 'visible'
                : 'hidden',
          }}
        >
          {this.props.name.errorMessage
            ? 'Фамилия должна начинаться с заглавной буквы'
            : 'Поле пустое. Заполните пожалуйста'}
        </span>
      </div>
    )
  }
}

export default LastName
