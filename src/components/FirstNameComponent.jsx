import React from 'react'

class FirstName extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    console.log(this.props.err)
  }

  render() {
    return (
      <div className="input-block">
        <label htmlFor="firstName">Имя</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
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
            ? 'Имя должно начинаться с заглавной буквы'
            : 'Поле пустое. Заполните пожалуйста'}
        </span>
      </div>
    )
  }
}

export default FirstName
